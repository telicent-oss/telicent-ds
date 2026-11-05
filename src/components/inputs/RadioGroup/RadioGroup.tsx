import MuiRadioGroup, { RadioGroupProps } from "@mui/material/RadioGroup";
import React from "react";

export const RadioGroup: React.FC<RadioGroupProps> = (props) => (
  <MuiRadioGroup {...props} />
);

export type { RadioGroupProps };

export default RadioGroup;
