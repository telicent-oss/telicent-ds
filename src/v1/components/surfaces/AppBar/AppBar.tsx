import React from "react";
import MUIAppBar, { AppBarProps as MUIAppBarProps } from "@mui/material/AppBar";
import MUIBox from "@mui/material/Box";
import MUIStack from "@mui/material/Stack";
import MUITypography from "@mui/material/Typography";
import TelicentBrand from "./TelicentBrand";
import TelicentMark from "../../data-display/Icons/TelicentMark";
import AppSwitch, {
  AppSwitchLibraryType,
} from "../../data-display/AppSwitch/AppSwitch";
import useExtendedTheme from "../../../../hooks/useExtendedTheme";

export type AppBarProps = Partial<{
  appName: string;
  beta: boolean;
  apps: AppSwitchLibraryType;
  userProfile: React.ReactNode;
  position: MUIAppBarProps["position"];
}>;

const AppBar: React.FC<AppBarProps> = ({
  appName,
  beta = false,
  position = "relative",
  apps = [],
  userProfile,
}) => {
  const theme = useExtendedTheme();

  return (
    <MUIAppBar color="inherit" position={position}>
      {apps?.length >= 1 && (
        <MUIBox
          id="app-switch-container"
          sx={{
            position: "absolute",
            top: "50%",
            left: 16,
            transform: "translate(0, -50%)",
          }}
        >
          <AppSwitch apps={apps} />
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
        <MUITypography
          variant="h1"
          color="primary"
          sx={{ fontFamily: "Figtree", fontSize: 40 }}
        >
          {appName}
        </MUITypography>
        {beta && (
          <MUIBox
            position="absolute"
            right={-28}
            bottom={2}
            fontSize={8}
            paddingInline={0.5}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            BETA
          </MUIBox>
        )}
      </MUIStack>
      {userProfile && (
        <MUIStack
          sx={{
            position: "absolute",
            top: "50%",
            right: 16,
            transform: "translate(0, -50%)",
          }}
        >
          {userProfile}
        </MUIStack>
      )}
    </MUIAppBar>
  );
};

export default AppBar;
