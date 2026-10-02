import { ThemeOptions } from "@mui/material";
import { UITheme } from "../../colors/theme-colors";

// Rung 4, with the reason it cannot sit higher: the palette carries colour
// tokens but not the structural facts "Accordion has no background" and
// "the row between two Accordions has no top divider". These are shape,
// not colour, so no palette token can express them. `elevation: 0` and
// `disableGutters: true` ship as defaultProps because they are visual
// stances the DS takes (an Accordion is a collapse, not a raised card),
// not per-callsite prop values.
const generateAccordionOverrides = (_uiTheme: UITheme) =>
  ({
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          "&:before": {
            display: "none",
          },
        },
      },
    },
  } satisfies ThemeOptions["components"]);

export default generateAccordionOverrides;
