import { useState } from "react";
import { TeliBasicMenuStory } from "../TeliBasicMenu.stories";
import TeliBasicMenu from "../TeliBasicMenu";

const ControlledBasicMenu: TeliBasicMenuStory = {
  args: { label: "Controlled menu" },
  render: ({ label }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <TeliBasicMenu
        label={label}
        yPlacement="bottom-start"
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        <ul>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
        </ul>
      </TeliBasicMenu>
    );
  },
  decorators: [
    (Story) => (
      <div style={{ height: "14em" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "You can control the menu with the <code>open</code>, <code>onOpen</code> and <code>onClose</code> props:",
      },
      source: {
        code: `
const [open, setOpen] = useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

return (
  <TeliBasicMenu
    label="Controlled menu"
    yPlacement="bottom-start"
    open={open}
    onOpen={handleOpen}
    onClose={handleClose}
  >
    <ul>
      <li>Menu item 1</li>
      <li>Menu item 2</li>
    </ul>
  </TeliBasicMenu>
);
      `,
      },
    },
  },
};

export default ControlledBasicMenu;
