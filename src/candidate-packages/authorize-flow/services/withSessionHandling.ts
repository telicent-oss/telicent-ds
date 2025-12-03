import { AxiosInstance, AxiosRequestHeaders } from "axios";
import { SessionHandlingConfig } from "../types";
import {
  AuthEvent,
  broadcastAuthEvent,
  onAuthEvent,
} from "./broadcastChannelService";
import AuthServerOAuth2Client from "@telicent-oss/fe-auth-lib";

// const formatPayload = (headers: AxiosRequestHeaders, data: unknown) =>
//   headers["Content-Type"] === "application/json" ? JSON.stringify(data) : data;
const formatPayload = (headers: AxiosRequestHeaders, data: unknown) => {
  // Axios lowercases header names internally
  const rawCt = headers.get?.("content-type");
  // Narrow to string safely
  let ct: string | undefined;
  if (typeof rawCt === "string") {
    ct = rawCt.toLowerCase();
  } else if (Array.isArray(rawCt) && typeof rawCt[0] === "string") {
    ct = rawCt[0].toLowerCase();
  } else {
    ct = undefined;
  }

  switch (ct) {
    case "application/json":
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

// const formatPayload = (headers: AxiosRequestHeaders, data: unknown) => {
//   if (headers["Content-Type"] === "application/json") {
//     return JSON.stringify(data);
//   } else if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
//     return new URLSearchParams(data as URLSearchParams).toString();
//   } else {
//     return data;
//   }
// };

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
        const response = await authClient.makeAuthenticatedRequest(fullUrl, {
          body: formatPayload(config.headers, config.data),
          headers: config.headers,
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
