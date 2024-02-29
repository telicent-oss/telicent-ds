import TeliAutocomplete from "../TeliAutocomplete";
import { TeliAutocompleteStory } from "../TeliAutocomplete.stories";
import OPTIONS from "./options";
import TOP_100_FILMS from "./top100movies";

const MultipleValues: TeliAutocompleteStory = {
  args: { label: "Multiple values", options: OPTIONS },
  render: ({ label, options }) => (
    <div className="grid space-y-3">
      <TeliAutocomplete
        multiple
        disableCloseOnSelect
        id="multi-autocomplete-example"
        label="Multiple values"
        options={options}
        defaultValue={[OPTIONS[1]]}
      />
      <TeliAutocomplete
        multiple
        disableCloseOnSelect
        filterSelectedOptions
        id="filter-selected-options-example"
        label="Filter selected options"
        options={options}
        defaultValue={[OPTIONS[1]]}
      />
      <TeliAutocomplete
        multiple
        freeSolo
        id="free-solo-example"
        label="Free solo"
        options={options}
        defaultValue={[OPTIONS[1]]}
      />
      <TeliAutocomplete
        multiple
        readOnly
        id="read-only-example"
        label="Read only"
        options={TOP_100_FILMS.map((option) => option.label)}
        defaultValue={[OPTIONS[1].label, OPTIONS[2].label]}
        isOptionEqualToValue={(option: any, value) =>
          option.label === value.label
        }
      />
    </div>
  ),
  decorators: [
    (Story) => (
      <div style={{ height: "20em" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        code: `
<TeliAutocomplete
  multiple
  disableCloseOnSelect
  id="multi-autocomplete-example"
  label="Multiple values"
  options={options}
  defaultValue={[OPTIONS[1]]}
/>
<TeliAutocomplete
  multiple
  disableCloseOnSelect
  filterSelectedOptions
  id="filter-selected-options-example"
  label="Filter selected options"
  options={options}
  defaultValue={[OPTIONS[1]]}
/>
<TeliAutocomplete
  multiple
  freeSolo
  id="free-solo-example"
  label="Free solo"
  options={options}
  defaultValue={[OPTIONS[1]]}
/>
<TeliAutocomplete
  multiple
  readOnly
  id="read-only-example"
  label="Read only"
  options={TOP_100_FILMS.map((option) => option.label)}
  defaultValue={[OPTIONS[1].label, OPTIONS[2].label]}
  isOptionEqualToValue={(option, value) => option.label === value.label}
/>
      `,
      },
    },
  },
};

export default MultipleValues;
