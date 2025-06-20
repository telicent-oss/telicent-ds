export declare const getChannel: () => BroadcastChannel | null;
export declare const signalUnauthorized: () => void;
export declare const signalAuthorized: () => void;
export declare const waitForAuth: () => Promise<void>;
export declare const subscribeToAuthState: (listener: (s: {
    promise: Promise<void> | null;
}) => void) => (() => void);
export declare const getAuthState: () => {
    promise: Promise<void> | null;
};
