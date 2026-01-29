/* eslint-disable @typescript-eslint/no-explicit-any */

// IMPORTANT: let the test runner pick up __mocks__
jest.mock("ol/style");
jest.mock("ol/Feature");
jest.mock("ol/geom/Point");

import { getGeneratedOlIcon, getPathBBox, sanitizeFaSvg } from "../markers";

const decodeSvg = (src: string) => decodeURIComponent(src.split(",")[1]);

describe("marker icon generation (with __mocks__)", () => {
  const SIMPLE_PATH = "M10 10 H 20 V 20 H 10 Z";

  describe("fallback text marker", () => {
    it("uses fallback SVG when innerSvg is missing", () => {
      const style = getGeneratedOlIcon({
        fallbackText: "A",
        backgroundColor: "#123456",
        color: "#ffffff",
      }) as any;

      expect(style).toHaveProperty("props");
      expect(style.props).toHaveProperty("image");
      expect(style.props.image).toHaveProperty("props");

      const decoded = decodeSvg(style.props.image.props.src);
      expect(decoded).toContain("<svg");
      expect(decoded).toContain(">A<");
      expect(decoded).toContain('font-size="8"');
    });
  });

  describe("markerType safety", () => {
    it("defaults to pin when markerType is undefined", () => {
      const style = getGeneratedOlIcon({}) as any;

      expect(style.props.image.props.scale).toBe(1.5);
    });

    it("falls back safely when markerType is invalid", () => {
      const style = getGeneratedOlIcon({
        markerType: "triangle" as any,
      }) as any;

      expect(style.props.image.props.scale).toBe(1.5);
    });
  });

  describe("marker scaling rules", () => {
    it("scales pin markers to 1.5", () => {
      const style = getGeneratedOlIcon({
        markerType: "pin",
      }) as any;

      expect(style.props.image.props.scale).toBe(1.5);
    });

    it.skip("does not scale circle markers", () => {
      const style = getGeneratedOlIcon({
        markerType: "circle",
      }) as any;

      expect(style.props.image.props.scale).toBe(1.0);
    });

    it.skip("does not scale icon-only markers", () => {
      const style = getGeneratedOlIcon({
        markerType: "icon",
      }) as any;

      expect(style.props.image.props.scale).toBe(1.0);
    });
  });

  describe("innerSvg handling", () => {
    it("injects raw innerSvg path into SVG", () => {
      const style = getGeneratedOlIcon({
        markerType: "circle",
        innerSvg: SIMPLE_PATH,
      }) as any;
      const decoded = decodeSvg(style.props.image.props.src);
      expect(decoded).toContain(SIMPLE_PATH);
    });

    it("does not double-wrap innerSvg with <g> elements", () => {
      const style = getGeneratedOlIcon({
        markerType: "pin",
        innerSvg: SIMPLE_PATH,
      }) as any;

      const decoded = decodeSvg(style.props.image.props.src);
      const groupCount = (decoded.match(/<g/g) || []).length;
      expect(groupCount).toBe(1);
    });
  });

  describe("icon caching", () => {
    it("returns identical src for identical styles", () => {
      const styleA = getGeneratedOlIcon({
        markerType: "circle",
      }) as any;

      const styleB = getGeneratedOlIcon({
        markerType: "circle",
      }) as any;

      expect(styleA.props.image.props.src).toBe(styleB.props.image.props.src);
    });
  });

  describe("sanitizeFaSvg", () => {
    it("extracts d attribute from a <path> element", () => {
      const svg = `
      <svg>
        <path d="M10 10 L20 20 Z" fill="red" />
      </svg>
    `;

      const d = sanitizeFaSvg(svg);
      expect(d).toBe("M10 10 L20 20 Z");
    });

    it("returns raw path data when given path commands only", () => {
      const raw = "M0 0 L10 0 L10 10 Z";

      const d = sanitizeFaSvg(raw);
      expect(d).toBe(raw);
    });

    it("throws when no path data can be found", () => {
      const svg = `<svg><circle cx="5" cy="5" r="2" /></svg>`;

      expect(() => sanitizeFaSvg(svg)).toThrow("No path data found in SVG");
    });
  });

  describe("getPathBBox", () => {
    it("computes bounding box for a simple rectangle path", () => {
      const d = "M0 0 L10 0 L10 20 L0 20 Z";

      const bbox = getPathBBox(d);

      expect(bbox.minX).toBe(0);
      expect(bbox.minY).toBe(0);
      expect(bbox.maxX).toBe(10);
      expect(bbox.maxY).toBe(20);
      expect(bbox.width).toBe(10);
      expect(bbox.height).toBe(20);
    });

    it("handles paths with negative coordinates", () => {
      const d = "M-10 -5 L5 -5 L5 15 L-10 15 Z";

      const bbox = getPathBBox(d);

      expect(bbox.minX).toBe(-10);
      expect(bbox.minY).toBe(-5);
      expect(bbox.maxX).toBe(5);
      expect(bbox.maxY).toBe(15);
      expect(bbox.width).toBe(15);
      expect(bbox.height).toBe(20);
    });

    it("handles paths with curves (x1/x2 control points)", () => {
      const d = "M0 0 C10 20, 20 10, 30 0";

      const bbox = getPathBBox(d);

      expect(bbox.minX).toBe(0);
      expect(bbox.minY).toBe(0);
      expect(bbox.maxX).toBe(30);
      expect(bbox.maxY).toBe(20);
    });
  });
});
