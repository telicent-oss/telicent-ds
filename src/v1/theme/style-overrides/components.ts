import { ThemeOptions } from "@mui/material";
import { UITheme } from "../colors/theme-colors";
import * as componentOverrides from "./component-overrides";
import { TYPOGRAPHY_FONT_FACES } from "./typography";

const generateComponentOverrides = (uiTheme: UITheme) =>
  ({
    ...componentOverrides.AVATAR_OVERRIDES,
    ...componentOverrides.generateButtonOverrides(uiTheme),
    ...componentOverrides.generateCardOverrides(uiTheme),
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : "#ffffff",
        }),
      },
    },
    MuiCssBaseline: {
      ...TYPOGRAPHY_FONT_FACES.MuiCssBaseline,
    },
  } satisfies ThemeOptions["components"]);

export default generateComponentOverrides;
