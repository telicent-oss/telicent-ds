import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

const QuestionIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20.4332C16.6575 20.4332 20.4332 16.6575 20.4332 12C20.4332 7.34247 16.6575 3.56679 12 3.56679C7.34247 3.56679 3.56679 7.34247 3.56679 12C3.56679 16.6575 7.34247 20.4332 12 20.4332Z"
      fill="currentColor"
    />
    <path
      d="M12 6C9.79086 6 8 7.79086 8 10H10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.75 11 12 11 14.5H13C13 12.75 16 11.75 16 10C16 7.79086 14.2091 6 12 6Z"
      fill="currentColor"
    />
    <path
      d="M12 15.75C11.3096 15.75 10.75 16.3096 10.75 17C10.75 17.6904 11.3096 18.25 12 18.25C12.6904 18.25 13.25 17.6904 13.25 17C13.25 16.3096 12.6904 15.75 12 15.75Z"
      fill="currentColor"
    />
  </MUISvgIcon>
);

export default QuestionIcon;
