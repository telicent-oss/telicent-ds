import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

const PlusCircleIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.9058 10.8723H7.64543V13.1164H10.9058V16.3635H13.1482V13.1164H16.4005V10.8723H13.1482V7.62061H10.9058V10.8723Z"
        fill="currentColor"
        // fill-opacity="0.56"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.4332 12C20.4332 16.6575 16.6575 20.4332 12 20.4332C7.34247 20.4332 3.56679 16.6575 3.56679 12C3.56679 7.34247 7.34247 3.56679 12 3.56679C16.6575 3.56679 20.4332 7.34247 20.4332 12Z"
        fill="currentColor"
        // fill-opacity="0.56"
      />
    </svg>
  </MUISvgIcon>
);

export default PlusCircleIcon;
