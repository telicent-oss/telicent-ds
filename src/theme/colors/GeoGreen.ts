import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

// Dark mode uses the bright brand green as the primary, with black text on it.
// Light mode uses a darker green as the primary so it stays legible as
// foreground (text, icons, borders) on light surfaces; the bright fill is
// restored only for the contained button via a theme-scoped override in
// ./style-overrides/component-overrides/button-overrides.ts.
const darkMain = "#9DDD31";
const lightMain = "#3E5B0B";

const GeoGreen = {
  dark: {
    primary: {
      main: darkMain,
      dark: alpha(darkMain, 0.7),
      light: alpha(darkMain, 0.5),
      contrastText: common.black,
    },
  },
  light: {
    primary: {
      main: lightMain,
      dark: alpha(lightMain, 0.7),
      light: alpha(lightMain, 0.5),
      contrastText: common.white,
    },
  },
};

export default GeoGreen;
