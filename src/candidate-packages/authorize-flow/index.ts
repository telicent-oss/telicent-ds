import axios from "axios";
import { ApiFactory, SessionHandlingConfig } from "./types";
import { withSessionHandling as withSessionHandlingImplementation } from "./withSessionHandling";

export const createApi = (baseURL?: string): ApiFactory => {
  const instance = axios.create({ baseURL });

  return {
    instance,
    withSessionHandling: (config: SessionHandlingConfig) =>
      withSessionHandlingImplementation(instance, config),
    build: () => ({ instance }),
  };
};
