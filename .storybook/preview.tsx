// Load the DS's own stylesheet so `:root` custom properties (e.g. `--teli-app-color`)
// resolve inside the preview iframe. Without this, components that read the accent
// via `rgb(var(--teli-app-color))` fall back to `currentColor` and render as black.
import "../src/index.css";

import { useTheme } from "@mui/material/styles";
import type { Preview } from "@storybook/react-vite";
import React from "react";

import { UIThemeSchema } from "../src/theme/colors/theme-colors";
import UIThemeProvider from "../src/theme/UIThemeProvider";

// Reads `background.default` from the resolved theme so axe-core's color-contrast
// rule measures against the real background each theme × mode combo renders —
// not a hardcoded hex. Previous hardcode (`#F5F5F5` / `#1D1D1D`) matched only 4
// of 10 theme × mode combos and silently passed stories that would fail contrast
// on GeoGreen dark (`#080808`) or GraphOrange light (`#F0F2F5`). Must sit inside
// `UIThemeProvider` so `useTheme()` resolves. See docs/accessibility.md § Known gaps.
const ThemedCanvas: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();
  // Inject a stylesheet into the preview iframe so <html> and <body> share
  // the themed background. Needed because Storybook's own `.sb-show-main`
  // / preview-body styles paint the outer area white at a specificity that
  // beats a plain inline style on `document.body`. `!important` makes the
  // override reliable across Storybook versions. The canvas div still
  // paints its own background so a11y color-contrast measurement is
  // unchanged.
  React.useEffect(() => {
    const styleId = "ds-themed-canvas-body-bg";
    let style = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement("style");
      style.id = styleId;
      document.head.appendChild(style);
    }
    // Covers both views:
    //  - standalone canvas: html / body / .sb-show-main
    //  - autodocs preview boxes: .sbdocs-preview / .docs-story / .innerZoomElementWrapper
    // (Leaves the surrounding docs-page chrome — titles, prop tables, prose —
    // untouched so only the actual story preview area picks up the theme.)
    style.textContent = `
      html, body, .sb-show-main,
      .sbdocs-preview, .docs-story, .innerZoomElementWrapper {
        background-color: ${theme.palette.background.default} !important;
      }
    `;
    return () => {
      style?.remove();
    };
  }, [theme.palette.background.default]);
  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        padding: 16,
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const selectedMode = context.globals.mode || "light";
      const selectedTheme = context.globals.theme || "GraphOrange";
      const isDark = selectedMode !== "light";

      return (
        <UIThemeProvider dark={isDark} theme={selectedTheme}>
          <ThemedCanvas>
            <Story />
          </ThemedCanvas>
        </UIThemeProvider>
      );
    },
  ],
  globalTypes: {
    mode: {
      description: "Global mode for components",
      toolbar: {
        title: "Mode",
        items: [
          { value: "dark", title: "Dark" },
          { value: "light", title: "Light" },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: "Global UI theme for components",
      toolbar: {
        title: "Theme",
        items: UIThemeSchema.options,
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    mode: "dark",
    theme: "GraphOrange",
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // The canvas background is painted by the wrapper div in the decorator
    // above (driven by the Mode toolbar), so Storybook's built-in Backgrounds
    // toolbar is disabled to avoid a redundant dark/light control.
    backgrounds: { disable: true },
    a11y: {
      // `error` surfaces axe violations as full Jest test failures, which
      // the HTML reporter captures with per-story detail (yarn test:a11y →
      // a11y-report/index.html). `todo` would log violations as warnings
      // only and leave the HTML showing all tests passing. Trade-off:
      // non-zero exit code locally and in CI until the baseline is clean —
      // revisit before wiring into a CI gate.
      test: "error",
      // Target WCAG 2.2 AA — see docs/accessibility.md and docs/adr/0001-wcag-2.2-aa.md
      options: {
        runOnly: {
          type: "tag",
          values: [
            "wcag2a",
            "wcag2aa",
            "wcag21a",
            "wcag21aa",
            "wcag22aa",
            "best-practice",
          ],
        },
        // Story-in-isolation is not a page; these rules would fire on every story with no real signal.
        // Uses object form (per-run override) — not config.rules — because runOnly.tags forces
        // best-practice rules to run and would override the config.rules array.
        rules: {
          "landmark-one-main": { enabled: false },
          "page-has-heading-one": { enabled: false },
          region: { enabled: false },
          "html-has-lang": { enabled: false },
          "document-title": { enabled: false },
          "landmark-no-duplicate-main": { enabled: false },
        },
      },
    },
  },
};

export default preview;
