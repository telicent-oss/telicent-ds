import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ThemeViewer from "./ThemeViewer";
import UIThemeProvider from "./UIThemeProvider";
import { useExtendedTheme } from "../../export";


const meta: Meta<typeof ThemeViewer> = {
  title: "Theme/ThemeViewer",
  component: ThemeViewer,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <UIThemeProvider dark theme="GraphOrange">
        <div style={{ padding: 16, backgroundColor: "#222" }}>
          <Story />
        </div>
      </UIThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeViewer>;

export const Default: Story = {
  render: () => {
    const theme = useExtendedTheme();
    return <ThemeViewer theme={theme} />
  }
};