import React from "react";
import {
  DateTimePicker as MuiDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
} from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SxProps, TextFieldProps } from "@mui/material";
import { Dayjs } from "dayjs";

export type DateTimePickerProps = MUIDateTimePickerProps & {
  sx?: SxProps;
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
  disabled = false,
  helperText,
  textFieldProps = {},
  minDateTime,
  maxDateTime,
  fullWidth,
  errorMsg,
  error = Boolean(errorMsg),
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDateTimePicker
        label={label}
        value={value}
        onChange={onChange}
        disabled={disabled}
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
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
