import type { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";

const meta = {
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

export type ContainerStory = StoryObj<typeof meta>;

export const Basic: StoryObj<typeof Container> = {
  argTypes: {
    maxWidth: {
      control: "select",
      options: [false, "xs", "sm", "md", "lg", "xl"],
      description: "Defines the maximum width of the container.",
      table: {
        type: { summary: 'false | "xs" | "sm" | "md" | "lg" | "xl"' },
        defaultValue: { summary: "lg" },
      },
    },
    fixed: {
      control: "boolean",
      description: "Set the max-width to match the min-width of the current breakpoint.",
      table: {
        type: { summary: "boolean" },
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
