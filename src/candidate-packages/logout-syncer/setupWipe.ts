import { z } from "zod";
import { setupCheckUser } from "./setupCheckUser";
import {
  setupWipeOnMessage,
  WipeOnMessageConfig,
  WipeOnMessageConfigSchema,
} from "./setupWipeOnMessage";
import { setupCheckUserOnPageVisibility } from "./setupCheckUserOnPageVisibility";
import { isValidIntervalDuration } from "./utils/isValidIntervalDuration";
import { triggerWipeWithDefaultURL } from "./utils/triggerWipeWithDefaultURL";
import { setupClickGating } from "./setupClickGating";
import { setupCheckUserPolling } from "./setupCheckUserPolling";
import { retry } from "./utils/retry";
import { logger } from "./utils/logger";

export const WipeConfigSchema = z
  .object({
    autoLogoutURL: z
      .preprocess(
        (val) => (typeof val === "string" ? new URL(val) : val),
        z.instanceof(URL)
      )
      .optional(),
    wipeOnMessage: WipeOnMessageConfigSchema.optional(),
    isCheckOnPageVisibility: z.boolean().optional(),
    isClickGating: z.boolean().optional(),
    checkUserPollTime: z.number().int().positive().optional(),
    fetchCurrentUser: z
      .function()
      .args()
      .returns(z.promise(z.union([z.string(), z.void()]))),
      verbose: z.boolean().optional(),
  })
  .optional();

export type WipeConfig = z.infer<typeof WipeConfigSchema>;

let isSetup = false;

/**
 * Initialize per-tab session checks and cross-tab logout syncing.
 *
 * - Registers a Service Worker (if `wipeOnMessage` is provided).
 * - Stores initial user from `fetchCurrentUser`.
 * - On visibility/focus, re-fetches user and triggers wipe on change.
 * - Polls `fetchCurrentUser` every `checkUserPollTime` ms.
 * - (Optional) Gates background-tab clicks until check passes.
 *
 * @param {Object} config
 * @param {URL} [config.autoLogoutURL]
 *   Destination URL to redirect when a wipe is triggered.
 *   Defaults to `/?autoLoggedOut=true`.
 *
 * @param {Object} [config.wipeOnMessage]
 *   Enable Service Worker–based 401/redirect detection.
 * @param {Object} config.wipeOnMessage.register
 *   - `scriptURL`: path to your Service Worker file
 *   - `scope`: URL scope that the Service Worker will control
 * @param {() => Promise<{status:number}>} config.wipeOnMessage.fetchStatus
 *   Called by the Service Worker to detect possible auth changes; return `{ status }`.
 *
 * @param {boolean} [config.isCheckOnPageVisibility]
 *   If `true`, re-checks user identity when the tab becomes visible.
 *
 * @param {boolean} [config.isClickGating]
 *   If `true`, gates clicks in background tabs until the user check passes.
 *
 * @param {number} [config.checkUserPollTime]
 *   Interval in milliseconds to check that `fetchCurrentUser` hasn’t changed.
 *
 * @param {() => Promise<string>} config.fetchCurrentUser
 *   Function that returns the current user identifier (e.g. user ID or email).
 *
 * @returns {Promise<void>}
 *   Resolves once setup is complete and (if used) the Service Worker is controlling the page.
 *
 * @example
 * ```js
 * await setupWipe({
 *   autoLogoutURL: new URL('/login?autoLoggedOut=true', location.origin),
 *   wipeOnMessage: {
 *     register: { scriptURL: '/sw.js', scope: '/' },
 *     fetchStatus: () => fetch('/api/auth/status')
 *                         .then(r => ({ status: r.status })),
 *   },
 *   isCheckOnPageVisibility: true,
 *   checkUserPollTime: 60000,
 *   fetchCurrentUser: () => fetch('/api/me')
 *                          .then(r => r.json())
 *                          .then(u => u.id),
 * });
 * ```
 */
export const setupWipe = async (config: WipeConfig) => {
  logger.setActive(config?.verbose);
  WipeConfigSchema.parse(config);
  if (!config) {
    console.warn("setupWipe() missing config arg, exiting early");
    return;
  }
  if (isSetup) {
    console.warn("Double call of setupWipe(), exiting early");
    return;
  }
  const triggerWipe = () => {
    triggerWipeWithDefaultURL(config?.autoLogoutURL);
  };

  const checkUser = await setupCheckUser({
    triggerWipe,
    fetchCurrentUser: () =>
      retry(() => config.fetchCurrentUser()).catch((error) => {
        console.error("Failed fetchCurrentUser: exiting early", error);
        // triggerWipe(); // This would cause an infinite loop
        return;
      }),
  });
  if (checkUser === undefined) {
    const errorMessage = "Failed to create checkUser(), exiting early";
    console.warn(errorMessage);
    return false;
  }

  if (config.wipeOnMessage) {
    await setupWipeOnMessage(triggerWipe, checkUser, config.wipeOnMessage);
  }
  if (config.isCheckOnPageVisibility) {
    await setupCheckUserOnPageVisibility(checkUser);
  }

  if (isValidIntervalDuration(config.checkUserPollTime)) {
    setupCheckUserPolling(checkUser, config.checkUserPollTime);
  }
  if (config.isClickGating) {
    setupClickGating(checkUser);
  }

  isSetup = true;
  return isSetup;
};
