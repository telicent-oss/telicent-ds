import TeliChip from "../TeliChip";
import { TeliChipStory } from "../TeliChip.stories";

const DeleteableChips: TeliChipStory = {
  render: () => {
    const handleDelete = () => {
      alert("Deleted");
    };

    return (
      <div className="space-x-3">
        <TeliChip label="Chip Primary" onDelete={handleDelete} />
        <TeliChip
          label="Chip Secondary"
          variant="secondary"
          onDelete={handleDelete}
        />
        <TeliChip
          label="Chip Tertiary"
          variant="tertiary"
          onDelete={handleDelete}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
Chips with the onDelete prop defined will display a delete icon which changes 
appearance on hover.
      `,
      },
      source: {
        code: `
const handleDelete = () => {
  alert("Deleted");
};

return (
  <div className="space-x-3">
    <TeliChip label="Chip Filled" onDelete={handleDelete} />
    <TeliChip
      label="Chip Outlined"
      variant="secondary"
      onDelete={handleDelete}
    />
    <TeliChip
      label="Chip Outlined"
      variant="tertiary"
      onDelete={handleDelete}
    />
  </div>
);
      `,
      },
    },
  },
};

export default DeleteableChips;
