import React, { forwardRef } from "react";
import { ButtonBase, ButtonBaseProps } from "@mui/material";
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { ButtonVariant } from "../../../tokens/button-variants";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TertiaryButton from "./TertiaryButton";

type LegacyVariant = "text" | "outlined" | "contained";
type SupportedVariant = ButtonVariant | LegacyVariant;

export type ButtonProps = Omit<MUIButtonProps, "variant"> & {
  variant?: SupportedVariant;
  /**
   * Legacy compatibility prop.
   * Kept because existing apps rely on style="base".
   */
  style?: MUIButtonProps["style"] | "base";
};

const LEGACY_VARIANTS = ["text", "outlined", "contained"] as const;

const isLegacyVariant = (variant: SupportedVariant): variant is LegacyVariant =>
  LEGACY_VARIANTS.includes(variant as LegacyVariant);

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  if (props.style === "base") {
    const { style, variant, ...buttonBaseProps } = props;

    return <ButtonBase {...(buttonBaseProps as ButtonBaseProps)} ref={ref} />;
  }

  const { variant = "primary", ...buttonProps } = props;

  // Legacy passthrough (do NOT touch behavior until we stop using legacy variants in the apps)
  if (isLegacyVariant(variant)) {
    return <MUIButton {...buttonProps} ref={ref} variant={variant} />;
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

  return <PrimaryButton {...buttonProps} ref={ref} />;
});

Button.displayName = "Button";

export default Button;
