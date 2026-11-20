import { QueryClient } from "@tanstack/react-query";
import AuthServerOAuth2Client, { AuthServerOAuth2ClientConfig } from "@telicent-oss/fe-auth-lib";
import React, { useEffect, useMemo, useState } from "react";
import { useStore } from "zustand";

import { AuthEvent, broadcastAuthEvent } from "../exports";
import { createApi } from "../index";
import { setupOAuthEventListeners } from "../services/setupOAuthEventListeners";
import { registerAuthSync } from "../utils";
import { matchCurrentUri } from "../utils/matchCurrentUrl";
import { AuthContext, AuthContextValue } from "./AuthContext";
import { createAuthStore } from "./authStore";

interface AuthProviderProps {
  apiUrl: string;
  config: AuthServerOAuth2ClientConfig;
  queryClient: QueryClient;
  children: React.ReactNode;
}

// The access token lives only in memory, so a full page load after login would
// drop it and send the user straight back to the auth server. Change the URL in
// place and let the router pick it up from popstate instead.
const navigateWithoutReload = (url: URL) => {
  if (url.origin !== window.location.origin) {
    window.location.replace(url);
    return;
  }
  // Keep the router's own history state (index keys) so it treats this as the same entry
  window.history.replaceState(window.history.state, "", url);
  window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
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
  // All reactive auth state lives in the store (see authStore.ts). The store
  // instance is stable for the provider's lifetime, so nothing about a
  // provider re-render can repaint consumers or restart flows.
  const [store] = useState(createAuthStore);
  const [client, setClient] = useState<AuthServerOAuth2Client | null>(null);
  const initialised = useStore(store, (s) => s.initialised);

  useEffect(() => {
    if (!config || Object.values(config).length === 0) return;
    setClient(new AuthServerOAuth2Client(config));
  }, [config]);

  useEffect(() => {
    if (!client) return;
    const { setUser, setError, setLoading, setInitialised, beginLogin, endLogin } =
      store.getState();

    const onError = (err: unknown) => {
      setUser(null);
      setError(err instanceof Error ? err : new Error(String(err)));
      endLogin();
    };

    const onSuccess = async (redirect?: URL) => {
      const profile = client.getUserInfo();
      setUser(profile);
      setError(null);
      endLogin();
      // The app may still be hidden from a redirect that never left the page
      setInitialised();
      broadcastAuthEvent(AuthEvent.AUTHENTICATED);
      const isPopupFlow = !!window.opener;
      if (!isPopupFlow && redirect) navigateWithoutReload(new URL(redirect));
    };

    const cleanupAuth = setupOAuthEventListeners(client, onSuccess, onError, {
      // Consume-once: double-dispatched callbacks (StrictMode double effects,
      // duplicated events) must not exchange the same code twice.
      shouldProcessCallback: (code) => store.getState().consumeCallbackCode(code),
    });
    const cleanupSync = registerAuthSync(queryClient);

    const cleanupCheck = runAsync(async () => {
      // Set once the page is on its way to the login page. The app must stay
      // hidden: anything it renders would fire requests with no login, and
      // each 401 broadcasts "unauthorized" to every open tab.
      let leavingForLogin = false;
      try {
        const isStandardCallback = matchCurrentUri(client.config.redirectUri);
        const isPopupCallback = matchCurrentUri(client.config.popupRedirectUri);

        // In callback windows, rely on the callback/popup completion to
        // finish auth; never isAuthenticated/login from here.
        if (!isPopupCallback && !isStandardCallback) {
          const authenticated = await client.isAuthenticated();
          if (!authenticated) {
            // Single-flight: no matter how many times this effect runs
            // (re-renders, StrictMode double-invocation), only ONE login flow
            // may start. A second concurrent flow overwrites the first's
            // OAuth `state` in sessionStorage and every callback then fails
            // with "Invalid state parameter".
            if (beginLogin()) {
              try {
                // login() can reject before it ever navigates (crypto.subtle
                // unavailable in non-secure contexts, sessionStorage blocked
                // in sandboxed iframes) — release the latch so the user isn't
                // locked out of retrying until it expires.
                await client.login();
              } catch (err) {
                endLogin();
                throw err; // outer catch surfaces the error via setError
              }
            }
            // Either this run started the redirect, or another run already has
            leavingForLogin = true;
            return;
          }
          setUser(client.getUserInfo());
          setError(null);
        }
      } catch (err) {
        console.error("[AuthProvider] Auth check failed", err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        if (!leavingForLogin) setInitialised();
      }
    }, setLoading);

    return () => {
      cleanupAuth();
      cleanupSync();
      cleanupCheck();
    };
    // location.pathname is deliberately NOT a dependency (it was before): it
    // isn't reactive, so it only ever "changed" when a provider re-render
    // happened to coincide with a navigation — restarting this effect
    // mid-login and launching a second flow. Session expiry during use is
    // handled by the 401 session-handling on the api instance, not by
    // re-running this check per navigation.
  }, [client, queryClient, store]);

  const api = useMemo(() => {
    if (!client) return;
    const factory = createApi(apiUrl, client);
    factory.withSessionHandling({
      keysToInvalidate: [],
      queryClient,
    });
    return factory.build().instance;
  }, [client, queryClient, apiUrl]);

  // The context value is memoised and contains only stable references —
  // consumers subscribe to reactive state via the store (see useAuth).
  const value = useMemo<AuthContextValue | null>(() => {
    if (!client || !api) return null;
    return {
      store,
      authClient: client,
      api,
      login: async () => {
        // Same single-flight latch as the automatic login above.
        if (!store.getState().beginLogin()) return;
        try {
          await client.loginWithPopup(client.config.popupRedirectUri);
        } catch (e) {
          const { endLogin, setError } = store.getState();
          endLogin();
          // Surface the failure — callers don't necessarily catch, and an
          // unhandled rejection leaves the user with no visible error.
          setError(e instanceof Error ? e : new Error(String(e)));
          throw e;
        }
      },
      logout: () => client.logout(),
    };
  }, [client, api, store]);

  // Block until client is fully configured + initialised
  if (!value || !initialised) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
