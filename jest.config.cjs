const path = require("node:path");

/** @type {import('jest').Config} */
module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/scripts"],
  testEnvironment: "jsdom",
  resetMocks: true,
  setupFiles: ["<rootDir>/jest.polyfills.cjs"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
    "<rootDir>/scripts/**/__tests__/**/*.{js,mjs,ts,tsx}",
    "<rootDir>/scripts/**/*.{spec,test}.{js,mjs,ts,tsx}",
  ],
  transform: {
    "^.+\\.m?[tj]sx?$": [
      "babel-jest",
      {
        presets: [
          ["@babel/preset-env", { targets: { node: "current" } }],
          [
            "@babel/preset-react",
            { runtime: "automatic", importSource: "@emotion/react" },
          ],
          "@babel/preset-typescript",
        ],
        plugins: [
          "@emotion/babel-plugin",
          // Lets babel-jest load the .mjs build scripts (scripts/*.mjs) as CJS.
          path.join(__dirname, "scripts/babel-plugin-import-meta.cjs"),
        ],
      },
    ],
    "^.+\\.css$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "\\.(woff|woff2|ttf|eot|jpg|jpeg|png|gif|webp)$":
      "<rootDir>/__mocks__/fileMock.ts",
    "mapbox-gl": "maplibre-gl",
    "^d3$": "<rootDir>/node_modules/d3/dist/d3.min.js",
    "^ol/(.*)$": "<rootDir>/__mocks__/ol/$1",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(mapbox-gl|@telicent-oss/ontologyservice|@telicent-oss/fe-auth-lib|@mui)/)",
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
    "!src/**/*.storyconfig.{js,jsx,ts,tsx}",
    "!src/**/*/*.d.ts",
  ],
};
