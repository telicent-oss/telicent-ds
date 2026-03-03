import { Autocomplete as MuiAutocomplete } from "@mui/material";
import type { AutocompleteProps as MuiAutocompleteProps } from "@mui/material/Autocomplete";
import { forwardRef } from "react";
import TextField from "../TextField/TextField";
import { Chip } from "../../data-display";

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

type MuiSinglePassthrough = Omit<
  MuiAutocompleteProps<Option, false, false, false>,
  "options" | "value" | "onChange" | "renderInput" | "multiple" | "disabled" | "size"
>;

type MuiMultiplePassthrough = Omit<
  MuiAutocompleteProps<Option, true, false, false>,
  "options" | "value" | "onChange" | "renderInput" | "multiple" | "disabled" | "size"
>;

type SingleAutoCompleteProps = SingleProps & MuiSinglePassthrough;
type MultipleAutoCompleteProps = MultipleProps & MuiMultiplePassthrough;

export type AutoCompleteProps = SingleAutoCompleteProps | MultipleAutoCompleteProps;

const SingleAutocomplete = forwardRef<HTMLDivElement, SingleAutoCompleteProps>(
  (
    {
      label,
      value,
      onChange,
      options,
      placeholder,
      disabled,
      error,
      helperText,
      fullWidth = true,
      size = "small",
      required = false,
      id,
      ...rest
    },
    ref,
  ) => {
    return (
      <MuiAutocomplete
        {...rest}
        id={id}
        ref={ref}
        options={options}
        multiple={false}
        value={value}
        onChange={(_, next) => onChange(next ?? null)}
        fullWidth={fullWidth}
        size={size}
        disabled={disabled}
        isOptionEqualToValue={(option, val) => option.value === val.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            size={size}
            required={required}
          />
        )}
      />
    );
  },
);

const MultipleAutocomplete = forwardRef<HTMLDivElement, MultipleAutoCompleteProps>(
  (
    {
      label,
      value,
      onChange,
      options,
      placeholder,
      disabled,
      error,
      helperText,
      fullWidth = true,
      size = "small",
      required = false,
      id,
      ...rest
    },
    ref,
  ) => {
    return (
      <MuiAutocomplete
        {...rest}
        id={id}
        ref={ref}
        options={options}
        multiple
        value={value}
        onChange={(_, next) => onChange(next ?? [])}
        fullWidth={fullWidth}
        size={size}
        disabled={disabled}
        isOptionEqualToValue={(option, val) => option.value === val.value}
        renderTags={(selectedOptions, getTagProps) =>
          selectedOptions.map((option, index) => (
            <Chip
              variant="filled"
              color="default"
              size="small"
              label={option.label}
              {...getTagProps({ index })}
              sx={{ pl: 1 }}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            size={size}
            required={required}
          />
        )}
      />
    );
  },
);

const Autocomplete = forwardRef<HTMLDivElement, AutoCompleteProps>((props, ref) => {
  return props.multiple ? <MultipleAutocomplete {...props} ref={ref} /> : <SingleAutocomplete {...props} ref={ref} />;
});

export default Autocomplete;
