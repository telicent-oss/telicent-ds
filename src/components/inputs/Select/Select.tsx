import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
  SelectProps as MuiSelectProps,
  FormHelperText,
} from "@mui/material";
import React, { useId } from "react";

export interface Options {
  value: string | number;
  label: string;
}

/**
 * Arguments passed to the `footer` render function.
 */
export type SelectFooterArgs = {
  /** Closes the dropdown — call this before opening a modal, for example. */
  closeMenu: () => void;
};

export type SelectProps = MuiSelectProps & {
  options: Options[];
  width?: number | string;
  helperText?: React.ReactNode;
  /**
   * Optional content rendered below the option list, separated by a
   * divider. Use this for inline actions like "+ Create new …".
   *
   * Pass a render function to receive `closeMenu`, so your click handler
   * can dismiss the dropdown after acting (e.g. before opening a modal).
   * Pass a plain ReactNode if you don't need to close the menu yourself.
   *
   * The footer is NOT selectable as a value — clicking it will not fire
   * `onChange`.
   */
  footer?: React.ReactNode | ((args: SelectFooterArgs) => React.ReactNode);
};

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      label,
      value,
      id,
      options,
      width,
      onChange,
      disabled = false,
      sx,
      helperText,
      error = false,
      required = false,
      fullWidth = false,
      footer,
      ...rest
    },
    ref,
  ) => {
    const reactId = useId();
    const selectedId = id ?? `select-${reactId}`;
    const labelId = label ? `${selectedId}-label` : undefined;
    const helperTextId = helperText ? `${selectedId}-helper-text` : undefined;

    // Own the open state so the footer can dismiss the menu via `closeMenu`.
    // If the caller controls `open`, defer to them and just mirror their
    // open/close callbacks.
    const [openInternal, setOpenInternal] = React.useState(false);
    const isOpenControlled = "open" in rest;
    const openProp = isOpenControlled ? rest.open : openInternal;

    const handleOpen: NonNullable<MuiSelectProps["onOpen"]> = (event) => {
      setOpenInternal(true);
      rest.onOpen?.(event);
    };
    const handleClose: NonNullable<MuiSelectProps["onClose"]> = (event) => {
      setOpenInternal(false);
      rest.onClose?.(event);
    };
    const closeMenu = React.useCallback(() => setOpenInternal(false), []);

    return (
      <FormControl
        sx={{ minWidth: 88, ...(width && { width }), ...(fullWidth && { width: "100%" }), ...sx }}
        size="small"
        error={error}
        required={required}
        fullWidth={fullWidth}
        disabled={disabled}
      >
        {label && (
          <InputLabel id={labelId} required={required} htmlFor={selectedId}>
            {label}
          </InputLabel>
        )}

        <MUISelect
          {...rest}
          open={openProp}
          onOpen={handleOpen}
          onClose={handleClose}
          color="primary"
          variant="outlined"
          labelId={labelId}
          label={label}
          id={selectedId}
          value={value}
          onChange={onChange}
          inputRef={ref}
          aria-describedby={helperText ? helperTextId : undefined}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value} disableRipple>
              {option.label}
            </MenuItem>
          ))}
          {footer && options.length > 0 && (
            <Divider
              key="__ds-select-footer-divider"
              component="li"
              role="separator"
              sx={{ my: 0.5 }}
            />
          )}
          {footer && (
            <Box
              key="__ds-select-footer"
              component="li"
              role="presentation"
              sx={{ px: 1.5, py: 0.5, listStyle: "none" }}
              // Stop propagation so MUI's Select doesn't treat a click inside
              // the footer as an option selection. The footer's own onClick
              // handlers still fire.
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                // Don't let Enter/Space inside the footer trigger Select's
                // option-selection keyboard handlers.
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation();
                }
              }}
            >
              {typeof footer === "function" ? footer({ closeMenu }) : footer}
            </Box>
          )}
        </MUISelect>
        {helperText && (
          <FormHelperText error={error} id={helperTextId}>
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    );
  },
);

export default Select;
