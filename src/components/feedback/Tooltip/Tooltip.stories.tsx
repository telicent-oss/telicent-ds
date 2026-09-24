import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";
import Button from "../../buttons/Button/Button";

const meta = {
  title: "Feedback/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

export type TooltipStory = StoryObj<typeof meta>;

export const Basic: TooltipStory = {
  args: {
    title: "Tooltip text",
    children: <Button>Hover me</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: `Wraps a child element and shows a floating label on hover or focus.`,
      },
    },
  },
  render: (args) => <Tooltip {...args} />,
};
