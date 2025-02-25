import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

import AppBar from "./AppBar";
import { Text, UserProfile, UserStatus } from "../../data-display";
import { Button } from "../../inputs";

const meta: Meta<typeof AppBar> = {
  title: "Surfaces/AppBar",
  component: AppBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The AppBar component provides a top navigation bar that supports branding, actions, and more.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof AppBar>;

export const Example: Story = {};

export const WithAppName: Story = {
  args: {
    appName: "Design System",
  },
};

export const WithUserProfile: Story = {
  args: {
    ...WithAppName.args,
    endChild: (
      <UserProfile fullName="Han Solo">
        <UserStatus fullName="Han Solo">
          <Text variant="subtitle1">Roles</Text>
          <Text>Smuggler</Text>
          <Text>Scoundrel</Text>
          <Text>Hero</Text>
        </UserStatus>
      </UserProfile>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "user-profile" }));
  },
};

export const WithVersionNumber: Story = {
  args: {
    appName: "Design System",
    version: "1.2.0",
  },
};

export const WithSignOutButton: Story = {
  args: {
    ...WithAppName.args,
    endChild: (
      <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
    ),
  },
};

