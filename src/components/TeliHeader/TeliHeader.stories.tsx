import type { Meta, StoryObj } from "@storybook/react";

import TeliHeader from "./TeliHeader";
import { appsArray } from "../AppSwitch/appsArray";
import TeliButton from "../TeliButton/TeliButton";
import TeliBrand from "../TeliBrand/TeliBrand";
import AppSwitch from "../AppSwitch/AppSwitch";

const meta = {
  component: TeliHeader,
} satisfies Meta<typeof TeliHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomHeader: Story = {
  args: {
    navProps: {
      id: "example-telicent-nav",
      className: "flex justify-between items-center",
    },
  },
  render: (args) => (
    <TeliHeader {...args}>
      <TeliBrand appName="Custom header" />
      <div className="flex space-x-3">
        <TeliButton variant="primary" size="small">
          Get started
        </TeliButton>
        <AppSwitch apps={appsArray} />
      </div>
    </TeliHeader>
  ),
};
