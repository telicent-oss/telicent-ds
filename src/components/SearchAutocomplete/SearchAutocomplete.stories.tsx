import type { Meta, StoryObj } from "@storybook/react";
import SearchAutocomplete from "./SearchAutocomplete";
import { CustomOption, customOptions } from "./custom-options";

const meta = {
  component: SearchAutocomplete,
  parameters: {
    docs: {
      description: {
        component: `This component is a normal text input enhanced by a panel of
        suggested options.It is useful for setting the value of a 
        single-line textbox that may contain any arbitrary value. This component's
        main advantage is it suggests the user with a list possible values, e.g.,
        the search field will suggest similar search to save the user time.
        <br />It's meant to be an improved version of the "react-select" and 
        "downshift" packages.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "20em" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchAutocomplete>;

export default meta;
export type SearchAutocompleteStory = StoryObj<typeof meta>;

export const BasicExample: SearchAutocompleteStory = {
  args: {
    options: [
      { label: "Option 1" },
      { label: "Option 2" },
      { label: "Option 3" },
    ],
    fullWidth: true,
  },
};

/**
 * Options can be provided in as array of objects with the label key (as shown
 * above) or an array of strings as shown below.
 */
export const FlatData: SearchAutocompleteStory = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    fullWidth: true,
  },
};

/**
 * You can also provide data in a different structure as shown below. In the
 * situation where you have labels with values which are not unique, use
 * `getOptionKey` to determine the key for a given option.
 */
export const CustomOptions: SearchAutocompleteStory = {
  args: {
    options: customOptions,
    fullWidth: true,
    getOptionKey: (option) => (option as CustomOption).id,
  },
};
