import { useMemo, useState } from "react";
import TeliAutocomplete from "../TeliAutocomplete";
import { TeliAutocompleteStory } from "../TeliAutocomplete.stories";
import OPTIONS from "./options";

const Controlled: TeliAutocompleteStory = {
  args: { label: "Controlled", options: OPTIONS },
  render: ({ label, options }) => {
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState("");

    return (
      <>
        <TeliAutocomplete
          fullWidth
          label={label}
          options={options}
          id="controlled"
          value={value}
          inputValue={inputValue}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
        />
      </>
    );
  },
  decorators: [
    (Story) => (
      <div style={{ height: "20em" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `The component has two states that can be controlled:
          <br /> 1. The "value" state with the value/onChange props combination. 
          This state represents the value selected by the user, for instance 
          when pressing Enter.
          <br /> 2. The "input value" state with the inputValue/onInputChange 
          props combination. This state represents the value displayed in the 
          textbox.
          <br /> These two states are isolated, and should be controlled 
          independently. For more information refer to the [MUI docs](https://mui.com/material-ui/react-autocomplete/#controlled-states)`,
      },
      source: {
        code: `
const [value, setValue] = useState(options[0]);
const [inputValue, setInputValue] = useState("");

return (
  <TeliAutocomplete
    fullWidth
    label={label}
    options={options}
    id="controlled"
    value={value}
    inputValue={inputValue}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    onInputChange={(event, newInputValue) => {
      setInputValue(newInputValue);
    }}
  />
);
      `,
      },
    },
  },
};

export default Controlled;
