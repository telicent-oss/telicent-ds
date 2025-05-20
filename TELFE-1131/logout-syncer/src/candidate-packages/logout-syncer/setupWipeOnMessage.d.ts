export type WipeOnMessageConfig = {
    register: {
        scriptURL: string;
        scope: string;
    };
    fetchStatus: () => Promise<{
        status: number;
    }>;
};
export declare const setupWipeOnMessage: (triggerWipe: () => void, config: WipeOnMessageConfig) => Promise<void>;
