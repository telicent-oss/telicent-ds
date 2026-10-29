import { addSpaces } from "../add-spaces";

describe("addSpaces", () => {
  it.each([
    ["RegionOfSpace", "Region Of Space"],
    ["Person", "Person"],
    ["ISO3166", "ISO3166"],
    ["ISO639-2", "ISO639-2"],
    ["HTTPServer", "HTTPServer"],
    ["ISO3166_1Alpha_3", "ISO3166_1Alpha_3"],
  ])("spaces %s as %s, never splitting a run of capitals", (term, expected) => {
    expect(addSpaces(term)).toBe(expected);
  });
});
