import React from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import MUICssBaseline from "@mui/material/CssBaseline";
import { UITheme, UIThemeSchema } from "./colors/theme-colors";
import createTheme from "./theme";

type UIThemeProviderProps = React.PropsWithChildren & {
  theme: UITheme;
  dark?: boolean;
};

// helper types
type Theme = ReturnType<typeof createTheme>;
type ThemeVariantsCache = Record<UITheme, Record<"light" | "dark", Theme>>;

const themeVariantsCache: ThemeVariantsCache = Object.fromEntries(
  UIThemeSchema.options.map((theme) => [
    theme,
    {
      light: createTheme(theme, true),
      dark: createTheme(theme, false),
    },
  ])
) as ThemeVariantsCache;

const UIThemeProvider: React.FC<UIThemeProviderProps> = ({
  dark = false,
  theme,
  children,
}) => (
  <MUIThemeProvider
    theme={
      themeVariantsCache?.[theme]?.[dark ? "dark" : "light"] ||
      createTheme(theme, dark)
    }
  >
    <MUICssBaseline />
    {children}
  </MUIThemeProvider>
);

export default UIThemeProvider;
