import { ThemeOptions } from "@mui/material";
import THEME_COLORS, { UITheme } from "./colors/theme-colors";

const createLightPalette = (themeColor: UITheme): ThemeOptions["palette"] => ({
  mode: "light",
  primary: {
    main: THEME_COLORS[themeColor].main,
    light: THEME_COLORS[themeColor].light,
    dark: THEME_COLORS[themeColor].dark,
    contrastText: THEME_COLORS[themeColor].contrastText,
  },
  secondary: {
    main: "#F9F9F9",
  },
  warning: undefined,
  info: undefined,
  success: undefined,
  background: {
    default: "#F8F9F9",
  },
});

export default createLightPalette;
