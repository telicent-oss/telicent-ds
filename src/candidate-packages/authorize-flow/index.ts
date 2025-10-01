import axios from "axios";
import { ApiFactory, SessionHandlingConfig } from "./types";
import { withSessionHandling } from "./withSessionHandling";

export const createApi = (baseURL?: string, authClient?: any): ApiFactory => {
  const instance = axios.create({
    baseURL,
    withCredentials: true // Ensure cookies are always sent
  });

  return {
    instance,
    withSessionHandling: (config: SessionHandlingConfig) =>
      withSessionHandling(instance, config, authClient),
    build: () => ({ instance }),
  };
};