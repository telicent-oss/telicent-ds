import React from "react";
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

export type TextField = TextFieldProps & { errorText?: string };

const TextField: React.FC<TextField> = ({ errorText = "", ...props }) => {
  const { value, label, error, helperText } = props;
  return (
    <MuiTextField value={value} label={label} error={error} helperText={error ? errorText : helperText} {...props} />
  );
};

export default TextField;
