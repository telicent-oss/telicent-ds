import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { ExampleContent } from "../../layout/examples";

const meta = {
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;

export type SkeletonStory = StoryObj<typeof meta>;

export const Basic: SkeletonStory = {
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: `A component use to visually stub out text/images which are "pending".`,
      },
    },
  },
  render: (args) => (
    <Skeleton {...args} />
  )
};
