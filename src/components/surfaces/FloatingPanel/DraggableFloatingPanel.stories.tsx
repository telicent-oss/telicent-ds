import type { Meta, StoryObj } from "@storybook/react";
import MUIBox from "@mui/material/Box";

import { FlexBox } from "../../layout";
import { AppSwitch, MapIcon } from "../../data-display";
import { FloatingPanel, FloatingPanelContext } from "./index";

const meta: Meta<typeof FloatingPanel.DraggablePanel> = {
  title: "Surfaces/FloatingPanel/FloatingPanel.DraggablePanel",
  component: FloatingPanel.DraggablePanel,
  tags: ["autodocs"],
  decorators: (Story) => (
    <FloatingPanelContext.Provider
      value={{
        panels: { map: { visible: true, minimised: false } },
        toggleVisibility: () => {},

        get: () => false,
      }}
    >
      <MUIBox
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          bgcolor: "background.default",
          border: "1px dashed",
          borderColor: "divider",
        }}
      >
        <Story />
      </MUIBox>
    </FloatingPanelContext.Provider>
  ),
};
export default meta;

type Story = StoryObj<typeof FloatingPanel.DraggablePanel>;

export const ResizeBaseline: Story = {
  args: {
    bounds: "parent",
    title: "Resize baseline",
    targetId: "map",
    iconBeforeTitle: <MapIcon color="primary" fontSize="inherit" />,
    menu: (
      <AppSwitch
        apps={[
          {
            icon: "./src/assets/icons/graph.svg",
            id: "telicent-graph",
            name: "graph",
            url: "https://graph.io",
          },
          {
            icon: "./src/assets/icons/search.svg",
            id: "telicent-search",
            name: "search",
            url: "https://search.io",
          },
        ]}
      />
    ),
    children: (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", minHeight: 0 }}>
        <div style={{ flex: 1, minHeight: 0, overflow: "auto", padding: 8, backgroundColor: "#C9C9C9" }}>
          Resizable content (flex:1). Click on bottom right corner to resize.
        </div>
      </div>
    ),
  },
};
