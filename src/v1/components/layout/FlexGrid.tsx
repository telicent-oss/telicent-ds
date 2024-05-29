import React from "react";
import Grid2, { Grid2Props } from "@mui/material/Unstable_Grid2";

type FlexGridProps = Omit<Grid2Props, "container" | "sx" | "classes" | "spacing">;

export const FlexGrid: React.FC<FlexGridProps> = (props) => (
  <Grid2 container {...props}>
    {props.children}
  </Grid2>
);

export const FlexGridItem: React.FC<FlexGridProps> = (props) => (
  <Grid2 {...props}>{props.children}</Grid2>
);
