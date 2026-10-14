import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Rating, Stack, Typography } from "@mui/material";

const meta: Meta<typeof Rating> = {
  title: "MUI Coverage/Individual/Rating",
  component: Rating,
  tags: ["!autodocs", "!dev"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: filled versus empty icon colour against the palette, icon size steps, spacing between icons, half-value rendering, read-only and disabled dimming, focus ring, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Rating>;

export const Markup: React.FC = () => (
  <Stack spacing={3}>
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 96 }}>Sizes</Typography>
      <Rating defaultValue={3} size="small" />
      <Rating defaultValue={3} size="medium" />
      <Rating defaultValue={3} size="large" />
    </Stack>
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 96 }}>Precision</Typography>
      <Rating defaultValue={2.5} precision={0.5} />
      <Rating defaultValue={4} max={10} />
    </Stack>
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 96 }}>States</Typography>
      <Rating value={4} readOnly />
      <Rating value={2} disabled />
      <Rating defaultValue={0} />
    </Stack>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
