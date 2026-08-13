import React from "react";
import type { Preview } from "@storybook/react-vite";
import UIThemeProvider from "../src/theme/UIThemeProvider";
import { UIThemeSchema } from "../src/theme/colors/theme-colors";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const selectedMode = context.globals.mode || "light";
      const selectedTheme = context.globals.theme || "GraphOrange";
      const isDark = selectedMode !== "light";

      return (
        <UIThemeProvider dark={isDark} theme={selectedTheme}>
          {/* Explicit background so axe-core's color-contrast rule can determine
              the background reliably (see docs/accessibility.md § Known gaps). */}
          <div
            style={{
              backgroundColor: isDark ? "#1D1D1D" : "#F5F5F5",
              padding: 16,
              minHeight: "100vh",
            }}
          >
            <Story />
          </div>
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
