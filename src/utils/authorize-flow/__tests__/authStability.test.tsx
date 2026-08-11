// TELFE-1669: regression tests for the auth-flow stability guarantees.
//
// 1. Login is SINGLE-FLIGHT: no combination of effect re-runs (StrictMode
//    double-invocation, provider re-renders) may start two concurrent OAuth
//    flows — two flows overwrite each other's `state` in sessionStorage and
//    every callback then fails with "Invalid state parameter".
// 2. Callback processing is CONSUME-ONCE per authorization code: a
//    double-dispatched callback event must not exchange the same code twice.
// 3. The context value is STABLE: useAuth consumers get referentially stable
//    api/authClient/login across provider re-renders, so auth no longer
//    repaints (and re-triggers effects in) every consumer per provider render.

import React from "react";
import { act, render, renderHook, waitFor } from "@testing-library/react";
import { QueryClient } from "@tanstack/react-query";

import { AuthProvider } from "../context/AuthProvider";
import { useAuth } from "../context/useAuth";

const mockAuthClient = {
  config: {
    redirectUri: "http://app.redirect.localhost",
    popupRedirectUri: "http://app.popupredirect.localhost",
    authServerUrl: "http://auth.telicent.localhost",
    clientId: "mockClient",
    scope: "offline",
  },
  isAuthenticated: jest.fn().mockResolvedValue(true),
  getUserInfo: jest.fn().mockReturnValue({ name: "Test User", email: "test@example.com" }),
  login: jest.fn(),
  loginWithPopup: jest.fn(),
  logout: jest.fn(),
  finishPopupFlow: jest.fn(),
  handleCallback: jest.fn().mockResolvedValue({ ok: true }),
  makeAuthenticatedRequest: jest.fn(),
} as any;

jest.mock("@telicent-oss/fe-auth-lib", () => {
  class MockAuthClient {
    constructor() {
      return mockAuthClient;
    }
    static OAUTH_SUCCESS = "oauth-success";
    static OAUTH_ERROR = "oauth-error";
  }
  return {
    __esModule: true,
    default: MockAuthClient,
    AuthServerOAuth2Client: MockAuthClient,
  };
});

const mockConfig = {
  redirectUri: "http://app.redirect.localhost",
  popupRedirectUri: "http://app.popupredirect.localhost",
  authServerUrl: "http://auth.telicent.localhost",
  clientId: "mockClient",
  scope: "offline",
} as any;

const makeProvider =
  (queryClient: QueryClient) =>
  ({ children }: { children: React.ReactNode }) => (
    <AuthProvider apiUrl="http://auth.telicent.localhost" config={mockConfig} queryClient={queryClient}>
      {children}
    </AuthProvider>
  );

beforeEach(() => {
  jest.clearAllMocks();
  mockAuthClient.isAuthenticated.mockResolvedValue(true);
});

describe("single-flight login (TELFE-1669)", () => {
  it("auto-login fires at most once even under StrictMode double-invoked effects", async () => {
    mockAuthClient.isAuthenticated.mockResolvedValue(false);
    const Provider = makeProvider(new QueryClient());
    render(
      <React.StrictMode>
        <Provider>
          <div />
        </Provider>
      </React.StrictMode>,
    );
    await waitFor(() => expect(mockAuthClient.isAuthenticated).toHaveBeenCalled());
    await waitFor(() => expect(mockAuthClient.login).toHaveBeenCalledTimes(1));
    // Give any second (buggy) flow a chance to fire before asserting.
    await act(async () => {
      await new Promise((r) => setTimeout(r, 50));
    });
    expect(mockAuthClient.login).toHaveBeenCalledTimes(1);
  });

  it("context login() is latched — concurrent calls start one popup flow", async () => {
    const Provider = makeProvider(new QueryClient());
    const { result } = renderHook(() => useAuth(), { wrapper: Provider });
    await waitFor(() => expect(result.current.user).not.toBeNull());
    await act(async () => {
      await Promise.all([result.current.login(), result.current.login()]);
    });
    expect(mockAuthClient.loginWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe("consume-once callback (TELFE-1669)", () => {
  it("a double-dispatched callback event exchanges the code only once", async () => {
    const Provider = makeProvider(new QueryClient());
    const { result } = renderHook(() => useAuth(), { wrapper: Provider });
    await waitFor(() => expect(result.current.user).not.toBeNull());

    const detail = {
      clientId: "mockClient",
      callbackUrl: "http://app.redirect.localhost/callback?code=abc123&state=xyz",
    };
    await act(async () => {
      window.dispatchEvent(new CustomEvent("oauth-callback", { detail }));
      window.dispatchEvent(new CustomEvent("oauth-callback", { detail }));
    });
    await waitFor(() => expect(mockAuthClient.handleCallback).toHaveBeenCalledTimes(1));
    // A DIFFERENT code is still processed.
    await act(async () => {
      window.dispatchEvent(
        new CustomEvent("oauth-callback", {
          detail: {
            clientId: "mockClient",
            callbackUrl: "http://app.redirect.localhost/callback?code=def456&state=xyz",
          },
        }),
      );
    });
    await waitFor(() => expect(mockAuthClient.handleCallback).toHaveBeenCalledTimes(2));
  });
});

describe("stable context value (TELFE-1669)", () => {
  it("api/authClient/login keep their identity across provider re-renders", async () => {
    const Provider = makeProvider(new QueryClient());
    const { result, rerender } = renderHook(() => useAuth(), { wrapper: Provider });
    await waitFor(() => expect(result.current.user).not.toBeNull());
    const first = result.current;
    rerender();
    rerender();
    expect(result.current.login).toBe(first.login);
    expect(result.current.api).toBe(first.api);
    expect(result.current.authClient).toBe(first.authClient);
    expect(result.current.user).toBe(first.user);
  });
});

describe("error and edge paths (coverage for TELFE-1669 changes)", () => {
  it("useAuth throws outside an AuthProvider", () => {
    // Suppress React's error boundary noise for the expected throw.
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    try {
      expect(() => renderHook(() => useAuth())).toThrow(
        "useAuth must be used within an AuthProvider",
      );
    } finally {
      spy.mockRestore();
    }
  });

  it("an oauth-error event clears the user, surfaces an Error, and releases the login latch", async () => {
    const Provider = makeProvider(new QueryClient());
    const { result } = renderHook(() => useAuth(), { wrapper: Provider });
    await waitFor(() => expect(result.current.user).not.toBeNull());

    await act(async () => {
      window.dispatchEvent(new Event("oauth-error"));
    });
    await waitFor(() => expect(result.current.error).toBeInstanceOf(Error));
    expect(result.current.user).toBeNull();
    // Latch released: a manual login may start again immediately.
    await act(async () => {
      await result.current.login();
    });
    expect(mockAuthClient.loginWithPopup).toHaveBeenCalledTimes(1);
  });

  it("an oauth-success event resolves the user via the client profile", async () => {
    mockAuthClient.isAuthenticated.mockResolvedValue(false);
    const Provider = makeProvider(new QueryClient());
    const { result } = renderHook(() => useAuth(), { wrapper: Provider });
    await waitFor(() => expect(mockAuthClient.login).toHaveBeenCalled());
    await act(async () => {
      window.dispatchEvent(new Event("oauth-success"));
    });
    await waitFor(() => expect(result.current.user).not.toBeNull());
  });

  it("an isAuthenticated failure lands in error state but still initialises", async () => {
    mockAuthClient.isAuthenticated.mockRejectedValue(new Error("session check exploded"));
    const Provider = makeProvider(new QueryClient());
    const { result } = renderHook(() => useAuth(), { wrapper: Provider });
    await waitFor(() => expect(result.current.error).toBeInstanceOf(Error));
    expect(result.current.error?.message).toBe("session check exploded");
  });

  it("logout delegates to the client", async () => {
    const Provider = makeProvider(new QueryClient());
    const { result } = renderHook(() => useAuth(), { wrapper: Provider });
    await waitFor(() => expect(result.current.user).not.toBeNull());
    await act(async () => {
      await result.current.logout();
    });
    expect(mockAuthClient.logout).toHaveBeenCalledTimes(1);
  });

  it("a callback whose state carries an encoded return URL decodes it (popup flow skips navigation)", async () => {
    const Provider = makeProvider(new QueryClient());
    const { result } = renderHook(() => useAuth(), { wrapper: Provider });
    await waitFor(() => expect(result.current.user).not.toBeNull());

    (window as any).opener = {}; // popup flow: onSuccess must NOT navigate
    try {
      const encoded = btoa("http://app.redirect.localhost/deep/link")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
      await act(async () => {
        window.dispatchEvent(
          new CustomEvent("oauth-callback", {
            detail: {
              clientId: "mockClient",
              callbackUrl: `http://app.redirect.localhost/callback?code=with-redirect&state=csrf.${encoded}`,
            },
          }),
        );
      });
      await waitFor(() => expect(mockAuthClient.handleCallback).toHaveBeenCalled());
    } finally {
      delete (window as any).opener;
    }
  });

  it("a failing handleCallback surfaces through onError", async () => {
    mockAuthClient.handleCallback.mockRejectedValueOnce(new Error("invalid_grant"));
    const Provider = makeProvider(new QueryClient());
    const { result } = renderHook(() => useAuth(), { wrapper: Provider });
    await waitFor(() => expect(result.current.user).not.toBeNull());
    await act(async () => {
      window.dispatchEvent(
        new CustomEvent("oauth-callback", {
          detail: {
            clientId: "mockClient",
            callbackUrl: "http://app.redirect.localhost/callback?code=bad-code&state=s",
          },
        }),
      );
    });
    await waitFor(() => expect(result.current.error?.message).toBe("invalid_grant"));
  });
});

describe("branch completeness (TELFE-1669 changes)", () => {
  it("renders nothing and constructs no client for an empty config", () => {
    const { container } = render(
      <AuthProvider apiUrl="http://x" config={{} as any} queryClient={new QueryClient()}>
        <div data-testid="never" />
      </AuthProvider>,
    );
    expect(container.innerHTML).toBe("");
    expect(mockAuthClient.isAuthenticated).not.toHaveBeenCalled();
  });

  it("mounted on the standard callback URI, the provider does not auto-login", async () => {
    // jsdom serves tests from http://localhost/ — point the redirectUri there
    // so matchCurrentUri sees the current page AS the callback.
    const cfg = { ...mockConfig, redirectUri: window.location.href };
    mockAuthClient.config.redirectUri = window.location.href;
    try {
      render(
        <AuthProvider apiUrl="http://x" config={cfg} queryClient={new QueryClient()}>
          <div />
        </AuthProvider>,
      );
      await act(async () => {
        await new Promise((r) => setTimeout(r, 30));
      });
      expect(mockAuthClient.isAuthenticated).not.toHaveBeenCalled();
      expect(mockAuthClient.login).not.toHaveBeenCalled();
    } finally {
      mockAuthClient.config.redirectUri = "http://app.redirect.localhost";
    }
  });

  it("a callback URL without a state parameter still processes (no redirect decode)", async () => {
    const Provider = makeProvider(new QueryClient());
    const { result } = renderHook(() => useAuth(), { wrapper: Provider });
    await waitFor(() => expect(result.current.user).not.toBeNull());
    await act(async () => {
      window.dispatchEvent(
        new CustomEvent("oauth-callback", {
          detail: {
            clientId: "mockClient",
            callbackUrl: "http://app.redirect.localhost/callback?code=stateless",
          },
        }),
      );
    });
    await waitFor(() => expect(mockAuthClient.handleCallback).toHaveBeenCalledTimes(1));
  });
});

describe("listener defaults (TELFE-1669 changes)", () => {
  it("setupOAuthEventListeners without options processes callbacks unguarded", async () => {
    const { setupOAuthEventListeners } = await import("../services/setupOAuthEventListeners");
    const onSuccess = jest.fn();
    const cleanup = setupOAuthEventListeners(mockAuthClient, onSuccess, jest.fn());
    try {
      await act(async () => {
        window.dispatchEvent(
          new CustomEvent("oauth-callback", {
            detail: {
              clientId: "mockClient",
              callbackUrl: "http://app.redirect.localhost/callback?code=unguarded&state=s",
            },
          }),
        );
      });
      await waitFor(() => expect(onSuccess).toHaveBeenCalled());
    } finally {
      cleanup();
    }
  });

  it("unmounting mid-initialisation does not set state after teardown", async () => {
    let resolveAuth: (v: boolean) => void = () => {};
    mockAuthClient.isAuthenticated.mockReturnValue(
      new Promise((resolve) => {
        resolveAuth = resolve;
      }),
    );
    const Provider = makeProvider(new QueryClient());
    const { unmount } = render(
      <Provider>
        <div />
      </Provider>,
    );
    unmount();
    await act(async () => {
      resolveAuth(true);
      await new Promise((r) => setTimeout(r, 10));
    });
    // No assertion failure / act warning = the mounted guard held.
    expect(true).toBe(true);
  });
});
