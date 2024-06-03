import { ThemeOptions } from "@mui/material";
import { common } from "@mui/material/colors";
import THEME_COLORS, { UITheme } from "./colors/theme-colors";

const createLightPalette = (themeColor: UITheme): ThemeOptions["palette"] => ({
  mode: "light",
  primary: {
    main: THEME_COLORS[themeColor][500],
    light: THEME_COLORS[themeColor][400],
    dark: THEME_COLORS[themeColor][600],
    contrastText: common.white,
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
