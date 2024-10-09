import TeliChip from "../TeliChip";
import { TeliChipStory } from "../TeliChip.stories";

const BasicChips: TeliChipStory = {
  render: () => (
    <div className="space-x-3">
      <TeliChip label="Chip Filled" />
      <TeliChip label="Chip Outlined" variant="secondary" />
      <TeliChip label="Chip Outlined" variant="tertiary" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<TeliChip label="Chip Filled" />
<TeliChip label="Chip Outlined" variant="secondary" />
<TeliChip label="Chip Outlined" variant="tertiary" />
      `,
      },
    },
  },
};

export default BasicChips;
