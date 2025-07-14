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
 * @param {string} string - The URI to split.
 * @returns {[string, string]} A tuple where the first element is the base and the second is the term.
 */
export const splitURIBaseAndTerm = (string: string) => {
  try {
    const url = new URL(string);
    let [base, term] = [string, ""];
    if (url.hash !== "") {
      [base, term] = [`${url.origin}${url.pathname}`, url.hash.substring(1)];
    } else if (url.pathname !== "") {
      const split = url.pathname.split("/");
      [term, base] = [split.pop() ?? "", `${url.origin}${split.join("/")}`];
    }
    return [base, term];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`URI '${string}' is not valid, ${e}`);
    return [string, ""];
  }
};
