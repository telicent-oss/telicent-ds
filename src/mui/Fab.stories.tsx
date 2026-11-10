import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fab, Stack } from "@mui/material";
import { Add as AddIcon, Edit as EditIcon } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof Fab> = {
  title: "MUI Coverage/Individual/Fab",
  component: Fab,
  tags: ["!autodocs"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: fill colours against the palette, icon contrast, elevation/shadow weight, size steps, the extended variant's label typography and padding, hover and focus states, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Fab>;

export const Markup: React.FC = () => (
  <Stack spacing={3} alignItems="flex-start">
    <Stack direction="row" spacing={2} alignItems="center">
      <Fab size="small" color="primary">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="primary">
        <AddIcon />
      </Fab>
      <Fab size="large" color="primary">
        <AddIcon />
      </Fab>
    </Stack>
    <Stack direction="row" spacing={2} alignItems="center">
      <Fab color="secondary">
        <EditIcon />
      </Fab>
      <Fab color="default">
        <EditIcon />
      </Fab>
      <Fab disabled>
        <EditIcon />
      </Fab>
    </Stack>
    <Stack direction="row" spacing={2} alignItems="center">
      <Fab variant="extended" color="primary">
        <AddIcon sx={{ mr: 1 }} />
        Create
      </Fab>
      <Fab variant="extended">
        <EditIcon sx={{ mr: 1 }} />
        Edit
      </Fab>
    </Stack>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
