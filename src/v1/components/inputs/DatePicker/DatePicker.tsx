import React from "react";
import { DatePickerProps as MuiDatePickerProps, DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, TextFieldProps } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

/**
 * ⚠️ DIVERGENCE:
 * We’re intentionally breaking the “no API changes” guideline here.
 *
 * Background:
 * This control isn’t a native MUI component, even though it comes from the @mui scope.
 * Out of the box, the `x-date-pickers` API requires devs to wire validation through `slotProps.textField`,
 * which is inconsistent with the rest of our MUI-like inputs.
 *
 * What:
 * Exposed `error`, `helperText`, and related props directly on the component.
 *
 * Why:
 * - Aligns this component’s API with other inputs in our DS (TextField, Select, Checkbox, etc.).
 * - Matches MUI’s common pattern of accepting `error` and `helperText` at the top level, making it more intuitive.
 * - Simplifies validation wiring, avoiding the need to engage with `slotProps.textField`.
 * - Reduces cognitive overhead and onboarding time for developers familiar with MUI conventions.
 *
 * Approved by Ash & Vee.
 */

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
  errorMsg,
  helperText,
  error = Boolean(errorMsg),
  textFieldProps = {},
  fullWidth = false,
  ...rest
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        label={label}
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
