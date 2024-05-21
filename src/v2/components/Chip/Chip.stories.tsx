import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta = {
  component: Chip,
} satisfies Meta<typeof Chip>;

export default meta;

export type ChipStory = StoryObj<typeof meta>;

export const Basic: ChipStory = {
  args: {
    label: '### label',
    color: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: `Chips are compact elements that represent an input, attribute, or action.`,
      },
    },
  },
};
