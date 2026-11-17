import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

const meta: Meta<typeof Backdrop> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/Backdrop",
  component: Backdrop,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: scrim colour and opacity over the surface beneath, contrast of content on top, dark mode. Shows theming, not production positioning or stacking.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Markup: React.FC = () => (
  <Box sx={{ position: "relative", height: 200, p: 2, bgcolor: "background.paper" }}>
    <Typography>Content behind the backdrop</Typography>
    <Backdrop open sx={{ position: "absolute", color: "common.white", zIndex: 1 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  </Box>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
