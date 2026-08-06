import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-designs",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "mapbox-gl": "maplibre-gl",
        },
      },
    });
  },
};
export default config;
