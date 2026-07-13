import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

// Dark mode uses the bright brand green as the primary, with black text on it.
// Light mode uses a darker green as the primary so it stays legible as
// foreground (text, icons, borders) on light surfaces; the bright fill is
// restored only for the contained button via a theme-scoped override in
// ./style-overrides/component-overrides/button-overrides.ts.
// The bright brand green. Primary in dark mode; also the contained-button fill
// restored in light mode (see button-overrides.ts).
export const GEO_GREEN_BRIGHT = "#9DDD31";
const darkMain = GEO_GREEN_BRIGHT;
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
