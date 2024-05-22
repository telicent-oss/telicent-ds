import React from "react";
import MUIAppBar, { AppBarProps as MUIAppBarProps } from "@mui/material/AppBar";
import MUIStack from "@mui/material/Stack";
import MUITypography from "@mui/material/Typography";

import TelicentBrand from "./telicent-brand.svg";
import TelicentMark from "../../data-display/Icons/TelicentMark";

export type AppBarProps = Partial<{
  appName: string;
  userProfile: React.ReactNode;
  position: MUIAppBarProps["position"];
}>;

const AppBar: React.FC<AppBarProps> = ({ appName, position = "relative", userProfile }) => (
  <MUIAppBar color="inherit" position={position}>
    <MUIStack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%);" }}
    >
      <TelicentMark fontSize="large" />
      <img src={TelicentBrand} alt="Telicent" height={28} />
      <MUITypography variant="h1" color="primary" sx={{ fontFamily: "Figtree", fontSize: 40 }}>
        {appName}
      </MUITypography>
    </MUIStack>
    {userProfile}
  </MUIAppBar>
);

export default AppBar;
