/* eslint-disable curly */
import { setupWipeOnMessage, WipeOn401Config } from './setupWipeOnMessage';
import { setupWipeOnPageVisibility, WipeOnPageVisibilityConfig } from './setupWipeOnPageVisibility';
import { triggerWipeWithDefaultURL } from './utils/triggerWipeWithDefaultURL';

export type WipeConfig = {
  autoLogoutURL?: URL;
  wipeOn401?: WipeOn401Config;
  wipeOnPageVisibility?: WipeOnPageVisibilityConfig;
}
export const setupWipe = async (config:WipeConfig) => {
  // TODO validate config
  const triggerWipe = () => {
    triggerWipeWithDefaultURL(config?.autoLogoutURL);
  };
  if (config.wipeOn401 !== undefined) {
    await setupWipeOnMessage(triggerWipe, config.wipeOn401);
  }
  if (config.wipeOnPageVisibility !== undefined) {
    await setupWipeOnPageVisibility(triggerWipe, config.wipeOnPageVisibility);
  }
};
