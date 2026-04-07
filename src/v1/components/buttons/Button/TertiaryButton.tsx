import React, { forwardRef } from "react";
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { useExtendedTheme } from "../../../../export";

type TertiaryButtonProps = Omit<MUIButtonProps, "variant" | "color">;

export const TertiaryButton = forwardRef<HTMLButtonElement, TertiaryButtonProps>((buttonProps, ref) => {
  const theme = useExtendedTheme();

  return (
    <MUIButton
      variant="contained"
      ref={ref}
      {...buttonProps}
      sx={{
        border: `1px solid ${theme.palette.tertiary?.main}`,
        color: theme.palette.tertiary?.contrastText,
        backgroundColor: theme.palette.mode === "dark" ? "#080808" : "#FFFFFF",
        "&:hover": {
          backgroundColor: `${theme.palette.tertiary?.main}14`,
          borderColor: theme.palette.tertiary?.main,
        },
      }}
    >
      {buttonProps.children}
    </MUIButton>
  );
});

export default TertiaryButton;
