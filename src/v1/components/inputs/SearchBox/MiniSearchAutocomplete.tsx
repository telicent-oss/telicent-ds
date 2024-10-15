import React, { forwardRef } from "react";
// import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import { styled } from "@mui/system";
import useAutocomplete, {
  UseAutocompleteProps,
} from "@mui/material/useAutocomplete/useAutocomplete";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import MUICircularProgress, {
  CircularProgressProps as MUICircularProgressProps,
} from "@mui/material/CircularProgress";
import { PopoverPaper } from "@mui/material/Popover/Popover";
import useTheme from "@mui/material/styles/useTheme";
import useForkRef from "@mui/material/utils/useForkRef";
import Popper from "@mui/material/Popper/Popper";
import Paper from "@mui/material/Paper/Paper";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";

import FlexBox from "../../layout/FlexBox";
import IconButton from "../Button/IconButton";
import SearchIcon from "../../data-display/FontAwesomeIcons/SearchIcon";
import { Divider, Text } from "../../data-display";

const StyledPopper = styled("div")({
  position: "relative",
  width: 360,
});

type AutocompleteOption = { label: string };

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
  placeholder?: string;
  suggestionsTitle?: string;
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement> & {
      key: any;
    },
    option: Value
  ) => JSX.Element;
}

const MiniSearchAutocomplete = forwardRef(function Autocomplete<
  Value extends AutocompleteOption = AutocompleteOption,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
>(
  props: MiniSearchAutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo
  >,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    endIcon,
    placeholder,
    renderOption,
    suggestionsTitle,
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
  } = useAutocomplete({ freeSolo, ...autocompleteProps });

  const rootRef = useForkRef(ref, setAnchorEl);

  return (
    <div>
      <OutlinedInput
        ref={rootRef}
        slotProps={{ root: { ...getRootProps() } }}
        inputProps={getInputProps()}
        size="small"
        type="search"
        sx={{ width: 360 }}
        endAdornment={
          <>
            <FlexBox direction="row" spacing={0.5}>
              <IconButton size="small">
                <SearchIcon fontSize="inherit" />
              </IconButton>
              {endIcon}
            </FlexBox>
          </>
        }
        placeholder={placeholder || "Search"}
      />
      {anchorEl && (
        <Popper
          open={popupOpen}
          anchorEl={anchorEl}
          slots={{ root: StyledPopper }}
        >
          {groupedOptions.length > 0 ? (
            <Paper
              elevation={3}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark" ? "#2A2A2A" : "#eee",
                backgroundImage: "none",
                width: 360,
                padding: 2,
                marginTop: 1,
              }}
            >
              <FlexBox rowGap={1}>
                {suggestionsTitle && (
                  <>
                    <Text variant="subtitle1">{suggestionsTitle}</Text>
                    <Divider />
                  </>
                )}
                <List
                  sx={{ maxHeight: 400, overflow: "auto" }}
                  {...getListboxProps()}
                >
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
                      <ListItem key={key} disablePadding {...props}>
                        <ListItemButton>
                          <ListItemText primary={option.label} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </FlexBox>
            </Paper>
          ) : null}
        </Popper>
      )}
    </div>
  );
});

export default MiniSearchAutocomplete;
