import { AxiosInstance } from "axios";
import { SessionHandlingConfig } from "./types";
import { AuthEvent, broadcastAuthEvent, onAuthEvent } from "./broadcastChannelService";

export function withSessionHandling(
  instance: AxiosInstance,
  {
    queryClient,
    keysToInvalidate = [],
    broadcastChannel,
  }: SessionHandlingConfig,
  authClient?: any // AuthServerOAuth2Client instance
) {
  if (authClient) {
    instance.defaults.adapter = async (config) => {
      const fullUrl = config.url?.startsWith('http')
        ? config.url
        : `${config.baseURL || ''}${config.url || ''}`;

      try {
        const response = await authClient.makeAuthenticatedRequest(fullUrl, {
          method: config.method,
          skipAutoLogout: true
        });

        if (response.status === 401) {
          broadcastAuthEvent(AuthEvent.UNAUTHORIZED);

          return new Promise((resolve, reject) => {
            let unsubscribe: (() => void) | null = null;

            const retryAfterAuth = () => {
              authClient.makeAuthenticatedRequest(fullUrl, {
                method: config.method,
                skipAutoLogout: true
              })
                .then((retryResponse: Response) => {
                  return retryResponse.text().then((retryText: string) => {
                    const retryData = retryText ? JSON.parse(retryText) : null;
                    resolve({
                      data: retryData,
                      status: retryResponse.status,
                      statusText: retryResponse.statusText,
                      headers: Object.fromEntries(retryResponse.headers.entries()),
                      config,
                      request: {}
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
              headers: Object.fromEntries(response.headers.entries())
            }
          });
        }

        return Promise.resolve({
          data,
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          config,
          request: {}
        });
      } catch (error) {
        const message = error && typeof error === 'object' && 'message' in error && typeof error.message === 'string' ? error.message : 'Unknown error';
        return Promise.reject({
          message,
          config,
          request: {},
          response: {
            status: 500,
            data: { error: message }
          }
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
