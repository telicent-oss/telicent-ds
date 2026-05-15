import type { Meta, StoryObj } from "@storybook/react";
import { H1, H2, H3, H4, H5, H6 } from "./Text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Data Display/Headings",
  component: H1,
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
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof H1>;

export const Heading1: Story = {
  args: {
    children: "Heading Style 1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading Style 2",
  },
  render: (args) => <H2 {...args} />,
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Heading Style 3",
  },
  render: (args) => <H3 {...args} />,
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    children: "Heading Style 4",
  },
  render: (args) => <H4 {...args} />,
};

export const Heading5: Story = {
  args: {
    variant: "h5",
    children: "Heading Style 5",
  },
  render: (args) => <H5 {...args} />,
};

export const Heading6: Story = {
  args: {
    variant: "h6",
    children: "Heading Style 6",
  },
  render: (args) => <H6 {...args} />,
};
