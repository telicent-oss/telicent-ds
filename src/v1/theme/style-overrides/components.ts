import { ThemeOptions } from "@mui/material";
import * as componentOverrides from "./component-overrides";
import { UITheme } from "../colors/theme-colors";

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
  } satisfies ThemeOptions["components"]);

export default generateComponentOverrides;
