import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

const stories = [
  "../src/**/*.stories.mdx",
  "../src/**/*.stories.@(js|jsx|ts|tsx)",
];
const addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-a11y",
  "storybook-addon-themes",
  // "storybook-dark-mode",
  {
    name: "@storybook/addon-docs",
    options: {
      mdxPluginOptions: {
        mdxCompileOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
  },
];
const features = {
  storyStoreV7: true,
};
const docs = {
  autodocs: true,
};
const config: StorybookConfig = {
  stories,
  addons,
  docs,
  features,
  framework: "@storybook/react-vite",
};
export default config;
