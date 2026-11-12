import MuiPopper, { PopperProps } from "@mui/material/Popper";
import React from "react";

export const Popper: React.FC<PopperProps> = (props) => <MuiPopper {...props} />;

export type { PopperProps };

export default Popper;
