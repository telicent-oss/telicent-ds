import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ClockIcon } from "../../data-display";
import FloatingPanelItem from "./FloatingPanelItem";

const meta: Meta<typeof FloatingPanelItem> = {
  title: "Surfaces/FloatingPanel/FloatingPanelItem",
  component: FloatingPanelItem,
  tags: ["autodocs"],
  args: {
    onRemove: fn(),
    onMaximise: fn(),
  }
};
export default meta;

type Story = StoryObj<typeof FloatingPanelItem>;

export const Demo: Story = {
  args: {
    label: "Timeline",
    icon: <ClockIcon fontSize="inherit" />,
    count: 10,
  },
};
