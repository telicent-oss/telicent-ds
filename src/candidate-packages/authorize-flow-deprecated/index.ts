import axios from "axios";
import { ApiFactory, SessionHandlingConfig } from "./types";
import { withSessionHandling } from "./withSessionHandling";

export const createApi = (baseURL?: string): ApiFactory => {
  const instance = axios.create({ baseURL });

  return {
    instance,
    withSessionHandling: (config: SessionHandlingConfig) =>
      withSessionHandling(instance, config),
    build: () => ({ instance }),
  };
};
