import AuthServerOAuth2Client, { AuthServerOAuth2ClientConfig, UserInfo } from "@telicent-oss/fe-auth-lib";
import React, { useEffect, useMemo, useState } from "react"
import { AuthContext } from "./AuthContext";
import { setupOAuthEventListeners } from "../services/setupOAuthEventListeners";
import { registerAuthSync } from "../utils";
import { QueryClient } from "@tanstack/react-query";
import { createApi } from "../index";
import { AuthEvent, broadcastAuthEvent } from "../exports";

interface AuthProviderProps {
  apiUrl: string;
  config: AuthServerOAuth2ClientConfig;
  queryClient: QueryClient;
  children: React.ReactNode;
}

const normalizePathname = (pathname: string) => pathname.replace(/\/+$/, "") || "/";

const urlsMatch = (left: string, right: string): boolean => {
  const leftUrl = new URL(left);
  const rightUrl = new URL(right);

  return (
    leftUrl.origin === rightUrl.origin &&
    normalizePathname(leftUrl.pathname) === normalizePathname(rightUrl.pathname)
  );
};

const isAuthPopupCallback = (popupRedirectUri: string, redirectUri?: string): boolean => {
  if (typeof window === "undefined") return false;

  const isPopupContext = !!window.opener || window.parent !== window;
  if (!isPopupContext) return false;

  if (!window.location.pathname.includes("/callback")) return false;

  if (!popupRedirectUri) {
    console.error("[auth-popup] popupRedirectUri missing; cannot identify popup callback safely");
    return false;
  }

  try {
    const currentUrl = new URL(window.location.href);
    const redirectUrl = new URL(popupRedirectUri);

    if (redirectUri) {
      try {
        if (urlsMatch(popupRedirectUri, redirectUri)) {
          console.error("[auth-popup] popupRedirectUri matches redirectUri; popup detection would be unsafe");
          return false;
        }
      } catch (e) {
        console.error("[auth-popup] Failed to parse redirectUri for comparison", e);
      }
    }

    return (
      currentUrl.origin === redirectUrl.origin &&
      normalizePathname(currentUrl.pathname) === normalizePathname(redirectUrl.pathname)
    );
  } catch (err) {
    console.error("[auth-popup] Failed to parse popupRedirectUri", err);
    return false;
  }
};

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

  const onSuccess = async (redirect?: URL) => {
    const profile = client.getUserInfo();
    setUser(profile);
    setError(null);
    broadcastAuthEvent(AuthEvent.AUTHENTICATED)
    const isPopupFlow = !!window.opener
    if (!isPopupFlow && redirect) window.location.replace(redirect)
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
  const [client, setClient] = useState<AuthServerOAuth2Client | null>(null);
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    if (!config || Object.values(config).length === 0) return;
    setClient(new AuthServerOAuth2Client(config));
  }, [config]);

  useEffect(() => {
    if (!client) return;

    const { onError, onSuccess } = createAuthHandlers(client, setUser, setError, location.pathname);
    const cleanupAuth = setupOAuthEventListeners(client, onSuccess, onError);
    const cleanupSync = registerAuthSync(queryClient, client.config.apiUrl);

    const cleanupCheck = runAsync(async () => {
      const isPopupCallback = isAuthPopupCallback(client.config.popupRedirectUri, client.config.redirectUri);
      const isStandardCallback = typeof window !== "undefined" && window.location.pathname.includes("/callback");

      // In popup callback windows, rely on finishPopupFlow to complete auth; avoid isAuthenticated/login
      if (!isPopupCallback && !isStandardCallback) {
        const authenticated = await client.isAuthenticated();
        if (!authenticated) client.login();

        const profile = client.getUserInfo();
        setUser(profile);
        setError(null);
      }

      setInitialised(true);
    }, setLoading);

    return () => {
      cleanupAuth();
      cleanupSync();
      cleanupCheck();
    };
  }, [client, queryClient, config.apiUrl, location.pathname]);

  const api = useMemo(() => {
    if (!client) return;
    const factory = createApi(apiUrl, client);
    factory.withSessionHandling({
      keysToInvalidate: [],
      queryClient,
    });
    return factory.build().instance;
  }, [client, queryClient, apiUrl]);

  // Block until client is fully configured + initialised
  if (!client || !initialised || !api) return null;

  const value = {
    user,
    error,
    loading,
    api,
    authClient: client,
    login: () => client.loginWithPopup(client.config.popupRedirectUri),
    logout: () => client.logout(),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
