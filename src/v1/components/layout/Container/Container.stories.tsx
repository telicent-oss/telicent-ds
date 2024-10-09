import type { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";

const meta = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;

export type ContainerStory = StoryObj<typeof meta>;

export const Basic: StoryObj<typeof Container> = {
  argTypes: {
    maxWidth: {
      control: "radio",
      table: {
        defaultValue: { summary: "lg" },
      },
    },
    fixed: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: `The Container component centers your content horizontally. It's the most basic layout element and often used for the main layout orientation. It constrains the content width which is adjustable via the 'maxWidth' prop.`,
      },
    },
  },
  render: (args) => <Container {...args} style={{ backgroundColor: "grey", height: 140 }} />,
};
