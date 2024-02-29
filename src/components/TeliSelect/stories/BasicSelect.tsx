import { useState } from "react";
import { TeliSelectStory } from "../TeliSelect.stories";
import TeliSelect, { SelectChangeEvent } from "../TeliSelect";

const BasicSelect: TeliSelectStory = {
  render: () => {
    const [age, setAge] = useState("");

    const handleChange = (event: SelectChangeEvent<any>) => {
      setAge(event.target.value);
    };

    return (
      <TeliSelect
        id="age-selection"
        label="Age"
        value={age}
        onChange={handleChange}
        options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Menus are positioned under their emitting elements, unless they 
        are close to the bottom of the viewport.`,
      },
      source: {
        code: `
import { TeliSelect, SelectChangeEvent } from  "@telicent-io/ds";

const [age, setAge] = useState("");

const handleChange = (event: SelectChangeEvent<any>) => {
  setAge(event.target.value);
};
return (
  <TeliSelect
    label="Age"
    id="age-selection"
    value={age}
    onChange={handleChange}
    options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  />
);
      `,
      },
    },
  },
};
export default BasicSelect;
