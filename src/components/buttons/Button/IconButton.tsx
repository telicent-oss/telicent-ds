import MUIIconButton, {
  IconButtonProps as MUIIconButtonProps,
} from "@mui/material/IconButton";
import React, { forwardRef } from "react";

const IconButton = forwardRef<HTMLButtonElement, MUIIconButtonProps>(
  (props, ref) => <MUIIconButton ref={ref} {...props} />
);

export default IconButton;
