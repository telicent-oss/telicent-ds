import type { Meta, StoryObj } from "@storybook/react";
import MUIBox from "@mui/material/Box";
import Panel from "./FixedPanel";
import { FloatingPanelContext } from "../FloatingPanel";
import { MapIcon } from "../../data-display";
import { FlexBox } from "../../layout";
import { TEST_IMAGE } from "./constants";

const meta: Meta<typeof Panel> = {
  title: "Surfaces/FixedPanel",
  component: Panel,
  tags: ["autodocs"],
  decorators: (Story) => (
    <FloatingPanelContext.Provider
      value={{
        panels: { map: { visible: true, minimised: false } },
        toggleVisibility: () => {},
        get: () => false,
      }}
    >
      <MUIBox height={500}>{Story()}</MUIBox>
    </FloatingPanelContext.Provider>
  ),
};
export default meta;

type Story = StoryObj<typeof Panel>;

export const Demo: Story = {
  args: {
    count: 3,
    iconBeforeTitle: <MapIcon color="primary" fontSize="inherit" />,
    title: "Nodes with geo data",
    targetId: "map",
    children: (
      <>
        <img src={TEST_IMAGE} width={1000} height={285.6} loading="lazy" css={{ objectFit: "cover" }} />
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
