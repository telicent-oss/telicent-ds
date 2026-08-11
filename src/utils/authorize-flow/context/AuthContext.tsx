import AuthServerOAuth2Client, { UserInfo } from "@telicent-oss/fe-auth-lib";
import { AxiosInstance } from "axios";
import { createContext } from "react";
import { AuthStore } from "./authStore";

/**
 * Shape returned by useAuth() — the public API, unchanged. Reactive fields
 * (user/error/loading) are selected from the auth store per consumer, so a
 * consumer re-renders only when those values actually change.
 */
export interface AuthContextProps {
  user: UserInfo | null;
  error: Error | null;
  loading: boolean;
  authClient: AuthServerOAuth2Client;
  api: AxiosInstance;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

/**
 * Internal context value. Everything here is referentially STABLE for the
 * lifetime of the provider: reactive state lives in the zustand store, not in
 * the context, so provider re-renders no longer repaint every useAuth
 * consumer (the cascade that re-fired login effects across the app).
 */
export interface AuthContextValue {
  store: AuthStore;
  authClient: AuthServerOAuth2Client;
  api: AxiosInstance;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
