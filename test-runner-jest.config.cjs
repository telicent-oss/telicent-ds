const { getJestConfig } = require("@storybook/test-runner");

// Config picked up automatically by `test-storybook`. Extends the default
// jest config and adds `jest-html-reporters` so the a11y sweep writes a
// browsable report to `a11y-report/index.html` alongside the terminal
// output. Open the file (or `yarn open-a11y-report`) to see per-story
// pass/fail with the full axe violation detail embedded.
module.exports = {
  ...getJestConfig(),
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./a11y-report",
        filename: "index.html",
        pageTitle: "@telicent-oss/ds — accessibility report",
        expand: true,
        hideIcon: true,
        openReport: false,
      },
    ],
  ],
};
