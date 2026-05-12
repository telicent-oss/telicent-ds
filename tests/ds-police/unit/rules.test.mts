import { describe, expect, it } from "vitest";
import { groupByAxis, runRules } from "../../../scripts/ds-police-src/core/rules.mts";

describe("runRules", () => {
  it("flags Omit<XProps,...>", () => {
    const matches = runRules({
      source: "type ButtonProps = Omit<MUIButtonProps, 'variant'>;",
      shape: "component",
    });
    const ids = matches.map((m) => m.finding.rule_id);
    expect(ids).toContain("api_surface/no-narrow");
  });

  it("flags custom style? prop", () => {
    const matches = runRules({
      source: `interface P {
  style?: 'base';
  size: number;
}`,
      shape: "component",
    });
    const ids = matches.map((m) => m.finding.rule_id);
    expect(ids).toContain("api_surface/no-style-prop");
  });

  it("flags hex colour literal", () => {
    const matches = runRules({
      source: "const c = #ffaabb;",
      shape: "component",
    });
    expect(
      matches.some((m) => m.finding.rule_id === "theming/no-hex-literal"),
    ).toBe(true);
  });

  it("flags inline JSX style", () => {
    const matches = runRules({
      source: `const X = () => <div style={{ color: 'red' }} />;`,
      shape: "component",
    });
    expect(
      matches.some((m) => m.finding.rule_id === "theming/no-inline-style"),
    ).toBe(true);
  });

  it("flags missing forwardRef in components with JSX", () => {
    const matches = runRules({
      source: `import React from 'react'; export const X = () => <div />;`,
      shape: "component",
    });
    expect(
      matches.some((m) => m.finding.rule_id === "composability/forward-ref"),
    ).toBe(true);
  });

  it("does not flag forwardRef rule when it's used", () => {
    const matches = runRules({
      source: `import { forwardRef } from 'react'; export const X = forwardRef((p, ref) => <div ref={ref} />);`,
      shape: "component",
    });
    expect(
      matches.some((m) => m.finding.rule_id === "composability/forward-ref"),
    ).toBe(false);
  });

  it("does not flag forwardRef on hooks", () => {
    const matches = runRules({
      source: `export const useFoo = () => 1;`,
      shape: "hook",
    });
    expect(
      matches.some((m) => m.finding.rule_id === "composability/forward-ref"),
    ).toBe(false);
  });

  it("groupByAxis groups findings", () => {
    const m = runRules({
      source: `type P = Omit<XProps, 'a'>; const x = #fff000;`,
      shape: "component",
    });
    const grouped = groupByAxis(m);
    expect(grouped.api_surface?.length).toBeGreaterThan(0);
    expect(grouped.theming?.length).toBeGreaterThan(0);
  });
});
