import React from "react";
import { DatePickerProps as MuiDatePickerProps, DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, TextFieldProps } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

// Decided to expose `error` and `helperText` and related props directly on the component,
// rather than requiring devs to use slotProps.textField.
// This ensures consistency with the rest of our inputs (eg: textField, Select, Checkbox).
// Developers familiar with MUI's pattern of accepting `error` and `helperText` directly will find this API intuitive and predictable,
// reducing cognitive overhead and onboarding time.

export type DatePickerProps = MuiDatePickerProps & {
  label?: string;
  value: Dayjs | null;
  error?: boolean;
  helperText?: string;
  textFieldProps?: TextFieldProps;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  errorMsg?: String;
  fullWidth?: boolean;
};

const DatePicker: React.FC<DatePickerProps> = ({
  label = "Select date",
  value,
  onChange,
  errorMsg,
  error = Boolean(errorMsg),
  helperText,
  textFieldProps = {},
  minDate,
  maxDate,
  fullWidth = false,
  ...rest
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        label={label}
        value={value}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
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

export default DatePicker;
