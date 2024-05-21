import type { Meta, StoryObj } from "@storybook/react";
import { Paper } from "./Paper";
import { ExampleContent } from "../examples";

const meta = {
  component: Paper,
} satisfies Meta<typeof Paper>;

export default meta;

export type PaperStory = StoryObj<typeof meta>;

export const Basic: PaperStory = {
  argTypes: {
    elevation: {
      control: 'number',
      description: 'Shadow depth, corresponds to dp in the spec.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      defaultValue: 1,
    },
    variant: {
      control: 'radio',
      options: ['elevation', 'outlined'],
      description: 'The variant to use.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'elevation' },
      },
      defaultValue: 'elevation',
    },
    square: {
      control: 'boolean',
      description: 'If true, rounded corners are disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story: `For "solid" content what _can_ be elevated (with shadow).`,
      },
    },
  },
  render: (args) => (
    <Paper {...args}><ExampleContent /></Paper>
  )
};
