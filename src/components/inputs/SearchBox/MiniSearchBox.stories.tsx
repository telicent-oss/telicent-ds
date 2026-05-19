import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";

import MiniSearchBox from "./MiniSearchBox";
import PopOver from "../../surfaces/PopOver/Popover";
import IconButton from "../../buttons/Button/IconButton";
import DownArrowIcon from "../../data-display/FontAwesomeIcons/DownArrowIcon";

const meta = {
  title: "Inputs/Search/MiniSearchBox",
  component: MiniSearchBox,
  tags: ["autodocs"],
  args: {
    onSearch: fn(),
    onTogglePopOver: fn(),
  },
} satisfies Meta<typeof MiniSearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    placeholder: "Search",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByRole("searchbox"), "River Nile");
    await userEvent.click(canvas.getByRole("button", { name: "search" }));
  },
};

export const WithDownArrow: Story = {
  args: {
    placeholder: "Search",
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [showPopOver, setShowPopOver] = useState(false);

    const openPopUp = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setShowPopOver(true);
    };

    const togglePopUp = () => {
      setShowPopOver((show) => !show);
    };

    return (
      <div>
        <MiniSearchBox
          {...args}
          onTogglePopOver={openPopUp}
          endIcon={
            <IconButton size="small" aria-label="toggle pop over" onClick={openPopUp}>
              <DownArrowIcon rotation={showPopOver ? 180 : undefined} fontSize="inherit" />
            </IconButton>
          }
        />
        <PopOver
          id="search-popover"
          open={showPopOver}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{ vertical: -10, horizontal: 214 }}
          width={254}
          onClose={togglePopUp}
        >
          Pop over content goes here
        </PopOver>
      </div>
    );
  },
};

/**
 * For asynchronous events, display a loader to inform the user that an action
 * is in progress. To implement this, simply set the `loading` prop to `true`.
 */
export const Loading: Story = {
  args: {
    placeholder: "Loading",
    loading: true,
  },
};
