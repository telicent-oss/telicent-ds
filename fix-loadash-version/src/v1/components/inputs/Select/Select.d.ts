import { SelectProps as MuiSelectProps } from '@mui/material';
import { default as React } from '../../../../../node_modules/react';
export interface Options {
    value: string | number;
    label: string;
}
export type SelectProps = MuiSelectProps & {
    options: Options[];
    width?: number | string;
    helperText?: React.ReactNode;
};
declare const Select: React.ForwardRefExoticComponent<(Omit<import('@mui/material').FilledSelectProps & import('@mui/material').BaseSelectProps<unknown> & {
    options: Options[];
    width?: number | string;
    helperText?: React.ReactNode;
}, "ref"> | Omit<import('@mui/material').StandardSelectProps & import('@mui/material').BaseSelectProps<unknown> & {
    options: Options[];
    width?: number | string;
    helperText?: React.ReactNode;
}, "ref"> | Omit<import('@mui/material').OutlinedSelectProps & import('@mui/material').BaseSelectProps<unknown> & {
    options: Options[];
    width?: number | string;
    helperText?: React.ReactNode;
}, "ref">) & React.RefAttributes<HTMLInputElement>>;
export default Select;
