import { SelectChangeEvent } from '@mui/material';
import { default as React } from '../../../../../node_modules/react';

export interface SelectProps {
    label?: string;
    value: string;
    id: string;
    options: Options[];
    width?: number;
    onChange?: (event: SelectChangeEvent) => void;
    disabled?: boolean;
}
export interface Options {
    value: string;
    label: string;
}
declare const Select: React.FC<SelectProps>;
export default Select;
