import { ThemeOptions } from "@mui/material";
import { UITheme } from "../colors/theme-colors";
import * as componentOverrides from "./component-overrides";
import { TYPOGRAPHY_FONT_FACES } from "./typography";

const generateComponentOverrides = (uiTheme: UITheme) =>
  ({
    ...componentOverrides.AVATAR_OVERRIDES,
    ...componentOverrides.generateButtonOverrides(uiTheme),
    ...componentOverrides.CARD_OVERRIDES,
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 70,
        },
      },
    },
    MuiCssBaseline: {
      ...TYPOGRAPHY_FONT_FACES.MuiCssBaseline,
    },
  } satisfies ThemeOptions["components"]);

export default generateComponentOverrides;
