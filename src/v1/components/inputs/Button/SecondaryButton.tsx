import React, { forwardRef } from "react";
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";

export type SecondaryButtonProps = Omit<MUIButtonProps, "variant" | "color">;

export const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>((buttonProps, ref) => {
  if (buttonProps.disableElevation) {
    return (
      /**
       * TODO Change Secondary color to "secondary"
       * HOW change "primary" to "secondary"; Check usage
       * WHEN ASAP
       * WHO anyone
       * 
       */
      <MUIButton variant="outlined" color="primary" {...buttonProps} ref={ref}>
        {buttonProps.children}
      </MUIButton>
    );
  }
  return (
    <MUIButton variant="outlined" color="inherit" {...buttonProps} ref={ref}>
      {buttonProps.children}
    </MUIButton>
  );
});

export default SecondaryButton;
