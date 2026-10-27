import MUIContainer from "@mui/material/Container";
import React, { PropsWithChildren } from "react";

import useExtendedTheme from "../../hooks/useExtendedTheme";
import AppBar, { AppBarProps } from "../surfaces/AppBar/AppBar";

type AppChromeProps = AppBarProps & PropsWithChildren;

const AppChrome: React.FC<AppChromeProps> = ({ children, ...appBarProps }) => {
  const theme = useExtendedTheme();

  return (
    <>
      <AppBar {...appBarProps} />
      <MUIContainer
        maxWidth={false}
        disableGutters
        sx={{
          height: `calc(100vh - ${theme.components.MuiAppBar.styleOverrides.root.height}px)`,
          overflow: "auto",
          backgroundColor: theme.palette.background.default,
        }}
      >
        {children}
      </MUIContainer>
    </>
  );
};

export default AppChrome;
