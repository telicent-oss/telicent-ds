import type { Meta, StoryObj } from "@storybook/react";
import MUIBox from "@mui/material/Box/Box";

import { ClockIcon, MapIcon } from "../../data-display";
import FloatingPanelDock from "./FloatingPanelDock";
import FloatingPanelItem from "./FloatingPanelItem";

const meta: Meta<typeof FloatingPanelDock> = {
  title: "Surfaces/FloatingPanel/FloatingPanelDock",
  component: FloatingPanelDock,
  tags: ["autodocs"],
  decorators: (Story) => (
    <MUIBox height={200}>
      {Story()}
    </MUIBox>
  ),
};
export default meta;

type Story = StoryObj<typeof FloatingPanelDock>;

export const Demo: Story = {
  args: {
    children: (
      <>
        <FloatingPanelItem
          icon={<ClockIcon fontSize="inherit" />}
          label="Timeline"
          count={10}
          onMaximise={() => alert("Clicked timeline docked item")}
          onRemove={() => alert("Clicked close timeline docked item")}
        />
        <FloatingPanelItem
          icon={<MapIcon fontSize="inherit" />}
          label="Map"
          count={6}
          onMaximise={() => alert("Clicked map docked item")}
          onRemove={() => alert("Clicked close map docked item")}
        />
      </>
    ),
  },
};
