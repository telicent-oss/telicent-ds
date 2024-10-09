import { TeliSwitchStory } from "../TeliSwitch.stories";
import TeliSwitch from "../TeliSwitch";

const LabelledSwitches: TeliSwitchStory = {
  render: () => (
    <fieldset className="flex flex-col">
      <TeliSwitch label="Label" />
      <TeliSwitch required label="Required" />
      <TeliSwitch disabled label="Disabled" />
    </fieldset>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<fieldset>
  <TeliSwitch label="Label" />
  <TeliSwitch required label="Required" />
  <TeliSwitch disabled label="Disabled" />
</fieldset>
        `,
      },
    },
  },
};

export default LabelledSwitches;
