import { WipeOnMessageConfig } from './setupWipeOnMessage';
import { WipeOnPageVisibilityConfig } from './setupWipeOnPageVisibility';

export type WipeConfig = {
    autoLogoutURL?: URL;
    wipeOnMessage?: WipeOnMessageConfig;
    wipeOnPageVisibility?: WipeOnPageVisibilityConfig;
};
export declare const setupWipe: (config: WipeConfig) => Promise<void>;
