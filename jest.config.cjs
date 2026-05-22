/** @type {import('jest').Config} */
module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  resetMocks: true,
  setupFiles: ["<rootDir>/jest.polyfills.cjs"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  transform: {
    "^.+\\.(t|j)sx?$": [
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
        plugins: ["@emotion/babel-plugin"],
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
