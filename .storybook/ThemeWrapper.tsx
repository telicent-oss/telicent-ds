import React from "react";
import TeliThemeProvider from "../src/providers/TeliThemeProvider/TeliThemeProvider";

const ThemeWrapper = ({ children }) => (
  <TeliThemeProvider>{children}</TeliThemeProvider>
);

export default ThemeWrapper;
