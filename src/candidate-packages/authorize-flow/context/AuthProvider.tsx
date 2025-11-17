import AuthServerOAuth2Client, { AuthServerOAuth2ClientConfig, UserInfo } from "@telicent-oss/fe-auth-lib";
import React, { useEffect, useMemo, useState } from "react"
import { AuthContext } from "./AuthContext";
import { setupOAuthEventListeners } from "../services/setupOAuthEventListeners";
import { registerAuthSync } from "../utils";
import { QueryClient } from "@tanstack/react-query";
import { createApi } from "../index";
import { AuthModal } from "../components/AuthModal";

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
    if (locationPath.includes("/callback")) return;
    setUser(null);
    setError(err instanceof Error ? err : new Error(String(err)));
  };

  const onSuccess = async () => {
    if (locationPath.includes("/callback")) return;
    const profile = client.getUserInfo();
    setUser(profile);
    setError(null);
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
      if (location.pathname.includes("/callback")) return;
      const authenticated = await client.isAuthenticated();
      if (!authenticated) {
        client.login();
        return;
      }
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
  // useEffect(() => {
  //   if (location.pathname || location.pathname.includes("/callback")) {
  //     return; // DO NOTHING on /callback page
  //   }
  //
  //   let mounted = true;
  //   // const controller = new AbortController();
  //   // const { signal } = controller;
  //   const checkExistingSession = async () => {
  //     setLoading(true);
  //     try {
  //       const authenticated = await client.isAuthenticated(); // calls /auth/check
  //       if (!mounted) return;
  //       if (!authenticated) {
  //         client.login();
  //         return;
  //       }
  //
  //       const profile = client.getUserInfo();
  //       if (!mounted) return;
  //       setUser(profile);
  //       setError(null);
  //     } catch (err) {
  //       if (!mounted) return;
  //       if (err instanceof Error && err.name === "AbortError") return;
  //       setUser(null);
  //       setError(null);
  //     } finally {
  //       if (!mounted) return
  //       setLoading(false);
  //     }
  //   };
  //
  //   checkExistingSession();
  //
  //   return () => {
  //     mounted = false;
  //     // controller.abort();
  //   }
  //
  // }, [location.pathname]);
  //
  // useEffect(() => {
  //   let mounted = true;
  //
  //   const onError = (err: unknown) => {
  //     if (!mounted) return;
  //     setUser(null);
  //     setError(err instanceof Error ? err : new Error(String(err)));
  //     setLoading(false);
  //   };
  //
  //   const onSuccess = async () => {
  //     if (!mounted) return;
  //     setLoading(true);
  //     try {
  //       const profile = client.getUserInfo(); // may resolve after unmount
  //       if (!mounted) return;
  //       setUser(profile);
  //       setError(null);
  //     } catch (e) {
  //       if (!mounted) return;
  //       onError(e);
  //     } finally {
  //       if (mounted) setLoading(false);
  //     }
  //   };
  //
  //   const cleanupAuth = setupOAuthEventListeners(client, onSuccess, onError);
  //   console.log({ cleanupAuth })
  //   const cleanupSync = registerAuthSync(queryClient, client.config.apiUrl);
  //
  //   return () => {
  //     mounted = false;            // prevents post-unmount effects
  //     cleanupAuth();
  //     cleanupSync();
  //   };
  // }, [client, queryClient, config.apiUrl]);

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
