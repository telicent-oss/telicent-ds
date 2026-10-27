import MuiToggleButton, { ToggleButtonProps } from "@mui/material/ToggleButton";
import React from "react";

export const ToggleButton: React.FC<ToggleButtonProps> = (props) => (
  <MuiToggleButton {...props} />
);

export type { ToggleButtonProps };

export default ToggleButton;
