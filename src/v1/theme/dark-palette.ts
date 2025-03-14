import { ThemeOptions } from "@mui/material";
import THEME_COLORS, { UITheme } from "./colors/theme-colors";
import { grey } from "@mui/material/colors";

const createDarkPalette = (themeColor: UITheme): ThemeOptions["palette"] => ({
  mode: "dark",
  primary: {
    main: THEME_COLORS[themeColor].main,
    light: THEME_COLORS[themeColor].light,
    dark: THEME_COLORS[themeColor].dark,
    contrastText: THEME_COLORS[themeColor].contrastText,
  },
  secondary: {
    main: "#222222",
  },
  warning: undefined,
  info: undefined,
  success: undefined,
  background: {
    default: "#1D1D1D",
  },
  grey: {
    ...grey,
    900: "#2E2E2E"
  }
});

export default createDarkPalette;
