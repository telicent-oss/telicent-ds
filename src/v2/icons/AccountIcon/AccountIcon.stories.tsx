import type { Meta, StoryObj } from "@storybook/react";
import AccountIcon from "./AccountIcon";

const meta = {
  component: AccountIcon,
} satisfies Meta<typeof AccountIcon>;

export default meta;

export type AccountIconStory = StoryObj<typeof meta>;

export const Basic: AccountIconStory = {
  args: {

  },
  parameters: {
    docs: {
      description: {
        story: `Icon representing a person's account.`,
      },
    },
  },
};
