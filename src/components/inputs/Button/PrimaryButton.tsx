import React from "react";
import { Button, ButtonProps } from "@mui/material";
import "./button.css";

type PrimaryButtonProps = Omit<ButtonProps, "variant" | "color">;

const PrimaryButton: React.FC<PrimaryButtonProps> = (buttonProps) => (
  <Button variant="contained" color="primary" {...buttonProps}>
    {buttonProps.children}
  </Button>
);

export default PrimaryButton;
