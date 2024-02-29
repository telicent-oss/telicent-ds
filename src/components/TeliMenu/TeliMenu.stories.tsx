import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TeliMenu } from "./TeliMenu";
import SimpleMenu from "./stories/SimpleMenu";

const meta = {
  component: TeliMenu,
  title: "components/Menus/TeliMenu",
} satisfies Meta<typeof TeliMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleMenuExample: Story = {
  render: () => <SimpleMenu />,
  args: {
    open: false,
  },
};
