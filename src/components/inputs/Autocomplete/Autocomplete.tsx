import { Autocomplete as MuiAutocomplete } from "@mui/material";
import type { AutocompleteProps as MuiAutocompleteProps } from "@mui/material/Autocomplete";
import { forwardRef } from "react";

import { Chip } from "../../data-display";
import TextField from "../TextField/TextField";

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
  /**
   * Values the user cannot remove. Their chips have no delete button, and they are put back
   * whatever the change, including clear-all.
   */
  lockedValues?: string[];
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
SingleAutocomplete.displayName = "SingleAutocomplete";

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
      lockedValues = [],
      ...rest
    },
    ref,
  ) => {
    const isLocked = (option: Option) => lockedValues.includes(option.value);
    const locked = lockedValues.flatMap((lockedValue) => {
      const option = value.find((o) => o.value === lockedValue) ?? options.find((o) => o.value === lockedValue);
      return option ? [option] : [];
    });
    return (
      <MuiAutocomplete
        {...rest}
        id={id}
        ref={ref}
        options={options}
        multiple
        value={value}
        onChange={(_, next) => onChange([...locked, ...(next ?? []).filter((option) => !isLocked(option))])}
        fullWidth={fullWidth}
        size={size}
        disabled={disabled}
        isOptionEqualToValue={(option, val) => option.value === val.value}
        renderTags={(selectedOptions, getTagProps) =>
          selectedOptions.map((option, index) => {
            // React warns when a props object holding `key` is spread into JSX.
            const { key, onDelete, ...tagProps } = getTagProps({ index });
            return (
              <Chip
                key={key}
                variant="filled"
                color="default"
                size="small"
                label={option.label}
                {...tagProps}
                // A removable chip is a button, which marks itself disabled; a locked one is not.
                aria-disabled={tagProps.disabled || undefined}
                onDelete={isLocked(option) ? undefined : onDelete}
                sx={{ pl: 1 }}
              />
            );
          })
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
MultipleAutocomplete.displayName = "MultipleAutocomplete";

const Autocomplete = forwardRef<HTMLDivElement, AutoCompleteProps>((props, ref) => {
  return props.multiple ? <MultipleAutocomplete {...props} ref={ref} /> : <SingleAutocomplete {...props} ref={ref} />;
});
Autocomplete.displayName = "Autocomplete";

export default Autocomplete;
