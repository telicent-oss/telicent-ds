import React from "react";
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";

type Props = MuiTextFieldProps & {
  errorText?: React.ReactNode;
};

const TextField = React.forwardRef<HTMLInputElement, Props>(({ errorText, error, helperText, ...rest }, ref) => {
  return (
    <MuiTextField
      {...rest}
      inputRef={ref}
      error={Boolean(error ?? errorText)}
      helperText={error ? errorText ?? helperText : helperText}
    />
  );
});

export default TextField;
