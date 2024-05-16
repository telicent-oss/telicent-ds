import React from "react";
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from "@mui/material";
import { UITheme } from "./colors/theme-colors";
import createTheme from "./theme";

type UIThemeProviderProps = React.PropsWithChildren & {
  theme: UITheme;
};

const UIThemeProvider: React.FC<UIThemeProviderProps> = ({ theme, children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={createTheme(theme)}>{children}</MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default UIThemeProvider;
