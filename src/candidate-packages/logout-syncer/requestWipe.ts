import { autoLoggedOut } from "./utils/autoLoggedOut";

/**
 * Broadcast a manual sign-out to all open tabs.
 *
 * - Marks this tab as initiator to avoid double-firing.
 * - Posts `{ type: 'sign-out-request' }` to the Service Worker.
 * - Every controlled tab will receive `{ type: 'logout' }` and wipe.
 *
 * @returns {void}
 *
 * @example
 * ```js
 * import { requestWipe } from '@telicent-oss/ds';
 *
 * function onSignOutClick() {
 *   // clear session tokens here...
 *   requestWipe();
 * }
 * ```
 */
export const requestWipe = () => {
  if (navigator.serviceWorker?.controller) {
    autoLoggedOut.set(Date.now()); // as this page is signing out - block auto triggerWipe
    navigator.serviceWorker.controller.postMessage({ type: 'sign-out-request' });
  } else {
    console.error('Expected navigator.serviceWorker.controller, instead undefined; Thus cannot run requestWipe()')
  }
}