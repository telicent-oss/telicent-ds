import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertTitle, Stack } from "@mui/material";

const meta: Meta<typeof AlertTitle> = {
  title: "MUI Coverage/Individual/Alert children",
  excludeStories: ["Markup"],
  component: AlertTitle,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Assesses AlertTitle inside an Alert. Judge: title weight and size against body text, spacing, severity palette fit, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof AlertTitle>;

export const Markup: React.FC = () => (
  <Stack spacing={2}>
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      The ingest pipeline rejected 12 records.
    </Alert>
    <Alert severity="warning">
      <AlertTitle>Warning</AlertTitle>
      Some fields could not be mapped to the ontology.
    </Alert>
    <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
      A new index build starts in ten minutes.
    </Alert>
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      All 4,120 records were indexed.
    </Alert>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
