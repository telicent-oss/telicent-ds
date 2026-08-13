import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

export const MapIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps} viewBox="0 0 16 15">
    <g fill="currentColor">
      <path d="M0.222524 14.9482L0.109375 2.60168L5.23864 0.272461V12.5695L0.222524 14.9482Z" />
      <path d="M10.3484 14.932L10.3047 2.60168L15.434 0.272461V12.5695L10.3484 14.932Z" />
      <path d="M10.3474 2.62671L5.2411 0.285156L5.21289 1.49825L10.3474 3.8398V2.62671Z" />
      <path d="M10.3474 13.7136L5.2411 11.3721L5.21289 12.5852L10.3474 14.9267V13.7136Z" />
    </g>
  </MUISvgIcon>
);

export default MapIcon;
