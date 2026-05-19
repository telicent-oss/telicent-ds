import type { Meta, StoryObj } from "@storybook/react"
import { Box } from "@mui/material"

import { ErrorFallbackText, ErrorFallbackTextProps } from "./ErrorFallbackText"

const meta = {
  title: "Utils/ErrorFallback/ErrorFallbackText",
  component: ErrorFallbackText,
  tags: ["autodocs"],
  args: {
    name: "ExampleComponent",
    message: undefined,
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
} satisfies Meta<typeof ErrorFallbackText>

export default meta
type Story = StoryObj<typeof meta>

/**
 * DefaultText:
 * - When `message` is passed, it overrides `name`.
 * - Renders exactly the given `message`.
 */
export const Defaults: Story = {
  args: {
    message: undefined,  
    name: undefined,
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />,
}

/**
 * WithMessage:
 * - When `message` is passed, it overrides `name`.
 * - Renders exactly the given `message`.
 */
export const DefaultText: Story = {
  args: {
    message: "Custom failure message",  
    name: undefined,
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />,
}

/**
 * WithName:
 * - When `message` is undefined, uses `name` to generate:
 *   "⚠️ {name} failed to load".
 */
export const WithName: Story = {
  args: {
    name: "DataWidget",
    message: undefined,
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />,
}

/**
 * WithNameAndMessage:
 * - When `message` and `name` set, `message` wins
 */
export const WithNameAndMessage: Story = {
  args: {
    name: "name loses",
    message: "message wins",
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />,
}




/**
 * WithNameAndMessage:
 * - When `message` is undefined, uses `name` to generate:
 *   "⚠️ {name} failed to load".
 */
export const Long: Story = {
  args: {
    name: undefined,
    message: "http://long.uris.for.everyone/5da8fdf2-6f20-4050-a130-73a70caa524b/4ddf876b-d3ce-4012-94f7-e1aca0f1805b/fc2b2fb7-3c21-4e15-b7a8-766b5635c42a",
  },
  render: (args: ErrorFallbackTextProps) => <ErrorFallbackText {...args} />,
}




