import TeliSwitch from "../TeliSwitch";
import { TeliSwitchStory } from "../TeliSwitch.stories";

const LabelPlacement: TeliSwitchStory = {
  render: () => (
    <fieldset className="space-x-3">
      <TeliSwitch label="Start" labelPlacement="start" />
      <TeliSwitch label="End" labelPlacement="end" />
    </fieldset>
  ),
  parameters: {
    docs: {
      source: {
        description: {
          story: "The placement of the label can be changed as shown below",
        },
        code: `
<fieldset>
  <TeliSwitch label="Start" labelPlacement="start" />
  <TeliSwitch label="End" labelPlacement="end" />
</fieldset>
        `,
      },
    },
  },
};

export default LabelPlacement;
