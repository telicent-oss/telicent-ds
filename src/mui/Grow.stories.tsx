import React from "react";
import useCycle from "./useCycle";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Grow, Paper, Typography } from "@mui/material";

const meta: Meta<typeof Grow> = {
  title: "MUI Coverage/Individual/Grow",
  excludeStories: ["Markup"],
  component: Grow,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: duration and easing only. Grow carries no visual design of its own — all visible design belongs to the Paper inside it — but the theme owns transitions.duration and transitions.easing, so the timing is themeable. The story loops so the motion is visible.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Grow>;

export const Markup: React.FC = () => {
  const on = useCycle();

  return (
  <Box sx={{ width: 320, height: 160 }}>
    <Grow in={on}>
      <Paper sx={{ p: 2, height: 160 }}>
        <Typography variant="h6">Grow</Typography>
        <Typography variant="body2">
          Rendered with `in` set, so the transition is already complete and the
          Paper is fully visible.
        </Typography>
      </Paper>
    </Grow>
  </Box>
  );
};

export const WithTelicentTheme: Story = { render: () => <Markup /> };
