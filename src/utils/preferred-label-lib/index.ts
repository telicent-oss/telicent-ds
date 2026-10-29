import { OntologyService } from "@telicent-oss/ontologyservice";
import { splitURIBaseAndTerm } from "../split-uri-base-and-term";
import { addSpaces } from "./add-spaces";
export const PreferredLabelCache = (function () {
  let cache: Record<string, string> | null = null;
  let initPromise: Promise<void> | null = null;
  /**
   * Initializes the preferred label cache using data fetched from the provided ontology service.
   *
   * @param {OntologyService} ontologyService - The service used to fetch preferred labels.
   *
   * @returns {Promise<void>} A promise that resolves when the cache initialization is complete.
   *
   * @async
   */
  const init = async (ontologyService: OntologyService): Promise<void> => {
    if (cache !== null) return;

    if (!initPromise) {
      initPromise = (async () => {
        const res = await ontologyService.getAllPreferredLabels();

        const preferredLabelLookup =
          res?.reduce((acc, item) => {
            const key = item.name.value;
            const value = item?.label?.value;
            acc[key] = value ?? "";
            return acc;
          }, {} as Record<string, string>) ?? {};

        cache = Object.freeze(preferredLabelLookup);
      })();
    }

    await initPromise;
  };

  /**
   * Retrieves a preferred label from the cache for a given value.
   *
   * If the cache has not been populated, a warning is logged.
   * If a label is not found, returns a human-friendly type derived
   * from the URI.
   *
   * @param {string} val - The value to retrieve the preferred label for.
   * @returns {string} - The preferred label or a human-friendly type if not found.
   */
  const get = (val: string) => {
    if (!val) return "";

    if (!cache) {
      console.warn("The cache has not been popuplated. Please run `preferredLabels.init(<ontologyservice> first");
      return "";
    }

    const label = cache[val];
    const [, humanFriendlyType] = splitURIBaseAndTerm(val);
    return !label || label === "" ? addSpaces(humanFriendlyType) : label;
  };

  /**
   * Retrieves a preferred label only if the cache holds one for the value.
   *
   * Unlike `get`, it never derives a name from the URI, so callers can fall
   * back to a label of their own.
   *
   * @param {string} val - The value to retrieve the preferred label for.
   * @returns {string | undefined} - The preferred label, or undefined on a miss
   * or before the cache is populated.
   */
  const lookup = (val: string): string | undefined => {
    if (!val || !cache) return undefined;
    return cache[val] || undefined;
  };

  return {
    init,
    get,
    lookup,
  };
})();
