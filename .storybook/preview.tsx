import React from "react";
import type { Preview } from "@storybook/react";
import UIThemeProvider from "../src/v1/theme/UIThemeProvider";
import { UIThemeSchema } from "../src/v1/theme/colors/theme-colors";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const selectedMode = context.globals.mode || "light";
      const selectedTheme = context.globals.theme || "GraphOrange";

      return (
        <UIThemeProvider dark={selectedMode === "dark"} theme={selectedTheme}>
          <Story />
        </UIThemeProvider>
      );
    },
  ],
  globalTypes: {
    mode: {
      description: "Global mode for components",
      toolbar: {
        title: "Mode",
        items: [{ value: "light", title: "Light" }, { value: "dark", title: "Dark" }],
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
    mode: "light",
    theme: "GraphOrange",
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
