import { ThemeOptions } from "@mui/material";
import { common } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
import merge from "lodash.merge";
import createLightPalette from "./createLightPalette";
import THEME_COLORS, { UITheme } from "../theme-colors";

const createDarkPalette = (uiTheme: UITheme): ThemeOptions["palette"] =>
  merge(createLightPalette(uiTheme), {
    mode: "dark",
    primary: {
      main: THEME_COLORS[uiTheme].main,
      light: THEME_COLORS[uiTheme].light,
      dark: THEME_COLORS[uiTheme].dark,
      contrastText: THEME_COLORS[uiTheme].contrastText,
    },
    secondary: {
      main: "#8a8a8a",
      light: "#A1A1A1",
      dark: "#606060",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "#999999",
    },
    background: {
      default: "#1D1D1D",
      paper: "#252525",
    },
    grey: {
      ...grey,
    },
  });

export default createDarkPalette;
