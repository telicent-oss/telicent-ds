import { useState } from "react";
import TeliTypeahead from "../TeliTypeahead";
import { TeliTypeaheadStory } from "../TeliTypeahead.stories";
import { transformData } from "./utils";

const FreeSolo: TeliTypeaheadStory = {
  render: () => {
    const [selected, setSelected] = useState("");

    const handleChange = (
      event: React.SyntheticEvent<Element, Event>,
      value: any
    ): void => {
      setSelected(value as string);
    };

    return (
      <TeliTypeahead
        freeSolo
        fullWidth
        url="http://localhost:5051"
        queryParamKey="searchTerm"
        label="Free solo typeahead"
        value={selected}
        onChange={handleChange}
        onTransform={transformData}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<TeliTypeaheadAutocomplete
  freeSolo
  fullWidth
  url="http://localhost:5051"
  queryParamKey="searchTerm"
  label="Free solo typeahead"
  onTransform={(targets: Target[]) => {
    const options = targets.map((target) => ({
      value: target.targetUri,
      label: target.displayName,
      type: target.primaryType,
    }));
    return options;
  }}
/>
        `,
      },
    },
  },
};

export default FreeSolo;
