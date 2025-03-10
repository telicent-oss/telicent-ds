import type { Meta, StoryObj } from "@storybook/react";
import AppSwitch from "./AppSwitch";




const appList = [
    {
      id: "telicent-graph",
      name: "graph",
      url: "https://graph.io",
      icon: "../../../../assets/icons/graph.svg",
    },
    {
      id: "telicent-search",
      name: "search",
      url: "https://search.io",
      icon: "../../../../assets/icons/search.svg",
    },
    {
      id: "telicent-catalog",
      name: "catalog",
      url: "https://data-catalog.io",
      icon: "../../../../assets/icons/catalog.svg",
    },
  ];

const meta: Meta<typeof AppSwitch> = {
  title: "Data display/App Switch",
  component: AppSwitch,
  tags: ["autodocs"],
  args: {apps: appList},
  parameters: {
    docs: {
      description: {
        component: "ApppSwitch component accepts apps, an array of objects, with id, name, url and icon.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof AppSwitch>;



export const AppSwitchExample: Story = {
  args: {
    apps: appList,
  },
};