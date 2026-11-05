import FormHelperTextRaw, {
  FormHelperTextProps,
} from "@mui/material/FormHelperText";
import React from "react";

export const FormHelperText: React.FC<FormHelperTextProps> = (props) => (
  <FormHelperTextRaw {...props} />
);

export type { FormHelperTextProps };

export default FormHelperText;
