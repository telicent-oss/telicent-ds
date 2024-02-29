import TeliChip from "../TeliChip";
import { TeliChipStory } from "../TeliChip.stories";

const ColorChips: TeliChipStory = {
  render: () => (
    <div className="space-x-3">
      <TeliChip
        label="Custom color"
        variant="basic"
        sx={{ backgroundColor: "#004f7f", border: "#004f7f" }}
      />
      <TeliChip
        label="Custom color"
        variant="basic"
        sx={{ borderColor: "#ff7f0e", color: "#ff7f0e" }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use the <code>sx</code> prop to customise the color of the chip.",
      },
      source: {
        code: `
<TeliChip
  label="Custom color"
  variant="basic"
  sx={{ backgroundColor: "#004f7f", border: "#004f7f" }}
/>
<TeliChip
  label="Custom color"
  variant="basic"
  sx={{ borderColor: "#ff7f0e", color: "#ff7f0e" }}
/>
      `,
      },
    },
  },
};

export default ColorChips;
