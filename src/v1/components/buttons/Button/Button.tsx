import React, { forwardRef } from "react";
import { ButtonBase, ButtonBaseProps } from "@mui/material";
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { ButtonVariant } from "../../../tokens/button-variants";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TertiaryButton from "./TertiaryButton";

type LegacyVariant = "text" | "outlined" | "contained";
type SupportedVariant = ButtonVariant | LegacyVariant;

type BaseButtonProps = ButtonBaseProps & {
  /**
   * Legacy compatibility prop.
   * Kept because existing apps rely on style="base".
   */
  style: "base";
  variant?: SupportedVariant;
};

type DSButtonProps = Omit<MUIButtonProps, "variant"> & {
  variant?: SupportedVariant;
  style?: undefined;
};

export type ButtonProps = BaseButtonProps | DSButtonProps;

const LEGACY_VARIANTS = ["text", "outlined", "contained"] as const;

const isLegacyVariant = (variant: SupportedVariant): variant is LegacyVariant =>
  LEGACY_VARIANTS.includes(variant as LegacyVariant);

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  if (props.style === "base") {
    const { style, variant, ...buttonBaseProps } = props;
    return <ButtonBase {...buttonBaseProps} ref={ref} />;
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

  // Fallback (should never really happen, but keeps TS happy and UI safe)
  return <PrimaryButton {...buttonProps} ref={ref} />;
});

Button.displayName = "Button";

export default Button;
