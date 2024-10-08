import React, { useState } from "react";
import MUICircularProgress, {
  CircularProgressProps as MUICircularProgressProps,
} from "@mui/material/CircularProgress";
import OutlinedInput from "@mui/material/OutlinedInput";

import { DownArrowIcon, SearchIcon } from "../../data-display";
import { FlexBox } from "../../layout";
import IconButton from "../Button/IconButton";

export interface ProgressProps
  extends Omit<
    MUICircularProgressProps,
    "classes" | "color" | "size" | "sx" | "thickness"
  > {}

export interface SearchInputBaseProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    | "children"
    | "color"
    | "defaultValue"
    | "onBlur"
    | "onChange"
    | "onFocus"
    | "onInvalid"
    | "onKeyDown"
    | "onKeyUp"
  > {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus?: boolean;
  /**
   * If `true`, the `input` will indicate an error.
   */
  error?: boolean;
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<any>;
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows?: string | number;
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows?: string | number;
  /**
   * If true, a text area auto size element will be rendered
   * @default false;
   */
  multiline?: boolean;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * Callback fired when the `input` is blurred.
   *
   * `(event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;`
   * Note: The first argument (event) might be undefined.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /**
   * Callback fired when the value is changed
   *
   * `(event: React.ChangeEvent) => void`
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /**
   * `(event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;`
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /**
   * `(event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => void;`
   */
  onKeyDown?: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  /**
   * `(event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => void;`
   */
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   *
   * `(event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void;`
   */
  onInvalid?: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder?: string;
  /**
   * Props which will be applied to the circular progress indicator when loading
   * is set to true
   */
  progressProps?: ProgressProps;
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: string | number;
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: unknown;
}

export interface MiniSearchBoxProps extends SearchInputBaseProps {
  /**
   * If true, a loading indicator will be visible
   */
  loading?: boolean;
  /**
   * If true, a arrow down button will be visible
   */
  showDownArrowButton?: boolean;
  /**
   * Callback fired when the search button is clicked
   *
   * `(event: React.MouseEvent<HTMLButtonElement>) => void;`
   */
  onSearch?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Callback fired when the down arrow button is clicked
   *
   * `(event: React.MouseEvent<HTMLButtonElement>) => void;`
   */
  onTogglePopOver?: React.MouseEventHandler<HTMLButtonElement>;
}

const MiniSearchBox = (props: MiniSearchBoxProps) => {
  const {
    loading = false,
    showDownArrowButton = false,
    onSearch,
    onTogglePopOver,
    onFocus,
    onBlur,
    progressProps,
    ...inputProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused(true);

    if (onFocus) {
      onFocus(event);
    }
  };

  const handleOnBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <OutlinedInput
      size="small"
      type="search"
      endAdornment={
        <>
          <FlexBox direction="row" spacing={0.5}>
            {loading ? (
              <MUICircularProgress
                color={isFocused ? "primary" : "inherit"}
                size="20px"
                {...progressProps}
              />
            ) : (
              <IconButton
                size="small"
                onClick={onSearch}
                color={isFocused ? "primary" : undefined}
                aria-label="search"
              >
                <SearchIcon fontSize="inherit" />
              </IconButton>
            )}

            {showDownArrowButton && (
              <IconButton
                size="small"
                aria-label="toggle pop over"
                onClick={onTogglePopOver}
              >
                <DownArrowIcon fontSize="inherit" />
              </IconButton>
            )}
          </FlexBox>
        </>
      }
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      {...inputProps}
    />
  );
};

export default MiniSearchBox;
