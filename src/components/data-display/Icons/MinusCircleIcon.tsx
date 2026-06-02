import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

const MinusCircleIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.4332C16.6575 20.4332 20.4332 16.6575 20.4332 12C20.4332 7.34247 16.6575 3.56679 12 3.56679C7.34247 3.56679 3.56679 7.34247 3.56679 12C3.56679 16.6575 7.34247 20.4332 12 20.4332ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <path
        d="M7.64543 10.8723H16.4005V13.1164H7.64543V10.8723Z"
        fill="currentColor"
      />
    </svg>
  </MUISvgIcon>
);

export default MinusCircleIcon;
