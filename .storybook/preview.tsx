import React from "react";
import type { Preview } from "@storybook/react";
import UIThemeProvider from "../src/v1/theme/UIThemeProvider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <UIThemeProvider theme="DataNavy">
        <Story />
      </UIThemeProvider>
    ),
  ],
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
