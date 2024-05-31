import React from "react";
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from "@mui/material";
import { UITheme } from "./colors/theme-colors";
import createTheme from "./theme";

type UIThemeProviderProps = React.PropsWithChildren & {
  theme: UITheme;
};

const UIThemeProvider: React.FC<UIThemeProviderProps> = ({ theme, children }) => (
  <MUIThemeProvider theme={createTheme(theme)}>{children}</MUIThemeProvider>
);

export default UIThemeProvider;
