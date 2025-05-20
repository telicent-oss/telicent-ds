import { WipeOn401Config } from './setupWipeOnMessage';
import { WipeOnPageVisibilityConfig } from './setupWipeOnPageVisibility';

export type WipeConfig = {
    autoLogoutURL?: URL;
    wipeOn401?: WipeOn401Config;
    wipeOnPageVisibility?: WipeOnPageVisibilityConfig;
};
export declare const setupWipe: (config: WipeConfig) => Promise<void>;
