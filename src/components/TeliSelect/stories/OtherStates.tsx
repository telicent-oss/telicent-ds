import { useState } from "react";
import { TeliSelectStory } from "../TeliSelect.stories";
import TeliSelect, { SelectChangeEvent } from "../TeliSelect";

const OtherStates: TeliSelectStory = {
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
          helperText="Disabled"
          disabled
        />
        <TeliSelect
          id="age-selection"
          label="Age"
          value={age}
          onChange={handleChange}
          options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
          helperText="Error"
          error
        />
        <TeliSelect
          id="age-selection"
          label="Age"
          defaultValue={10}
          options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
          helperText="Read only"
          readOnly
          focused={true}
        />
        <TeliSelect
          id="age-selection"
          label="Age"
          value={age}
          onChange={handleChange}
          options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
          required
          helperText="Required *"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  helperText="Disabled"
  disabled
/>
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  helperText="Error"
  error
/>
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  helperText="Read only"
  readOnly
/>
<TeliSelect
  id="age-selection"
  label="Age"
  value={age}
  onChange={handleChange}
  options={[{ label: 10 }, { label: 20 }, { label: 30 }]}
  required
  helperText="Required *"
/>
      `,
      },
    },
  },
};

export default OtherStates;
