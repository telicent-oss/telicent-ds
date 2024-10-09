import TeliAutocomplete from "../TeliAutocomplete";
import { TeliAutocompleteStory } from "../TeliAutocomplete.stories";
import COUNTRIES from "./countries";

const CustomRenderOptions: TeliAutocompleteStory = {
  args: { label: "Choose a country", options: COUNTRIES },
  render: ({ label, options }) => (
    <TeliAutocomplete
      autoHighlight
      id="countries"
      label={label}
      options={options}
      width={300}
      maxHeight={200}
      renderOption={(props, option: any) => (
        <li {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
            className="mr-2 shrink-0"
          />
          {option.label} ({option.code}) +{option.phone}
        </li>
      )}
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
          "Render options can be customised using <code>renderOption</code> prop",
      },
      source: {
        code: `
<TeliAutocomplete
  autoHighlight
  id="countries"
  label={label}
  options={options}
  width={300}
  maxHeight={200}
  renderOption={(props, option) => (
    <li {...props}>
      <img
        loading="lazy"
        width="20"
        src={\`https://flagcdn.com/w20/\${option.code.toLowerCase()}.png\`}
        srcSet={\`https://flagcdn.com/w40/\${option.code.toLowerCase()}.png 2x\`}
        alt=""
        className="mr-2 shrink-0"
      />
      {option.label} ({option.code}) +{option.phone}
    </li>
  )}
/>
      `,
      },
    },
  },
};

export default CustomRenderOptions;
