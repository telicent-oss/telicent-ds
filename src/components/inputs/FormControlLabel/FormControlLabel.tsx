import FormControlLabelRaw, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import React from "react";

export const FormControlLabel: React.FC<FormControlLabelProps> = (props) => (
  <FormControlLabelRaw {...props} />
);

export type { FormControlLabelProps };

export default FormControlLabel;
