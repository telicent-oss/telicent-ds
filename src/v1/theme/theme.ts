import {
  createTheme as createMUITheme,
  ThemeOptions,
} from "@mui/material/styles";
import { UITheme, UIThemeSchema } from "./colors/theme-colors";
import generateComponentOverrides from "./style-overrides/components";
import TYPOGRAPHY_STYLE_OVERRIDES from "./style-overrides/typography";
import createLightPalette from "./colors/palette/createLightPalette";
import createDarkPalette from "./colors/palette/createDarkPalette";

export type ComponentOverrides = ReturnType<typeof generateComponentOverrides>;

export const createTheme = (
  uiTheme: UITheme,
  palette: ThemeOptions["palette"]
) => {
  return createMUITheme({
    components: generateComponentOverrides(uiTheme),
    palette,
    typography: TYPOGRAPHY_STYLE_OVERRIDES,
  });
};

// Cache
type ReturnedTheme = ReturnType<typeof createTheme>;
type ThemeCache = Record<UITheme, Record<"light" | "dark", ReturnedTheme>>;

const cache: ThemeCache = Object.fromEntries(
  UIThemeSchema.options.map((uiTheme) => [
    uiTheme,
    {
      light: createTheme(uiTheme, createLightPalette(uiTheme)),
      dark: createTheme(uiTheme, createDarkPalette(uiTheme)),
    },
  ])
) as ThemeCache;

export const createThemeCached = (
  uiTheme: UITheme,
  dark: boolean,
  skipCache = false
) =>
  (!skipCache && cache?.[uiTheme]?.[dark ? "dark" : "light"]) ||
  createTheme(
    uiTheme,
    dark ? createDarkPalette(uiTheme) : createLightPalette(uiTheme)
  );


export const EMPTY_THEME = 'Blank' as unknown as UITheme;

export default createThemeCached;
