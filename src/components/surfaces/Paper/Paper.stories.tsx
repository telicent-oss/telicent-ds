import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../../data-display/Text/Text";
import { Paper } from "./Paper";
import { Box } from "@mui/material";

const meta = {
  title: "Surfaces/Paper",
  component: Paper,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
  render: () => {
    return (
      <div>
        {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((el) => (
          <Box m={2} key={`${el}`}>
            <Paper elevation={el}>
              <Box p={2}>
                <Text>Paper with elevation: {el}</Text>
              </Box>
            </Paper>
          </Box>
        ))}
      </div>
    );
  },
};

/**
 * PROPOSAL. The `padding` prop, next to what the estate writes by hand today.
 *
 * Every value below is one a real app currently passes as `sx`. telicent-admin
 * writes `padding: 1` in seven separate components; graph uses 2.5; search uses
 * an asymmetric `px: 3, py: 2`, which this prop deliberately does NOT cover —
 * asymmetric padding stays `sx`.
 */
export const ProposedPaddingProp: Story = {
  args: {},
  render: () => (
    <Box display="flex" gap={2} flexWrap="wrap">
      {[1, 2, 2.5].map((value) => (
        <Paper key={value} elevation={2} padding={value}>
          <Text>padding={value}</Text>
        </Paper>
      ))}
      <Paper elevation={2} sx={{ px: 3, py: 2 }}>
        <Text>asymmetric, still sx</Text>
      </Paper>
    </Box>
  ),
};
