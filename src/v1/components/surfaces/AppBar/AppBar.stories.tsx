import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

import AppBar from "./AppBar";
import { Text, UserProfile, UserStatus } from "../../data-display";

const meta: Meta<typeof AppBar> = {
  title: "Surfaces/AppBar",
  component: AppBar,
  tags: ["autodocs"],
  parameters: {
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
    userProfile: (
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
