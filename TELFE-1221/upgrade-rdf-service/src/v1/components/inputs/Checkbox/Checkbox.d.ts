import { default as React } from '../../../../../node_modules/react';
import { CheckboxProps } from '@mui/material';

interface CustomCheckboxProps extends CheckboxProps {
    label?: string;
    required?: boolean;
}
declare const Checkbox: React.FC<CustomCheckboxProps>;
export default Checkbox;
