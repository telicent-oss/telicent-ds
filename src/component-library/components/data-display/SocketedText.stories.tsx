import type { Meta, StoryObj } from "@storybook/react";
import { SocketedText, SocketedTextProps } from "./SocketedText";
import { Box, Typography } from "@mui/material";

const meta = {
  title: "Component Library/Data Display/SocketedText",
  component: SocketedText,
  tags: ["autodocs"],
  args: {
    children: "Default text",
  },
} satisfies Meta<typeof SocketedText>;

export default meta;
type Story = StoryObj<typeof SocketedText>;

export const Default: Story = {
  args: {
    children: "Text with beforeItem slot icon",
    beforeItem: <i className="fa-solid fa-chevron-left" />,
  },
};
export const AfterItem: Story = {
  args: {
    children: "Text with afterItem slot icon",
    afterItem: <i className="fa-solid fa-chevron-right" />,
  },
};

export const WithBothSlots: Story = {
  args: {
    children: "Text with both slots",
    beforeItem: <i className="fa-solid fa-chevron-left" />,
    afterItem: <i className="fa-solid fa-chevron-right" />,
  },
};

export const AsLink: Story = {
  args: {
    children: "Open in SEARCH",
    afterItem: <i className="fa-solid fa-arrow-up-right-from-square" />,
    component: "a",
    href: "https://example.com",
    // For creating link styles, setting variants might be better
    // e.g. variant: 'link',
    sx: {
      color: "primary.main",
      textDecoration: "none",
      "&:hover": { textDecoration: "underline" },
    },
  },
};

export const HeaderVariant: Story = {
  args: {
    children: "Header with Icon Slots",
    variant: "h4",
    beforeItem: <i className="fa-solid fa-fire" />,
    afterItem: <i className="fa-solid fa-crown" />,
    containerSX: { gap: 2 },
  },
};

export const ComparisonWithTypography: Story = {
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6">Normal Typography</Typography>
      <Typography variant="body1">
        This is a normal Typography component for comparison.
      </Typography>
      <Typography variant="h6">SocketedText</Typography>
      <SocketedText
        children="SocketedText behaving like Typography"
        beforeItem={<i className="fa-solid fa-heart" />}
        afterItem={<i className="fa-solid fa-arrow-right" />}
        variant="body1"
      />
    </Box>
  ),
};

export const CustomSlotStyles: Story = {
  args: {
    children: "Text with custom slot styles",
    beforeItem: <i className="fa-solid fa-music" />,
    afterItem: <i className="fa-solid fa-volume-up" />,
    beforeItemSX: {
      color: "primary.main",
      fontSize: "1.5em",
    },
    afterItemSX: {
      color: "secondary.main",
      fontSize: "1.5em",
    },
    containerSX: {
      gap: 2,
    },
  },
};

export const Wrappedchildren: Story = {
  render: () => (
    <Box sx={{ width: 300, border: "1px dashed gray", p: 2 }}>
      <SocketedText
        children="This is a very long text that shows that the icons stay center aligned by default."
        beforeItem={<i className="fa-solid fa-info-circle" />}
        afterItem={<i className="fa-solid fa-arrow-right" />}
        variant="body1"
        containerSX={{
          gap: 1,
        }}
      />
    </Box>
  ),
};
export const WrappedTextAlignStart: Story = {
  render: () => (
    <Box sx={{ width: 300, border: "1px dashed gray", p: 2 }}>
      <SocketedText
        children="This is also very long text but with icons aligned to the top and text-centered. I think it shows - although this tries to mimic normal text - it is not text so so there are limits "
        beforeItem={<i className="fa-solid fa-info-circle" />}
        afterItem={<i className="fa-solid fa-arrow-right" />}
        variant="body1"
        containerSX={{
          gap: 1,
          textAlign: "center",
          alignItems: "flex-start",
        }}
      />
    </Box>
  ),
};

// Force throw - regardless of NODE_ENV
const propCheckError = (problem: string) => {
  throw new Error(problem);
};
export const ErrorWhenNobeforeItemAndNoEndSet: Story = {
  render: () => (
    <SocketedText children="only text" propCheckError={propCheckError} />
  ),
};

export const ErrorWhenAnchorButNoHrefSet: Story = {
  render: () => (
    <SocketedText
      component="a"
      children="no href"
      propCheckError={propCheckError}
    />
  ),
};
