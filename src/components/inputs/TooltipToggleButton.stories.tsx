import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const GoToToolbar = () => (
  <div style={{ padding: 16, fontFamily: "sans-serif" }}>
    <h3>Story moved</h3>
    <p>
      Use <code>Surfaces/Toolbar → Example</code>.
    </p>
  </div>
);

const meta: Meta<typeof GoToToolbar> = {
  title: "Surfaces/Toolbar/TooltipToggleButton ⚠ Redirect",
  component: GoToToolbar,
  parameters: {
    docs: {
      description: {
        component: "This file only exists to point you to `Surfaces/Toolbar → Example`.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof GoToToolbar>;

export const Redirect: Story = {
  render: () => <GoToToolbar />,
};
