import TeliSwitch from "../TeliSwitch";
import { TeliSwitchStory } from "../TeliSwitch.stories";

const Sizes: TeliSwitchStory = {
  render: () => {
    const label = { inputProps: { "aria-label": "Switch size demo" } };
    return (
      <fieldset className="flex items-center gap-x-3">
        <TeliSwitch {...label} />
        <TeliSwitch {...label} size="medium" />
      </fieldset>
    );
  },
  parameters: {
    docs: {
      source: {
        description: {
          story:
            "Use the <code>size</code> prop to change the size of the switch.",
        },
        code: `
const label = { inputProps: { "aria-label": "Switch size demo" } };
return (
  <fieldset>
    <TeliSwitch {...label} />
    <TeliSwitch {...label} size="medium" />
  </fieldset>
);
        `,
      },
    },
  },
};

export default Sizes;
