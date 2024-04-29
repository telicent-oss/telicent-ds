import { Parameters, Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import React from "react";
import TeliStyledEngineProvider from "../src/providers/TeliStyledEngineProvider/TeliStyledEngineProvider";
import { DocsContainer } from "./DocsContainer";
import ThemeWrapper from "./ThemeWrapper";
import "../src/main.css";
import "../src/assets/fonts/fontawesome/css/all.min.css";

const decorators = [
  (Story) => <TeliStyledEngineProvider>{Story()}</TeliStyledEngineProvider>,
  (Story) => <ThemeWrapper>{Story()}</ThemeWrapper>,
];

const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i, // Doesn't work. I think its a bug in storybook 7 - Alecs
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: "html",
    stylePreview: true,
    dark: { ...themes.dark, appBg: "#1D1D1D", appContentBg: "#1D1D1D" },
    light: { ...themes.light, appBg: "#F2F2F2", appContentBg: "#F2F2F2" },
  },
  a11y: {
    element: "#storybook-root",
    manual: false,
  },
  docs: { container: DocsContainer },
};

const preview: Preview = {
  decorators,
  parameters,
};

export default preview;
