import React from "react";
import Grid, { GridProps } from "@mui/material/Grid";
type FlexGridProps = Omit<GridProps, "container" | "classes">;

export const FlexGrid: React.FC<FlexGridProps> = (props) => (
  <Grid container {...props}>
    {props.children}
  </Grid>
);

export const FlexGridItem: React.FC<FlexGridProps> = (props) => <Grid {...props}>{props.children}</Grid>;
