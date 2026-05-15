import type { Meta, StoryObj } from "@storybook/react";
import TreeView, { TreeViewBaseItem } from "./TreeView";

const items: TreeViewBaseItem[] = [
  {
    id: "all",
    label: "All",
    children: [
      {
        id: "Customer management",
        label: "Customer management",
        children: [
          {
            id: "Customer definition",
            label: "Customer definition",
            children: [
              {
                id: "Customer information management",
                label: "Customer information managment",
              },
              {
                id: "Customer preference management",
                label: "Customer preference management",
              },
            ],
          },
        ],
      },
      { id: "Customer user data", label: "Customer user data" },
      { id: "Customer satisfaction", label: "Customer satisfaction" },
    ],
  },
];

const meta = {
  title: "Data display/Tree View",
  component: TreeView,
  parameters: {
    docs: {
      description: {
        component: "Buttons allow users to take actions, and make choices, with a single tap.",
      },
    },
  },
  tags: ["autodocs"],
  args: { items },
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
