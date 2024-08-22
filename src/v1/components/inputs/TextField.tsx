import React from "react";
import MUITextField, {
  TextFieldProps as MUITextFieldProps,
} from "@mui/material/TextField";

const TextField: React.FC<MUITextFieldProps> = (props) => (
  <MUITextField {...props} />
);

export default TextField;
