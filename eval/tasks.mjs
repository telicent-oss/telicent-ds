// Tasks for the @telicent-oss/ds llms.txt outcome eval. See README.md.
//
// Each task is a realistic "build X with the DS" request. The prompt is handed
// to a coding agent in two conditions: WITH the generated llms-full.txt as its
// only context, and WITHOUT it (baseline = the model's own knowledge of a
// MUI-based library). score.mjs typechecks each answer against the real DS
// types and runs the `usage` checks below (idiomatic-DS, beyond "it compiles").
//
// The checks are deliberately DS-specific: each has a correct answer that
// differs from generic MUI, so a with-doc/without-doc gap measures the doc's
// value rather than the model's React fluency.

const importsFromDs = (name) =>
  new RegExp(
    `import\\s*\\{[^}]*\\b${name}\\b[^}]*\\}\\s*from\\s*["']@telicent-oss/ds["']`
  );

export const TASKS = [
  {
    id: "button",
    prompt:
      'Build a single self-contained .tsx file. Export a React component that ' +
      'renders a primary call-to-action button labelled "Save" that calls an ' +
      "`onSave: () => void` prop when clicked.",
    usage: [
      { name: "Button imported from DS", test: (s) => importsFromDs("Button").test(s) },
      {
        name: 'DS variant ("primary"…), not MUI ("contained"/"outlined")',
        test: (s) =>
          /variant\s*=\s*["'](base|text|primary|secondary|tertiary)["']/.test(s) &&
          !/variant\s*=\s*["'](contained|outlined)["']/.test(s),
      },
    ],
  },
  {
    id: "textfield",
    prompt:
      "Build a single self-contained .tsx file. Export a React component with a " +
      'text input for an email address: a visible label "Email", controlled ' +
      "value/onChange, and an inline error message shown when the value is not a " +
      "valid email.",
    usage: [
      { name: "TextField imported from DS", test: (s) => importsFromDs("TextField").test(s) },
      {
        name: "DS errorText for the inline error (not MUI helperText/error)",
        test: (s) => /errorText\s*=/.test(s),
      },
    ],
  },
  {
    id: "select",
    prompt:
      "Build a single self-contained .tsx file. Export a React component with a " +
      'dropdown to pick one of three colours (Red, Green, Blue), a label "Colour", ' +
      "and controlled value/onChange.",
    usage: [
      { name: "Select imported from DS", test: (s) => importsFromDs("Select").test(s) },
      {
        name: "options prop (not <MenuItem> children)",
        test: (s) => /options\s*=/.test(s) && !/<MenuItem/.test(s),
      },
    ],
  },
  {
    id: "appbar",
    prompt:
      "Build a single self-contained .tsx file. Export a React component that " +
      "renders the top application header bar for a standalone Telicent web app: " +
      "the app name comes from a `config` prop, users can switch between Telicent " +
      "apps, and the signed-in user menu is shown.",
    usage: [
      { name: "AppBar imported from DS", test: (s) => importsFromDs("AppBar").test(s) },
      { name: "appName set", test: (s) => /appName\s*=/.test(s) },
      {
        name: "startChild holds AppSwitch (cross-app switcher)",
        test: (s) => /startChild\s*=/.test(s) && /AppSwitch/.test(s),
      },
      {
        name: "endChild holds UserProfile (sign-in menu)",
        test: (s) => /endChild\s*=/.test(s) && /UserProfile/.test(s),
      },
      { name: "isElevated", test: (s) => /isElevated/.test(s) },
      {
        name: "not the title-only anti-pattern",
        test: (s) => /startChild\s*=/.test(s) && /endChild\s*=/.test(s),
      },
    ],
  },
];
