import AuthServerOAuth2Client from "@telicent-oss/fe-auth-lib";
import { AxiosInstance } from "axios";
import { createContext } from "react";

export interface AuthContextProps {
  user: unknown;
  error: Error | null;
  loading: boolean;
  authClient: AuthServerOAuth2Client;
  api: AxiosInstance;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
