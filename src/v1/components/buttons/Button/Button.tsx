import React, { forwardRef } from "react";
import MUIButton, { ButtonProps as MUIButtonProps, ButtonPropsVariantOverrides } from "@mui/material/Button";
import { ButtonBase } from "@mui/material";

export type ButtonProps = MUIButtonProps & {
  style?: "base";
};

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
