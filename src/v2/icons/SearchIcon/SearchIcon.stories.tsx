import type { Meta, StoryObj } from "@storybook/react";
import SearchIcon from "./SearchIcon";

const meta = {
  component: SearchIcon,
} satisfies Meta<typeof SearchIcon>;

export default meta;

export type SearchIconStory = StoryObj<typeof meta>;

export const Basic: SearchIconStory = {
  args: {
    // open: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Icon representing "search".`,
      },
    },
  },
};
