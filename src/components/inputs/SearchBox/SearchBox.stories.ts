import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";
import Searchbox from "./SearchBox";

const meta = {
  title: "Inputs/Search/SearchBox",
  component: Searchbox,
  tags: ["autodocs"],
  args: { onSearch: fn() },
} satisfies Meta<typeof Searchbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    placeholder: "Search all",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByRole("searchbox"), "data catalog");
    await userEvent.click(canvas.getByRole("button", { name: "search" }));
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Search all",
    disabled: true,
  },
};
