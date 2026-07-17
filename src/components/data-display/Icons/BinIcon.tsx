import React from "react";
import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps,
} from "@mui/material/SvgIcon";

const BinIcon: React.FC<MUISvgIconProps> = (iconProps) => (
  <MUISvgIcon {...iconProps} viewBox="6 5 12 14">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5556 6C13.476 6 14.2222 6.80589 14.2222 7.8H17V9H15.8889V16.2C15.8889 17.1941 15.1427 18 14.2222 18H9.77778C8.8573 18 8.11111 17.1941 8.11111 16.2V9H7V7.8H9.77778C9.77778 6.80589 10.524 6 11.4444 6H12.5556ZM9.22222 16.2L9.22494 16.2615C9.25345 16.564 9.49018 16.8 9.77778 16.8H14.2222L14.2792 16.7971C14.5593 16.7663 14.7778 16.5106 14.7778 16.2V9H9.22222V16.2ZM11.4444 7.2C11.1376 7.2 10.8889 7.46863 10.8889 7.8H13.1111C13.1111 7.46863 12.8624 7.2 12.5556 7.2H11.4444Z"
      fill="currentColor"
    />
  </MUISvgIcon>
);

export default BinIcon;
