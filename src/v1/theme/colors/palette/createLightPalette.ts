import { common } from "@mui/material/colors";
import { alpha, ThemeOptions } from "@mui/material/styles";
import THEME_COLORS, { UITheme } from "../theme-colors";

const createLightPalette = (uiTheme:UITheme): ThemeOptions["palette"] =>({
  mode: "light",
  primary: {
    main: THEME_COLORS[uiTheme].main,
    light: THEME_COLORS[uiTheme].light,
    dark: THEME_COLORS[uiTheme].dark,
    contrastText: THEME_COLORS[uiTheme].contrastText,
  },
  secondary: {
    main: "#F9F9F9",
  },
  // warning: undefined,
  // info: undefined,
  // success: undefined,
  background: {
    default: "#F8F9F9",
  },
})

export default createLightPalette;
