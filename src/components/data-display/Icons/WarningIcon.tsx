import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

const WarningIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2679 3.5C11.0378 2.16667 12.9622 2.16667 13.7321 3.5L21.5311 17C22.301 18.3333 21.3388 20 19.799 20H4.20096C2.66116 20 1.69891 18.3333 2.46881 17L10.2679 3.5ZM12 4.5L4.20096 18H19.799L12 4.5ZM11 10H13V14H11V10ZM11 15H13V17H11V15Z"
      fill="currentColor"
    />
  </MUISvgIcon>
);

export default WarningIcon;
