import { WipeOn401Config } from './setupWipeOn401';
import { WipeOnPageVisibilityConfig } from './setupWipeOnPageVisibility';

export type WipeConfig = {
    autoLogoutURL?: URL;
    wipeOn401?: WipeOn401Config;
    wipeOnPageVisibility?: WipeOnPageVisibilityConfig;
};
export declare const setupWipe: (config: WipeConfig) => Promise<void>;
