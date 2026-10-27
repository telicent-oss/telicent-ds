// ESLint flat config. The shared block below is a copy of the
// telicent-apps shared config (packages/eslint-config/index.js) so the
// design system and the apps lint against the same rules. Keep it in
// sync with that file; put ds-specific changes in the blocks after it.
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import jestDomPlugin from "eslint-plugin-jest-dom";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import globals from "globals";
import tseslint from "typescript-eslint";

const sharedConfig = tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    plugins: {
      "simple-import-sort": simpleImportSortPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },

  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: globals.browser,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },

  {
    files: [
      "**/*.{test,spec}.{ts,tsx,js,jsx}",
      "**/__tests__/**/*.{ts,tsx,js,jsx}",
    ],
    plugins: {
      "testing-library": testingLibraryPlugin,
      "jest-dom": jestDomPlugin,
    },
    languageOptions: {
      globals: { ...globals.jest },
    },
    rules: {
      ...testingLibraryPlugin.configs.dom.rules,
      ...jestDomPlugin.configs.recommended.rules,
    },
  },

  {
    // Jest setup/mock files run in the jest environment but don't match the
    // *.test / __tests__ globs above, so grant them the jest globals too.
    files: [
      "**/setupTests.{ts,tsx,js,jsx}",
      "**/setupFiles.{ts,tsx,js,jsx}",
      "**/setupFilesAfterEnv.{ts,tsx,js,jsx}",
      "**/__mocks__/**/*.{ts,tsx,js,jsx}",
    ],
    languageOptions: {
      globals: { ...globals.jest },
    },
  },

  prettierConfig,
);

export default [
  ...sharedConfig,
  {
    ignores: [
      "storybook-static/**",
      "llms/**",
      "a11y-report/**",
      "public/**",
      "**/*.cjs",
    ],
  },
  {
    // Storybook `render` functions are components in practice, but they
    // are lowercase object properties, so rules-of-hooks can't tell. This
    // pattern doesn't exist in telicent-apps, which has no stories.
    files: ["**/*.stories.{ts,tsx,js,jsx}"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },
];
