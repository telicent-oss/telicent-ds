import React from "react";
import MUIChip, { ChipProps as MUIChipProps } from "@mui/material/Chip";

export type ChipProps = Omit<
  MUIChipProps,
  | "avatar"
  | "children"
  | "classes"
  | "clickable"
  | "color"
  | "component"
  | "deleteIcon"
  | "icon"
  | "skipFocusWhenDisabled"
  | "sx"
>;

const Chip: React.FC<ChipProps> = ({ variant = "filled", ...chipProps }) => (
  <MUIChip variant={variant} color="primary" {...chipProps} />
);

export default Chip;
