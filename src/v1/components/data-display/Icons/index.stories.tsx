// src/components/Icons/Icons.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Typography } from "@mui/material";
import * as Icons from "./index";

import * as muiIconsMaterial from "@telicent-oss/mui-icons-material";
import { Heading1 } from "../Text/Heading.stories";
import { H6 } from "../Text/Text";

const IconWrapper: React.FC<BoxProps> = (props) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
      gap: 2,
      p: 2,
      textAlign: "center",
    }}
    {...props}
  />
);

const IconWithLabel: React.FC<BoxProps & { name: string }> = ({
  name,
  children,
  ...rest
}) => (
  <Box
    key={name}
    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    {...rest}
  >
    {/* Most icons accept size props; omit to keep generic */}
    {children}
    <Typography variant="caption" sx={{ mt: 1 }}>
      {name}
    </Typography>
  </Box>
);
/**
 * Grid gallery that renders every named export from this folder's `index.ts`.
 * Each export is assumed to be a React component (custom SVG or MUI icon).
 * Shown with its export name for quick visual QA & discoverability.
 */
const IconsGallery = () => {
  // Cast entries so we can safely render. (We trust our index barrel exports are components.)
  const iconEntries = Object.entries(Icons) as Array<
    [string, React.ElementType]
  >;
  const muiIconsMaterialEntries = Object.entries(muiIconsMaterial) as Array<
    [string, React.ElementType]
  >;

  return (
    <Box>
      <H6 key={"heading"}>./v1/components/data-display/Icons/*</H6>
      <IconWrapper>
        {iconEntries.map(([name, Icon]) => (
          <IconWithLabel name={name}>
            <Icon />
          </IconWithLabel>
        ))}
      </IconWrapper>
      <H6 key={"heading"}>@telicent-oss/mui-icons-material</H6>
      <IconWrapper>
        {muiIconsMaterialEntries.map(([name, Icon]) => (
          <IconWithLabel name={name}>
            <Icon />
          </IconWithLabel>
        ))}
      </IconWrapper>
    </Box>
  );
};

const meta: Meta<typeof IconsGallery> = {
  title: "Data Display/Icons",
  component: IconsGallery,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Gallery of all icon exports from this package. Useful for QA & discovery.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconsGallery>;

export const AllIcons: Story = {
  name: "All Icons",
  render: () => <IconsGallery />,
};
