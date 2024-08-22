import React from "react";
import MUIThemeProvider from "@mui/material/styles/ThemeProvider";
import MUICssBaseline from "@mui/material/CssBaseline";
import { UITheme } from "./colors/theme-colors";
import createTheme from "./theme";

type UIThemeProviderProps = React.PropsWithChildren & {
  theme: UITheme;
  dark?: boolean;
};

const UIThemeProvider: React.FC<UIThemeProviderProps> = ({
  dark = false,
  theme,
  children,
}) => (
  <MUIThemeProvider theme={createTheme(theme, dark)}>
    <MUICssBaseline />
    {children}
  </MUIThemeProvider>
);

export default UIThemeProvider;
