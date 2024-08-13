import React, { forwardRef } from "react";
import MUIIconButton, {
  IconButtonProps as MUIIconButtonProps,
} from "@mui/material/IconButton";

const IconButton = forwardRef<HTMLButtonElement, MUIIconButtonProps>(
  (props, ref) => <MUIIconButton ref={ref} {...props} />
);

export default IconButton;
