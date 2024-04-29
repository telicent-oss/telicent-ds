import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { Container } from "../../../export";
import { ExampleElevatedContent, ExampleContent } from "../examples";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

export type CardStory = StoryObj<typeof meta>;

export const Basic: CardStory = {
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: `Cards contain content and actions about a single subject.`,
      },
    },
  },
  render: (args) => (
    <Card {...args}>
      <ExampleContent />
    </Card>
  )
};
