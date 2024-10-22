import type { Meta, StoryObj } from "@storybook/react";
import MUIBox from "@mui/material/Box/Box";
import { fn } from "@storybook/test";

import { FlexBox } from "../../layout";
import { MapIcon } from "../../data-display";
import DraggableFloatingPanel from "./DraggableFloatingPanel";

const meta: Meta<typeof DraggableFloatingPanel> = {
  title: "Surfaces/FloatingPanel/DraggableFloatingPanel",
  component: DraggableFloatingPanel,
  tags: ["autodocs"],
  args: {
    onMinimise: fn()
  },
  decorators: (Story) => (
    <MUIBox height={500}>
      {Story()}
    </MUIBox>
  ),
};
export default meta;

type Story = StoryObj<typeof DraggableFloatingPanel>;

export const Demo: Story = {
  args: {
    bounds: "parent",
    count: 3,
    icon: <MapIcon color="primary" fontSize="inherit" />,
    title: "Nodes with geo data",
    children: (
      <>
        <img
          src="./src/assets/storybook/map.png"
          width={500}
          height={285.6}
          loading="lazy"
          css={{ objectFit: "cover" }}
        />
        <FlexBox direction="row" spacing={1} paddingInline={1} paddingBottom={1}>
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
