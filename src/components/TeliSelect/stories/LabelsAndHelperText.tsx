import { useState } from "react";
import { TeliSelectStory } from "../TeliSelect.stories";
import TeliSelect, { SelectChangeEvent } from "../TeliSelect";

const LabelsAndHelperText: TeliSelectStory = {
  render: () => {
    const [age, setAge] = useState("");

    const handleChange = (event: SelectChangeEvent<any>) => {
      setAge(event.target.value);
    };

    return (
      <div className="space-x-3">
        <TeliSelect
          id="age-selection"
          label="Age"
          value={age}
          onChange={handleChange}
          options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
          helperText="With label and helper text"
        />
        <TeliSelect
          id="age-selection"
          label="Age"
          value={age}
          onChange={handleChange}
          options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
          helperText="Without label"
          hiddenLabel
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `It's highly encouraged to always use a label with this component.
        If you choose to not show the label ensure to wrap the component with the label tag`,
      },
      source: {
        code: `
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  helperText="With label and helper text"
/>
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  helperText="Without label"
  showLabel={false}
/>
      `,
      },
    },
  },
};

export default LabelsAndHelperText;
