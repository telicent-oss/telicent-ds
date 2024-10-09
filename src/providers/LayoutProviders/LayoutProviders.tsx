import React from "react";
import TeliStyledEngineProvider from "../TeliStyledEngineProvider/TeliStyledEngineProvider";
import TeliThemeProvider from "../TeliThemeProvider/TeliThemeProvider";

const LayoutProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <TeliStyledEngineProvider>
    <TeliThemeProvider>{children}</TeliThemeProvider>
  </TeliStyledEngineProvider>
);

export default LayoutProviders;
