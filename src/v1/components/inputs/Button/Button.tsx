import React from "react";
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export type ButtonProps = Omit<
  MUIButtonProps,
  | "color"
  | "classes"
  | "component"
  | "disableFocusRipple"
  | "disableRipple"
  | "href"
  | "sx"
  | "variant"
> &
  Partial<{
    variant: "primary" | "secondary" | "tertiary";
  }>;

const Button: React.FC<ButtonProps> = ({ variant = "primary", ...buttonProps }) => {
  if (variant === "primary") return <PrimaryButton {...buttonProps} />;
  if (variant === "secondary") return <SecondaryButton {...buttonProps} />;
  return (
    <MUIButton variant="text" color="primary" {...buttonProps}>
      {buttonProps.children}
    </MUIButton>
  );
};

export default Button;
