import React from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import { ThemeColor } from "./colors/theme-colors";
import createTheme from "./theme";

type ThemeProviderProps = React.PropsWithChildren & {
  themeColor: ThemeColor;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ themeColor, children }) => {
  return <MUIThemeProvider theme={createTheme(themeColor)}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
