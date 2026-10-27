import { Button, ButtonProps } from "@mui/material";
import React, { forwardRef } from "react";

type PrimaryButtonProps = Omit<ButtonProps, "variant" | "color">;


const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>((buttonProps, ref) => (
  <Button variant="contained" ref={ref} color="primary" {...buttonProps}>
    {buttonProps.children}
  </Button>
));

export default PrimaryButton;
