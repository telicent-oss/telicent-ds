import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete';
export type Option = {
    label: string;
    value: string;
    icon?: React.ReactNode;
};
type BaseProps = {
    id?: string;
    label: string;
    options: Option[];
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    size?: "small" | "medium";
    required?: boolean;
};
type SingleProps = BaseProps & {
    multiple?: false;
    value: Option | null;
    onChange: (value: Option | null) => void;
};
type MultipleProps = BaseProps & {
    multiple: true;
    value: Option[];
    onChange: (value: Option[]) => void;
};
type MuiSinglePassthrough = Omit<MuiAutocompleteProps<Option, false, false, false>, "options" | "value" | "onChange" | "renderInput" | "multiple" | "disabled" | "size">;
type MuiMultiplePassthrough = Omit<MuiAutocompleteProps<Option, true, false, false>, "options" | "value" | "onChange" | "renderInput" | "multiple" | "disabled" | "size">;
type SingleAutoCompleteProps = SingleProps & MuiSinglePassthrough;
type MultipleAutoCompleteProps = MultipleProps & MuiMultiplePassthrough;
export type AutoCompleteProps = SingleAutoCompleteProps | MultipleAutoCompleteProps;
declare const Autocomplete: import('../../../../../node_modules/react').ForwardRefExoticComponent<(Omit<SingleAutoCompleteProps, "ref"> | Omit<MultipleAutoCompleteProps, "ref">) & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Autocomplete;
