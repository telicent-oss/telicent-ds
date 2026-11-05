// src/components/Toolbar/Toolbar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { fn } from "storybook/test";

import Button from "../../buttons/Button/Button";
import { Divider } from "../../data-display";
import DownArrowIcon from "../../data-display/FontAwesomeIcons/DownArrowIcon";
import FloppyDiskIcon from "../../data-display/Icons/FloppyDiskIcon";
import MiniSearchBox from "../../inputs/SearchBox/MiniSearchBox";
import TooltipToggleButton from "../../inputs/TooltipToggleButton";
import { FlexBox } from "../../layout";
import Toolbar from "./Toolbar";

const meta: Meta<typeof Toolbar> = {
  title: "Surfaces/Toolbar",
  component: Toolbar,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <FlexBox direction="row" justifyContent="space-between" alignItems="center" sx={{ flexGrow: 1 }}>
        <MiniSearchBox />

        <FlexBox direction="row" alignItems="center" gap={1}>
          <TooltipToggleButton
            size="small"
            value="more-actions"
            tooltip="More actions"
            selected={false}
            onClick={() => fn()}
          >
            More Actions <DownArrowIcon />
          </TooltipToggleButton>
          <Divider orientation="vertical" flexItem />
          <Button variant="text" endIcon={<DownArrowIcon />} onClick={() => fn()}>
            Saved (1)
          </Button>
          <Divider orientation="vertical" flexItem />

          <Button color="inherit" variant="text" endIcon={<FloppyDiskIcon />} onClick={() => fn()} sx={{ ml: 1 }}>
            Save
          </Button>
        </FlexBox>
      </FlexBox>
    ),
  },
};
