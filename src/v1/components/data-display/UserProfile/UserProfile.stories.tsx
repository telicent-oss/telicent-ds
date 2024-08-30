import type { Meta, StoryObj } from "@storybook/react";
import UserProfile from "./UserProfile";
import FlexBox from "../../layout/FlexBox";
import { Text } from "../Text/Text";
import * as UserProfileContentStories from "./UserProfileContent/UserProfileContent.stories";
import UserProfileContent from "./UserProfileContent/UserProfileContent";

const meta = {
  component: UserProfile,
  tags: ["autodocs"],
  // subcomponents: { UserProfileContent }, // doesn't work yet -> https://github.com/storybookjs/storybook/issues/27535
  argTypes: {
    fullName: {
      description: "The user's full name",
    },
    children: {
      control: false,
      description: "Content inside the component",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} satisfies Meta<typeof UserProfile>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    fullName: "Satoru Gojo",
    children: (
      <UserProfileContent>
        {UserProfileContentStories.WithActions.args?.children}
      </UserProfileContent>
    ),
  },
};
