import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

/*
 * Needs to be scaled for a 24 x 24 grid
 */

const UserIcon: React.FC<SvgIconProps> = (iconProps) => (
  <SvgIcon {...iconProps}>
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="13.5" r="3.375" stroke="currentColor" strokeWidth="2.25" />
      <path
        d="M12 25.5V23.25C12 21.5931 13.3431 20.25 15 20.25H21C22.6569 20.25 24 21.5931 24 23.25V25.5"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  </SvgIcon>
);

export default UserIcon;
