import { ThemeOptions } from "@mui/material";
import { common } from "@mui/material/colors";
import THEME_COLORS, { ThemeColor } from "./colors/theme-colors";

const createLightPalette = (themeColor: ThemeColor): ThemeOptions["palette"] => ({
  mode: "light",
  primary: {
    main: THEME_COLORS[themeColor][500],
    light: THEME_COLORS[themeColor][400],
    dark: THEME_COLORS[themeColor][600],
    contrastText: common.white,
  },
});

export default createLightPalette;
