import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

const InfoIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20.4332C16.6575 20.4332 20.4332 16.6575 20.4332 12C20.4332 7.34247 16.6575 3.56679 12 3.56679C7.34247 3.56679 3.56679 7.34247 3.56679 12C3.56679 16.6575 7.34247 20.4332 12 20.4332Z"
      fill="currentColor"
    />
    <path d="M11 10.5H13V17H11V10.5Z" fill="currentColor" />
    <path
      d="M12 6.75C11.3096 6.75 10.75 7.30964 10.75 8C10.75 8.69036 11.3096 9.25 12 9.25C12.6904 9.25 13.25 8.69036 13.25 8C13.25 7.30964 12.6904 6.75 12 6.75Z"
      fill="currentColor"
    />
  </MUISvgIcon>
);

export default InfoIcon;
