import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ClockIcon } from "../../data-display";
import { FloatingPanel, FloatingPanelContext } from "./index";

const meta: Meta<typeof FloatingPanel.DockItem> = {
  title: "Surfaces/FloatingPanel/FloatingPanel.DockItem",
  component: FloatingPanel.DockItem,
  tags: ["autodocs"],
  decorators: (Story) => (
    <FloatingPanelContext.Provider
      value={{
        panels: { timeline: { visible: true, minimised: true } },
        toggleVisibility: () => {},
        toggleMinimised: () => {},
        get: () => false,
      }}
    >
      {Story()}
    </FloatingPanelContext.Provider>
  ),
};
export default meta;

type Story = StoryObj<typeof FloatingPanel.DockItem>;

export const Demo: Story = {
  args: {
    label: "Timeline",
    targetId: "timeline",
    icon: <ClockIcon fontSize="inherit" />,
    count: 10,
  },
};
