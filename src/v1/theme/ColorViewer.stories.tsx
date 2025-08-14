// Theme/ColorsGrouped.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useTheme, Box, Typography, Divider } from "@mui/material";

type Entry = { name: string; color: string };

const ORDER = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
  "text",
  "background",
  "grey",
  "common",
  "action",
  "divider",
];

const isColorString = (v: unknown): v is string => typeof v === "string" && v !== "dark" && v !== "light"; // excludes palette.mode

const collectEntries = (palette: any): Entry[] => {
  const out: Entry[] = [];
  Object.entries(palette).forEach(([group, value]) => {
    if (group === "mode") return; // skip
    if (isColorString(value)) {
      out.push({ name: group, color: value });
    } else if (value && typeof value === "object") {
      Object.entries(value).forEach(([variant, variantValue]) => {
        if (isColorString(variantValue)) {
          out.push({ name: `${group}.${variant}`, color: variantValue });
        }
      });
    }
  });
  return out;
};

const groupByCategory = (entries: Entry[]) => {
  const grouped: Record<string, Entry[]> = {};
  entries.forEach((e) => {
    const key = e.name.includes(".") ? e.name.split(".")[0] : e.name;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(e);
  });
  // sort variants inside each group for a nicer order
  Object.values(grouped).forEach((list) => list.sort((a, b) => a.name.localeCompare(b.name)));
  return grouped;
};

const Swatch = ({ label, color }: { label: string; color: string }) => (
  <Box
    sx={{
      width: 140,
      height: 88,
      m: 1,
      borderRadius: 1,
      overflow: "hidden",
      border: 1,
      borderColor: "divider",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box sx={{ bgcolor: color, flex: "0 0 56px" }} />
    <Box sx={{ p: 0.75, minWidth: 0 }}>
      <Typography variant="caption" noWrap title={label}>
        {label}
      </Typography>
      <Typography variant="caption" noWrap title={color}>
        {color}
      </Typography>
    </Box>
  </Box>
);

const ColorViewer = ({ onlyCore = false }: { onlyCore?: boolean }) => {
  const { palette } = useTheme();
  const entries = collectEntries(palette);
  const grouped = groupByCategory(entries);

  const groups = Object.keys(grouped).sort((a, b) => {
    const ai = ORDER.indexOf(a);
    const bi = ORDER.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  const visibleGroups = onlyCore
    ? groups.filter((g) => ["primary", "secondary", "error", "warning", "info", "success"].includes(g))
    : groups;

  return (
    <Box>
      {visibleGroups.map((group, idx) => (
        <Box key={group} sx={{ mb: 3 }}>
          {idx > 0 && <Divider sx={{ mb: 2 }} />}
          <Typography variant="h6" sx={{ mb: 1 }}>
            {group.charAt(0).toUpperCase() + group.slice(1)}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {grouped[group].map(({ name, color }) => (
              <Swatch key={name} label={name} color={color} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

type Story = StoryObj<typeof ColorViewer>;

export default {
  title: "Theme/Color Viewer",
  component: ColorViewer,
  argTypes: {
    onlyCore: {
      control: "boolean",
      description: "Show only core intent groups: primary, secondary, error, warning, info, success.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Theme palette visualisation grouped by category (primary, secondary, text, background, etc.). Each group shows its variants (e.g. `.main`, `.light`, `.dark`, `.contrastText`).",
      },
    },
  },
} as Meta<typeof ColorViewer>;

export const AllGroups: Story = {
  args: { onlyCore: false },
};

export const CoreIntentsOnly: Story = {
  args: { onlyCore: true },
};
