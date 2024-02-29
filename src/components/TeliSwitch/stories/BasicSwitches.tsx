import TeliSwitch from "../TeliSwitch";
import { TeliSwitchStory } from "../TeliSwitch.stories";

const BasicSwitches: TeliSwitchStory = {
  render: () => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    return (
      <fieldset className="space-x-3">
        <TeliSwitch {...label} defaultChecked />
        <TeliSwitch {...label} />
        <TeliSwitch {...label} disabled defaultChecked />
        <TeliSwitch {...label} disabled />
      </fieldset>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const label = { inputProps: { "aria-label": "Switch demo" } };
return (
  <fieldset>
    <TeliSwitch {...label} defaultChecked />
    <TeliSwitch {...label} />
    <TeliSwitch {...label} disabled defaultChecked />
    <TeliSwitch {...label} disabled />
  </fieldset>
);
        `,
      },
    },
  },
};

export default BasicSwitches;
