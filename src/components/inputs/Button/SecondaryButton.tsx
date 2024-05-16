import React from "react";
import { Button, ButtonProps } from "@mui/material";

type SecondaryButtonProps = Omit<ButtonProps, "variant" | "color">;

const SecondaryButton: React.FC<SecondaryButtonProps> = (buttonProps) => (
  <Button variant="outlined" color="primary" {...buttonProps}>
    {buttonProps.children}
  </Button>
);

export default SecondaryButton;
