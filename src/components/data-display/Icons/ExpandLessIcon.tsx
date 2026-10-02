import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

// Standard Material Design "expand_less" chevron-up glyph, centred in the
// 24x24 viewBox. Companion to ExpandMoreIcon (same path mirrored on the
// horizontal axis).
const ExpandLessIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps}>
    <path
      d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.59L18 14z"
      fill="currentColor"
    />
  </MUISvgIcon>
);

export default ExpandLessIcon;
