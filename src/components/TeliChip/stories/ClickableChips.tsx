import TeliChip from "../TeliChip";
import { TeliChipStory } from "../TeliChip.stories";

const ClickableChips: TeliChipStory = {
  render: () => {
    const handleClick = () => {
      alert("Clicked");
    };

    return (
      <div className="space-x-3">
        <TeliChip label="Chip primary" onClick={handleClick} />
        <TeliChip
          label="Chip secondary"
          variant="secondary"
          onClick={handleClick}
        />
        <TeliChip
          label="Chip tertiary"
          variant="tertiary"
          onClick={handleClick}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
Chips with the onClick prop defined change appearance on focus, hover, and
click.
      `,
      },
      source: {
        code: `
const handleClick = () => {
  alert("Clicked");
};

return (
  <div className="space-x-3">
    <TeliChip label="Chip primary" onClick={handleClick} />
    <TeliChip
      label="Chip secondary"
      variant="secondary"
      onClick={handleClick}
    />
    <TeliChip
      label="Chip tertiary"
      variant="tertiary"
      onClick={handleClick}
    />
  </div>
);
      `,
      },
    },
  },
};

export default ClickableChips;
