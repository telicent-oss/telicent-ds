import type { Meta, StoryObj } from "@storybook/react";
import TeliUserAvatar from "./TeliUserAvatar";

const meta = {
  component: TeliUserAvatar,
  parameters: {
    docs: {
      description: {
        component: `The user avatar component is used to represent the user's 
        identity in an application. Users can perform different actions 
        such as tweaking application setttings.`,
      },
    },
  },
} satisfies Meta<typeof TeliUserAvatar>;

export default meta;
type TeliUserAvatarStory = StoryObj<typeof meta>;

export const BasicExample: TeliUserAvatarStory = {
  args: {
    firstName: "",
    lastName: "",
  },
  render: (args) => <TeliUserAvatar {...args} />,
  parameters: {
    docs: {
      description: {
        story: `When a user has no identity, a generic profile will be created.`,
      },
    },
  },
};

export const InitialsExample: TeliUserAvatarStory = {
  args: { firstName: "Itachi", lastName: "Uchiha" },
  parameters: {
    docs: {
      description: {
        story: `When a user has an identity, their first and last name can be
        used to create a user profile.`,
      },
    },
  },
};

export const ImageExample: TeliUserAvatarStory = {
  args: {
    src: "./src/components/TeliAvatar/itachi-uchiha.png",
    alt: "Itachi Uchiha profile image",
  },
  parameters: {
    docs: {
      description: {
        story: `An image can be used to create a more personalised user profile.
        To improve accessibility use the alt prop to provide a short descriptive
        sentence representing the image.`,
      },
    },
  },
};
