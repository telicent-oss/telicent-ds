type AuthEvent = "unauthorized" | "authorized"; // add more as needed

const listeners = new Set<(event: AuthEvent) => void>();
let lastMessage: AuthEvent | null = null;

const bc = new BroadcastChannel("auth-events");

bc.onmessage = (event: MessageEvent) => {
  lastMessage = event.data;
  listeners.forEach((listener) => listener(event.data));
};

export function onAuthEvent(callback: (event: AuthEvent) => void): () => void {
  listeners.add(callback);

  // Immediately fire last known message (StrictMode-safe)
  if (lastMessage !== null) {
    callback(lastMessage);
  }

  return () => {
    listeners.delete(callback);
  };
}

export function broadcastAuthEvent(event: AuthEvent): void {
  bc.postMessage(event);
}
