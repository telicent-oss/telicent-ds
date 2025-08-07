import React from "react";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, TextFieldProps } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

export interface DatePickerProps {
  label?: string;
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  textFieldProps?: TextFieldProps;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label = "Select date",
  value,
  onChange,
  disabled = false,
  error,
  helperText,
  textFieldProps = {},
  minDate,
  maxDate,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        label={label}
        value={value}
        onChange={onChange}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
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

export default DatePicker;
