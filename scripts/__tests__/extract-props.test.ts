import os from "node:os";
import fs from "node:fs";
import path from "node:path";

import {
  loadProps,
  defaultDtsPath,
  dedupeIntersection,
  truncateType,
} from "../extract-props.mjs";

// ─── helpers ────────────────────────────────────────────────────────────────

function writeDts(content: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "ds-ep-"));
  const dts = path.join(dir, "fixture.d.ts");
  fs.writeFileSync(dts, content);
  return dts;
}

// ─── loadProps unit tests ────────────────────────────────────────────────────

describe("loadProps – basic interface", () => {
  it("extracts props with correct type, required flag, sorted by name", () => {
    const dts = writeDts(
      `export interface CardProps {
         title: string;
         subtitle?: string;
         count: number;
       }`
    );
    const props = loadProps(dts).getPropsByComponent().get("Card");
    expect(props).toEqual([
      { name: "count", type: "number", required: true },
      { name: "subtitle", type: "string", required: false },
      { name: "title", type: "string", required: true },
    ]);
  });
});

describe("loadProps – intersection type alias", () => {
  it("merges members from both sides of A & B", () => {
    const dts = writeDts(
      `type Base = { id: string };
       type Extra = { label: string };
       export type BadgeProps = Base & Extra;`
    );
    const props = loadProps(dts).getPropsByComponent().get("Badge");
    expect(props).not.toBeUndefined();
    const names = (props ?? []).map((p) => p.name);
    expect(names).toContain("id");
    expect(names).toContain("label");
  });
});

describe("loadProps – interface inheritance (same-file base)", () => {
  // Base declared outside node_modules counts as "own", so base members are
  // included. The case where node_modules-inherited props are DROPPED cannot
  // be reproduced with a self-contained fixture.
  it("includes base interface members when base is declared in the same file", () => {
    const dts = writeDts(
      `interface Base { id: string; }
       export interface ButtonProps extends Base { label: string; }`
    );
    const props = loadProps(dts).getPropsByComponent().get("Button");
    expect(props).not.toBeUndefined();
    const names = (props ?? []).map((p) => p.name);
    expect(names).toContain("id");
    expect(names).toContain("label");
  });
});

describe("loadProps – literal union prop", () => {
  it("preserves the literal union verbatim", () => {
    const dts = writeDts(
      `export interface ChipProps { variant?: "filled" | "outlined"; }`
    );
    const props = loadProps(dts).getPropsByComponent().get("Chip");
    const variant = (props ?? []).find((p) => p.name === "variant");
    expect(variant).toEqual({
      name: "variant",
      type: '"filled" | "outlined"',
      required: false,
    });
  });
});

describe("loadProps – getValueExportNames", () => {
  it("includes const, function, class, and renamed re-export; excludes type-only Props", () => {
    const dts = writeDts(
      `export declare const Alpha: unknown;
       export declare function Beta(): void;
       export declare class Gamma {}
       type DeltaProps = { x: string };
       export { Alpha as Renamed };`
    );
    const names = loadProps(dts).getValueExportNames();
    expect(names.has("Alpha")).toBe(true);
    expect(names.has("Beta")).toBe(true);
    expect(names.has("Gamma")).toBe(true);
    expect(names.has("Renamed")).toBe(true);
    // DeltaProps is a type alias — no matching value export
    expect(names.has("Delta")).toBe(false);
  });
});

describe("loadProps – quoted/hyphenated prop names", () => {
  it('returns "aria-label" as the prop name', () => {
    const dts = writeDts(
      `export interface IconProps { "aria-label"?: string; size: number; }`
    );
    const props = loadProps(dts).getPropsByComponent().get("Icon");
    const aria = (props ?? []).find((p) => p.name === "aria-label");
    expect(aria).toEqual({ name: "aria-label", type: "string", required: false });
  });
});

describe("loadProps – generic callback prop with =>", () => {
  it("preserves arrow type including the > in =>", () => {
    const dts = writeDts(
      `export interface SliderProps {
         onChange?: (e: Event) => void;
         value: number;
       }`
    );
    const props = loadProps(dts).getPropsByComponent().get("Slider");
    const onChange = (props ?? []).find((p) => p.name === "onChange");
    expect(onChange).not.toBeUndefined();
    expect(onChange?.type).toContain("=>");
    expect(onChange?.required).toBe(false);
  });
});

describe("loadProps – missing file throws", () => {
  it('throws an Error with "not found" when path does not exist', () => {
    expect(() => loadProps("/nonexistent/path/fixture.d.ts")).toThrow(/not found/);
  });
});

// ─── dedupeIntersection ──────────────────────────────────────────────────────

describe("dedupeIntersection", () => {
  it("collapses exact duplicate members", () => {
    expect(dedupeIntersection("string & string")).toBe("string");
  });

  it("keeps the longest signature for the MUI bivariance case", () => {
    // Two distinct arrow signatures; longest wins.
    const input = "(a: MouseEvent) => void & (a: MouseEvent, extra: unknown) => void";
    const result = dedupeIntersection(input);
    expect(result).toBe("(a: MouseEvent, extra: unknown) => void");
  });

  it("returns a plain non-duplicate string unchanged", () => {
    expect(dedupeIntersection("string | number")).toBe("string | number");
  });

  it("returns a two-member non-duplicate intersection unchanged", () => {
    expect(dedupeIntersection("A & B")).toBe("A & B");
  });
});

// ─── truncateType ────────────────────────────────────────────────────────────

describe("truncateType", () => {
  it("returns a string shorter than max unchanged", () => {
    expect(truncateType("string", 20)).toBe("string");
  });

  it("returns a string exactly at max unchanged", () => {
    const s = "a".repeat(20);
    expect(truncateType(s, 20)).toBe(s);
  });

  it("cuts an over-length string at a token boundary and appends \" ...\"", () => {
    const s = '"alpha" | "beta" | "gamma" | "delta"';
    const result = truncateType(s, 20);
    expect(result.endsWith(" ...")).toBe(true);
    expect(result.length).toBeLessThan(s.length);
    // Must not end mid-identifier
    expect(result).not.toMatch(/[a-z]\.\.\.$/);
  });
});

// ─── integration (real dist/export.d.ts) ─────────────────────────────────────

const hasDts = fs.existsSync(defaultDtsPath);

(hasDts ? describe : describe.skip)("integration – real build output", () => {
  it("loads at least one component", () => {
    const map = loadProps(defaultDtsPath).getPropsByComponent();
    expect(map.size).toBeGreaterThan(0);
  });

  it("contains no default_N alias tokens in any rendered type", () => {
    const map = loadProps(defaultDtsPath).getPropsByComponent();
    for (const [, props] of map) {
      for (const p of props) {
        expect(p.type).not.toMatch(/default_\d+/);
      }
    }
  });

  it('contains no absolute import("...") qualifiers in any rendered type', () => {
    const map = loadProps(defaultDtsPath).getPropsByComponent();
    for (const [, props] of map) {
      for (const p of props) {
        expect(p.type).not.toContain('import("');
      }
    }
  });
});
