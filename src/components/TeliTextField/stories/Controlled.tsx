import { useState } from "react";
import TeliTextField from "../TeliTextField";
import { TeliTextFieldStory } from "../TeliTextField.stories";

const Controlled: TeliTextFieldStory = {
  render: () => {
    const [value, setValue] = useState("I'm batman!");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <div className="grid grid-cols-3 gap-3">
        <TeliTextField
          id="controlled"
          label="Controlled"
          value={value}
          onChange={handleChange}
        />
        <TeliTextField
          id="uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "The component can be controlled or uncontrolled.",
      },
      source: {
        code: `
const [value, setValue] = useState("I'm batman!");

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
};

return (
  <div className="grid grid-cols-3 gap-3">
    <TeliTextField
      id="controlled"
      label="Controlled"
      value={value}
      onChange={handleChange}
    />
    <TeliTextField
      id="uncontrolled"
      label="Uncontrolled"
      defaultValue="foo"
    />
  </div>
);
      `,
      },
    },
  },
};

export default Controlled;
