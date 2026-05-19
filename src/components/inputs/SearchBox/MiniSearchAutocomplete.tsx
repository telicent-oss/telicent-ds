import React, { forwardRef } from "react";
import { styled } from "@mui/system";
import useAutocomplete, { UseAutocompleteProps } from "@mui/material/useAutocomplete";
import OutlinedInput from "@mui/material/OutlinedInput";
import MUICircularProgress from "@mui/material/CircularProgress";
import MUIPopper from "@mui/material/Popper";
import MUIPaper from "@mui/material/Paper";
import MUIList from "@mui/material/List";
import MUIListItem from "@mui/material/ListItem";
import MUIListItemText from "@mui/material/ListItemText";
import MUIListItemButton from "@mui/material/ListItemButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles";
import { useForkRef } from "@mui/material/utils";

import FlexBox from "../../layout/FlexBox";
import IconButton from "../../buttons/Button/IconButton";
import SearchIcon from "../../data-display/FontAwesomeIcons/SearchIcon";
import { ProgressProps } from "./MiniSearchBox";

const StyledPopper = styled("div")({
  position: "relative",
  width: 360,
});

type AutocompleteOption = { label: string; isRecentSearch: boolean };

export interface MiniSearchAutocompleteProps<
  Value extends AutocompleteOption = AutocompleteOption,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
> extends UseAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo> {
  /**
   * Element placed after the search icon
   */
  endIcon?: React.ReactNode;
  /**
   * If `true`, the `input` will indicate an error.
   */
  error?: boolean;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * If true, a loading indicator will be visible.
   */
  loading?: boolean;
  /**
   * If `true`, disables the entire control (input, popper trigger, and action).
   */
  disabled?: boolean;
  /**
   * Name attribute of the input element.
   */
  name?: string;
  /**
   * 	The short hint displayed in the input before the user enters a value.
   */
  placeholder?: string;
  /**
   * Props which will be applied to the circular progress indicator when loading
   * is set to true
   */
  progressProps?: ProgressProps;
  /**
   * Render the option
   * @param props The props to apply on the li element.
   * @param option The option to render.
   * @returns
   */
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement> & {
      key: any;
    },
    option: Value
  ) => React.ReactNode;
  /**
   * Callback fired when the search button is clicked
   *
   * `(event: React.MouseEvent<HTMLButtonElement>) => void;`
   */
  onSearch?: React.MouseEventHandler<HTMLElement>;
  /**
   * Callback fired when the a key is pressed
   *
   * `(event: React.KeyboardEvent<HTMLButtonElement>) => void;`
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const MiniSearchAutocomplete = forwardRef(function Autocomplete<
  Value extends AutocompleteOption = AutocompleteOption,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
>(
  props: MiniSearchAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    endIcon,
    error,
    id,
    loading,
    disabled,
    name,
    placeholder,
    progressProps,
    renderOption,
    onSearch,
    onKeyDown,
    freeSolo = true as FreeSolo,
    ...autocompleteProps
  } = props;

  const theme = useTheme();

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    popupOpen,
    anchorEl,
    setAnchorEl,
    groupedOptions,
  } = useAutocomplete<Value, Multiple, DisableClearable, FreeSolo>({
    freeSolo,
    ...autocompleteProps,
  });

  const cancelIcon = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${encodeURIComponent(
    theme.palette.primary.main
  )}'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>") no-repeat center`;

  const rootRef = useForkRef(ref, setAnchorEl);

  return (
    <div>
      <OutlinedInput
        ref={rootRef}
        slotProps={{ root: { ...getRootProps() } }}
        // ensure the native input has the disabled attribute (for .toBeDisabled())
        inputProps={{ ...getInputProps(), disabled }}
        size="small"
        type="search"
        disabled={disabled}
        sx={{
          width: 360, // Style the native clear ("X") icon
          '& input[type="search"]::-webkit-search-cancel-button': {
            WebkitAppearance: "none",
            height: "1em",
            width: "1em",
            cursor: "pointer",
            background: cancelIcon,
          },
        }}
        id={id}
        onKeyDown={onKeyDown}
        name={name}
        error={error}
        endAdornment={
          <>
            <FlexBox direction="row" spacing={0.5}>
              {loading ? (
                <MUICircularProgress id="loading" size="20px" {...progressProps} />
              ) : (
                <IconButton size="small" onClick={onSearch} aria-label="search" disabled={disabled}>
                  <SearchIcon fontSize="inherit" />
                </IconButton>
              )}
              {endIcon}
            </FlexBox>
          </>
        }
        placeholder={placeholder || "Search"}
      />
      {anchorEl && (
        <MUIPopper open={popupOpen && !disabled} anchorEl={anchorEl} slots={{ root: StyledPopper }}>
          {(groupedOptions as Value[]).length > 0 ? (
            <MUIPaper
              elevation={3}
              sx={{
                backgroundColor: theme.palette.mode === "dark" ? "#2A2A2A" : "#eee",
                backgroundImage: "none",
                width: 360,
                padding: 2,
                marginTop: 1,
              }}
            >
              <FlexBox rowGap={1}>
                <MUIList sx={{ maxHeight: 400, overflow: "auto" }} {...getListboxProps()}>
                  {(groupedOptions as Value[]).map((option, index) => {
                    const optionProps = getOptionProps({
                      option,
                      index,
                    });

                    if (renderOption) {
                      return renderOption(optionProps, option);
                    }

                    const { key, ...props } = optionProps;
                    return (
                      <MUIListItem key={`${key}-${index}`} disablePadding {...props}>
                        <MUIListItemButton
                          disabled={disabled}
                          onClick={(event) => {
                            if (disabled) return;
                            if (onSearch) {
                              onSearch(event);
                            }
                          }}
                        >
                          <FlexBox direction="row" columnGap={1} alignItems="center">
                            {option.isRecentSearch ? <FontAwesomeIcon icon={faClockRotateLeft} /> : null}
                            <MUIListItemText primary={option.label} />
                          </FlexBox>
                        </MUIListItemButton>
                      </MUIListItem>
                    );
                  })}
                </MUIList>
              </FlexBox>
            </MUIPaper>
          ) : null}
        </MUIPopper>
      )}
    </div>
  );
});

// preserve generic component signature so stories can still use `<MiniSearchAutocomplete<...>>`
export default MiniSearchAutocomplete as <
  Value extends AutocompleteOption = AutocompleteOption,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
>(
  props: MiniSearchAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo> & {
    ref?: React.Ref<HTMLDivElement>;
  }
) => React.ReactElement | null;