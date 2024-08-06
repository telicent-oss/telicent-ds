import React from "react";
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import LinkButton from "./LinkButton";

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
    variant: "primary" | "secondary" | "tertiary" | "link" | "text";
  }>;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  ...buttonProps
}) => {
  if (variant === "primary") return <PrimaryButton {...buttonProps} />;
  if (variant === "secondary") return <SecondaryButton {...buttonProps} />;

  /**
   * Cannot extend variants in theme. Using sx as workaround
   * https://github.com/mui/material-ui/issues/32427
   */
  if (variant === "link") return <LinkButton {...buttonProps} />;

  return (
    <MUIButton variant="text" color="primary" {...buttonProps}>
      {buttonProps.children}
    </MUIButton>
  );
};

export default Button;
