import React from "react";
import type { Preview } from "@storybook/react";
import UIThemeProvider from "../src/theme/UIThemeProvider";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "DataNavy",
      toolbar: {
        title: "Theme",
        items: ["DataNavy", "dark"],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#F8F9F9" }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  decorators: [
    (Story, context) => <UIThemeProvider theme={context.globals.theme}>{Story()}</UIThemeProvider>,
  ],
};

export default preview;
