import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid, Paper, Typography } from "@mui/material";

const meta: Meta<typeof Grid> = {
  title: "MUI Coverage/Individual/Grid",
  component: Grid,
  tags: ["!autodocs"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: gutter width against the DS spacing scale, and whether the Paper cells read as a coherent density. Grid itself contributes no colour or typography.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Grid>;

const Cell: React.FC<{ label: string }> = ({ label }) => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="body2">{label}</Typography>
  </Paper>
);

export const Markup: React.FC = () => (
  <Grid container spacing={2} sx={{ width: 640 }}>
    <Grid item xs={12}>
      <Cell label="xs=12 — full-width header" />
    </Grid>
    <Grid item xs={12} md={8}>
      <Cell label="xs=12 md=8 — main" />
    </Grid>
    <Grid item xs={12} md={4}>
      <Cell label="xs=12 md=4 — sidebar" />
    </Grid>
    <Grid item xs={6} md={3}>
      <Cell label="xs=6 md=3" />
    </Grid>
    <Grid item xs={6} md={3}>
      <Cell label="xs=6 md=3" />
    </Grid>
    <Grid item xs={6} md={3}>
      <Cell label="xs=6 md=3" />
    </Grid>
    <Grid item xs={6} md={3}>
      <Cell label="xs=6 md=3" />
    </Grid>
  </Grid>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
