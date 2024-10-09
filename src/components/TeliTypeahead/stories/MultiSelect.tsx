import { useState } from "react";
import { TeliTypeaheadStory } from "../TeliTypeahead.stories";
import TeliTypeahead from "../TeliTypeahead";
import { Target, transformData } from "./utils";

const MultiSelect: TeliTypeaheadStory = {
  render: () => {
    const [selected, setSelected] = useState<Target[]>([]);

    const handleTargetChange = (
      event: React.SyntheticEvent<Element, Event>,
      targets: Target[]
    ): void => {
      setSelected(targets);
    };

    return (
      <TeliTypeahead
        multiple
        fullWidth
        url="http://localhost:5051"
        queryParamKey="searchTerm"
        label="Multi select typeahead"
        value={selected}
        onChange={handleTargetChange}
        onTransform={transformData}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const [selected, setSelected] = useState<Target[]>([]);

const handleTargetChange = (
  event: React.SyntheticEvent<Element, Event>,
  targets: Target[]
): void => {
  setSelected(targets);
};

return (
  <TeliTypeaheadAutocomplete
    multiple
    fullWidth
    url="http://localhost:5051"
    queryParamKey="searchTerm"
    label="Typeahead"
    value={selected}
    onChange={handleTargetChange}
    onTransform={(targets: Target[]) => {
      const options = targets.map((target) => ({
        value: target.targetUri,
        label: target.displayName,
        type: target.primaryType,
      }));
      return options;
    }}
  />
);
      `,
      },
    },
  },
};

export default MultiSelect;
