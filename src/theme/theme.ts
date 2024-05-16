import { ThemeOptions, createTheme as createMUITheme } from "@mui/material";
import { UITheme } from "./colors/theme-colors";
import TYPOGRAPHY_STYLE_OVERRIDES from "./style-overrides/typography";
import createLightPalette from "./light-palette";
import COMPONENTS_STYLE_OVERRIDES from "./style-overrides/components";

const createTheme = (themeColor: UITheme): ThemeOptions =>
  createMUITheme({
    components: COMPONENTS_STYLE_OVERRIDES,
    palette: createLightPalette(themeColor),
    typography: TYPOGRAPHY_STYLE_OVERRIDES,
  });

export default createTheme;
