import { AxiosInstance } from "axios";
import { QueryClient, QueryKey } from "@tanstack/react-query";

export interface SessionHandlingConfig {
  queryClient?: QueryClient;
  keysToInvalidate?: QueryKey[];
  broadcastChannel?: BroadcastChannel;
}

export interface AuthConfig {
  getToken: () => string | null;
  onAuthError?: () => void;
}

export interface ApiFactory {
  instance: AxiosInstance;
  withSessionHandling: (config: SessionHandlingConfig) => ApiFactory;
  build: () => { instance: AxiosInstance };
}
