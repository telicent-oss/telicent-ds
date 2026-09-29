import React from "react";
import MuiPopper, { PopperProps } from "@mui/material/Popper";

export const Popper: React.FC<PopperProps> = (props) => <MuiPopper {...props} />;

export type { PopperProps };

export default Popper;
