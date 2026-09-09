import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Tabs } from "./Tabs";
import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";
import { type TabValue } from "./tabsContext";
import { GridIcon, MapIcon } from "../../data-display";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Tab navigation, wired for accessibility by the DS.

\`Tabs\` and its \`Tab\` children share an **\`idPrefix\`**; each \`Tab\` derives
its \`id\` and \`aria-controls\` from that prefix plus its own \`value\`, and each
\`TabPanel\` derives the matching \`id\` and \`aria-labelledby\`. There is no
\`a11yProps\` helper to copy and no id to type twice — repeat the same
\`idPrefix\` on the panels and the wiring follows.

Differences from a hand-rolled MUI tab set:
- An accessible name (\`aria-label\` or \`aria-labelledby\`) is required by the type.
- \`Tab\` requires an explicit \`value\`; it is \`string | number\` because it lands in a DOM id.
- Panels are tab stops (\`tabIndex={0}\`), per WAI-ARIA APG.
- The divider under the tab bar comes from the theme, not an \`sx\` wrapper.
- Padding inside a panel is yours to set — the DS has no opinion on it.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const PANELS = [
  { value: "overview", label: "Overview", body: "Summary of the selected dataset." },
  { value: "schema", label: "Schema", body: "Fields, types, and cardinality." },
  { value: "lineage", label: "Lineage", body: "Upstream and downstream dependencies." },
];

export const Default: Story = {
  render: () => {
    const [tab, setTab] = useState<TabValue>("overview");

    return (
      <Box sx={{ width: 480 }}>
        <Tabs
          idPrefix="dataset"
          aria-label="Dataset detail"
          value={tab}
          onChange={(_, next) => setTab(next)}
        >
          {PANELS.map(({ value, label }) => (
            <Tab key={value} value={value} label={label} />
          ))}
        </Tabs>
        {PANELS.map(({ value, body }) => (
          <TabPanel key={value} idPrefix="dataset" value={value} activeValue={tab}>
            <Typography sx={{ pt: 2 }}>{body}</Typography>
          </TabPanel>
        ))}
      </Box>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [tab, setTab] = useState<TabValue>("overview");

    return (
      <Box sx={{ display: "flex", width: 560 }}>
        <Tabs
          idPrefix="vertical-dataset"
          aria-label="Dataset detail"
          orientation="vertical"
          value={tab}
          onChange={(_, next) => setTab(next)}
          sx={{ minWidth: 160 }}
        >
          {PANELS.map(({ value, label }) => (
            <Tab key={value} value={value} label={label} />
          ))}
        </Tabs>
        {PANELS.map(({ value, body }) => (
          <TabPanel key={value} idPrefix="vertical-dataset" value={value} activeValue={tab}>
            <Typography sx={{ pl: 3 }}>{body}</Typography>
          </TabPanel>
        ))}
      </Box>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [tab, setTab] = useState<TabValue>("map");

    return (
      <Box sx={{ width: 400 }}>
        <Tabs
          idPrefix="view"
          aria-label="Result view"
          value={tab}
          onChange={(_, next) => setTab(next)}
          variant="fullWidth"
        >
          <Tab value="map" label="Map" icon={<MapIcon />} iconPosition="start" />
          <Tab value="table" label="Table" icon={<GridIcon />} iconPosition="start" />
        </Tabs>
        <TabPanel idPrefix="view" value="map" activeValue={tab}>
          <Typography sx={{ pt: 2 }}>Map view.</Typography>
        </TabPanel>
        <TabPanel idPrefix="view" value="table" activeValue={tab}>
          <Typography sx={{ pt: 2 }}>Table view.</Typography>
        </TabPanel>
      </Box>
    );
  },
};

export const KeepMounted: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`keepMounted` holds a hidden panel's children in the tree, so typed input survives a tab switch. Type in the first panel, switch away and back.",
      },
    },
  },
  render: () => {
    const [tab, setTab] = useState<TabValue>("draft");

    return (
      <Box sx={{ width: 400 }}>
        <Tabs
          idPrefix="editor"
          aria-label="Editor"
          value={tab}
          onChange={(_, next) => setTab(next)}
        >
          <Tab value="draft" label="Draft" />
          <Tab value="preview" label="Preview" />
        </Tabs>
        <TabPanel idPrefix="editor" value="draft" activeValue={tab} keepMounted>
          <Box component="textarea" defaultValue="" rows={4} sx={{ mt: 2, width: "100%" }} />
        </TabPanel>
        <TabPanel idPrefix="editor" value="preview" activeValue={tab}>
          <Typography sx={{ pt: 2 }}>Rendered preview.</Typography>
        </TabPanel>
      </Box>
    );
  },
};
