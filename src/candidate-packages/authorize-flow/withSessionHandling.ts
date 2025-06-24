import { AxiosInstance } from "axios";
import { SessionHandlingConfig } from "./types";

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
        if (queryClient) {
          keysToInvalidate.forEach((key) =>
            queryClient.invalidateQueries({ queryKey: key })
          );
        }
        broadcastChannel?.postMessage("unauthorized");
      }
      return Promise.reject(err);
    }
  );

  return { instance };
}
