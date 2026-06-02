import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

export const CloseIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
      <path
        d="M11.9997 1.84102L10.8247 0.666016L6.16634 5.32435L1.50801 0.666016L0.333008 1.84102L4.99134 6.49935L0.333008 11.1577L1.50801 12.3327L6.16634 7.67435L10.8247 12.3327L11.9997 11.1577L7.34134 6.49935L11.9997 1.84102Z"
        fill="currentColor"
      />
    </svg>
  </MUISvgIcon>
);

export default CloseIcon;
