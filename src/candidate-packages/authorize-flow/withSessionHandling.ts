import { AxiosInstance } from "axios";
import { SessionHandlingConfig } from "./types";
import { signalUnauthorized } from "./authStateManager";

export function withSessionHandling(
  instance: AxiosInstance,
  {
    queryClient,
    keysToInvalidate = [],
  }: SessionHandlingConfig
) {
  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response?.status === 401) {
        if (queryClient) {
          keysToInvalidate.forEach((key) =>
            queryClient.invalidateQueries({ queryKey: key, exact: true })
          );
        }
        console.log('withSessionHandling unauthorized');
        signalUnauthorized();
      }
      return Promise.reject(err);
    }
  );

  return { instance };
}
