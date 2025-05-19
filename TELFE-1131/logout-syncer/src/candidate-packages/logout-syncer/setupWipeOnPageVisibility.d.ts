export type WipeOnPageVisibilityConfig = {
    fetchStatus: () => Promise<{
        status: number;
    }>;
};
export declare const setupWipeOnPageVisibility: (triggerWipe: () => void, config: WipeOnPageVisibilityConfig) => void;
