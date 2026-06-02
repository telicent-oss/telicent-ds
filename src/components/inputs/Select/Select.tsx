import {
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
  SelectProps as MuiSelectProps,
  FormHelperText,
} from "@mui/material";
import React, { useId } from "react";

export interface Options {
  value: string | number;
  label: string;
}

export type SelectProps = MuiSelectProps & {
  options: Options[];
  width?: number | string;
  helperText?: React.ReactNode;
};

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      label,
      value,
      id,
      options,
      width,
      onChange,
      disabled = false,
      sx,
      helperText,
      error = false,
      required = false,
      fullWidth = false,
      ...rest
    },
    ref,
  ) => {
    const reactId = useId();
    const selectedId = id ?? `select-${reactId}`;
    const labelId = label ? `${selectedId}-label` : undefined;
    const helperTextId = helperText ? `${selectedId}-helper-text` : undefined;

    return (
      <FormControl
        sx={{ minWidth: 88, ...(width && { width }), ...(fullWidth && { width: "100%" }), ...sx }}
        size="small"
        error={error}
        required={required}
        fullWidth={fullWidth}
        disabled={disabled}
      >
        {label && (
          <InputLabel id={labelId} required={required} htmlFor={selectedId}>
            {label}
          </InputLabel>
        )}

        <MUISelect
          {...rest}
          color="primary"
          variant="outlined"
          labelId={labelId}
          label={label}
          id={selectedId}
          value={value}
          onChange={onChange}
          inputRef={ref}
          aria-describedby={helperText ? helperTextId : undefined}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value} disableRipple>
              {option.label}
            </MenuItem>
          ))}
        </MUISelect>
        {helperText && (
          <FormHelperText error={error} id={helperTextId}>
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    );
  },
);

export default Select;
