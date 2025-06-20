type AuthEvent = "unauthorized" | "authorized";
export declare function onAuthEvent(callback: (event: AuthEvent) => void): () => void;
export declare function broadcastAuthEvent(event: AuthEvent): void;
export {};
