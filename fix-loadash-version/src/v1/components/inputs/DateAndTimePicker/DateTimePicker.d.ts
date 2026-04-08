import { default as React } from '../../../../../node_modules/react';
import { DateTimePickerProps as MUIDateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { TextFieldProps } from '@mui/material';
import { Dayjs } from 'dayjs';
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
export type DateTimePickerProps = MUIDateTimePickerProps & {
    textFieldProps?: TextFieldProps;
    helperText?: string;
    fullWidth?: boolean;
    minDateTime?: Dayjs;
    maxDateTime?: Dayjs;
    errorMsg?: string;
    error?: boolean;
};
declare const DateTimePicker: React.FC<DateTimePickerProps>;
export default DateTimePicker;
