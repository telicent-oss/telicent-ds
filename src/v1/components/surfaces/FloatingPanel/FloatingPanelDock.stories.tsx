import type { Meta, StoryObj } from "@storybook/react";
import MUIBox from "@mui/material/Box/Box";

import { ClockIcon, MapIcon } from "../../data-display";
import { FloatingPanel } from "./index";

const meta: Meta<typeof FloatingPanel.Dock> = {
  title: "Surfaces/FloatingPanel/FloatingPanel.Dock",
  component: FloatingPanel.Dock,
  tags: ["autodocs"],
  decorators: (Story) => (
    <FloatingPanel.Provider>
      <MUIBox height={200}>{Story()}</MUIBox>
    </FloatingPanel.Provider>
  ),
};
export default meta;

type Story = StoryObj<typeof FloatingPanel.Dock>;

export const Demo: Story = {
  args: {
    children: (
      <>
        <FloatingPanel.DockItem
          icon={<ClockIcon fontSize="inherit" />}
          label="Timeline"
          count={10}
        />
        <FloatingPanel.DockItem
          icon={<MapIcon fontSize="inherit" />}
          label="Map"
          count={6}
        />
      </>
    ),
  },
};
