import type { Meta, StoryObj } from "@storybook/react";
import {
  AsynchronousRequests,
  Controlled,
  ComboBox,
  ComboBoxOptions,
  CustomRenderOptions,
  FreeSolo,
  MultipleValues,
} from "./stories";
import TeliAutocomplete from "./TeliAutocomplete";

const meta = {
  component: TeliAutocomplete,
  parameters: {
    docs: {
      description: {
        component: `This component is a normal text input enhanced by a panel of
        suggested options.It is useful for setting the value of a 
        single-line textbox in one of two types of scenarios:
        <br /> 1. The value for the textbox must be chosen from a predefined set 
        of allowed values, e.g., a location field must contain a valid location 
        name: combo box.
        <br /> 2. The textbox may contain any arbitrary value, but it is 
        advantageous to suggest possible values to the user, e.g., a search field 
        may suggest similar or previous searches to save the user time: free solo.
        <br />It's meant to be an improved version of the "react-select" and 
        "downshift" packages.`,
      },
    },
  },
} satisfies Meta<typeof TeliAutocomplete>;

export default meta;
export type TeliAutocompleteStory = StoryObj<typeof meta>;

export {
  ComboBox,
  ComboBoxOptions,
  CustomRenderOptions,
  Controlled,
  FreeSolo,
  AsynchronousRequests,
  MultipleValues,
};
