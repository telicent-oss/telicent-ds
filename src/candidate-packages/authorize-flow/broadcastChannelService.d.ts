export declare enum AuthEvent {
    AUTHENTICATED = "authenticated",
    REAUTHENTICATED = "reauthenticated",
    USER_CHANGED = "user-changed",
    UNAUTHORIZED = "unauthorized"
}
export declare function onAuthEvent(callback: (event: AuthEvent) => void): () => void;
export declare function broadcastAuthEvent(event: AuthEvent): void;
