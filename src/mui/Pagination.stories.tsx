import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof Pagination> = {
  title: "MUI Coverage/Individual/Pagination",
  excludeStories: ["Markup"],
  component: Pagination,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: selected page contrast, item radii across shapes, size scale, outlined vs text variants, disabled and hover states, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Markup: React.FC = () => (
  <Stack spacing={4} alignItems="flex-start">
    <Pagination count={10} page={4} shape="rounded" />
    <Pagination count={10} page={4} shape="circular" variant="outlined" color="primary" />
    <Pagination count={5} page={2} size="small" />
    <Pagination count={5} page={2} size="large" color="secondary" />
    <Pagination
      count={10}
      page={4}
      renderItem={(item) => (
        <PaginationItem slots={{ previous: ChevronLeft, next: ChevronRight }} {...item} />
      )}
    />
    <Pagination count={10} page={4} disabled />
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
