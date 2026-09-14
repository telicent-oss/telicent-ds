import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, ButtonGroup, Stack } from "@mui/material";

const meta: Meta<typeof ButtonGroup> = {
  title: "MUI Coverage/Individual/ButtonGroup",
  component: ButtonGroup,
  tags: ["!autodocs"],
  excludeStories: ["Markup"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: the shared divider between grouped buttons, outer radii on the first and last button, whether themed Button overrides survive grouping, size steps, vertical orientation, hover and focus states, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Markup: React.FC = () => (
  <Stack spacing={3} alignItems="flex-start">
    <ButtonGroup variant="contained">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup variant="outlined">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup variant="text">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Stack direction="row" spacing={2} alignItems="center">
      <ButtonGroup size="small" variant="contained">
        <Button>S</Button>
        <Button>S</Button>
      </ButtonGroup>
      <ButtonGroup size="medium" variant="contained">
        <Button>M</Button>
        <Button>M</Button>
      </ButtonGroup>
      <ButtonGroup size="large" variant="contained">
        <Button>L</Button>
        <Button>L</Button>
      </ButtonGroup>
    </Stack>
    <ButtonGroup orientation="vertical" variant="outlined">
      <Button>Top</Button>
      <Button>Middle</Button>
      <Button>Bottom</Button>
    </ButtonGroup>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
