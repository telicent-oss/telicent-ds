// src/lib/service-worker/setup/index.js
import { autoLoggedOut } from "./utils/autoLoggedOut";

function whenControlled() {
  return new Promise<void>((resolve) => {
    if (navigator.serviceWorker.controller) {
      resolve();
    } else {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
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
  };
  fetchStatus: () => Promise<{ status: number }>;
};

export const setupWipeOnMessage = (
  triggerWipe: () => void,
  config: WipeOn401Config
) =>
  new Promise<void>((resolve, reject) => {
    try {
      if ("serviceWorker" in navigator === false) {
        throw new Error("Expected navigator.serviceWorker");
      } else {
        window.addEventListener("load", async () => {
          await navigator.serviceWorker
            .register(config.register.scriptURL, {
              scope: config.register.scope,
              updateViaCache: "none",
            })
            .catch((err) => {
              console.error("[sw-handler] SW registration failed");
              throw err;
            });
          await whenControlled();
          /**
           * Handle service worker messages
           */
          navigator.serviceWorker.addEventListener("message", (event) => {
            console.log(`[sw-handler] message: ${event.data?.type}`);
            if (event.data?.type === "logout-likely") {
              config.fetchStatus();
            } else if (
              event.data?.type === "logout" &&
              !autoLoggedOut.sessionStorage.get()
            ) {
              autoLoggedOut.sessionStorage.set(Date.now());
              triggerWipe();
            } else if (
              event.data?.type === "authorised" &&
              autoLoggedOut.sessionStorage.get()
            ) {
              autoLoggedOut.sessionStorage.remove();
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
