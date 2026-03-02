import { Autocomplete as MuiAutocomplete } from "@mui/material";
import { forwardRef } from "react";
import TextField from "../TextField/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
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
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
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

type AutoCompleteProps = SingleProps | MultipleProps;

const Autocomplete = forwardRef<HTMLDivElement, AutoCompleteProps>(
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
      multiple = false,
      id,
      ...props
    },
    ref,
  ) => {
    return (
      <MuiAutocomplete<Option, boolean, false, false>
        id={id}
        ref={ref}
        options={options}
        multiple={multiple}
        value={value as any}
        popupIcon={<FontAwesomeIcon icon={faAngleDown} />}
        onChange={(_, next) => onChange((next ?? (multiple ? [] : null)) as any)}
        fullWidth={fullWidth}
        size={size}
        disabled={disabled}
        isOptionEqualToValue={(option, val) => option.value === val.value}
        renderTags={
          multiple
            ? (selectedOptions, getTagProps) =>
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
            : undefined
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
        {...props}
      />
    );
  },
);

export default Autocomplete;
