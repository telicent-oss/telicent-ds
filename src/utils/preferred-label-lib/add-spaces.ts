/**
 * Spaces out a camel-cased term for display. Splits only where a lowercase letter
 * meets a capital, so a run of capitals stays whole: "RegionOfSpace" becomes
 * "Region Of Space"; "ISO3166" and "HTTPServer" are unchanged.
 */
export const addSpaces = (str: string) => str.replace(/([a-z])([A-Z])/g, "$1 $2");
