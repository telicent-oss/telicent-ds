import { parseRgb, toHex, relativeLuminance, contrastRatio } from "./color-contrast";

describe("parseRgb", () => {
  test("parses rgb into channels with a default alpha of 1", () => {
    expect(parseRgb("rgb(157, 221, 49)")).toEqual([157, 221, 49, 1]);
  });
  test("keeps the alpha channel from rgba", () => {
    expect(parseRgb("rgba(0, 0, 0, 0)")).toEqual([0, 0, 0, 0]);
  });
  test("falls back to opaque black for an unparseable value", () => {
    expect(parseRgb("")).toEqual([0, 0, 0, 1]);
  });
});

describe("toHex", () => {
  test("converts opaque rgb to uppercase hex", () => {
    expect(toHex("rgb(157, 221, 49)")).toBe("#9DDD31");
  });
  test("rounds fractional channels", () => {
    expect(toHex("rgb(138, 194, 43)")).toBe("#8AC22B");
  });
  test("returns transparent for a fully transparent colour", () => {
    expect(toHex("rgba(0, 0, 0, 0)")).toBe("transparent");
  });
});

describe("relativeLuminance", () => {
  test("is 0 for black and 1 for white", () => {
    expect(relativeLuminance("rgb(0, 0, 0)")).toBe(0);
    expect(relativeLuminance("rgb(255, 255, 255)")).toBeCloseTo(1, 5);
  });
});

describe("contrastRatio", () => {
  test("black on white is 21:1", () => {
    expect(contrastRatio("rgb(0, 0, 0)", "rgb(255, 255, 255)")).toBeCloseTo(21, 1);
  });
  test("identical colours are 1:1", () => {
    expect(contrastRatio("rgb(10, 20, 30)", "rgb(10, 20, 30)")).toBeCloseTo(1, 5);
  });
  test("matches the GeoGreen primary spec: black on the brand green", () => {
    expect(contrastRatio("rgb(0, 0, 0)", "rgb(157, 221, 49)")).toBeCloseTo(12.82, 2);
  });
  test("is symmetric regardless of argument order", () => {
    const forward = contrastRatio("rgb(0, 0, 0)", "rgb(157, 221, 49)");
    const reverse = contrastRatio("rgb(157, 221, 49)", "rgb(0, 0, 0)");
    expect(forward).toBeCloseTo(reverse, 10);
  });
});
