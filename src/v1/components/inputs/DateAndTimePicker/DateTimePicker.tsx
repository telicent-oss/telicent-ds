import React from "react";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField, TextFieldProps } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

export interface DateTimePickerProps {
  label?: string;
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  textFieldProps?: TextFieldProps;
  minDateTime?: Dayjs;
  maxDateTime?: Dayjs;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  label = "Select date & time",
  value,
  onChange,
  disabled = false,
  error,
  helperText,
  textFieldProps = {},
  minDateTime,
  maxDateTime,
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
            fullWidth: true,
            error,
            helperText,
            ...textFieldProps,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
