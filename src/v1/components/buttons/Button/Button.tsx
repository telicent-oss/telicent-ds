import React, { forwardRef, Fragment } from "react";
import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { ButtonBase, FormHelperText, type FormHelperTextProps } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

export type ButtonProps = MUIButtonProps & {
  style?: "base";
  error?: boolean;
  errorText?: string;
  helperTextProps?: FormHelperTextProps;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { color = "primary", style, error, errorText, helperTextProps, sx, ...buttonProps } = props;

  const isError = Boolean(error || errorText);
  const helperId = isError && buttonProps.id ? `${buttonProps.id}-helper` : undefined;

  const ariaProps = isError ? ({ "aria-invalid": true, "aria-describedby": helperId } as const) : ({} as const);

  const errorSx: SxProps<Theme> | undefined = isError
    ? {
        borderColor: "error.main",
        borderWidth: 1,
        borderStyle: "solid",
        "&:hover": { borderColor: "error.dark" },
      }
    : undefined;

  const mergedSx: SxProps<Theme> =
    errorSx === undefined
      ? (sx as SxProps<Theme>)
      : Array.isArray(sx)
      ? [...sx, errorSx]
      : ([sx, errorSx].filter(Boolean) as SxProps<Theme>[]);

  const helper =
    isError && (
      <FormHelperText id={helperId} error {...(helperTextProps || {})}>
        {errorText}
      </FormHelperText>
    );

  return (
    <Fragment>
      {style === "base" ? (
        <ButtonBase {...buttonProps} {...ariaProps} sx={mergedSx} ref={ref} />
      ) : (
        <MUIButton color={color} {...buttonProps} {...ariaProps} sx={mergedSx} ref={ref}>
          {buttonProps.children}
        </MUIButton>
      )}
      {helper}
    </Fragment>
  );
});

export default Button;