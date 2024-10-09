import React, { useState } from "react";
import { TeliSwitchStory } from "../TeliSwitch.stories";
import TeliSwitch from "../TeliSwitch";

const ControlledSwitches: TeliSwitchStory = {
  render: () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent) => {
      const target = event.target as HTMLInputElement;
      setChecked(target.checked);
    };

    return <TeliSwitch checked={checked} onChange={handleChange} />;
  },
  parameters: {
    docs: {
      source: {
        description: {
          story:
            "You can control the switch with the <code>checked</code> and <code>onChange</code> props:",
        },
        code: `
const [checked, setChecked] = useState(true);

const handleChange = (event: React.ChangeEvent) => {
  const target = event.target as HTMLInputElement;
  setChecked(target.checked);
};

return <TeliSwitch checked={checked} onChange={handleChange} />;
        `,
      },
    },
  },
};

export default ControlledSwitches;
