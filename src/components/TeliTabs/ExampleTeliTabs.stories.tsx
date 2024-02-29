import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TeliTabs from "./TeliTabs";
import TeliTab from "./TeliTab";
import TeliTabPanel from "./TeliTabPanel";

const TabsExample = () => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTabIndex(newValue);
  };

  return (
    <>
      <TeliTabs selectedTabIndex={selectedTabIndex} onChange={handleChange}>
        <TeliTab label="Item one" tabIndex={0} />
        <TeliTab label="Item two" tabIndex={1} />
        <TeliTab label="Item three" tabIndex={3} />
      </TeliTabs>
      <TeliTabPanel selectedTabIndex={selectedTabIndex} tabIndex={0}>
        Item one content
      </TeliTabPanel>
      <TeliTabPanel selectedTabIndex={selectedTabIndex} tabIndex={1}>
        Item two content
      </TeliTabPanel>
      <TeliTabPanel selectedTabIndex={selectedTabIndex} tabIndex={2}>
        Item three content
      </TeliTabPanel>
    </>
  );
};

const meta = {
  title: "Components/TeliTabs",
  component: TabsExample,
} satisfies Meta<typeof TabsExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicTabs: Story = {
  render: TabsExample,
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
};
