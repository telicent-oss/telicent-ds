import React from "react";
import FormControlRaw, { FormControlProps } from "@mui/material/FormControl";

export const FormControl: React.FC<FormControlProps> = (props) => (
  <FormControlRaw {...props} />
);

export type { FormControlProps };

export default FormControl;
