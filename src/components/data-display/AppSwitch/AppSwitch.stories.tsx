import type { Meta, StoryObj } from "@storybook/react-vite";
import AppSwitch from "./AppSwitch";

export const appList = [
  {
    id: "telicent-graph",
    name: "graph",
    url: "https://graph.io",
    iconDark: "./src/assets/icons/graph.svg",
    iconLight: "./src/assets/icons/graph.svg",
  },
  {
    id: "telicent-search",
    name: "search",
    url: "https://search.io",
    iconDark: "./src/assets/icons/search.svg",
    iconLight: "./src/assets/icons/search.svg",
  },
  {
    id: "telicent-catalog",
    name: "catalog",
    url: "https://data-catalog.io",
    iconDark: "./src/assets/icons/catalog.svg",
    iconLight: "./src/assets/icons/catalog.svg",
  },
  {
    id: "telicent-user-portal",
    name: "portal",
    url: "https://data-user-portal.io",
    iconDark: "./src/assets/icons/user-portal-dark.svg",
    iconLight: "./src/assets/icons/user-portal-light.svg",
  },
  {
    id: "telicent-no-icon",
    name: "no-icon app",
    url: "https://no-icon.io",
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
        component:
          "AppSwitch component accepts apps, an array of objects with id, name, url and optional iconDark/iconLight (theme-aware). The legacy `icon` field is still supported but deprecated. If no icon is provided, only the name renders.",
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