import React, { forwardRef } from "react";
import { ButtonBase, ButtonBaseProps } from "@mui/material";
import { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { ButtonVariant } from "../../../tokens/button-variants";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TertiaryButton from "./TertiaryButton";
import TextButton from "./TextButton";

type SupportedVariant = ButtonVariant;

export type ButtonProps = Omit<MUIButtonProps, "variant"> &
  Omit<ButtonBaseProps, "style"> & {
    variant?: SupportedVariant;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant = "primary", ...buttonProps } = props;

  if (variant === "base") {
    return <ButtonBase {...buttonProps} ref={ref} />;
  }

  if (variant === "primary") {
    return <PrimaryButton {...buttonProps} ref={ref} />;
  }

  if (variant === "secondary") {
    return <SecondaryButton {...buttonProps} ref={ref} />;
  }

  if (variant === "tertiary") {
    return <TertiaryButton {...buttonProps} ref={ref} />;
  }

  if (variant === "text") {
    return <TextButton {...buttonProps} ref={ref} />;
  }

  return <PrimaryButton {...buttonProps} ref={ref} />;
});

Button.displayName = "Button";

export default Button;
