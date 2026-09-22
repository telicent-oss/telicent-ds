import { ThemeOptions } from "@mui/material";
import { UITheme } from "../../colors/theme-colors";

// Rung 4, with the reason it cannot sit higher: the palette carries the
// divider's *colour* (`palette.divider`) but not its *existence*. "MuiTabs'
// root has a 1px border on the edge the tabs sit against" is structural CSS
// with no palette token to express it. The colour is still read from the
// palette at render time, so themes keep control of it.
//
// This replaces the `<Box sx={{ borderBottom: 1, borderColor: "divider" }}>`
// wrapper mui.com's Tabs examples ask every consumer to hand-roll.
const generateTabsOverrides = (_uiTheme: UITheme) =>
  ({
    MuiTabs: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
          // A vertical tab set sits beside its panel, so the divider moves to
          // the inline edge. A selector rather than a `variants` entry —
          // MUI v5's theme `variants` support does not cover MuiTabs.
          "&.MuiTabs-vertical": {
            borderBottom: "none",
            borderInlineEnd: `1px solid ${theme.palette.divider}`,
          },
        }),
      },
    },
  } satisfies ThemeOptions["components"]);

export default generateTabsOverrides;
