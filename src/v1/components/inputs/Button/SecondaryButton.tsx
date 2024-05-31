import React from "react";
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";

type SecondaryButtonProps = Omit<MUIButtonProps, "variant" | "color">;

const SecondaryButton: React.FC<SecondaryButtonProps> = (buttonProps) => {
  if (buttonProps.disableElevation) {
    return (
      <MUIButton variant="outlined" color="primary" {...buttonProps}>
        {buttonProps.children}
      </MUIButton>
    );
  }
  return (
    <MUIButton variant="outlined" color="inherit" {...buttonProps}>
      {buttonProps.children}
    </MUIButton>
  );
};

export default SecondaryButton;
