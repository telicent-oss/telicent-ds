import { IconDefinition } from '@fortawesome/fontawesome-common-types';
type ResolveStatus = "ready" | "missing" | "loading" | "invalid";
interface ResolveResult {
    path?: string;
    status: ResolveStatus;
}
type FaIconLoader = (faIcon: string) => Promise<IconDefinition | undefined>;
/**
 * Register an icon loader (app or library).
 * Loaders are tried in registration order.
 */
export declare const registerFaIconLoader: (loader: FaIconLoader) => void;
export declare const resolveFaIconPath: (faIcon?: string | IconDefinition) => ResolveResult;
/**
 * Ensure an icon is loaded using the loader chain.
 */
export declare const ensureFaIconPath: (faIcon: string) => Promise<string | undefined>;
export {};
