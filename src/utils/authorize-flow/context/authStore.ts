import { createStore } from "zustand/vanilla";
import { UserInfo } from "@telicent-oss/fe-auth-lib";

// If a login attempt neither succeeds nor errors within this window (e.g. a
// redirect that never navigated), the in-flight latch expires so the user
// isn't locked out of retrying. Redirect flows normally reset the store by
// leaving the page; this only matters for same-page (popup) flows.
const LOGIN_IN_FLIGHT_EXPIRY_MS = 30_000;

export interface AuthState {
  user: UserInfo | null;
  error: Error | null;
  loading: boolean;
  initialised: boolean;
  /** Epoch ms of the login attempt currently in flight, or null. */
  loginStartedAt: number | null;
  /** OAuth authorization codes already handed to handleCallback. */
  consumedCallbackCodes: ReadonlySet<string>;

  setUser: (user: UserInfo | null) => void;
  setError: (error: Error | null) => void;
  setLoading: (loading: boolean) => void;
  setInitialised: () => void;
  /**
   * Single-flight latch for login attempts. Returns true when the caller may
   * proceed (and marks the attempt in flight); false when another attempt is
   * already running. Two concurrent flows each write their own OAuth `state`
   * to sessionStorage, so whichever callback returns no longer matches —
   * "Invalid state parameter". This latch makes that impossible.
   */
  beginLogin: () => boolean;
  /** Clears the in-flight latch (login succeeded, failed, or was abandoned). */
  endLogin: () => void;
  /**
   * Consume-once guard for callback processing. Returns true the first time a
   * given authorization code is seen; false on any repeat. Double-mounted
   * effects (e.g. React StrictMode) can dispatch the same callback twice —
   * exchanging one code twice races two token requests and the loser
   * invalidates the winner.
   */
  consumeCallbackCode: (code: string) => boolean;
}

export const createAuthStore = () =>
  createStore<AuthState>()((set, get) => ({
    user: null,
    error: null,
    loading: false,
    initialised: false,
    loginStartedAt: null,
    consumedCallbackCodes: new Set<string>(),

    setUser: (user) => set({ user }),
    setError: (error) => set({ error }),
    setLoading: (loading) => set({ loading }),
    setInitialised: () => set({ initialised: true }),

    beginLogin: () => {
      const { loginStartedAt } = get();
      const now = Date.now();
      if (loginStartedAt !== null && now - loginStartedAt < LOGIN_IN_FLIGHT_EXPIRY_MS) {
        return false;
      }
      set({ loginStartedAt: now });
      return true;
    },
    endLogin: () => set({ loginStartedAt: null }),

    consumeCallbackCode: (code) => {
      const { consumedCallbackCodes } = get();
      if (consumedCallbackCodes.has(code)) return false;
      const next = new Set(consumedCallbackCodes);
      next.add(code);
      set({ consumedCallbackCodes: next });
      return true;
    },
  }));

export type AuthStore = ReturnType<typeof createAuthStore>;
