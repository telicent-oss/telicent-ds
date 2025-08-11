// src/components/Toolbar/Toolbar.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Toolbar from "./Toolbar";
import MiniSearchBox from "../../inputs/SearchBox/MiniSearchBox";
import { FlexBox } from "../../layout";
import Button from "../../buttons/Button/Button";
import FloppyDiskIcon from "../../data-display/Icons/FloppyDiskIcon";
import DownArrowIcon from "../../data-display/FontAwesomeIcons/DownArrowIcon";
import TooltipToggleButton from "../../inputs/TooltipToggleButton";
import { Divider } from "../../data-display";

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
      <FlexBox direction="row" justifyContent="space-between" alignItems="center">
        <MiniSearchBox />

        <FlexBox direction="row" alignItems="center" gap={1}>
          <TooltipToggleButton
            size="small"
            value="more-actions"
            tooltip="More actions"
            selected={false}
            onClick={() => fn()}
          >
            More Actions&nbsp; <DownArrowIcon />
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
