import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

import { useExtendedTheme } from "../export";
import ThemeViewer from "./ThemeViewer";

const meta: Meta<typeof ThemeViewer> = {
  title: "Theme/Design Tokens",
  component: ThemeViewer,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeViewer>;

export const Default: Story = {
  render: () => {
    const theme = useExtendedTheme();
    return <ThemeViewer theme={theme} />;
  },
};
