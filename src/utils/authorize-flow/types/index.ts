import { QueryClient, QueryKey } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

export interface SessionHandlingConfig {
  queryClient?: QueryClient;
  keysToInvalidate?: QueryKey[];
}

export interface AuthConfig {
  getToken: () => string | null;
  onAuthError?: () => void;
}

export interface RequestApi {
  instance: AxiosInstance;
  withSessionHandling: (config: SessionHandlingConfig) => RequestApi;
  build: () => { instance: AxiosInstance };
}
