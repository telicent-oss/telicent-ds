import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuItem } from "./MenuItem";

const meta = {
  title: "Navigation/MenuItem",
  component: MenuItem,
} satisfies Meta<typeof MenuItem>;

export default meta;

export type MenuItemStory = StoryObj<typeof meta>;

export const Basic: MenuItemStory = {
  args: {
    children: "Menu item",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Thin re-export of MUI MenuItem. The DS's opinionated `Menu` renders MenuItems internally via its `options` prop — reach for this standalone `MenuItem` only when you're composing a raw MUI `Menu`, `Select`, or `Autocomplete` that needs custom item content.",
      },
    },
  },
  render: (args) => <MenuItem {...args} />,
};
