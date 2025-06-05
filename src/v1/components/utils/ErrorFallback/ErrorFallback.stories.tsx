import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";

import { ErrorFallback, ErrorFallbackProps } from "./ErrorFallback";

const meta = {
  title: "Utils/ErrorFallback",
  component: ErrorFallback,
  tags: ["autodocs"],
  args: {
    name: "ExampleComponent",
    message: undefined,
    height: 256,
    sx: undefined,
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          bgcolor: "background.paper",
          p: 2,
          border: 1,
          borderColor: "grey.300",
          borderRadius: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} satisfies Meta<typeof ErrorFallback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultError: Story = {
  args: {
    name: "ExampleComponent",
    message: undefined,
  },
  render: (args: ErrorFallbackProps) => <ErrorFallback {...args} />,
};

export const CustomMessage: Story = {
  args: {
    name: "DataWidget",
    message: "Unable to load user data.",
  },
  render: (args: ErrorFallbackProps) => <ErrorFallback {...args} />,
};

export const CustomNameAndStyle: Story = {
  args: {
    name: "ChartComponent",
    message: undefined,
    sx: {
      width: "100%",
      backgroundColor: 'Teal',
      border: 1,
      borderColor: (theme) => theme.palette.error.main,
      borderRadius: 2,
      p: 2,
    },
  },
  render: (args: ErrorFallbackProps) => <ErrorFallback {...args} />,
};

export const ExplicitHeight: Story = {
  args: {
    name: "ProfileCard",
    message: undefined,
    height: 150,
  },
  render: (args: ErrorFallbackProps) => <ErrorFallback {...args} />,
};
