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
export declare const requestWipe: () => void;
