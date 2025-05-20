export type WipeOn401Config = {
    register: {
        scriptURL: string;
        scope: string;
    };
    fetchStatus: () => Promise<{
        status: number;
    }>;
};
export declare const setupWipeOnMessage: (triggerWipe: () => void, config: WipeOn401Config) => Promise<void>;
