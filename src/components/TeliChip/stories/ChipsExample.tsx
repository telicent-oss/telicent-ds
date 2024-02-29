import { useState } from "react";
import { TeliChipStory } from "../TeliChip.stories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBacon } from "@fortawesome/free-solid-svg-icons";
import TeliChip from "../TeliChip";

const ChipsExample: TeliChipStory = {
  render: () => {
    const [chips, setChips] = useState([
      { key: 0, label: "Vegetables" },
      { key: 1, label: "Fruit" },
      { key: 2, label: "Legume" },
      { key: 3, label: "Dairy products" },
      { key: 4, label: "Meat" },
      { key: 5, label: "Fish" },
    ]);

    const handleDelete =
      (chipToDelete: Record<string, number | string>) => () => {
        setChips((chips) =>
          chips.filter((chip) => chip.key !== chipToDelete.key)
        );
      };

    return (
      <ul className="flex items-center gap-x-3">
        {chips.map((chip) => {
          let icon;

          if (chip.label === "Meat") {
            icon = <FontAwesomeIcon icon={faBacon} />;
          }

          return (
            <li key={chip.key}>
              <TeliChip
                icon={icon}
                label={chip.label}
                onDelete={
                  chip.label === "React" ? undefined : handleDelete(chip)
                }
              />
            </li>
          );
        })}
      </ul>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
An example of rendering multiple chips from an array of values. Deleting a chip 
removes it from the array. Note that since no onClick prop is defined, the Chip 
can be focused, but does not gain depth while clicked or touched.
`,
      },

      source: {
        code: `
const [chips, setChips] = useState([
  { key: 0, label: "Vegetables" },
  { key: 1, label: "Fruit" },
  { key: 2, label: "Legume" },
  { key: 3, label: "Dairy products" },
  { key: 4, label: "Meat" },
  { key: 5, label: "Fish" },
]);

const handleDelete =
  (chipToDelete: Record<string, number | string>) => () => {
    setChips((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

return (
  <ul className="flex items-center gap-x-3">
    {chips.map((chip) => {
      let icon;

      if (chip.label === "Meat") {
        icon = <FontAwesomeIcon icon={faMeat} />;
      }

      return (
        <li key={chip.key}>
          <TeliChip
            icon={icon}
            label={chip.label}
            onDelete={
              chip.label === "React" ? undefined : handleDelete(chip)
            }
          />
        </li>
      );
    })}
  </ul>
);
      `,
      },
    },
  },
};

export default ChipsExample;
