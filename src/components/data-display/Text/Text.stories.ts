import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import Text from "./Text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Data Display/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component: `Key factors to follow for an accessible typography:
        <br /> - **Heading hierarchy.** Based on the 
        [W3 guidelines](https://www.w3.org/WAI/tutorials/page-structure/headings/), 
        don't skip heading levels. Make sure to 
        [separate the semantics from the style](https://mui.com/material-ui/react-typography/#changing-the-semantic-element).
        `,
      },
    },
  },
  tags: ["autodocs"],
  args: {
    align: "inherit",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Heading Style 1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading Style 2",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Heading Style 3",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    children: "Heading Style 4",
  },
};

export const Heading5: Story = {
  args: {
    variant: "h5",
    children: "Heading Style 5",
  },
};

export const Heading6: Story = {
  args: {
    variant: "h6",
    children: "Heading Style 6",
  },
};

export const Subtitle1: Story = {
  args: {
    variant: "subtitle1",
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
};

export const Subtitle2: Story = {
  args: {
    variant: "subtitle2",
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
};

export const Body1: Story = {
  args: {
    variant: "body2",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Caption text",
  },
};

export const Overline: Story = {
  args: {
    variant: "overline",
    children: "overline",
  },
};
