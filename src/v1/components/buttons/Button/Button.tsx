import React, { forwardRef } from "react";
import MUIButton, { ButtonProps as MUIButtonProps, ButtonPropsVariantOverrides } from "@mui/material/Button";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

import { OverridableStringUnion } from "@mui/types";
import { ButtonBase } from "@mui/material";

export type ButtonProps = MUIButtonProps & {
  style?: "base";
};
// export type ButtonProps = MUIButtonProps & { style: "basic" | "link" };

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { color = "primary", style, ...buttonProps } = props;

  if (style === "base") return <ButtonBase {...buttonProps} ref={ref} />;

  return (
    <MUIButton color={color} {...buttonProps} ref={ref}>
      {buttonProps.children}
    </MUIButton>
  );
});

export default Button;
