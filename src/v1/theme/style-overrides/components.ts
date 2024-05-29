import { ThemeOptions } from "@mui/material";
import * as componentOverrides from "./component-overrides";

const COMPONENTS_STYLE_OVERRIDES = {
  ...componentOverrides.AVATAR_OVERRIDES,
  ...componentOverrides.BUTTON_OVERRIDES,
  ...componentOverrides.CARD_OVERRIDES,
  MuiAppBar: {
    styleOverrides: {
      root: {
        height: 70,
      },
    },
  },
} satisfies ThemeOptions["components"];

export default COMPONENTS_STYLE_OVERRIDES;
