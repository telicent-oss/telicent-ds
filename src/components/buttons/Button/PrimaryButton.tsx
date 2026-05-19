import React, { forwardRef } from "react";
import { Button, ButtonProps } from "@mui/material";

type PrimaryButtonProps = Omit<ButtonProps, "variant" | "color">;


const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>((buttonProps, ref) => (
  <Button variant="contained" ref={ref} color="primary" {...buttonProps}>
    {buttonProps.children}
  </Button>
));

export default PrimaryButton;
