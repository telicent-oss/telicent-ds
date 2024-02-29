import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TeliBasicLayout from "./TeliBasicLayout";

const meta = {
  component: TeliBasicLayout,
} satisfies Meta<typeof TeliBasicLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <p>
        The telicent basic layout is a very simple component. It doesn't offer
        anything fancy apart from the telicent theme. This layout can be used a
        base for any custom layout a given application requires where the
        standard layout is not suitable.
      </p>
    ),
  },
};
