import { z } from 'zod';

export declare const WipeConfigSchema: z.ZodOptional<z.ZodObject<{
    autoLogoutURL: z.ZodOptional<z.ZodEffects<z.ZodType<URL, z.ZodTypeDef, URL>, URL, unknown>>;
    wipeOnMessage: z.ZodOptional<z.ZodObject<{
        register: z.ZodObject<{
            scriptURL: z.ZodString;
            scope: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            scope: string;
            scriptURL: string;
        }, {
            scope: string;
            scriptURL: string;
        }>;
        fetchStatus: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodPromise<z.ZodObject<{
            status: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            status: number;
        }, {
            status: number;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        fetchStatus: (...args: unknown[]) => Promise<{
            status: number;
        }>;
        register: {
            scope: string;
            scriptURL: string;
        };
    }, {
        fetchStatus: (...args: unknown[]) => Promise<{
            status: number;
        }>;
        register: {
            scope: string;
            scriptURL: string;
        };
    }>>;
    isCheckOnPageVisibility: z.ZodOptional<z.ZodBoolean>;
    isClickGating: z.ZodOptional<z.ZodBoolean>;
    checkUserPollTime: z.ZodOptional<z.ZodNumber>;
    verbose: z.ZodOptional<z.ZodBoolean>;
    fetchCurrentUser: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodPromise<z.ZodUnion<[z.ZodString, z.ZodVoid]>>>;
}, "strip", z.ZodTypeAny, {
    fetchCurrentUser: (...args: unknown[]) => Promise<string | void>;
    autoLogoutURL?: URL | undefined;
    wipeOnMessage?: {
        fetchStatus: (...args: unknown[]) => Promise<{
            status: number;
        }>;
        register: {
            scope: string;
            scriptURL: string;
        };
    } | undefined;
    isCheckOnPageVisibility?: boolean | undefined;
    isClickGating?: boolean | undefined;
    checkUserPollTime?: number | undefined;
    verbose?: boolean | undefined;
}, {
    fetchCurrentUser: (...args: unknown[]) => Promise<string | void>;
    autoLogoutURL?: unknown;
    wipeOnMessage?: {
        fetchStatus: (...args: unknown[]) => Promise<{
            status: number;
        }>;
        register: {
            scope: string;
            scriptURL: string;
        };
    } | undefined;
    isCheckOnPageVisibility?: boolean | undefined;
    isClickGating?: boolean | undefined;
    checkUserPollTime?: number | undefined;
    verbose?: boolean | undefined;
}>>;
export type WipeConfig = z.infer<typeof WipeConfigSchema>;
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
 * @param {boolean} config.verbose
 *   Extra logging
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
export declare const setupWipe: (config: WipeConfig) => Promise<boolean | undefined>;
