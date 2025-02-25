import { createTheme as createMUITheme } from "@mui/material/styles";

import { UITheme } from "./colors/theme-colors";
import generateComponentOverrides from "./style-overrides/components";
import TYPOGRAPHY_STYLE_OVERRIDES from "./style-overrides/typography";
import createLightPalette from "./light-palette";
import createDarkPalette from "./dark-palette";

export type ComponentOverrides = ReturnType<typeof generateComponentOverrides>;

const createTheme = (themeColor: UITheme, dark: boolean) =>
  createMUITheme({
    components: generateComponentOverrides(themeColor),
    palette: dark ? createDarkPalette(themeColor) : createLightPalette(themeColor),
    typography: TYPOGRAPHY_STYLE_OVERRIDES,
  });

export default createTheme;
