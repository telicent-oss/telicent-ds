/**
 * Splits a URI into its base and terminal segment.
 *
 * Handles both hash (`#`) and slash (`/`) based URIs.
 * For example:
 * - "http://example.com/foo#Bar" → ["http://example.com/foo", "Bar"]
 * - "http://example.com/foo/Bar" → ["http://example.com/foo", "Bar"]
 *
 * If the URI is invalid, returns the original string as the base and an empty term.
 *
 * @param {string} rawString - The URI to split.
 * @returns {[string, string]} A tuple where the first element is the base and the second is the term.
 */
export declare const splitURIBaseAndTerm: (rawString: string) => string[];
