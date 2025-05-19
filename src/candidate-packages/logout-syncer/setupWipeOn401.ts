// src/lib/service-worker/setup/index.js
import { getAutoLoggedOut } from './utils/getAutoLoggedOut';
import { removeAutoLoggedOut } from './utils/removeAutoLoggedOut';
import { setAutoLoggedOut } from './utils/setAutoLoggedOut';


function whenControlled() {
  return new Promise<void>((resolve) => {
    if (navigator.serviceWorker.controller) {
      resolve();
    } else {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (navigator.serviceWorker.controller) {
          //
          resolve();
        }
      });
    }
  });
}


export type WipeOn401Config = {
  register: {
    scriptURL: string;
    scope: string;
  }
}

export const setupWipeOn401 = (triggerWipe:() => void, config:WipeOn401Config) =>
  new Promise<void>((resolve, reject) => {
    try {
      if ('serviceWorker' in navigator === false) {
        throw new Error('Expected navigator.serviceWorker');
      } else {
        window.addEventListener('load', async () => {
          await navigator.serviceWorker
            .register(config.register.scriptURL, {
              scope: config.register.scope,
              updateViaCache: 'none',
            })
            .catch((err) => {
              console.error('[sw-handler] SW registration failed');
              throw err;
            });
          await whenControlled();
          navigator.serviceWorker.addEventListener('message', (event) => {
            console.log(`[sw-handler] message: ${event.data?.type}`);
            if (event.data?.type === 'logout' && !getAutoLoggedOut()) {
              // handle logout logic here
              setAutoLoggedOut(Date.now());
              triggerWipe();
            } else if (event.data?.type === 'authorised' && getAutoLoggedOut()) {
              removeAutoLoggedOut(); // clear
            }
          });
        });
        resolve();
      }
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
