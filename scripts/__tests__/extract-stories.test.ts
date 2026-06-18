import os from "node:os";
import fs from "node:fs";
import path from "node:path";

import {
  parseStoryFile,
  loadStories,
  resolveLinkBases,
  slug,
} from "../extract-stories.mjs";

const OPTS = { root: "/repo", srcDir: "/repo/src" };

// ── helpers ────────────────────────────────────────────────────────────────

const parse = (lines: string[], fileName = "/repo/src/Widget.stories.tsx") =>
  parseStoryFile(lines.join("\n"), fileName, OPTS);

// ── 1. satisfies Meta unwrap ───────────────────────────────────────────────

describe("satisfies Meta unwrap", () => {
  it("reads title and defaultArgs from `const meta = {...} satisfies Meta<...>`", () => {
    const c = parse([
      `const meta = { title: "Ui/Widget", args: { size: 3 } } satisfies Meta<unknown>;`,
      `export default meta;`,
      `export const Default = {};`,
    ]);
    expect(c?.title).toBe("Ui/Widget");
    expect(c?.defaultArgs).toEqual(["size=3"]);
  });
});

// ── 2. as Meta unwrap ──────────────────────────────────────────────────────

describe("as Meta unwrap", () => {
  it("reads title and defaultArgs from `const meta = {...} as Meta<...>`", () => {
    const c = parse([
      `const meta = { title: "Ui/Widget", args: { label: "hello" } } as Meta<unknown>;`,
      `export default meta;`,
      `export const Default = {};`,
    ]);
    expect(c?.title).toBe("Ui/Widget");
    expect(c?.defaultArgs).toEqual([`label="hello"`]);
  });
});

// ── 3. story export name filtering ─────────────────────────────────────────

describe("story export name filtering", () => {
  it("captures UpperCase exports and ignores lowercase and non-exported", () => {
    const c = parse([
      `const meta = { title: "Ui/Widget" };`,
      `export default meta;`,
      `export const Primary = {};`,
      `export const secondary = {};`,
      `const NotExported = {};`,
    ]);
    const names = c?.stories.map((s) => s.name);
    expect(names).toContain("Primary");
    expect(names).not.toContain("secondary");
    expect(names).not.toContain("NotExported");
  });
});

// ── 4. scalar args render ──────────────────────────────────────────────────

describe("scalar args rendering", () => {
  it("renders string/number/boolean/null/identifier as name=value", () => {
    const c = parse([
      `const meta = { title: "Ui/Widget" };`,
      `export default meta;`,
      `export const AllScalars = { args: { label: "hi", count: 3, disabled: true, x: null, options: OPTIONS } };`,
    ]);
    expect(c?.stories[0].args).toEqual([
      `label="hi"`,
      `count=3`,
      `disabled=true`,
      `x=null`,
      `options=OPTIONS`,
    ]);
  });
});

// ── 5. function-valued args dropped (key regression) ──────────────────────

describe("function-valued args dropped", () => {
  it("drops call expression (fn()), arrow function, and regular function args", () => {
    const c = parse([
      `import { fn } from "@storybook/test";`,
      `const meta = { title: "Ui/Widget" };`,
      `export default meta;`,
      `export const WithHandlers = { args: { onClick: fn(), onChange: () => {}, data: someFn() } };`,
    ]);
    const args = c?.stories[0].args ?? [];
    expect(args).not.toContain(expect.stringMatching(/onClick/));
    expect(args).not.toContain(expect.stringMatching(/onChange/));
    expect(args).not.toContain(expect.stringMatching(/data/));
    expect(args).toHaveLength(0);
  });
});

// ── 6. undefined dropped; array, object, JSX rendered ─────────────────────

describe("special arg types", () => {
  it("drops undefined, renders array as […], object as {…}, JSX as <jsx>", () => {
    const c = parse([
      `const meta = { title: "Ui/Widget" };`,
      `export default meta;`,
      `export const Misc = { args: { gone: undefined, list: [1,2], obj: { a: 1 }, el: <div /> } };`,
    ]);
    const args = c?.stories[0].args ?? [];
    expect(args).not.toContain(expect.stringMatching(/gone/));
    expect(args).toContain("list=[…]");
    expect(args).toContain("obj={…}");
    expect(args).toContain("el=<jsx>");
  });
});

// ── 7. no stories → null ──────────────────────────────────────────────────

describe("no stories exported", () => {
  it("returns null when no UpperCase export const stories exist", () => {
    const result = parse([
      `const meta = { title: "Ui/Widget" };`,
      `export default meta;`,
      `export const helper = () => null;`,
    ]);
    expect(result).toBeNull();
  });
});

// ── 8. title fallback ─────────────────────────────────────────────────────

describe("title fallback", () => {
  it("falls back to `Component Library/<ComponentIdentifier>` when no title but component present", () => {
    const c = parse([
      `const meta = { component: MyWidget };`,
      `export default meta;`,
      `export const Default = {};`,
    ]);
    expect(c?.title).toBe("Component Library/MyWidget");
  });

  it("falls back to `Component Library/<basename>` when neither title nor component", () => {
    const c = parse(
      [
        `const meta = {};`,
        `export default meta;`,
        `export const Default = {};`,
      ],
      "/repo/src/SpecialWidget.stories.tsx"
    );
    expect(c?.title).toBe("Component Library/SpecialWidget");
  });
});

// ── 9. URL construction ───────────────────────────────────────────────────

describe("URL construction", () => {
  it("builds docsUrl, sourceUrl, and story url from custom bases", () => {
    const c = parseStoryFile(
      [
        `const meta = { title: "Buttons/Primary" };`,
        `export default meta;`,
        `export const Default = {};`,
      ].join("\n"),
      "/repo/src/Button.stories.tsx",
      {
        root: "/repo",
        srcDir: "/repo/src",
        storybookBase: "https://storybook.example.com",
        ghBlobBase: "https://github.com/org/repo/blob/main",
      }
    );
    expect(c?.docsUrl).toBe(
      `https://storybook.example.com/?path=/docs/${slug("Buttons/Primary")}--docs`
    );
    expect(c?.sourceUrl).toBe(
      "https://github.com/org/repo/blob/main/src/Button.stories.tsx"
    );
    expect(c?.stories[0].url).toBe(
      `https://storybook.example.com/?path=/story/${slug("Buttons/Primary")}--${slug("Default")}`
    );
  });
});

// ── 10. resolveLinkBases branch handling ──────────────────────────────────

describe("resolveLinkBases", () => {
  it("main → site root storybookBase, ghBlobBase ends /blob/main", () => {
    const { storybookBase, ghBlobBase } = resolveLinkBases("main");
    expect(storybookBase).toBe("https://telicent-oss.github.io/telicent-ds");
    expect(ghBlobBase).toMatch(/\/blob\/main$/);
  });

  it("feature branch → storybookBase ends with branch name, ghBlobBase ends /blob/<branch>", () => {
    const { storybookBase, ghBlobBase } = resolveLinkBases("feat/x");
    expect(storybookBase).toMatch(/\/feat\/x$/);
    expect(ghBlobBase).toMatch(/\/blob\/feat\/x$/);
  });
});

// ── 11. slug edge cases ───────────────────────────────────────────────────

describe("slug", () => {
  it("lowercases and replaces non-alphanumerics with hyphens", () => {
    expect(slug("Hello World")).toBe("hello-world");
  });

  it("collapses multiple separators", () => {
    expect(slug("Buttons/Primary")).toBe("buttons-primary");
  });

  it("trims leading and trailing separators", () => {
    expect(slug("  /Leading Trailing/ ")).toBe("leading-trailing");
  });

  it("handles mixed case with slashes", () => {
    expect(slug("Component Library/MyWidget")).toBe(
      "component-library-mywidget"
    );
  });
});

// ── 12. spread in args ────────────────────────────────────────────────────

describe("spread in args", () => {
  it("only captures PropertyAssignment entries; spread elements are silently dropped", () => {
    // argsOf filters with ts.isPropertyAssignment — spreads are SpreadAssignment
    // nodes, not PropertyAssignment, so they are silently ignored.
    const c = parse([
      `const Base = { args: { variant: "base" } };`,
      `const meta = { title: "Ui/Widget" };`,
      `export default meta;`,
      `export const Extended = { args: { ...Base.args, variant: "x" } };`,
    ]);
    // Only the non-spread PropertyAssignment survives.
    expect(c?.stories[0].args).toEqual([`variant="x"`]);
  });
});

// ── 13. duplicate titles in loadStories ───────────────────────────────────

describe("loadStories — duplicate title collision", () => {
  it("last-write wins in the Map: second file with same title overwrites the first", () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "ds-stories-"));

    const storyA = [
      `const meta = { title: "Shared/Title" };`,
      `export default meta;`,
      `export const StoryA = {};`,
    ].join("\n");

    const storyB = [
      `const meta = { title: "Shared/Title" };`,
      `export default meta;`,
      `export const StoryB = {};`,
    ].join("\n");

    fs.writeFileSync(path.join(tmpDir, "a.stories.tsx"), storyA);
    fs.writeFileSync(path.join(tmpDir, "b.stories.tsx"), storyB);

    const { components, getStoriesByTitle } = loadStories(tmpDir, {
      root: tmpDir,
    });
    const map = getStoriesByTitle();

    // Both parse, so two component entries exist.
    expect(components).toHaveLength(2);
    // Map keyed by title: the title is duplicated so the second entry in the
    // components array (sorted alphabetically) wins.
    expect(map.size).toBe(1);
    expect(map.has("Shared/Title")).toBe(true);
  });
});
