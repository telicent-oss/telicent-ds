// src/components/Icons/Icons.stories.tsx
import React, { useMemo, useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Box, BoxProps, TextField, Typography } from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";
import * as Icons from "./index";

import * as muiIconsMaterial from "@telicent-oss/mui-icons-material";
import { H6 } from "../Text/Text";

type IconArgs = {
  color: SvgIconProps["color"];
  fontSize: SvgIconProps["fontSize"];
  background: "surface" | "light" | "dark";
  filter: string;
};

const BG_COLORS: Record<IconArgs["background"], string> = {
  surface: "transparent",
  light: "#ffffff",
  dark: "#111111",
};

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

const IconWithLabel: React.FC<{ name: string; children: React.ReactNode }> = ({
  name,
  children,
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 1,
      p: 1,
      borderRadius: 1,
      border: "1px solid",
      borderColor: "divider",
    }}
  >
    {children}
    <Typography variant="caption">{name}</Typography>
  </Box>
);

const useIconEntries = (
  source: Record<string, unknown>,
  filter: string,
): Array<[string, React.ElementType]> =>
  useMemo(() => {
    const entries = Object.entries(source) as Array<[string, React.ElementType]>;
    if (!filter) return entries;
    const q = filter.toLowerCase();
    return entries.filter(([name]) => name.toLowerCase().includes(q));
  }, [source, filter]);

const IconsGallery: React.FC<IconArgs> = ({
  color,
  fontSize,
  background,
  filter: filterArg,
}) => {
  const [filter, setFilter] = useState(filterArg ?? "");
  const dsEntries = useIconEntries(Icons, filter);
  const muiEntries = useIconEntries(muiIconsMaterial, filter);
  const iconProps: SvgIconProps = { color, fontSize };

  return (
    <Box
      sx={{
        bgcolor: BG_COLORS[background],
        color: background === "dark" ? "common.white" : "text.primary",
        p: 2,
        borderRadius: 1,
      }}
    >
      <TextField
        size="small"
        placeholder="Filter icons by name…"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ mb: 2, width: 260 }}
      />

      <H6>./v1/components/data-display/Icons/*</H6>
      {dsEntries.length === 0 ? (
        <Typography variant="body2" sx={{ px: 2, opacity: 0.6 }}>
          No matches.
        </Typography>
      ) : (
        <IconWrapper>
          {dsEntries.map(([name, Icon]) => (
            <IconWithLabel key={name} name={name}>
              <Icon {...iconProps} />
            </IconWithLabel>
          ))}
        </IconWrapper>
      )}

      <H6>@telicent-oss/mui-icons-material</H6>
      {muiEntries.length === 0 ? (
        <Typography variant="body2" sx={{ px: 2, opacity: 0.6 }}>
          No matches.
        </Typography>
      ) : (
        <IconWrapper>
          {muiEntries.map(([name, Icon]) => (
            <IconWithLabel key={name} name={name}>
              <Icon {...iconProps} />
            </IconWithLabel>
          ))}
        </IconWrapper>
      )}
    </Box>
  );
};

const meta: Meta<IconArgs> = {
  title: "Data Display/Icons",
  component: IconsGallery,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Gallery of all icon exports from this package. Use the controls to inspect icons at different colors, sizes, and backgrounds — useful for catching icons with hard-coded fills or strokes that don't adapt to `color`.",
      },
    },
  },
  argTypes: {
    color: {
      control: "select",
      options: [
        "inherit",
        "action",
        "disabled",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
    },
    fontSize: {
      control: "select",
      options: ["inherit", "small", "medium", "large"],
    },
    background: {
      control: "inline-radio",
      options: ["surface", "light", "dark"],
    },
    filter: {
      control: "text",
    },
  },
  args: {
    color: "inherit",
    fontSize: "large",
    background: "surface",
    filter: "",
  },
};
export default meta;

type Story = StoryObj<IconArgs>;

export const AllIcons: Story = {
  name: "All Icons",
};

/**
 * Renders every icon across every semantic color so it's easy to spot icons
 * with hard-coded fills or strokes that don't adapt to `currentColor`.
 */
const COLOR_SWATCH: SvgIconProps["color"][] = [
  "inherit",
  "primary",
  "secondary",
  "error",
  "warning",
  "success",
  "info",
];

const ColorMatrix: React.FC<Pick<IconArgs, "fontSize" | "background">> = ({
  fontSize,
  background,
}) => {
  const entries = Object.entries({ ...Icons, ...muiIconsMaterial }) as Array<
    [string, React.ElementType]
  >;

  return (
    <Box
      sx={{
        bgcolor: BG_COLORS[background],
        color: background === "dark" ? "common.white" : "text.primary",
        p: 2,
        borderRadius: 1,
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `160px repeat(${COLOR_SWATCH.length}, 1fr)`,
          columnGap: 2,
          rowGap: 1,
          alignItems: "center",
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: 600 }}>
          Icon
        </Typography>
        {COLOR_SWATCH.map((c) => (
          <Typography
            key={c}
            variant="caption"
            sx={{ fontWeight: 600, textAlign: "center" }}
          >
            {c}
          </Typography>
        ))}
        {entries.map(([name, Icon]) => (
          <React.Fragment key={name}>
            <Typography variant="caption">{name}</Typography>
            {COLOR_SWATCH.map((c) => (
              <Box key={c} sx={{ textAlign: "center" }}>
                <Icon color={c} fontSize={fontSize} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export const ColorMatrixStory: Story = {
  name: "Color Matrix",
  args: {
    fontSize: "large",
    background: "surface",
  },
  argTypes: {
    color: { table: { disable: true } },
    filter: { table: { disable: true } },
  },
  render: ({ fontSize, background }) => (
    <ColorMatrix fontSize={fontSize} background={background} />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Every icon rendered across each semantic MUI color. Any icon that looks wrong in `error` (red) or `warning` likely has a hard-coded `fill` or `stroke` value that should be `currentColor`.",
      },
    },
  },
};

const SIZE_SWATCH: SvgIconProps["fontSize"][] = [
  "inherit",
  "small",
  "medium",
  "large",
];

const SIZE_PX: Record<Exclude<SvgIconProps["fontSize"], undefined>, string> = {
  inherit: "1em (inherits parent font-size)",
  small: "20px",
  medium: "24px",
  large: "35px",
};

const SizeMatrix: React.FC<Pick<IconArgs, "color" | "background">> = ({
  color,
  background,
}) => {
  const entries = Object.entries({ ...Icons, ...muiIconsMaterial }) as Array<
    [string, React.ElementType]
  >;

  return (
    <Box
      sx={{
        bgcolor: BG_COLORS[background],
        color: background === "dark" ? "common.white" : "text.primary",
        p: 2,
        borderRadius: 1,
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `160px repeat(${SIZE_SWATCH.length}, 1fr)`,
          columnGap: 2,
          rowGap: 1,
          alignItems: "center",
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: 600 }}>
          Icon
        </Typography>
        {SIZE_SWATCH.map((size) => (
          <Box key={size} sx={{ textAlign: "center" }}>
            <Typography variant="caption" sx={{ fontWeight: 600, display: "block" }}>
              {size}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.6 }}>
              {SIZE_PX[size!]}
            </Typography>
          </Box>
        ))}
        {entries.map(([name, Icon]) => (
          <React.Fragment key={name}>
            <Typography variant="caption">{name}</Typography>
            {SIZE_SWATCH.map((size) => (
              <Box key={size} sx={{ textAlign: "center" }}>
                <Icon color={color} fontSize={size} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export const SizeMatrixStory: Story = {
  name: "Size Matrix",
  args: {
    color: "inherit",
    background: "surface",
  },
  argTypes: {
    fontSize: { table: { disable: true } },
    filter: { table: { disable: true } },
  },
  render: ({ color, background }) => (
    <SizeMatrix color={color} background={background} />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Every icon rendered at each MUI `fontSize` token (`inherit`, `small`, `medium`, `large`). Use `fontSize=\"inherit\"` to have the icon scale with the surrounding text.",
      },
    },
  },
};

const OVERRIDE_EXAMPLES: Array<{
  label: string;
  snippet: string;
  render: (Icon: React.ElementType) => React.ReactNode;
}> = [
  {
    label: "Default (currentColor)",
    snippet: "<BinIcon />",
    render: (Icon) => <Icon />,
  },
  {
    label: "Theme color prop",
    snippet: '<BinIcon color="primary" />',
    render: (Icon) => <Icon color="primary" />,
  },
  {
    label: "sx (theme token)",
    snippet: "<BinIcon sx={{ color: 'success.main' }} />",
    render: (Icon) => <Icon sx={{ color: "success.main" }} />,
  },
  {
    label: "sx (custom hex)",
    snippet: "<BinIcon sx={{ color: '#ff5722' }} />",
    render: (Icon) => <Icon sx={{ color: "#ff5722" }} />,
  },
  {
    label: "htmlColor (fixed, ignores theme)",
    snippet: '<BinIcon htmlColor="#9c27b0" />',
    render: (Icon) => <Icon htmlColor="#9c27b0" />,
  },
  {
    label: "Inherit from parent",
    snippet:
      '<Box sx={{ color: "warning.main" }}>\n  <BinIcon color="inherit" />\n</Box>',
    render: (Icon) => (
      <Box sx={{ color: "warning.main" }}>
        <Icon color="inherit" />
      </Box>
    ),
  },
];

const ColorOverrides: React.FC = () => {
  const Icon = Icons.BinIcon;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body2" sx={{ mb: 2, opacity: 0.75 }}>
        All Telicent DS icons use <code>currentColor</code>, so they inherit
        their parent&apos;s <code>color</code>. Below are the standard ways to
        override that — pick whichever suits your context.
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          columnGap: 3,
          rowGap: 2,
          alignItems: "center",
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: 600 }}>
          Approach
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 600 }}>
          Snippet
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 600 }}>
          Result
        </Typography>
        {OVERRIDE_EXAMPLES.map(({ label, snippet, render }) => (
          <React.Fragment key={label}>
            <Typography variant="body2">{label}</Typography>
            <Box
              component="pre"
              sx={{
                m: 0,
                p: 1,
                borderRadius: 0.5,
                bgcolor: "action.hover",
                fontSize: "0.75rem",
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
              }}
            >
              {snippet}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", fontSize: 35 }}>
              {render(Icon)}
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export const ColorOverridesStory: Story = {
  name: "Color Overrides",
  argTypes: {
    color: { table: { disable: true } },
    fontSize: { table: { disable: true } },
    background: { table: { disable: true } },
    filter: { table: { disable: true } },
  },
  render: () => <ColorOverrides />,
  parameters: {
    docs: {
      description: {
        story:
          "Recipes for overriding an icon's color: the `color` prop (theme palette), `sx` (theme tokens or arbitrary CSS colors), `htmlColor` (fixed, ignores the theme), or by setting `color` on a parent and using `color=\"inherit\"`.",
      },
    },
  },
};
