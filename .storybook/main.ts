import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-designs",
    {
      // Storybook 10's addon-docs default calls `import.meta.resolve(...)` for
      // `providerImportSource`, which returns a `file:///abs/path` URL. Vite
      // mangles it to `file://./node_modules/...` when rewriting for the
      // browser, breaking every MDX file. Override with the bare package
      // specifier so `@mdx-js/mdx` emits a normal import statement.
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            providerImportSource: "@storybook/addon-docs/mdx-react-shim",
          },
        },
      },
    },
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
