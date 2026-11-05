import { ThemeOptions } from "@mui/material";

import { UITheme } from "../../colors/theme-colors";

// Rung 4, with the reason it cannot sit higher: the palette carries no
// layout, and "a modal drawer never runs past the viewport" is a size
// rule. Keyed on the temporary (modal) variant so the deprecated,
// persistent InsetDrawer keeps the layout it was built around. MUI's
// paper is already a flex column, so a header and footer stay put while
// the body scrolls with no override.
const generateDrawerOverrides = (_uiTheme: UITheme) =>
  ({
    MuiDrawer: {
      styleOverrides: {
        paper: ({ ownerState }) =>
          ownerState.variant === "temporary" ? { maxWidth: "100vw" } : {},
      },
    },
  } satisfies ThemeOptions["components"]);

export default generateDrawerOverrides;
