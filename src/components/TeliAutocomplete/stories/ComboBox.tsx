import TeliAutocomplete from "../TeliAutocomplete";
import { TeliAutocompleteStory } from "../TeliAutocomplete.stories";
import OPTIONS from "./options";

const ComboBox: TeliAutocompleteStory = {
  args: { label: "Choose option", options: OPTIONS },
  render: ({ label, options }) => (
    <TeliAutocomplete
      id="options-demo"
      options={options}
      label={label}
      width={300}
      maxHeight={200}
    />
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
      description: {
        story:
          "Should be used when the value must be chosen from a predefined set of allowed values.",
      },
      source: {
        code: `
<TeliAutocomplete
  id="options-demo"
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

export default ComboBox;
