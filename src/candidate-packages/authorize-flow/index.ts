// index.ts
import axios from "axios";
import { ApiFactory, SessionHandlingConfig } from "./types";
import { withSessionHandling as withSessionHandlingImplementation } from "./withSessionHandling";

export const createApi = (baseURL?: string): ApiFactory => {
  const instance = axios.create({ baseURL });

  const api: ApiFactory = {
    instance,
    withSessionHandling: (config: SessionHandlingConfig) => {
      withSessionHandlingImplementation(instance, config);
      return api;
    },
    build: () => ({ instance }),
  };
  return api;
};
