export enum AuthEvent {
  AUTHENTICATED = "authenticated",
  REAUTHENTICATED = "reauthenticated",
  USER_CHANGED = "user-changed",
  UNAUTHORIZED = "unauthorized",
}

const listeners = new Set<(event: AuthEvent) => void>();
let lastMessage: AuthEvent | null = null;

const bc = new BroadcastChannel("auth-events");

bc.onmessage = (event: MessageEvent) => {
  lastMessage = event.data;
  listeners.forEach((listener) => listener(event.data));
};

export function onAuthEvent(callback: (event: AuthEvent) => void): () => void {
  listeners.add(callback);

  // Only replay UNAUTHORIZED on subscription. Replaying AUTH* created the refetch ouroboros:
  // - AUTH* broadcast sets lastMessage
  // - New subscriber replays AUTH* immediately
  // - registerAuthSync (utils) refetchQueries globally
  // - Next subscriber/broadcast repeats the refetch
  if (lastMessage === AuthEvent.UNAUTHORIZED) {
    callback(lastMessage);
  }

  return () => {
    listeners.delete(callback);
  };
}

export function broadcastAuthEvent(event: AuthEvent): void {
  // Broadcast channels instances will not detect messages that they have posted
  const b = new BroadcastChannel("auth-events");
  b.postMessage(event);
  b.close();
}
