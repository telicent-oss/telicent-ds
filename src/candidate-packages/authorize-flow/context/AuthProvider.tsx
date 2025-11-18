import AuthServerOAuth2Client, { AuthServerOAuth2ClientConfig, UserInfo } from "@telicent-oss/fe-auth-lib";
import React, { useEffect, useMemo, useState } from "react"
import { AuthContext } from "./AuthContext";
import { setupOAuthEventListeners } from "../services/setupOAuthEventListeners";
import { registerAuthSync } from "../utils";
import { QueryClient } from "@tanstack/react-query";
import { createApi } from "../index";
import { AuthModal } from "../components/AuthModal";
import { AuthEvent, broadcastAuthEvent } from "../exports";

interface AuthProviderProps {
  apiUrl: string;
  config: AuthServerOAuth2ClientConfig;
  queryClient: QueryClient;
  children: React.ReactNode;
}

const createAuthHandlers = (
  client: AuthServerOAuth2Client,
  setUser: Function,
  setError: Function,
  locationPath: string
) => {

  const onError = (err: unknown) => {
    setUser(null);
    setError(err instanceof Error ? err : new Error(String(err)));
  };

  const onSuccess = async () => {
    const profile = client.getUserInfo();
    setUser(profile);
    setError(null);
    broadcastAuthEvent(AuthEvent.AUTHENTICATED)
    const isPopupFlow = !!window.opener
    if (!isPopupFlow) {
      const returnTo = sessionStorage.getItem("auth:returnTo") ?? "/"
      window.location.replace(returnTo);
    }
  };

  return { onError, onSuccess };
};

const runAsync = (asyncFn: () => Promise<void>, setLoading: (b: boolean) => void) => {
  let mounted = true;

  const wrapped = async () => {
    setLoading(true);
    try {
      await asyncFn();
    } finally {
      if (mounted) setLoading(false);
    }
  };

  wrapped();

  return () => {
    mounted = false;
  };
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ apiUrl, config, queryClient, children }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const [client] = useState(() => new AuthServerOAuth2Client(config));

  useEffect(() => {
    const { onError, onSuccess } = createAuthHandlers(client, setUser, setError, location.pathname);
    const cleanupAuth = setupOAuthEventListeners(client, onSuccess, onError);
    const cleanupSync = registerAuthSync(queryClient, client.config.apiUrl);
    const cleanupCheck = runAsync(async () => {
      const loginAttemptKey = "auth-login-attempted";
      if (location.pathname.includes("/callback")) return;
      const authenticated = await client.isAuthenticated();
      if (!authenticated) {
        // Prevent infinite retry loop
        if (!sessionStorage.getItem(loginAttemptKey)) {
          sessionStorage.setItem(loginAttemptKey, "1"); // will get removed from session on successful login
          sessionStorage.setItem("auth:returnTo", window.location.href); //set this so the user will be riderected to their intended page upon succussful login
          client.login();
        }
        return;
      }

      // login succeeded → reset guard
      sessionStorage.removeItem(loginAttemptKey);
      const profile = client.getUserInfo();
      setUser(profile);
      setError(null);
    }, setLoading);

    return () => {
      cleanupAuth();
      cleanupSync();
      cleanupCheck();
    };
  }, [client, queryClient, config.apiUrl, location.pathname]);

  // Build API client
  const api = useMemo(() => {
    const factory = createApi(apiUrl, client);
    factory.withSessionHandling({
      keysToInvalidate: [],
      queryClient,
    });
    return factory.build().instance;
  }, [client, queryClient, apiUrl]);

  const value = {
    user,
    error,
    loading,
    api,
    authClient: client,
    login: () => client.loginWithPopup(client.config.popupRedirectUri),
    logout: () => client.logout(),
  };

  return <AuthContext.Provider value={value}><AuthModal />{children}</AuthContext.Provider>;
}
