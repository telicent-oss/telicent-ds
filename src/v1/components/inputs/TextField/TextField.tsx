import React from "react";
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";

type TextFieldProps = MuiTextFieldProps & { errorText?: string };

const TextField: React.FC<TextFieldProps> = ({ errorText = "", value, label, error, helperText, ...rest }) => {
  return <MuiTextField value={value} error={error} helperText={error ? errorText : helperText} {...rest} />;
};

export default TextField;
