import { ThemeOptions } from "@mui/material";
import { common } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
import merge from "lodash.merge";
import createLightPalette from "./createLightPalette";
import THEME_COLORS, { UITheme } from "../theme-colors";

const createDarkPalette = (uiTheme:UITheme): ThemeOptions["palette"] =>
  merge(createLightPalette(uiTheme), {
    mode: "dark",
    primary: {
      main: THEME_COLORS[uiTheme].main,
      light: THEME_COLORS[uiTheme].light,
      dark: THEME_COLORS[uiTheme].dark,
      contrastText: THEME_COLORS[uiTheme].contrastText,
  
    },
    secondary: {
      main: "#222222",
    },
    background: {
      default: "#1D1D1D",
    },
    grey: {
      ...grey,
      900: "#2E2E2E",
    },
  });

export default createDarkPalette;
