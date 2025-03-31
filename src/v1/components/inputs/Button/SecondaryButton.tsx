import React, { forwardRef } from "react";
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";

type SecondaryButtonProps = Omit<MUIButtonProps, "variant" | "color">;

const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>((buttonProps, ref) => {
  if (buttonProps.disableElevation) {
    return (
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
