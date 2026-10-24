import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  SnackbarContent,
  Stack,
} from "@mui/material";

const meta: Meta<typeof Snackbar> = {
  excludeStories: ["Markup"],
  title: "MUI Coverage/Individual/Snackbar",
  component: Snackbar,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: surface colour, text contrast, action colour, radius, elevation, wrapping and dark mode. MUI inverts SnackbarContent in dark mode by design (emphasize(background.default, 0.98)), which is why the surface goes light. The Alert rows show the variant most apps actually use inside a Snackbar.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Snackbar>;

export const Markup: React.FC = () => (
  <Stack spacing={2} sx={{ maxWidth: 560 }}>
    <SnackbarContent message="Message only, no action" />
    <SnackbarContent
      message="Changes saved"
      action={
        <Button color="secondary" size="small">
          Undo
        </Button>
      }
    />
    <SnackbarContent
      message="A longer message that wraps onto a second line so the padding, line height and action alignment can be judged together."
      action={
        <Button color="secondary" size="small">
          Retry
        </Button>
      }
    />
    <Stack spacing={1}>
      <Alert severity="success">Alert inside a snackbar - success</Alert>
      <Alert severity="error">Alert inside a snackbar - error</Alert>
      <Alert severity="warning">Alert inside a snackbar - warning</Alert>
      <Alert severity="info">Alert inside a snackbar - info</Alert>
    </Stack>
    <Box sx={{ position: "relative", height: 120 }}>
      <Snackbar
        open
        onClose={() => undefined}
        sx={{ position: "absolute" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        message="Positioned Snackbar, bottom left of its box"
      />
    </Box>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
