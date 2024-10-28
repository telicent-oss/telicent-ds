import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ClockIcon } from "../../data-display";
import { FloatingPanel } from "./index";

const meta: Meta<typeof FloatingPanel.DockItem> = {
  title: "Surfaces/FloatingPanel/FloatingPanel.DockItem",
  component: FloatingPanel.DockItem,
  tags: ["autodocs"],
  decorators: (Story) => (
    <FloatingPanel.Provider>
      {Story()}
    </FloatingPanel.Provider>
  ),
};
export default meta;

type Story = StoryObj<typeof FloatingPanel.DockItem>;

export const Demo: Story = {
  args: {
    label: "Timeline",
    icon: <ClockIcon fontSize="inherit" />,
    count: 10,
  },
};
