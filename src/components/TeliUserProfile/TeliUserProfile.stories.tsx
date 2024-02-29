import type { Meta, StoryObj } from "@storybook/react";
import TeliUserProfile from "./TeliUserProfile";

const meta = {
  component: TeliUserProfile,
  parameters: {
    docs: {
      description: {
        component: `This component can be used to perform various user actions such
        as tweaking application setttings.`,
      },
    },
  },
} satisfies Meta<typeof TeliUserProfile>;

export default meta;
type TeliUserProfileStory = StoryObj<typeof meta>;

export const BasicExample: TeliUserProfileStory = {
  args: {
    onSettingsClick: () => alert("Clicked settings menu item"),
  },
  parameters: {
    docs: {
      description: {
        story: `When the first and last name is not provided, a generic user profile
        is created.`,
      },
    },
  },
};

export const InitialsExample: TeliUserProfileStory = {
  args: { ...BasicExample.args, firstName: "Itachi", lastName: "Uchiha" },
  parameters: {
    docs: {
      description: {
        story: `To create a less generic user profile, provide the first and last
        name.`,
      },
    },
  },
};
