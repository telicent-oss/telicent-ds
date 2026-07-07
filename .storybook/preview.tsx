import React from "react";
import type { Preview } from "@storybook/react-vite";
import UIThemeProvider from "../src/theme/UIThemeProvider";
import { UIThemeSchema } from "../src/theme/colors/theme-colors";
import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";

addons.setConfig({
  theme: themes.dark,
});

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const selectedMode = context.globals.mode || "light";
      const selectedTheme = context.globals.theme || "GraphOrange";
      const isDark = selectedMode !== "light";

      return (
        <UIThemeProvider dark={isDark} theme={selectedTheme}>
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

    backgrounds: {
      value: "dark"
    }
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: {
          name: "light",
          value: "#F5F5F5",
        },

        dark: {
          name: "dark",
          value: "#1D1D1D",
        }
      }
    },
  },
};

export default preview;
