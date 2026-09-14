import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomNavigation, BottomNavigationAction, Paper, Stack } from "@mui/material";
import { Check, List, LocationOn } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof BottomNavigation> = {
  title: "MUI Coverage/Individual/BottomNavigation",
  component: BottomNavigation,
  tags: ["!autodocs", "!dev"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: selected vs unselected action colour, icon and label sizing, bar height and background, hover and focus states, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof BottomNavigation>;

export const Markup: React.FC = () => (
  <Stack spacing={4} sx={{ width: 480 }}>
    <Paper elevation={3}>
      <BottomNavigation value={1} showLabels>
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
        <BottomNavigationAction label="Records" icon={<List />} />
        <BottomNavigationAction label="Approved" icon={<Check />} />
      </BottomNavigation>
    </Paper>
    <Paper elevation={3}>
      <BottomNavigation value={0}>
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
        <BottomNavigationAction label="Records" icon={<List />} />
        <BottomNavigationAction label="Approved" icon={<Check />} disabled />
      </BottomNavigation>
    </Paper>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
