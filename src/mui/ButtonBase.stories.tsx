import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonBase, Stack, Typography } from "@mui/material";

const meta: Meta<typeof ButtonBase> = {
  title: "MUI Coverage/Individual/ButtonBase",
  component: ButtonBase,
  tags: ["!autodocs"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: focus ring visibility and ripple colour only. ButtonBase carries almost no design of its own — no fill, border, radius or typography — so expect near-zero work beyond focus and ripple treatment.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ButtonBase>;

export const Markup: React.FC = () => (
  <Stack direction="row" spacing={3} alignItems="center">
    <ButtonBase sx={{ p: 1.5, borderRadius: 1 }}>
      <Typography variant="body2">With ripple</Typography>
    </ButtonBase>
    <ButtonBase disableRipple sx={{ p: 1.5, borderRadius: 1 }}>
      <Typography variant="body2">No ripple</Typography>
    </ButtonBase>
    <ButtonBase disabled sx={{ p: 1.5, borderRadius: 1 }}>
      <Typography variant="body2">Disabled</Typography>
    </ButtonBase>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
