import { splitURIBaseAndTerm } from "../index";

describe("Split URI Base and Term", () => {
  it("should split urls with hashes", () => {
    expect(splitURIBaseAndTerm("http://example.com/foo#Bar")).toEqual([
      "http://example.com/foo",
      "Bar",
    ]);
  });

  it("should split uris with slashes", () => {
    expect(splitURIBaseAndTerm("http://example.com/foo/Bar")).toEqual([
      "http://example.com/foo",
      "Bar",
    ]);
  });

  it("should return a base and empty term if the uri is invalid", () => {
    const warnSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    expect(splitURIBaseAndTerm("InvalidURI")).toEqual(["InvalidURI", ""]);
    expect(warnSpy).toHaveBeenCalledWith(
      "URI 'InvalidURI' is not valid, TypeError: Invalid URL: InvalidURI"
    );
  });
});
