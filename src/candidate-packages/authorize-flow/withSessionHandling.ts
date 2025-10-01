import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { SessionHandlingConfig } from "./types";
import { AuthEvent, broadcastAuthEvent } from "./broadcastChannelService";

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
    // Replace axios adapter with OAuth client's makeAuthenticatedRequest
    instance.defaults.adapter = async (config) => {
      // Build full URL
      const fullUrl = config.url?.startsWith('http')
        ? config.url
        : `${config.baseURL || ''}${config.url || ''}`;

      console.log('🔐 Using makeAuthenticatedRequest via adapter for:', fullUrl);

      try {
        // Use the working makeAuthenticatedRequest - match direct call format
        console.log('🔍 Axios config passed to makeAuthenticatedRequest:', {
          method: config.method,
          headers: config.headers,
          data: config.data
        });

        const response = await authClient.makeAuthenticatedRequest(fullUrl, {
          method: config.method
          // Don't pass axios headers/data that might conflict
        });

        // Convert fetch Response to axios-compatible response
        const responseText = await response.text();
        const data = responseText ? JSON.parse(responseText) : null;

        return Promise.resolve({
          data,
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          config,
          request: {}
        });
      } catch (error) {
        return Promise.reject({
          message: error.message,
          config,
          request: {},
          response: {
            status: 500,
            data: { error: error.message }
          }
        });
      }
    };
  } else {
    // Fallback: no authClient provided, use original stateful approach
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
