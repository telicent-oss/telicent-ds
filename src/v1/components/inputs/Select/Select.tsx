import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
  SelectProps as MuiSelectProps,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";
import React, { useId } from "react";

export interface Options {
  id?: React.Key;
  value?: any;
  label: React.ReactNode | string;
}

export type SelectProps = MuiSelectProps & {
  options: Options[];
  width?: number | string;
  helperText?: React.ReactNode;
  hiddenLabel?: boolean;
  readOnly?: boolean;
  selectId?: string;
};

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      label,
      value,
      id,
      selectId,
      options,
      width,
      onChange,
      disabled = false,
      sx,
      helperText,
      error = false,
      required = false,
      fullWidth = false,
      hiddenLabel = false,
      inputProps,
      multiple,
      ...rest
    },
    ref,
  ) => {
    const reactId = useId();
    const selectedId = selectId ?? `select-${reactId}`;
    const labelId = !hiddenLabel && label ? `${selectedId}-label` : undefined;
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
