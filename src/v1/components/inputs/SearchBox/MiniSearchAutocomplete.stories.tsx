import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import MiniSearchAutocomplete, { MiniSearchAutocompleteProps } from "./MiniSearchAutocomplete";
import {
  Divider,
  DownArrowIcon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  PlusCircleIcon,
  Text,
} from "../../data-display";
import IconButton from "../../buttons/Button/IconButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { FlexBox } from "../../layout";
import PopOver from "../../surfaces/PopOver/Popover";
import IESType from "../../data-display/IESType/IESType";

type LabelString = { id: string; label: string; isRecentSearch: boolean };

// This component is created to specify MiniSearchAutocompleteProps generic parameters
const StoryExample = (props: MiniSearchAutocompleteProps<LabelString, false, false, true>) => (
  <MiniSearchAutocomplete<LabelString, false, false, true> {...props} />
);

const meta = {
  title: "Inputs/Search/MiniSearchAutocomplete",
  component: StoryExample,
  tags: ["autodocs"],
} satisfies Meta<typeof StoryExample>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Recent searches will be displayed when `isRecentSearch` has been set to true in `options`
 */
export const RecentSearches: Story = {
  args: {
    options: [
      {
        id: "telicent-storybook/anakin-solo",
        label: "Anakin Solo",
        isRecentSearch: true,
      },
      {
        id: "telicent-storybook/boba-fett",
        label: "Boba Fett",
        isRecentSearch: true,
      },
      { id: "telicent-storybook/c-3po", label: "C-3PO", isRecentSearch: true },
      {
        id: "telicent-storybook/ben-skywalker",
        label: "Ben Skywalker",
        isRecentSearch: true,
      },
      { id: "telicent-storybook/durge", label: "Durge", isRecentSearch: true },
      {
        id: "telicent-storybook/cad-bane",
        label: "Cad Bane",
        isRecentSearch: true,
      },
      {
        id: "telicent-storybook/darth-vader",
        label: "Darth Vader",
        isRecentSearch: true,
      },
      {
        id: "telicent-storybook/chewbacca",
        label: "Chewbacca",
        isRecentSearch: true,
      },
      {
        id: "telicent-storybook/han-solo",
        label: "Han Solo",
        isRecentSearch: true,
      },
      {
        id: "telicent-storybook/princess-leia",
        label: "Princess Leia",
        isRecentSearch: true,
      },
      { id: "telicent-storybook/yoda", label: "Yoda", isRecentSearch: true },
      {
        id: "telicent-storybook/quinlan-vos",
        label: "Quinlan Vos",
        isRecentSearch: true,
      },
    ],
    placeholder: "Search",
  },
  render: (args: Story["args"]) => <StoryExample {...args} />,
};

/**
 * This example shows how suggestions from typeahead and the user's recent
 * searches should be displayed. Recent searches should take priority over
 * typeahead suggestions. Type solo to the result.
 */
export const SearchResults: Story = {
  args: {
    ...RecentSearches.args,
    options: [
      ...RecentSearches.args.options,
      {
        id: "telicent-storybook/jacen-solo",
        label: "Jacen Solo",
        isRecentSearch: false,
      },
      {
        id: "telicent-storybook/jaina-solo",
        label: "Jaina Solo",
        isRecentSearch: false,
      },
    ],
    endIcon: (
      <IconButton size="small" aria-label="toggle pop over">
        <DownArrowIcon fontSize="inherit" />
      </IconButton>
    ),
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [showPopOver, setShowPopOver] = useState(false);
    const results = [
      {
        id: "telicent-storybook/anakin-solo",
        label: "Anakin Solo",
        type: "Person",
        iconClass: "fa-solid fa-person",
      },
      {
        id: "telicent-storybook/han-solo",
        label: "Han Solo",
        type: "Person",
        iconClass: "fa-solid fa-person",
      },
      {
        id: "telicent-storybook/jacen-solo",
        label: "Jacen Solo",
        type: "Person",
        iconClass: "fa-solid fa-person",
      },
      {
        id: "telicent-storybook/jaina-solo",
        label: "Jaina Solo",
        type: "Person",
        iconClass: "fa-solid fa-person",
      },
    ];

    const openPopUp = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setShowPopOver(true);
    };

    const togglePopUp = () => {
      setShowPopOver((show) => !show);
    };

    return (
      <div>
        <StoryExample
          {...args}
          endIcon={
            <IconButton size="small" aria-label="toggle pop over" onClick={openPopUp}>
              <DownArrowIcon rotation={showPopOver ? 180 : undefined} fontSize="inherit" />
            </IconButton>
          }
        />
        <PopOver
          id="search-popover"
          open={showPopOver}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{ vertical: -10, horizontal: 320 }}
          width={360}
          onClose={togglePopUp}
        >
          <FlexBox rowGap={1}>
            <Text variant="subtitle1">Search results</Text>
            <Divider />
            {results.map((result) => (
              <ListItem key={result.id} disablePadding>
                <ListItemButton role="undefined" disableRipple>
                  <ListItemIcon>
                    <IESType backgroundColor="black" borderColor="yellow" color="yellow" iconClass={result.iconClass} />
                  </ListItemIcon>
                  <ListItemText primary={result.label} secondary={result.type} />
                  <IconButton edge="end" aria-label="delete" size="small">
                    <PlusCircleIcon fontSize="inherit" />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            ))}
          </FlexBox>
        </PopOver>
      </div>
    );
  },
};
