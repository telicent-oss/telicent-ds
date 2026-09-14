import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider, Stack, Typography } from "@mui/material";

const meta: Meta<typeof Slider> = {
  title: "MUI Coverage/Individual/Slider",
  component: Slider,
  tags: ["!autodocs"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: track and rail colour and thickness, thumb size and shadow, value-label shape and contrast, mark and mark-label typography, size steps, disabled dimming, focus ring, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Slider>;

type Mark = { value: number; label: string };

const marks: Mark[] = [
  { value: 0, label: "0" },
  { value: 25, label: "25" },
  { value: 50, label: "50" },
  { value: 75, label: "75" },
  { value: 100, label: "100" },
];

export const Markup: React.FC = () => (
  <Stack spacing={4} sx={{ width: 360 }}>
    <Stack spacing={1}>
      <Typography variant="body2">Continuous, primary</Typography>
      <Slider defaultValue={40} />
    </Stack>
    <Stack spacing={1}>
      <Typography variant="body2">Range, secondary, small</Typography>
      <Slider defaultValue={[20, 70]} size="small" color="secondary" />
    </Stack>
    <Stack spacing={1}>
      <Typography variant="body2">Value label always on</Typography>
      <Slider defaultValue={60} valueLabelDisplay="on" />
    </Stack>
    <Stack spacing={1}>
      <Typography variant="body2">Disabled</Typography>
      <Slider defaultValue={30} disabled />
    </Stack>
  </Stack>
);

const MarksMarkup: React.FC = () => (
  <Stack spacing={4} sx={{ width: 360 }}>
    <Stack spacing={1}>
      <Typography variant="body2">Stepped with labelled marks</Typography>
      <Slider defaultValue={50} step={25} marks={marks} valueLabelDisplay="auto" />
    </Stack>
    <Stack spacing={1}>
      <Typography variant="body2">Restricted to marks</Typography>
      <Slider defaultValue={75} step={null} marks={marks} valueLabelDisplay="on" />
    </Stack>
    <Stack spacing={1}>
      <Typography variant="body2">Unlabelled marks, small</Typography>
      <Slider defaultValue={[25, 75]} step={25} marks size="small" />
    </Stack>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
export const WithMarks: Story = { render: () => <MarksMarkup /> };
