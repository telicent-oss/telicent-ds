import React from "react";
import MuiSvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const SvgIcon: React.FC<SvgIconProps> = (props) => <MuiSvgIcon {...props} />;

export type { SvgIconProps };

export default SvgIcon;
