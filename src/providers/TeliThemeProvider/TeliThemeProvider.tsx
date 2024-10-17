import React from "react";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";

import getThemePalette from "./palette";
import typography from "./typography";
import useTeliTheme from "../../hooks/useTeliTheme";
import getThemeComponents from "./components";

type TeliThemeProviderProps = {
  children?: React.ReactNode;
};

/**
 * The ThemeProvider component is responsible for providing the theme to all its children.
 * This component should be imported in index.jsx|tsx, if the standard layout component is not being used.
 */
const TeliThemeProvider: React.FC<TeliThemeProviderProps> = ({ children }) => {
  const { storedTheme } = useTeliTheme();

  const telicentTheme: ThemeOptions = createTheme({
    components: getThemeComponents(),
    palette: getThemePalette(storedTheme),
    typography,
  });

  return <ThemeProvider theme={telicentTheme}>{children}</ThemeProvider>;
};

export default TeliThemeProvider;
