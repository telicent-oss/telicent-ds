import React from "react";
import FormHelperTextRaw, {
  FormHelperTextProps,
} from "@mui/material/FormHelperText";

export const FormHelperText: React.FC<FormHelperTextProps> = (props) => (
  <FormHelperTextRaw {...props} />
);

export type { FormHelperTextProps };

export default FormHelperText;
