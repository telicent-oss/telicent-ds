// import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { fn, userEvent, within } from "@storybook/test";

import MiniSearchAutocomplete from "./MiniSearchAutocomplete";
import {
  ClockRotateLeftIcon,
  Divider,
  DownArrowIcon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  PlayIcon,
  PlusCircleIcon,
  Text,
} from "../../data-display";
import IconButton from "../Button/IconButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Box from "@mui/material/Box/Box";
import { FlexBox } from "../../layout";
import { useState } from "react";
import PopOver from "../../surfaces/PopOver/Popover";

type SearchResultOption = { label: string; type: string; iconClass: string };
type LabelString = { label: string };

const meta = {
  title: "Inputs/Search/MiniSearchAutocomplete",
  component: MiniSearchAutocomplete<LabelString | SearchResultOption, false, false, true>,
  tags: ["autodocs"],
  // args: {
  //   onSearch: fn(),
  //   onTogglePopOver: fn(),
  // },
} satisfies Meta<typeof MiniSearchAutocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RecentSearches: Story = {
  args: {
    options: [
      { label: "Anakin Solo" },
      { label: "Boba Fett" },
      { label: "C-3PO" },
      { label: "Ben Skywalker" },
      { label: "Durge" },
      { label: "Cad Bane" },
      { label: "Darth Vader" },
      { label: "Chewbacca" },
      { label: "Han Solo" },
      { label: "Princess Leia" },
      { label: "Yoda" },
      { label: "Quinlan Vos" },
    ],
    placeholder: "Search",
    suggestionsTitle: "Recent Searches",
    renderOption: (props, option) => {
      const searchResultOption = option as SearchResultOption;
      const { key, ...optionProps } = props;
      return (
        <ListItem key={key} {...optionProps} disablePadding>
          <ListItemButton>
            <FlexBox direction="row" columnGap={1} alignItems="center">
              <i className="fa-solid fa-clock-rotate-left"></i>
              <ListItemText
                primary={searchResultOption.label}
                secondary={searchResultOption.type}
              />
            </FlexBox>
          </ListItemButton>
        </ListItem>
      );
    },
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   await userEvent.type(canvas.getByRole("searchbox"), "River Nile");
  //   await userEvent.click(canvas.getByRole("button", { name: "search" }));
  // },
};

export const SearchResults: Story = {
  args: {
    ...RecentSearches.args,
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
      { label: "Anakin Solo", type: "Person", iconClass: "fa-solid fa-person" },
      { label: "Han Solo", type: "Person", iconClass: "fa-solid fa-person" },
      { label: "Jacen Solo", type: "Person", iconClass: "fa-solid fa-person" },
      { label: "Jaina Solo", type: "Person", iconClass: "fa-solid fa-person" },
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
        <MiniSearchAutocomplete
          {...args}
          endIcon={
            <IconButton
              size="small"
              aria-label="toggle pop over"
              onClick={openPopUp}
            >
              <DownArrowIcon
                rotation={showPopOver ? 180 : undefined}
                fontSize="inherit"
              />
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
              <ListItem key={result.label} disablePadding>
                <ListItemButton role="undefined" disableRipple>
                  <ListItemIcon>
                    <div
                      css={{
                        backgroundColor: "black",
                        color: "yellow",
                        borderColor: "yellow",
                        borderRadius: 9999,
                        width: 34,
                        height: 34,
                        borderWidth: 2,
                        borderStyle: "solid",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i className={result.iconClass} />
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={result.label}
                    secondary={result.type}
                  />
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

// export const SearchResults: Story = {
//   args: {
//     options: [
//       { label: "Anakin Solo", type: "Person", iconClass: "fa-solid fa-person" },
//       { label: "Han Solo", type: "Person", iconClass: "fa-solid fa-person" },
//       { label: "Jacen Solo", type: "Person", iconClass: "fa-solid fa-person" },
//       { label: "Jaina Solo", type: "Person", iconClass: "fa-solid fa-person" },
//     ],
//     renderOption: (props, option) => {
//       const searchResultOption = option as SearchResultOption;
//       const { key, ...optionProps } = props;
//       return (
//         <ListItem key={key} {...optionProps} disablePadding>
//           <ListItemButton role="undefined" disableRipple>
//             <ListItemIcon>
//               <div
//                 css={{
//                   backgroundColor: "black",
//                   color: "yellow",
//                   borderColor: "yellow",
//                   borderRadius: 9999,
//                   width: 34,
//                   height: 34,
//                   borderWidth: 2,
//                   borderStyle: "solid",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <i className={searchResultOption.iconClass} />
//               </div>
//             </ListItemIcon>
//             <ListItemText
//               primary={searchResultOption.label}
//               secondary={searchResultOption.type}
//             />
//             <IconButton edge="end" aria-label="delete" size="small">
//               <PlusCircleIcon fontSize="inherit" />
//             </IconButton>
//           </ListItemButton>
//         </ListItem>
//       );
//     },
//     placeholder: "Search",
//     suggestionsTitle: "Search results (5)",
//   },
// };
