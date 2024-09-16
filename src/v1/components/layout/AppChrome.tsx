import React, { PropsWithChildren } from "react";
import MUIContainer from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";

import AppBar, { AppBarProps } from "../surfaces/AppBar/AppBar";

type AppChromeProps = AppBarProps & PropsWithChildren;

const AppChrome: React.FC<AppChromeProps> = ({ children, ...appBarProps }) => {
  const theme = useTheme();

  return (
    <>
      <AppBar {...appBarProps} />
      <MUIContainer
        maxWidth={false}
        disableGutters
        sx={{
          height: "calc(100vh - 70px)",
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
