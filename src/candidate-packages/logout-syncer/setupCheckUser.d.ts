export declare const setupCheckUser: (config: {
    triggerWipe: () => void;
    fetchCurrentUser: () => Promise<string | void>;
}) => Promise<((reason: string) => Promise<void>) | undefined>;
