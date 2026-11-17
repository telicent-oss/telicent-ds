import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlertTitle } from "./AlertTitle";

const meta: Meta<typeof AlertTitle> = {
  title: "Candidates/AlertTitle",
  component: AlertTitle,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
