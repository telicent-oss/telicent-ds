import type { Meta, StoryObj } from "@storybook/react";
import { TreeView, TreeViewBaseItem } from "./TreeView";

const meta = {
  component: TreeView,
} satisfies Meta<typeof TreeView>;

export default meta;

export type TreeViewStory = StoryObj<typeof meta>;

const MUI_X_PRODUCTS: TreeViewBaseItem[] = [
  {
    id: 'grid',
    label: 'Data Grid',
    children: [
      { id: 'grid-community', label: '@mui/x-data-grid' },
      { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
      { id: 'grid-premium', label: '@mui/x-data-grid-premium' },
    ],
  },
  {
    id: 'pickers',
    label: 'Date and Time Pickers',
    children: [
      { id: 'pickers-community', label: '@mui/x-date-pickers' },
      { id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
    ],
  },
];

export const Basic: TreeViewStory = {
  args: {
    id: "example-id",
    items: MUI_X_PRODUCTS
  },
  parameters: {
    docs: {
      description: {
        story: `For displaying and selecting a hierarchy of data (from <code>RichTreeView</code> with some extra opinion)`,
      },
    },
  },
};
