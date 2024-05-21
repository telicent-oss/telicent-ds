import type { Meta, StoryObj } from "@storybook/react";
import Popover from "./Popover";

const meta = {
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

export type PopoverStory = StoryObj<typeof meta>;

export const Basic: PopoverStory = {
  args: {
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: `A Popover can be used to display some content on top of another.`,
      },
    },
  },
};
