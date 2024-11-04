import type { Meta, StoryObj } from "@storybook/react";
import MUIBox from "@mui/material/Box/Box";

import { FlexBox } from "../../layout";
import { MapIcon } from "../../data-display";
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
        toggleMinimised: () => {},
        get: () => false,
      }}
    >
      <MUIBox height={500}>{Story()}</MUIBox>
    </FloatingPanelContext.Provider>
  ),
};
export default meta;

type Story = StoryObj<typeof FloatingPanel.DraggablePanel>;

export const Demo: Story = {
  args: {
    bounds: "parent",
    count: 3,
    icon: <MapIcon color="primary" fontSize="inherit" />,
    title: "Nodes with geo data",
    targetId: "map",
    children: (
      <>
        <img
          src="data:image/png;base64,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"
          width={500}
          height={285.6}
          loading="lazy"
          css={{ objectFit: "cover" }}
        />
        <FlexBox
          direction="row"
          spacing={1}
          paddingInline={1}
          paddingBottom={1}
        >
          <div
            css={{
              borderRadius: 4,
              height: 40,
              width: 40,
              backgroundColor: "#555",
            }}
          />
          <div
            css={{
              borderRadius: 4,
              height: 40,
              width: 40,
              backgroundColor: "#555",
            }}
          />
        </FlexBox>
      </>
    ),
  },
};
