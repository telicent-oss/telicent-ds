import React from "react";
import MuiRadioGroup, { RadioGroupProps } from "@mui/material/RadioGroup";

export const RadioGroup: React.FC<RadioGroupProps> = (props) => (
  <MuiRadioGroup {...props} />
);

export type { RadioGroupProps };

export default RadioGroup;
