import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import OntologyService from "@telicent-io/ontologyservice";

import TeliButton from "../TeliButton/TeliButton";
import {
  CustomOption,
  customOptions,
} from "../SearchAutocomplete/custom-options";
import {
  TeliList,
  TeliListItem,
  TeliListItemButton,
} from "../TeliList/TeliList";
import TeliTypeIcon from "../TeliTypeIcon/TeliTypeIcon";
import ClockRotateLeft from "../TeliIcons/ClockRotateLeft";
import { DSProviders } from "../../providers";

import SearchAutocompleteDialog from "./SearchAutocompleteDialog";
import RecentSearches from "./RecentSearches";
import SearchResults from "./SearchResults";
import RESULTS from "./sample-results";

const ontologyService = new OntologyService(
  "http://localhost:3030/",
  "ontology"
);

const meta = {
  component: SearchAutocompleteDialog,
  parameters: {
    docs: {
      description: {
        component: `This component utilises the Dialog and SearchAutocomplete 
        components. It should be used in situations where the searching 
        functionality is not the main feature of the application.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <DSProviders ontologyService={ontologyService}>
        <Story />
      </DSProviders>
    ),
  ],
} satisfies Meta<typeof SearchAutocompleteDialog>;

export default meta;
export type SearchAutocompleteDialogStory = StoryObj<typeof meta>;

/**
 * This is an example of how the component can be rendered with search results
 */
export const SearchResultsWithResults: SearchAutocompleteDialogStory = {
  args: {
    open: false,
    options: customOptions,
    children: (
      <SearchResults totalResults={RESULTS.length}>
        <TeliList>
          {RESULTS.map((result) => (
            <TeliListItem disablePadding divider>
              <TeliListItemButton>
                <TeliTypeIcon size="sm" type={result.types[0]} />
                {result.label}
              </TeliListItemButton>
            </TeliListItem>
          ))}
        </TeliList>
      </SearchResults>
    ),
    getOptionKey: (option) => (option as CustomOption).id,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <div className="flex gap-x-3">
          <TeliButton variant="primary" onClick={handleOpen}>
            Open model with results
          </TeliButton>
        </div>
        <SearchAutocompleteDialog
          open={open}
          onClose={handleClose}
          options={args.options}
          getOptionKey={args.getOptionKey}
        >
          {args.children}
        </SearchAutocompleteDialog>
      </>
    );
  },
};

/**
 * When the search results component has the no children. A message will be
 * displayed to inform the user that nothing was found.
 */
export const SearchResultsWithoutResults: SearchAutocompleteDialogStory = {
  args: {
    open: false,
    options: customOptions,
    children: <SearchResults />,
    getOptionKey: (option) => (option as CustomOption).id,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <TeliButton variant="primary" onClick={handleOpen}>
          Open model without results
        </TeliButton>
        <SearchAutocompleteDialog
          options={args.options}
          open={open}
          onClose={handleClose}
          getOptionKey={args.getOptionKey}
        >
          {args.children}
        </SearchAutocompleteDialog>
      </>
    );
  },
};

/**
 * It's useful to allow the user to continue where they left off by providing
 * them with their most recent searches.
 */
export const RecentSearchList: SearchAutocompleteDialogStory = {
  args: {
    open: false,
    options: customOptions,
    children: (
      <RecentSearches>
        <TeliList>
          <TeliListItem disablePadding divider>
            <TeliListItemButton>
              <ClockRotateLeft />
              Cowes
            </TeliListItemButton>
          </TeliListItem>
        </TeliList>
      </RecentSearches>
    ),
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <TeliButton variant="primary" onClick={handleOpen}>
          Open model
        </TeliButton>
        <SearchAutocompleteDialog
          options={args.options}
          open={open}
          onClose={handleClose}
          getOptionKey={args.getOptionKey}
        >
          {args.children}
        </SearchAutocompleteDialog>
      </>
    );
  },
};

/**
 * Similar to the search results component, when the recent search component
 * doesn't have any children it will display a message informing the user no
 * recent searches were found.
 */
export const RecentSearchesEmptyList: SearchAutocompleteDialogStory = {
  args: {
    open: false,
    options: customOptions,
    children: <RecentSearches />,
    getOptionKey: (option) => (option as CustomOption).id,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <TeliButton variant="primary" onClick={handleOpen}>
          Open model
        </TeliButton>
        <SearchAutocompleteDialog
          options={args.options}
          open={open}
          onClose={handleClose}
          getOptionKey={args.getOptionKey}
        >
          {args.children}
        </SearchAutocompleteDialog>
      </>
    );
  },
};
