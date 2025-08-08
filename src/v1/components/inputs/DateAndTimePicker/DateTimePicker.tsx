import React from "react";
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
} from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextFieldProps } from "@mui/material";
import { Dayjs } from "dayjs";

// Decided to expose `error` and `helperText` and related props directly on the component,
// rather than requiring devs to use slotProps.textField.
// This ensures consistency with the rest of our inputs (eg: textField, Select, Checkbox).
// Developers familiar with MUI's pattern of accepting `error` and `helperText` directly will find this API intuitive and predictable,
// reducing cognitive overhead and onboarding time.

export type DateTimePickerProps = MUIDateTimePickerProps & {
  textFieldProps?: TextFieldProps;
  helperText?: string;
  fullWidth?: boolean;
  minDateTime?: Dayjs;
  maxDateTime?: Dayjs;
  errorMsg?: string;
  error?: boolean;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  label = "Select date & time",
  value,
  onChange,
  helperText,
  textFieldProps = {},
  minDateTime,
  maxDateTime,
  fullWidth,
  errorMsg,
  error = Boolean(errorMsg),
  ...rest
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDateTimePicker
        label={label}
        value={value}
        onChange={onChange}
        minDateTime={minDateTime}
        maxDateTime={maxDateTime}
        slotProps={{
          textField: {
            fullWidth,
            error,
            helperText: error ? errorMsg : helperText,
            ...textFieldProps,
          },
        }}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
