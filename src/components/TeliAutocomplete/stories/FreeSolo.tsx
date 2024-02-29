import TeliAutocomplete from "../TeliAutocomplete";
import { TeliAutocompleteStory } from "../TeliAutocomplete.stories";
import TOP_100_FILMS from "./top100movies";

const FreeSolo: TeliAutocompleteStory = {
  args: { label: "Search input", options: TOP_100_FILMS },
  render: ({ label, options }) => (
    <div className="space-y-3">
      <TeliAutocomplete
        fullWidth
        freeSolo
        label="Free solo"
        options={options}
        id="free-solo"
        maxHeight={300}
      />
      <TeliAutocomplete
        fullWidth
        freeSolo
        label={label}
        options={options}
        id="search-input"
        mode="search"
        maxHeight={300}
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
      description: {
        story: `Set freeSolo to true so the textbox can contain any arbitrary 
        value.
        <br /> **Search input**
        The prop is designed to cover the primary use case of a search input 
        with suggestions, e.g. Google search or react-autowhatever.`,
      },
      source: {
        code: `
<TeliAutocomplete
  fullWidth
  freeSolo
  label="Free solo"
  options={options}
  id="free-solo"
  maxHeight={300}
/>
<TeliAutocomplete
  fullWidth
  label={label}
  options={options}
  id="search-input"
  mode="search"
  maxHeight={300}
/>
      `,
      },
    },
  },
};

export default FreeSolo;
