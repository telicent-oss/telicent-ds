import { AxiosInstance, AxiosRequestHeaders, AxiosHeaders } from "axios";
import { SessionHandlingConfig } from "../types";
import {
  AuthEvent,
  broadcastAuthEvent,
  onAuthEvent,
} from "./broadcastChannelService";
import AuthServerOAuth2Client from "@telicent-oss/fe-auth-lib";

const formatPayload = (headers: AxiosRequestHeaders, data: unknown) => {
  const ct = new AxiosHeaders(headers).get("Content-Type")?.toString().toLowerCase();

  switch (ct) {
    case "application/json":
      if (data === undefined || data === null) return data;
      if (typeof data === "string") {
        // If Axios already serialized, do not stringify again
        return data;
      }
      return JSON.stringify(data);

    case "application/x-www-form-urlencoded":
      return new URLSearchParams(data as Record<string, string>).toString();

    case "multipart/form-data":
      return data; // FormData must pass through untouched

    case "application/octet-stream":
      return data; // binary types must not be stringified

    case "text/plain":
      return String(data);

    case "application/xml":
    case "text/xml":
      if (typeof data !== "string") {
        throw new Error("XML payload must be a string");
      }
      return data;

    default:
      return data; // fallback
  }
};

export { formatPayload };


export function withSessionHandling(
  instance: AxiosInstance,
  { queryClient, keysToInvalidate = [] }: SessionHandlingConfig,
  authClient?: AuthServerOAuth2Client
) {
  if (authClient) {
    instance.defaults.adapter = async (config) => {
      const fullUrl = config.url?.startsWith("http")
        ? config.url
        : `${config.baseURL || ""}${config.url || ""}`;

      try {
        const headers = new AxiosHeaders(config.headers).toJSON();

        const response = await authClient.makeAuthenticatedRequest(fullUrl, {
          body: formatPayload(config.headers, config.data),
          headers: headers as Record<string, string>,
          method: config.method,
          skipAutoLogout: true,
        });

        if (response.status === 401) {
          if (!fullUrl.includes("/session/check")) {
            broadcastAuthEvent(AuthEvent.UNAUTHORIZED);
          }

          return new Promise((resolve, reject) => {
            let unsubscribe: (() => void) | null = null;

            const retryAfterAuth = () => {
              authClient
                .makeAuthenticatedRequest(fullUrl, {
                  method: config.method,
                  skipAutoLogout: true,
                })
                .then((retryResponse: Response) => {
                  return retryResponse.text().then((retryText: string) => {
                    const retryData = retryText ? JSON.parse(retryText) : null;
                    resolve({
                      data: retryData,
                      status: retryResponse.status,
                      statusText: retryResponse.statusText,
                      headers: Object.fromEntries(
                        retryResponse.headers.entries()
                      ),
                      config,
                      request: {},
                    });
                  });
                })
                .catch(reject);
            };

            unsubscribe = onAuthEvent((event) => {
              if (event === AuthEvent.AUTHENTICATED) {
                if (unsubscribe) unsubscribe();
                retryAfterAuth();
              }
            });
          });
        }

        const responseText = await response.text();
        const data = responseText ? JSON.parse(responseText) : null;

        if (response.status >= 400 && response.status !== 401) {
          return Promise.reject({
            message: `Request failed with status ${response.status}`,
            config,
            request: {},
            response: {
              status: response.status,
              statusText: response.statusText,
              data,
              headers: Object.fromEntries(response.headers.entries()),
            },
          });
        }

        return Promise.resolve({
          data,
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          config,
          request: {},
        });
      } catch (error) {
        const message =
          error &&
          typeof error === "object" &&
          "message" in error &&
          typeof error.message === "string"
            ? error.message
            : `Unknown error ${error}`;
        return Promise.reject({
          message,
          config,
          request: {},
          response: {
            status: 500,
            data: { error: message },
          },
        });
      }
    };
  } else {
    instance.interceptors.response.use(
      (res) => res,
      (err) => {
        if (err.response?.status === 401) {
          if (queryClient) {
            keysToInvalidate.forEach((key) =>
              queryClient.invalidateQueries({ queryKey: key, exact: true })
            );
          }
          broadcastAuthEvent(AuthEvent.UNAUTHORIZED);
        }
        return Promise.reject(err);
      }
    );
  }

  return { instance };
}