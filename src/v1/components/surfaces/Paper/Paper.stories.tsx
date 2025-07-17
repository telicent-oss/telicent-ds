import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../data-display/Text/Text";
import { Paper } from "./Paper";
import { Box } from "@mui/material";
import { UIThemeProvider } from "../../../theme";

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
          <Box m={2} key={`${el}`} >
            <Paper elevation={el} >
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
