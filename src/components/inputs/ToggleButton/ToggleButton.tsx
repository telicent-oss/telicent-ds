import React from "react";
import MuiToggleButton, { ToggleButtonProps } from "@mui/material/ToggleButton";

export const ToggleButton: React.FC<ToggleButtonProps> = (props) => (
  <MuiToggleButton {...props} />
);

export type { ToggleButtonProps };

export default ToggleButton;
