import React from "react";
import useCycle from "./useCycle";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Paper, Slide, Typography } from "@mui/material";

const meta: Meta<typeof Slide> = {
  title: "MUI Coverage/Individual/Slide",
  excludeStories: ["Markup"],
  component: Slide,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: duration and easing only. Slide carries no visual design of its own — all visible design belongs to the Paper inside it — but the theme owns transitions.duration and transitions.easing, so the timing is themeable. The story loops so the motion is visible.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Slide>;

export const Markup: React.FC = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const on = useCycle();

  return (
    <Box
      ref={container}
      sx={{ width: 320, height: 160, position: "relative", overflow: "hidden" }}
    >
      <Slide in={on} direction="up" container={container.current}>
        <Paper sx={{ p: 2, height: 160 }}>
          <Typography variant="h6">Slide</Typography>
          <Typography variant="body2">
            Constrained to its container, so it slides within this box rather
            than across the canvas.
          </Typography>
        </Paper>
      </Slide>
    </Box>
  );
};

export const WithTelicentTheme: Story = { render: () => <Markup /> };
