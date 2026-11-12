import TooltipRaw, { TooltipProps } from "@mui/material/Tooltip";
import React from "react";

export const Tooltip: React.FC<TooltipProps> = (tooltipProps) => (
  <TooltipRaw {...tooltipProps} />
);

export default Tooltip;
