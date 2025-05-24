// src/lib/service-worker/setup/index.js
import { autoLoggedOut } from "./utils/autoLoggedOut";
import { z } from "zod"

export const WipeOnMessageConfigSchema = z.object({
  register: z.object({
    scriptURL: z.string(),          // valid string
    scope:     z.string(),           // service-worker scope
  }),
  fetchStatus: z.function()
    .args()
    .returns(z.promise(z.object({ status: z.number() }))),
})

export type WipeOnMessageConfig = z.infer<typeof WipeOnMessageConfigSchema>

export const setupWipeOnMessage = async (
  triggerWipe: () => void,
  checkUser: (reason: string) => Promise<void>,
  config: WipeOnMessageConfig
) => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("Expected navigator.serviceWorker");
  }

  // Register the SW
  const registration = await navigator.serviceWorker.register(
    config.register.scriptURL,
    {
      scope: config.register.scope,
      updateViaCache: "none",
    }
  );
  await navigator.serviceWorker.ready;

  // Respond to messages
  navigator.serviceWorker.addEventListener("message", (event) => {
    switch (event.data?.type) {
      case "logout-likely":
        checkUser("logout-likely");
        break;
      case "logout":
        // avoid double-fire if this tab initiated the sign-out
        if (!autoLoggedOut.get()) {
          autoLoggedOut.set(Date.now());
          triggerWipe();
        }
        break;
      case "authorised":
        if (autoLoggedOut.get()) {
          autoLoggedOut.remove();
        }
        break;
    }
  });
};
