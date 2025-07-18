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
export const splitURIBaseAndTerm = (rawString: string) => {
  try {
    const input = rawString.trim();
    const url = new URL(input);
    let [base, term] = [input, ""];
    if (url.hash !== "") {
      [base, term] = [`${url.origin}${url.pathname}`, url.hash.substring(1)];
    } else if (url.pathname !== "") {
      const split = url.pathname.split("/");
      [term, base] = [split.pop() ?? "", `${url.origin}${split.join("/")}`];
    }
    return [base, term];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`URI '${rawString}' is not valid, ${e}`);
    return [rawString, ""];
  }
};
