// authStateManager.ts

let authPromise: Promise<void> | null = null;
let resolveAuth: (() => void) | null = null;
const listeners = new Set<(s: { promise: Promise<void> | null }) => void>();
let channel: BroadcastChannel | null = null;

const notifyListeners = () => {
  for (const listener of listeners) {
    try {
      listener({ promise: authPromise });
    } catch (err) {
      console.error("Auth state listener error:", err);
    }
  }
};

export const getChannel = (): BroadcastChannel | null => {
  if (!channel && BroadcastChannel !== undefined) {
    channel = new BroadcastChannel("auth-events");
    channel.addEventListener("message", (event: MessageEvent) => {
      const message = `${event.data}`.toLowerCase();
      if (message === "unauthorized") {
        if (!authPromise) {
          authPromise = new Promise((resolve) => {
            resolveAuth = resolve;
          });
          notifyListeners();
        }
      } else if (message === "authorized") {
        if (resolveAuth) {
          resolveAuth();
          resolveAuth = null;
          authPromise = null;
          notifyListeners();
        }
      }
    });
  }
  if (!channel) {
    console.error("BroadcastChannel is unset");
    return null;
  }
  return channel;
};

export const signalUnauthorized = () => {
  if (!authPromise) {
    authPromise = new Promise((r) => {
      resolveAuth = r;
    });
    notifyListeners();
  }
  getChannel()?.postMessage("unauthorized");
};

export const signalAuthorized = () => {
  if (resolveAuth) {
    resolveAuth();
    resolveAuth = null;
    authPromise = null;
    notifyListeners();
  }
  getChannel()?.postMessage("authorized");
};

export const waitForAuth = (): Promise<void> => {
  if (!authPromise) signalUnauthorized();
  return authPromise!;
};

export const subscribeToAuthState = (
  listener: (s: { promise: Promise<void> | null }) => void
): (() => void) => {
  getChannel();
  listeners.add(listener);
  listener({ promise: authPromise });
  return () => {
    listeners.delete(listener);
  };
};

export const getAuthState = () => ({ promise: authPromise });
