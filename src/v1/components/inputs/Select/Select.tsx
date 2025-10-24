import { FormControl, InputLabel, Select as MUISelect, MenuItem, SelectProps as MuiSelectProps } from "@mui/material";
import React from "react";

export interface Options {
  value: string;
  label: string;
}

export type SelectProps = MuiSelectProps & { options: Options[]; width?: number };

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ label, value, id, options, width, onChange, disabled = false, sx, ...rest }, ref) => {
    return (
      <FormControl sx={{ minWidth: 88, width }} size="small">
        {label && <InputLabel id={id}>{label}</InputLabel>}

        <MUISelect
          {...rest}
          color="primary"
          variant="outlined"
          labelId={id}
          label={label}
          id={id}
          value={value}
          disabled={disabled}
          onChange={onChange}
          size="small"
          inputRef={ref}
        >
          {options.map((option) => (
            <MenuItem color="primary" key={option?.value} value={option.value} disableRipple>
              {option.label}
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
    );
  }
);

export default Select;
