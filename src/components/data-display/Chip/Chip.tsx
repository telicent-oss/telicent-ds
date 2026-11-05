import MUIChip, { ChipProps as MUIChipProps } from "@mui/material/Chip";
import React from "react";

export type ChipProps = Omit<
  MUIChipProps,
  "avatar" | "children" | "classes" | "clickable" | "component" | "deleteIcon" | "icon" | "skipFocusWhenDisabled"
>;

const Chip: React.FC<ChipProps> = ({ variant = "filled", color = "primary", ...chipProps }) => (
  <MUIChip variant={variant} color={color} {...chipProps} />
);

export default Chip;
