import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { ChevronRight } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof Breadcrumbs> = {
  title: "MUI Coverage/Individual/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["!autodocs"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: link colour and underline, separator icon size and alignment, current-page emphasis, collapsed-ellipsis treatment, focus and hover states, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Markup: React.FC = () => (
  <Stack spacing={4}>
    <Breadcrumbs separator={<ChevronRight fontSize="small" />}>
      <Link href="#" underline="hover" color="inherit">
        Home
      </Link>
      <Link href="#" underline="hover" color="inherit">
        Datasets
      </Link>
      <Link href="#" underline="hover" color="inherit">
        Vessels
      </Link>
      <Typography color="text.primary">Manifest</Typography>
    </Breadcrumbs>
    <Breadcrumbs separator={<ChevronRight fontSize="small" />} maxItems={2}>
      <Link href="#" underline="hover" color="inherit">
        Home
      </Link>
      <Link href="#" underline="hover" color="inherit">
        Datasets
      </Link>
      <Link href="#" underline="hover" color="inherit">
        Vessels
      </Link>
      <Typography color="text.primary">Manifest</Typography>
    </Breadcrumbs>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
