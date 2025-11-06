import AuthServerOAuth2Client, { AuthServerOAuth2ClientConfig, UserInfo } from "@telicent-oss/fe-auth-lib";
import React, { useEffect, useMemo, useState } from "react"
import { AuthContext } from "./AuthContext";
import { setupOAuthEventListeners } from "../services/setupOAuthEventListeners";
import { registerAuthSync } from "../utils";
import { QueryClient } from "@tanstack/react-query";
import { createApi } from "../index";
import { AuthModal } from "../components/AuthModal";

interface AuthProviderProps {
  config: AuthServerOAuth2ClientConfig;
  queryClient: QueryClient;
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ config, queryClient, children }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [client] = useState(() => new AuthServerOAuth2Client(config));

  useEffect(() => {
    const cleanupAuth = setupOAuthEventListeners(
      client,
      async () => {
        setLoading(true);
        console.log("Auth success → fetching user profile...");
        const profile = await client.getUserInfo();
        setUser(profile);
        setLoading(false);
      },
      (err) => {
        console.error("Auth error", err);
        setError(err ?? new Error("Unknown auth error"));
        setUser(null);
        setLoading(false);
      })
    const cleanupSync = registerAuthSync(queryClient, config.apiUrl);
    return () => {
      cleanupAuth();
      cleanupSync();
    }
  }, [client, queryClient, config.apiUrl]);

  // Build API client
  const api = useMemo(() => {
    const factory = createApi(config.apiUrl, client);
    factory.withSessionHandling({
      keysToInvalidate: [],
      queryClient,
    });
    return factory.build().instance;
  }, [client, queryClient, config.apiUrl]);

  const value = {
    user,
    error,
    loading,
    api,
    authClient: client,
    login: () => client.loginWithPopup(config.popupRedirectUri),
    logout: () => client.logout(),
  };

  return <AuthContext.Provider value={value}><AuthModal />{children}</AuthContext.Provider>;
}
