import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Toolbar from "./Toolbar";
import MiniSearchBox from "../../inputs/SearchBox/MiniSearchBox";
import { FlexBox } from "../../layout";
import Button from "../../inputs/Button/Button";
import FloppyDiskIcon from "../../data-display/Icons/FloppyDiskIcon";
import DownArrowIcon from "../../data-display/FontAwesomeIcons/DownArrowIcon";

const meta = {
  title: "Surfaces/Toolbar",
  component: Toolbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <FlexBox direction="row" justifyContent="space-between">
        <MiniSearchBox />
        <FlexBox direction="row">
          <Button
            variant="text"
            endIcon={<DownArrowIcon />}
            onClick={() => fn()}
          >
            Saved (1)
          </Button>
          <Button
            color="inherit"
            variant="text"
            endIcon={<FloppyDiskIcon />}
            onClick={() => fn()}
          >
            Save
          </Button>
        </FlexBox>
      </FlexBox>
    ),
  },
};

// export const LoggedOut: Story = {};
