import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import packageJson from "../../../package.json";
import DependenciesTable from "./DependenciesTable";

const meta: Meta<typeof DependenciesTable> = {
  component: DependenciesTable,
};

export default meta;

type Story = StoryObj<typeof DependenciesTable>;

export const Example: Story = {
  args: {
    dependencies: packageJson.dependencies,
  },
};
