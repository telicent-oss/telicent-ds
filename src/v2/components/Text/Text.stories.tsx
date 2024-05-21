import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

export type TextStory = StoryObj<typeof meta>;

export const Basic: TextStory = {
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: `For letters, sentences, and paragraphs (currently alias of <code>Typography</code>.`,
      },
    },
  },
};
