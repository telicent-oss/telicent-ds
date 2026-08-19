import React from "react";
import useCycle from "./useCycle";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Zoom, Paper, Typography } from "@mui/material";

const meta: Meta<typeof Zoom> = {
  title: "MUI Coverage/Individual/Zoom",
  excludeStories: ["Markup"],
  component: Zoom,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: duration and easing only. Zoom carries no visual design of its own — all visible design belongs to the Paper inside it — but the theme owns transitions.duration and transitions.easing, so the timing is themeable. The story loops so the motion is visible.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Zoom>;

export const Markup: React.FC = () => {
  const on = useCycle();

  return (
  <Box sx={{ width: 320, height: 160 }}>
    <Zoom in={on}>
      <Paper sx={{ p: 2, height: 160 }}>
        <Typography variant="h6">Zoom</Typography>
        <Typography variant="body2">
          Rendered with `in` set, so the transition is already complete and the
          Paper is fully visible.
        </Typography>
      </Paper>
    </Zoom>
  </Box>
  );
};

export const WithTelicentTheme: Story = { render: () => <Markup /> };
