import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";
import Card from "../../surfaces/Card/Card";
import { H4, H5, Text } from "../Text/Text";
import FlexBox from "../../layout/FlexBox";
import Chip from "../Chip/Chip";
import { Box } from "@mui/material";
import { BinIcon, FloppyDiskIcon } from "../Icons";

const meta = {
  title: "Data display/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy.",
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

export type DividerStory = StoryObj<typeof meta>;

export const Example: DividerStory = {
  render: () => (
    <Card maxWidth={360}>
      <FlexBox padding={2}>
        <H4>Rivers in Africa</H4>
        <H5>Nile</H5>
        <Text>
          The Nile is the longest river in Africa. Its length is around 6,650
          kilometers, and its drainage basin covers 11 African countries.
        </Text>
      </FlexBox>
      <Divider />
      <Box padding={2}>
        <Text>Other rivers</Text>
        <FlexBox direction="row" spacing={1}>
          <Chip label="Zambezi" size="small" />
          <Chip label="Niger" size="small" />
          <Chip label="Mara" size="small" />
        </FlexBox>
      </Box>
    </Card>
  ),
};

/**
 * Use the orientation prop to change the Divider from `horizontal` to `vertical`.
 */
export const Orientation: DividerStory = {
  args: {
    orientation: "vertical",
    flexItem: true,
  },
  render: (args) => (
    <FlexBox
      direction="row"
      spacing={1}
      border={1}
      width="fit-content"
      borderColor="grey"
      borderRadius={1}
      padding={1}
    >
      <BinIcon />
      <Divider {...args} />
      <FloppyDiskIcon />
    </FlexBox>
  ),
};

/**
 * Use the `flexItem` prop to display the Divider when it's being used in a flex container.
 */
export const FlexItem: DividerStory = {
  ...Orientation
}
