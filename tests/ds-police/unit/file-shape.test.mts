import { describe, expect, it } from "vitest";
import {
  axesFor,
  detectShape,
  shapeVariant,
} from "../../../scripts/ds-police-src/core/file-shape.mts";

describe("detectShape", () => {
  it("detects component from JSX + react import", () => {
    const source = `import React from 'react';
export const Foo = () => <div />;`;
    expect(detectShape({ filePath: "Foo.tsx", source })).toBe("component");
  });

  it("detects hook from useFoo basename", () => {
    expect(detectShape({ filePath: "useFoo.ts", source: "" })).toBe("hook");
  });

  it("detects types-only from .types.tsx basename", () => {
    expect(detectShape({ filePath: "foo.types.ts", source: "" })).toBe(
      "types-only",
    );
  });

  it("falls back to util", () => {
    expect(
      detectShape({
        filePath: "format.ts",
        source: "export const upper = (s: string) => s.toUpperCase();",
      }),
    ).toBe("util");
  });
});

describe("axesFor", () => {
  it("component gets all 7 axes", () => {
    expect(axesFor("component")).toHaveLength(7);
  });
  it("hook gets a reduced set", () => {
    expect(axesFor("hook").length).toBeLessThan(7);
  });
  it("util gets a reduced set", () => {
    expect(axesFor("util").length).toBeLessThan(7);
  });
  it("types-only gets the smallest set", () => {
    expect(axesFor("types-only").length).toBeLessThanOrEqual(3);
  });
});

describe("shapeVariant", () => {
  it("encodes the shape into a stable variant string", () => {
    expect(shapeVariant("component")).toBe("shape:component");
    expect(shapeVariant("hook")).toBe("shape:hook");
  });
});
