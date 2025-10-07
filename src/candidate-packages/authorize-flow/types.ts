import { AxiosInstance } from "axios";
import { QueryClient, QueryKey } from "@tanstack/react-query";

export interface SessionHandlingConfig {
  queryClient?: QueryClient;
  broadcastChannel?: BroadcastChannel;
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
