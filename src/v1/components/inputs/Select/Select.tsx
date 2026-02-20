import {
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
  SelectProps as MuiSelectProps,
  FormHelperText,
} from "@mui/material";
import React from "react";

export interface Options {
  id?: React.Key;
  value?: any;
  label: React.ReactNode | string;
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
          multiple={false}
          color="primary"
          variant="outlined"
          IconComponent={(props) => <FontAwesomeIcon icon={faAngleDown} {...props} />}
          labelId={labelId}
          label={label}
          id={selectedId}
          value={value}
          onChange={onChange}
          inputRef={ref}
          aria-describedby={helperText ? helperTextId : undefined}
        >
          {options.map((option, idx) => (
            <MenuItem
              key={option.id ?? option.value ?? option.label ?? idx}
              value={option.value ?? option.label}
              disableRipple
            >
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
