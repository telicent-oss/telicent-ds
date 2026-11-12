import FormControlRaw, { FormControlProps } from "@mui/material/FormControl";
import React from "react";

export const FormControl: React.FC<FormControlProps> = (props) => (
  <FormControlRaw {...props} />
);

export type { FormControlProps };

export default FormControl;
