import { AxiosInstance } from "axios";
import { SessionHandlingConfig } from "./types";
import { AuthEvent } from "./broadcastChannelService";

export function withSessionHandling(
  instance: AxiosInstance,
  {
    queryClient,
    keysToInvalidate = [],
    broadcastChannel,
  }: SessionHandlingConfig
) {
  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response?.status === 401) {
        // invalidates, does not refetch
        if (queryClient) {
          keysToInvalidate.forEach((key) =>
            queryClient.invalidateQueries({ queryKey: key, exact: true })
          );
        }

        broadcastChannel?.postMessage(AuthEvent.UNAUTHORIZED);
      }
      return Promise.reject(err);
    }
  );

  return { instance };
}
