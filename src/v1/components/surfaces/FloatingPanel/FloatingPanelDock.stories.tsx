import type { Meta, StoryObj } from "@storybook/react";
import MUIBox from "@mui/material/Box";

import { ClockIcon, MapIcon } from "../../data-display";
import { FloatingPanel, FloatingPanelContext } from "./index";

const meta: Meta<typeof FloatingPanel.Dock> = {
  title: "Surfaces/FloatingPanel/FloatingPanel.Dock",
  component: FloatingPanel.Dock,
  tags: ["autodocs"],
  decorators: (Story) => (
    <FloatingPanelContext.Provider
      value={{
        panels: {
          timeline: { visible: true, minimised: true },
          map: { visible: true, minimised: true },
        },
        toggleVisibility: () => {},
        toggleMinimised: () => {},
        get: () => false,
      }}
    >
      <MUIBox height={200}>{Story()}</MUIBox>
    </FloatingPanelContext.Provider>
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
          targetId="timeline"
        />
        <FloatingPanel.DockItem icon={<MapIcon fontSize="inherit" />} label="Map" count={6} targetId="map" />
      </>
    ),
  },
};
