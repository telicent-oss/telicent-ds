import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

import { ErrorFallbackWrapper, ErrorFallbackWrapperProps } from "./ErrorFallbackWrapper";
import { ErrorFallbackText, ErrorFallbackTextProps } from "./ErrorFallbackText";

const meta = {
  title: "Utils/ErrorFallback/ErrorFallbackWrapper",
  component: ErrorFallbackWrapper,
  tags: ["autodocs"],
  args: {
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
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} satisfies Meta<typeof ErrorFallbackWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default:
 * - Uses ErrorFallbackWrapper with default `height = 256`.
 * - Renders `<ErrorFallbackText name="MyComponent" />` inside.
 */
export const Default: Story = {
  args: {
    children: <ErrorFallbackText/>,
  },
  render: (args: ErrorFallbackWrapperProps) => <ErrorFallbackWrapper {...args} />,
};

/**
 * CustomMessage:
 * - Pass `message` to ErrorFallbackText for custom error text.
 */
export const CustomMessage: Story = {
  args: {
    children: <ErrorFallbackText message="Unable to fetch user profile." />,
  },
  render: (args: ErrorFallbackWrapperProps) => <ErrorFallbackWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Pass `message` to ErrorFallbackText to override the default interpolation. Here it displays: “Unable to fetch user profile.”",
      },
    },
  },
};

/**
 * CustomHeight:
 * - Overrides `height` prop on ErrorFallbackWrapper (150px vs default 256px).
 */
export const CustomHeight: Story = {
  args: {
    height: 150,
    children: <ErrorFallbackText name="DashboardWidget" />,
  },
  render: (args: ErrorFallbackWrapperProps) => <ErrorFallbackWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Set `height` on ErrorFallbackWrapper to alter vertical centering. This example uses a 150px tall container.",
      },
    },
  },
};

/**
 * StyledWrapper:
 * - Locally wraps ErrorFallbackWrapper in a MUI ThemeProvider that defines
 *   `background.paper` and `error.main` tokens so the background renders.
 */
export const StyledWrapper = {
  args: {
    height: 200,
    sx: (theme: any) => ({
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      border: 1,
      borderColor: theme.palette.error.main,
      borderRadius: 2,
      p: 1,
    }),
    children: <ErrorFallbackText name="Chart" />,
  },
  render: (args: ErrorFallbackWrapperProps) => {
    const themeOptions: ThemeOptions = {
      palette: {
        background: { paper: "thistle" },
        error: { main: "#f44336" },
        grey: { 100: "#f5f5f5" },
      },
    }
    const customTheme = createTheme(themeOptions)

    return (
      <ThemeProvider theme={customTheme}>
        <ErrorFallbackWrapper {...args} />
      </ThemeProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "- with custom theme"
      },
    },
  },
}

/**
 * TextOnly:
 * - Demonstrates using ErrorFallbackText on its own (no wrapper).
 * - Useful when centering or container is handled externally.
 */
export const TextOnly: Story = {
  args: {
    children: null,
  },
  render: () => <ErrorFallbackText message="Inline load failure." />,
  parameters: {
    docs: {
      description: {
        story:
          "Use ErrorFallbackText alone when centering is handled externally (e.g., within a grid cell). Pass `message` or `name` as needed.",
      },
    },
  },
};
