export type WipeOn401Config = {
    register: {
        scriptURL: string;
        scope: string;
    };
};
export declare const setupWipeOn401: (triggerWipe: () => void, config: WipeOn401Config) => Promise<void>;
