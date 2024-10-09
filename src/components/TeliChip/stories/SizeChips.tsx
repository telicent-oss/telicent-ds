import TeliChip from "../TeliChip";
import { TeliChipStory } from "../TeliChip.stories";

const SizeChips: TeliChipStory = {
  render: () => (
    <div className="space-x-3">
      <TeliChip label="Small" variant="primary" size="small" />
      <TeliChip label="Small" variant="secondary" size="small" />
      <TeliChip label="Small" variant="tertiary" size="small" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use the <code>size</code> prop to create a small chip.",
      },
      source: {
        code: `
<TeliChip label="Small" variant="primary" size="small" />
<TeliChip label="Small" variant="secondary" size="small" />
<TeliChip label="Small" variant="tertiary" size="small" />
      `,
      },
    },
  },
};

export default SizeChips;
