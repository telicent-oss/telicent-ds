import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

// Standard Material Design "expand_more" chevron-down glyph, centred in the
// 24x24 viewBox. Chevron sits between y=8.59 and y=16, geometric centre ~y=12,
// matching InfoIcon so both render at the same visual baseline when sized
// identically.
const ExpandMoreIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps}>
    <path
      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
      fill="currentColor"
    />
  </MUISvgIcon>
);

export default ExpandMoreIcon;
