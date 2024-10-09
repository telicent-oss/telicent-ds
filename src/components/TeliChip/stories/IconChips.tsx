import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import TeliChip from "../TeliChip";
import { TeliChipStory } from "../TeliChip.stories";

const IconChips: TeliChipStory = {
  render: () => (
    <div className="space-x-3">
      <TeliChip label="With Icon" icon={<FontAwesomeIcon icon={faPerson} />} />
      <TeliChip
        label="With Icon"
        variant="secondary"
        icon={<FontAwesomeIcon icon={faPerson} />}
      />
      <TeliChip
        label="With Icon"
        variant="tertiary"
        icon={<FontAwesomeIcon icon={faPerson} />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use the <code>icon</code> prop to add an icon.",
      },
      source: {
        code: `
<TeliChip label="With Icon" icon={<FontAwesomeIcon icon={faPerson} />} />
<TeliChip
  label="With Icon"
  variant="secondary"
  icon={<FontAwesomeIcon icon={faPerson} />}
/>
<TeliChip
  label="With Icon"
  variant="tertiary"
  icon={<FontAwesomeIcon icon={faPerson} />}
/>
      `,
      },
    },
  },
};

export default IconChips;
