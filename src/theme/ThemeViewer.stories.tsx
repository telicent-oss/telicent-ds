import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import ThemeViewer from "./ThemeViewer";
import { useExtendedTheme } from "../export";

const meta: Meta<typeof ThemeViewer> = {
  title: "Theme/ThemeViewer",
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
