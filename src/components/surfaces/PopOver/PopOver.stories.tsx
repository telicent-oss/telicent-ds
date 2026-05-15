import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";

import Button from "../../buttons/Button/Button";
import { Text } from "../../data-display/Text/Text";
import PopOver from "./Popover";

const meta = {
  title: "Surfaces/PopOver",
  component: PopOver,
  tags: ["autodocs"],
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof PopOver>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    open: false,
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
      <div>
        <Button aria-describedby={id} onClick={handleClick}>
          Open Popover
        </Button>
        <PopOver
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{ vertical: -10, horizontal: 0 }}
        >
          <Text>The content of the pop over.</Text>
        </PopOver>
      </div>
    );
  },
};
