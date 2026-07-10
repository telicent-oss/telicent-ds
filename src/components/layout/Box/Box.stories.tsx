import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "./Box";

const meta = {
  title: "Layout/Box",
  component: Box,
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;

export type BoxStory = StoryObj<typeof meta>;

export const Basic: BoxStory = {
  argTypes: {
    component: {
      control: "text",
      table: { defaultValue: { summary: "div" } },
    },
  },
  args: {
    children: "Box content",
    sx: { p: 2, bgcolor: "background.paper", border: 1, borderColor: "divider", borderRadius: 1 },
  },
  parameters: {
    docs: {
      description: {
        story: `The Box component is the most basic layout primitive. It renders a \`<div>\` by default and accepts the \`sx\` prop for one-off theme-aware styling. Use it as a wrapper for spacing, backgrounds, borders, or as the root of a flex/grid container.`,
      },
    },
  },
  render: (args) => <Box {...args} />,
};

export const WithSxOverride: BoxStory = {
  parameters: {
    docs: {
      description: {
        story: `The \`sx\` prop accepts a callback that receives the DS theme, so you can read palette, spacing, and radius tokens directly.`,
      },
    },
  },
  render: () => (
    <Box
      sx={(theme) => ({
        p: 2,
        borderRadius: 1,
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.divider}`,
      })}
    >
      Themed via sx callback
    </Box>
  ),
};

export const Outlined: BoxStory = {
  args: {
    variant: "outlined",
    sx: { p: 2, borderRadius: 1 },
    children: "Outlined Box",
  },
  parameters: {
    docs: {
      description: {
        story: `Pass \`variant="outlined"\` to render a Box with a border in the theme's primary colour. Mirrors MUI's \`variant="outlined"\` convention on Button and Chip.`,
      },
    },
  },
  render: (args) => <Box {...args} />,
};

export const AsSemanticElement: BoxStory = {
  parameters: {
    docs: {
      description: {
        story: `Box is polymorphic — pass \`component\` to render as any HTML element or React component while keeping the \`sx\` API. Element-specific HTML attributes (e.g. \`href\` on \`"a"\`, \`htmlFor\` on \`"label"\`) type-check correctly.`,
      },
    },
  },
  render: () => (
    <Box component="section" sx={{ p: 2, bgcolor: "background.paper", display: "flex", flexDirection: "column", gap: 1 }}>
      <Box component="h3" sx={{ m: 0 }}>
        Section heading
      </Box>
      <Box component="label" htmlFor="box-poly-input" sx={{ fontSize: 12 }}>
        Label rendered via component="label" with htmlFor
      </Box>
      <input id="box-poly-input" placeholder="associated input" />
      <Box component="a" href="https://example.com" sx={{ color: "primary.main" }}>
        Link rendered via component="a" with href
      </Box>
    </Box>
  ),
};

export const FlexRow: BoxStory = {
  parameters: {
    docs: {
      description: {
        story: `A common use — Box as a flex container with themed children.`,
      },
    },
  },
  render: () => (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Box sx={{ p: 1, bgcolor: "#f77", borderRadius: 1 }}>One</Box>
      <Box sx={{ p: 1, bgcolor: "#7f7", borderRadius: 1 }}>Two</Box>
      <Box sx={{ p: 1, bgcolor: "#77f", borderRadius: 1 }}>Three</Box>
    </Box>
  ),
};
