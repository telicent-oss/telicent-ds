import { createTheme as createMUITheme, ThemeOptions } from "@mui/material/styles";
import { UITheme, UIThemeSchema } from "./colors/theme-colors";
import generateComponentOverrides from "./style-overrides/components";
import TYPOGRAPHY_STYLE_OVERRIDES from "./style-overrides/typography";
import createLightPalette from "./colors/palette/createLightPalette";
import createDarkPalette from "./colors/palette/createDarkPalette";
import { MUI_BREAKPOINTS } from "../tokens";

export type ComponentOverrides = ReturnType<typeof generateComponentOverrides>;

const WIREFRAME_BACKGROUNDS = {
  dark: { default: "#111111", paper: "#1a1a1a" },
  light: { default: "#ffffff", paper: "#ffffff" },
} as const;

export const createThemePure = (uiTheme: UITheme, palette: ThemeOptions["palette"]) => {
  const finalPalette =
    uiTheme === "Wireframe"
      ? { ...palette, background: WIREFRAME_BACKGROUNDS[palette?.mode === "dark" ? "dark" : "light"] }
      : palette;

  return createMUITheme({
    breakpoints: MUI_BREAKPOINTS,
    components: generateComponentOverrides(uiTheme),
    palette: finalPalette,
    typography: TYPOGRAPHY_STYLE_OVERRIDES,
  });
};

// Cache
type ReturnedTheme = ReturnType<typeof createThemePure>;
type ThemeCache = Record<UITheme, Record<"light" | "dark", ReturnedTheme>>;

const cache: ThemeCache = Object.fromEntries(
  UIThemeSchema.options.map((uiTheme) => [
    uiTheme,
    {
      light: createThemePure(uiTheme, createLightPalette(uiTheme)),
      dark: createThemePure(uiTheme, createDarkPalette(uiTheme)),
    },
  ]),
) as ThemeCache;

export const createTheme = (uiTheme: UITheme, dark: boolean, skipCache = false) =>
  (!skipCache && cache?.[uiTheme]?.[dark ? "dark" : "light"]) ||
  createThemePure(uiTheme, dark ? createDarkPalette(uiTheme) : createLightPalette(uiTheme));

export default createTheme;
