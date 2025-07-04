import React from "react";
import { Checkbox as MuiCheckbox, CheckboxProps, FormControlLabel } from "@mui/material";
import { useExtendedTheme } from "../../../../export";

interface CustomCheckboxProps extends CheckboxProps {
  label?: string;
  required?: boolean;
}

const Checkbox: React.FC<CustomCheckboxProps> = ({
  checked,
  id,
  name,
  label,
  required = false,

  ...rest
}) => {
  const theme = useExtendedTheme();

  return label ? (
    <FormControlLabel
      required={required}
      control={<MuiCheckbox checked={checked} id={id} name={name} {...rest} color="primary" />}
      label={label}
    />
  ) : (
    <MuiCheckbox checked={checked} id={id} name={name} {...rest} color="primary" />
  );
};

export default Checkbox;
