import { default as React } from '../../../../../node_modules/react';
import { TextFieldProps } from '@mui/material';
export type InputText = TextFieldProps & {
    value: string;
    onSave: (value: string) => void;
    errorText?: string;
    fullWidth?: boolean;
};
declare const EditableTextField: React.FC<InputText>;
export default EditableTextField;
