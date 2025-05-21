import { setupWipeOnMessage, WipeOnMessageConfig } from './setupWipeOnMessage';
import { setupWipeOnPageVisibility, WipeOnPageVisibilityConfig } from './setupWipeOnPageVisibility';
import { triggerWipeWithDefaultURL } from './utils/triggerWipeWithDefaultURL';

export type WipeConfig = {
  autoLogoutURL?: URL;
  wipeOnMessage?: WipeOnMessageConfig;
  wipeOnPageVisibility?: WipeOnPageVisibilityConfig;
}
export const setupWipe = async (config:WipeConfig) => {
  // TODO validate config
  const triggerWipe = () => {
    triggerWipeWithDefaultURL(config?.autoLogoutURL);
  };
  if (config.wipeOnMessage !== undefined) {
    await setupWipeOnMessage(triggerWipe, config.wipeOnMessage);
  }
  if (config.wipeOnPageVisibility !== undefined) {
    await setupWipeOnPageVisibility(triggerWipe, config.wipeOnPageVisibility);
  }
};
