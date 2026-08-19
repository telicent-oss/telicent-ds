import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Button, Paper, Popper, Typography } from "@mui/material";

const meta: Meta<typeof Popper> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/Popper",
  component: Popper,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: the surface you place inside the popper — Paper colour, elevation, text contrast, dark mode. Popper itself is unstyled. Shows theming, not production positioning or stacking.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Popper>;

export const Markup: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  return (
    <Box sx={{ position: "relative", height: 200 }}>
      <Button ref={setAnchorEl}>Anchor</Button>
      <Popper open={anchorEl !== null} anchorEl={anchorEl} disablePortal placement="bottom-start">
        <Paper sx={{ p: 2, mt: 1 }}>
          <Typography>Popper content</Typography>
        </Paper>
      </Popper>
    </Box>
  );
};

export const WithTelicentTheme: Story = { render: () => <Markup /> };
