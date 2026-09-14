import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Stack } from "@mui/material";
import { LocationOn as LocationOnIcon } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof Badge> = {
  title: "MUI Coverage/Individual/Badge",
  excludeStories: ["Markup"],
  component: Badge,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: badge fill colour against the palette, contrast of the count text, dot size and offset, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Markup: React.FC = () => (
  <Stack direction="row" spacing={4}>
    <Badge badgeContent={4} color="primary"><LocationOnIcon /></Badge>
    <Badge badgeContent={100} max={99} color="secondary"><LocationOnIcon /></Badge>
    <Badge variant="dot" color="error"><LocationOnIcon /></Badge>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
