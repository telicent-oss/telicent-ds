import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarGroup, Stack } from "@mui/material";
import { LocationOn as LocationOnIcon } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof Avatar> = {
  title: "MUI Coverage/Individual/Avatar",
  excludeStories: ["Markup"],
  component: Avatar,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: default background colour and letter contrast, size steps, circular vs rounded shape, AvatarGroup overlap and surplus (+n) chip, dark mode. The design system already ships a MuiAvatar styleOverrides entry, so this one is partly designed already.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Markup: React.FC = () => (
  <Stack spacing={3}>
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar sx={{ width: 24, height: 24 }}>A</Avatar>
      <Avatar>B</Avatar>
      <Avatar sx={{ width: 56, height: 56 }}>C</Avatar>
    </Stack>
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar />
      <Avatar variant="rounded">R</Avatar>
      <Avatar variant="square">S</Avatar>
      <Avatar>
        <LocationOnIcon />
      </Avatar>
    </Stack>
    <AvatarGroup max={4}>
      <Avatar>A</Avatar>
      <Avatar>B</Avatar>
      <Avatar>C</Avatar>
      <Avatar>D</Avatar>
      <Avatar>E</Avatar>
      <Avatar>F</Avatar>
    </AvatarGroup>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
