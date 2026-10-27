import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import React, { forwardRef } from "react";

export type TextButtonProps = Omit<MUIButtonProps, "variant">;

const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>((buttonProps, ref) => {
  return <MUIButton {...buttonProps} ref={ref} variant="text" />;
});

TextButton.displayName = "TextButton";

export default TextButton;
