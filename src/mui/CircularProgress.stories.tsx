import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CircularProgress, Stack } from "@mui/material";

const meta: Meta<typeof CircularProgress> = {
  title: "MUI Coverage/Individual/CircularProgress",
  excludeStories: ["Markup"],
  component: CircularProgress,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: track colour against the palette, stroke weight at each size, whether the spinner reads on both light and dark surfaces, and whether determinate and indeterminate share one visual language.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof CircularProgress>;

export const Markup: React.FC = () => (
  <Stack spacing={3}>
    <Stack direction="row" spacing={3} alignItems="center">
      <CircularProgress size={20} />
      <CircularProgress size={40} />
      <CircularProgress size={64} />
      <CircularProgress size={40} thickness={6} />
    </Stack>
    <Stack direction="row" spacing={3} alignItems="center">
      <CircularProgress color="primary" />
      <CircularProgress color="secondary" />
      <CircularProgress color="error" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
    <Stack direction="row" spacing={3} alignItems="center">
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} color="secondary" />
      <CircularProgress variant="determinate" value={75} size={64} />
      <CircularProgress variant="determinate" value={100} color="success" />
    </Stack>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
