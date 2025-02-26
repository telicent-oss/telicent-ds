import React from "react";
import { common } from "@mui/material/colors";
import MUIAppBar, { AppBarProps as MUIAppBarProps } from "@mui/material/AppBar";
import MUIBox from "@mui/material/Box";
import MUIStack from "@mui/material/Stack";
import MUITypography from "@mui/material/Typography";
import TelicentBrand from "./TelicentBrand";
import TelicentMark from "../../data-display/Icons/TelicentMark";
import AppSwitch, { AppSwitchLibraryType } from "../../data-display/AppSwitch/AppSwitch";
import useExtendedTheme from "../../../../hooks/useExtendedTheme";

export type AppBarProps = Partial<{
  appName: string;
  beta: boolean;
  startChild: React.ReactNode;
  endChild: React.ReactNode;
  position: MUIAppBarProps["position"];
  version: string;
}>;

const AppBar: React.FC<AppBarProps> = ({
  appName,
  beta = false,
  position = "relative",
  startChild,
  endChild,
  version,
}) => {
  const theme = useExtendedTheme();

  return (
    <MUIAppBar
      color="inherit"
      position={position}
      enableColorOnDark
      sx={{
        borderRadius: 0,
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : "#ffffff",
      }}
      elevation={0}
    >
      {startChild && (
        <MUIBox
          id="app-switch-container"
          sx={{
            position: "absolute",
            top: "50%",
            left: 16,
            transform: "translate(0, -50%)",
          }}
        >
          {startChild}
        </MUIBox>
      )}
      <MUIStack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%);",
        }}
      >
        <TelicentMark fontSize="large" />
        <TelicentBrand />
        <MUITypography variant="h1" color="primary" sx={{ fontFamily: "Figtree", fontSize: 40 }}>
          {appName}
        </MUITypography>
        {version && (
          <MUIBox
            position="absolute"
            bottom={5}
            fontSize={12}
            left="calc(100% - 12px)"
            paddingInline={0.5}
            sx={{
              color: theme.palette.secondary.contrastText,
              whiteSpace: "nowrap",
              marginLeft: "-4px",
            }}
          >
            {version}
          </MUIBox>
        )}
      </MUIStack>
      {endChild && (
        <MUIStack
          sx={{
            position: "absolute",
            top: "50%",
            right: 16,
            transform: "translate(0, -50%)",
          }}
        >
          {endChild}
        </MUIStack>
      )}
    </MUIAppBar>
  );
};

export default AppBar;
