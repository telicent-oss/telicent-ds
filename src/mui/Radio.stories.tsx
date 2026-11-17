import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio, Stack, Typography } from "@mui/material";

const meta: Meta<typeof Radio> = {
  title: "MUI Coverage/Individual/Radio",
  component: Radio,
  tags: ["!autodocs", "!dev"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: selected fill colour against the palette, ring weight and dot size, hit area and hover ripple tint, size steps, disabled dimming, focus ring, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Markup: React.FC = () => (
  <Stack spacing={3}>
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 96 }}>Colours</Typography>
      <Radio defaultChecked color="primary" />
      <Radio defaultChecked color="secondary" />
      <Radio defaultChecked color="error" />
      <Radio defaultChecked color="success" />
      <Radio defaultChecked={false} />
    </Stack>

    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 96 }}>Sizes</Typography>
      <Radio defaultChecked size="small" />
      <Radio defaultChecked size="medium" />
      <Radio defaultChecked={false} size="small" />
      <Radio defaultChecked={false} size="medium" />
    </Stack>

    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{ width: 96 }}>Disabled</Typography>
      <Radio defaultChecked disabled />
      <Radio defaultChecked={false} disabled />
    </Stack>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
