import { FormControl, InputLabel, Select as MUISelect, MenuItem, SelectProps as MuiSelectProps, FormHelperText } from "@mui/material";
import React from "react";

export interface Options {
  value: string;
  label: string;
}

export type SelectProps = MuiSelectProps & { options: Options[]; width?: number | string; helperText?: React.ReactNode; };

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ label, value, id, options, width, onChange, disabled = false, sx, helperText, error = false, required = false, fullWidth = false, ...rest }, ref) => {
    return (
      <FormControl
        sx={{ minWidth: 88, ...(width && { width }), ...(fullWidth && { width: '100%' }) }}
        size="small"
        error={error}
        required={required}
        fullWidth={fullWidth}
      >
        {label && <InputLabel id={id} required={required}>{label}</InputLabel>}

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
          error={error}
        >
          {options.map((option) => (
            <MenuItem color="primary" key={option?.value} value={option.value} disableRipple>
              {option.label}
            </MenuItem>
          ))}
        </MUISelect>
        {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

export default Select;
