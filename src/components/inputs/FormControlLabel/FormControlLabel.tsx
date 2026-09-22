import React from "react";
import FormControlLabelRaw, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";

export const FormControlLabel: React.FC<FormControlLabelProps> = (props) => (
  <FormControlLabelRaw {...props} />
);

export type { FormControlLabelProps };

export default FormControlLabel;
