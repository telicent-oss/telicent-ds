import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

const PlayIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 10" fill="none">
      <path
        d="M8.80078 4.91772L0.506469 9.70645L0.50647 0.129001L8.80078 4.91772Z"
        fill="currentColor"
      />
    </svg>
  </MUISvgIcon>
);

export default PlayIcon;
