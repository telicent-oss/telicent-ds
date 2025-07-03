import { SelectProps as MuiSelectProps } from '@mui/material';
import { default as React } from '../../../../../node_modules/react';

export interface Options {
    value: string;
    label: string;
}
export type SelectProps = MuiSelectProps & {
    options: Options[];
    width?: number;
};
declare const Select: React.FC<SelectProps>;
export default Select;
