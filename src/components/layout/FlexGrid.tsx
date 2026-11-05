import Grid, { GridProps } from "@mui/material/Grid";
import React from "react";
type FlexGridProps = Omit<GridProps, "container" | "classes">;

export const FlexGrid: React.FC<FlexGridProps> = (props) => (
  <Grid container {...props}>
    {props.children}
  </Grid>
);

export const FlexGridItem: React.FC<FlexGridProps> = (props) => <Grid {...props}>{props.children}</Grid>;
