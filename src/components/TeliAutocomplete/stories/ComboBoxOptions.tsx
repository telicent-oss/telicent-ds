import { useState } from "react";
import TeliAutocomplete from "../TeliAutocomplete";
import { TeliAutocompleteStory } from "../TeliAutocomplete.stories";
import TOP_100_FILMS from "./top100movies";

type Option = { label: string };

const ComboBoxOptions: TeliAutocompleteStory = {
  args: { label: "Disable close on select", options: TOP_100_FILMS },
  render: ({ label, options }) => {
    const [value, setValue] = useState(null);

    const props = {
      options,
      width: 300,
      maxHeight: 200,
    };
    return (
      <div className="grid space-y-3">
        <TeliAutocomplete
          disableCloseOnSelect
          id="disable-close-on-select-autocomplete"
          label={label}
          {...props}
        />
        <TeliAutocomplete
          clearOnEscape
          id="clear-on-escape-autocomplete"
          label="Clear on escape"
          {...props}
        />
        <TeliAutocomplete
          disableClearable
          id="disable-clearable-autocomplete"
          label="Disable clearable"
          {...props}
        />
        <TeliAutocomplete
          includeInputInList
          id="include-input-in-list-autocomplete"
          label="Include input in list"
          {...props}
        />
        <TeliAutocomplete
          id="controlled-autocomplete"
          label="Controlled"
          value={value}
          onChange={(event, newValue: any) => {
            setValue(newValue);
          }}
          {...props}
        />
        <TeliAutocomplete
          id="flat-options-autocomplete"
          label="Flat options"
          {...props}
          options={options.map((option: any) => option.label)}
        />
        <TeliAutocomplete
          autoComplete
          id="autocomplete"
          label="Autocomplete"
          {...props}
        />
        <TeliAutocomplete
          openOnFocus
          id="open-on-focus"
          label="Open on focus"
          {...props}
        />
        <TeliAutocomplete
          autoHighlight
          id="auto-highlight"
          label="Auto highlight"
          {...props}
        />
      </div>
    );
  },
  decorators: [
    (Story) => (
      <div style={{ height: "40em" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Should be used when the value must be chosen from a predefined set of allowed values.",
      },
      source: {
        code: `
<TeliAutocomplete
  id="movies combobox-autocomplete"
  options={options}
  label={label}
  width={300}
  maxHeight={200}
/>
      `,
      },
    },
  },
};

export default ComboBoxOptions;
