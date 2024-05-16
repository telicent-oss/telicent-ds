import React from "react";
import UIThemeProvider from "./theme/UIThemeProvider";
import { AppChrome } from "./export";

const App: React.FC = () => {
  return (
    <UIThemeProvider theme="DataNavy">
      <AppChrome></AppChrome>
    </UIThemeProvider>
  );
};

export default App;
