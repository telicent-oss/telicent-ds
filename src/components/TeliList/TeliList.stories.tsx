import type { Meta, StoryObj } from "@storybook/react";
import { TeliList, TeliListItem, TeliListItemButton } from "./TeliList";

const meta = {
  component: TeliList,
} satisfies Meta<typeof TeliList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <TeliListItemButton divider>
          <div className="text-lg">Button item</div>
        </TeliListItemButton>
        <TeliListItem divider>
          <div className="text-lg">Normal item</div>
        </TeliListItem>
      </>
    ),
  },
};
