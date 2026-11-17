import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Tab, Tabs } from "@mui/material";

const meta: Meta<typeof Tabs> = {
  title: "MUI Coverage/Individual/Tabs",
  excludeStories: ["Markup"],
  component: Tabs,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: indicator colour and thickness, selected vs unselected label colour, tab density and min width, scroll button styling, disabled and focus states, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

const scrollableTabs: string[] = [
  "Overview",
  "Entities",
  "Relationships",
  "Provenance",
  "Access",
  "Schema",
  "History",
  "Exports",
  "Settings",
  "Audit",
];

export const Markup: React.FC = () => (
  <Stack spacing={4} sx={{ width: 520 }}>
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={1}>
        <Tab label="Overview" />
        <Tab label="Entities" />
        <Tab label="Provenance" />
        <Tab label="Disabled" disabled />
      </Tabs>
    </Box>
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={2} variant="scrollable" scrollButtons allowScrollButtonsMobile>
        {scrollableTabs.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>
    </Box>
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={0} variant="fullWidth" textColor="secondary" indicatorColor="secondary">
        <Tab label="Full width" />
        <Tab label="Second" />
      </Tabs>
    </Box>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
