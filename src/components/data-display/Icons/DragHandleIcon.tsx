import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

export const DragHandleIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
    >
      <g fill="currentColor">
        <circle cx="5.61865" cy="1.61865" r="0.950684" />
        <circle cx="5.61865" cy="6.29053" r="0.950684" />
        <circle cx="5.61865" cy="10.9624" r="0.950684" />
        <circle cx="1.61865" cy="1.61865" r="0.950684" />
        <circle cx="1.61865" cy="6.29053" r="0.950684" />
        <circle cx="1.61865" cy="10.9624" r="0.950684" />
      </g>
    </svg>
  </MUISvgIcon>
);

export default DragHandleIcon;
