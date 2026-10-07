import { ThemeOptions } from "@mui/material";
import { UITheme } from "../../colors/theme-colors";
import { PILL_GROUP_CLASS, PILL_HEIGHT } from "../../../tokens";

// Rung 4, with the reason it cannot sit higher: the palette carries the
// divider's *colour* (`palette.divider`) but not its *existence*. "MuiTabs'
// root has a 1px border on the edge the tabs sit against" is structural CSS
// with no palette token to express it. The colour is still read from the
// palette at render time, so themes keep control of it.
//
// This replaces the `<Box sx={{ borderBottom: 1, borderColor: "divider" }}>`
// wrapper mui.com's Tabs examples ask every consumer to hand-roll.
// The pill treatment below is rung 4 for a different reason. Its colours
// are already the right palette tokens and need no change; what the
// palette cannot express is shape — radius, spacing, height — and the
// suppression of MUI's ripple, which paints over a flat fill and makes
// it read as a wash.
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
          // A bordered well hugging its tabs. The border runs all the way
          // round and replaces the baseline rule above, which a pill
          // group has nothing to sit against. `fit-content` because a
          // flex parent's default `align-items: stretch` would span it.
          [`&.${PILL_GROUP_CLASS}`]: {
            width: "fit-content",
            minHeight: "auto",
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 999,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(0.5),
            "& .MuiTabs-indicator": { display: "none" },
            "& .MuiTabs-flexContainer": { gap: theme.spacing(1) },
          },
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          [`.${PILL_GROUP_CLASS} &`]: {
            minHeight: PILL_HEIGHT,
            height: PILL_HEIGHT,
            // MUI defaults a Tab to 90px, which pads short labels out.
            minWidth: "auto",
            padding: theme.spacing(0, 2.5),
            textTransform: "none",
            borderRadius: 999,
            whiteSpace: "nowrap",
            fontSize: 13,
            color: theme.palette.text.primary,
            "&.Mui-selected": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
            "& .MuiTouchRipple-root": { display: "none" },
          },
        }),
      },
    },
  } satisfies ThemeOptions["components"]);

export default generateTabsOverrides;
