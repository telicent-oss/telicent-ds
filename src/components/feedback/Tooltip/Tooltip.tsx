import React from "react";
import TooltipRaw, { TooltipProps } from "@mui/material/Tooltip";

export const Tooltip: React.FC<TooltipProps> = (tooltipProps) => (
  <TooltipRaw {...tooltipProps} />
);

export default Tooltip;
