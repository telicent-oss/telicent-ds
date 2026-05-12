import React, { forwardRef } from "react";
import MUIButton, { ButtonProps } from "@mui/material/Button";

const Good = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <MUIButton ref={ref} {...props} />
));

export default Good;
