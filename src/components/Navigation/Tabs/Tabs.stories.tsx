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
Tab navigation with the accessibility wiring derived rather than hand-rolled.

\`@mui/material\` ships no \`TabPanel\` — mui.com hands every reader a \`CustomTabPanel\` component and an \`a11yProps(index)\` helper to copy into their own codebase. The DS ships the panel and derives all four id attributes from two strings.

---

### The opinion

- **\`idPrefix\` replaces \`a11yProps\`.** \`Tabs\` shares it with its \`Tab\` children through a private context; each \`Tab\` derives its \`id\` and \`aria-controls\`, and each \`TabPanel\` derives the matching \`id\` and \`aria-labelledby\`. Repeat the same \`idPrefix\` on the panels and the wiring follows.
- **An accessible name is required by the type.** Pass \`aria-label\` or \`aria-labelledby\`, exactly one. An unnamed tablist does not compile (ADR-0001).
- **\`Tab\` requires an explicit \`value\`, narrowed to \`string | number\`.** MUI falls back to the child's index; the DS does not, because the value lands in a DOM id. An object value would stringify to \`[object Object]\` and give two panels the same id.
- **\`TabPanel\` owns \`hidden\`.** The element renders in both states, so a tab's \`aria-controls\` always resolves to a real node. Only the children are conditional.
- **A \`Tab\` outside \`Tabs\` throws.** \`role="tab"\` outside a \`tablist\` is invalid ARIA, and a silent fallback would ship a tab set that looks right and is unwired.

---

### Accessibility

Two facts — which tab set this is (\`idPrefix\`) and which tab this is (\`value\`) — determine four strings:

| Element | Attribute | Derived value |
| --- | --- | --- |
| \`Tab\` | \`id\` | \`{idPrefix}-tab-{value}\` |
| \`Tab\` | \`aria-controls\` | \`{idPrefix}-panel-{value}\` |
| \`TabPanel\` | \`id\` | \`{idPrefix}-panel-{value}\` |
| \`TabPanel\` | \`aria-labelledby\` | \`{idPrefix}-tab-{value}\` |

Panels are tab stops (\`tabIndex={0}\`), per WAI-ARIA APG, so a keyboard user can reach a panel whose content holds no focusable element. mui.com's \`CustomTabPanel\` omits this.

Give every tab set on a page its own \`idPrefix\` — two sets sharing one prefix produce duplicate ids.

---

### \`Tab\` and \`TabPanel\` props

The controls panel below describes \`Tabs\`. Its two companions:

| Component | Prop | Type | Notes |
| --- | --- | --- | --- |
| \`Tab\` | \`value\` | \`string \| number\` | Required, where MUI falls back to the child index. Narrowed because it becomes part of a DOM id. |
| \`TabPanel\` | \`idPrefix\` | \`string\` | Matches the \`idPrefix\` on this group's \`Tabs\`. |
| \`TabPanel\` | \`value\` | \`string \| number\` | This panel's own value, paired with the \`Tab\` carrying the same one. |
| \`TabPanel\` | \`activeValue\` | \`string \| number\` | The tab set's selected value — the same state \`Tabs\` receives. |
| \`TabPanel\` | \`keepMounted\` | \`boolean\` | Hold the children in the tree while hidden. Defaults to \`false\`. |

Everything else on \`Tab\` passes through to MUI; \`TabPanel\` accepts any \`div\` attribute except \`hidden\`, which it owns.

---

### Defaults

- \`keepMounted\`: \`false\` — an inactive panel's children unmount, so an unseen panel costs nothing.
- **Divider**: the tab-bar border sits on \`MuiTabs\`' root in \`tabs-overrides.ts\`, reading its colour from \`theme.palette.divider\` and moving to the inline edge when \`orientation="vertical"\`. No \`<Box sx={{ borderBottom: 1 }}>\` wrapper at the callsite.
- **Panel padding**: none. Spacing between a panel and the surrounding layout belongs to the app, so the DS bakes in no value.

---

### Other supported features

Everything else on MUI's \`Tabs\` and \`Tab\` passes through, and a callsite prop overrides a DS default because \`{...props}\` spreads last — \`variant\`, \`orientation\`, \`centered\`, \`scrollButtons\`, \`icon\` / \`iconPosition\`, and \`disabled\` behave as MUI documents them.

\`keepMounted\` on a \`TabPanel\` holds its children in the tree while the panel is hidden, for panels carrying form state worth preserving across a switch.

---

### When & how to use it

- **Peer views of one subject** — different lenses on the same dataset, where the user moves freely between them.
- **Not for stepping through a sequence** — a wizard or stepper carries the ordering and progress that tabs do not.
- **Not for routing between pages** — links in a nav are the right shape; tabs imply the content belongs to the view already on screen.
- **The consumer holds \`value\`** — \`Tabs\` is controlled, and \`TabPanel\` reads the same state through \`activeValue\`.

---

### Example

\`\`\`tsx
import { Tabs, Tab, TabPanel, Text } from "@telicent-oss/ds";
import { useState } from "react";

const DatasetDetail = () => {
  const [tab, setTab] = useState("overview");

  return (
    <>
      <Tabs
        idPrefix="dataset"
        aria-label="Dataset detail"
        value={tab}
        onChange={(_, next) => setTab(next)}
      >
        <Tab value="overview" label="Overview" />
        <Tab value="schema" label="Schema" />
      </Tabs>

      <TabPanel idPrefix="dataset" value="overview" activeValue={tab}>
        <Text sx={{ pt: 2 }}>Summary of the selected dataset.</Text>
      </TabPanel>
      <TabPanel idPrefix="dataset" value="schema" activeValue={tab}>
        <Text sx={{ pt: 2 }}>Fields, types, and cardinality.</Text>
      </TabPanel>
    </>
  );
};
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    idPrefix: {
      control: "text",
      description:
        "Namespace for the derived `id` / `aria-controls` / `aria-labelledby` triple. Repeat the same value on this group's `TabPanel`s. Unique per tab set on the page.",
      table: { type: { summary: "string" }, category: "Tabs (DS)" },
    },
    "aria-label": {
      control: "text",
      description:
        "The tablist's accessible name, as a literal string. Required unless `aria-labelledby` is given — the type is a union permitting exactly one (ADR-0001).",
      table: { type: { summary: "string" }, category: "Tabs (DS)" },
    },
    "aria-labelledby": {
      control: "text",
      description:
        "Id of a visible element naming the tablist. Required unless `aria-label` is given. Prefer this when a heading already names the tab set.",
      table: { type: { summary: "string" }, category: "Tabs (DS)" },
    },
    value: {
      control: false,
      description: "The selected tab's `value`. Controlled — hold it in the consumer.",
      table: { type: { summary: "string | number" }, category: "Tabs" },
    },
    onChange: {
      control: false,
      description: "Fired with `(event, nextValue)` when a tab is selected.",
      table: { type: { summary: "(event: SyntheticEvent, value: TabValue) => void" }, category: "Tabs" },
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description:
        'Tab bar direction. `"vertical"` also moves the theme divider from the bottom edge to the inline edge.',
      table: { defaultValue: { summary: "horizontal" }, category: "Tabs" },
    },
    variant: {
      control: "radio",
      options: ["standard", "scrollable", "fullWidth"],
      description:
        'Width behaviour. `"scrollable"` keeps tabs on one line and scrolls; `"fullWidth"` divides the container equally.',
      table: { defaultValue: { summary: "standard" }, category: "Tabs" },
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
  parameters: {
    docs: {
      description: {
        story:
          "The shape every other story varies. One `idPrefix` on the `Tabs` and the same string on each `TabPanel` is the whole of the accessibility wiring — inspect a tab to see the derived `id` and `aria-controls`.",
      },
    },
  },
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

export const WithLabelledBy: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The other half of the accessible-name union. When a visible heading already names the tab set, point `aria-labelledby` at it rather than repeating the text in an `aria-label` that can drift out of sync.",
      },
    },
  },
  render: () => {
    const [tab, setTab] = useState<TabValue>("overview");

    return (
      <Box sx={{ width: 480 }}>
        <Typography id="labelled-by-heading" variant="h6" sx={{ mb: 1 }}>
          Dataset detail
        </Typography>
        <Tabs
          idPrefix="labelled-by"
          aria-labelledby="labelled-by-heading"
          value={tab}
          onChange={(_, next) => setTab(next)}
        >
          {PANELS.map(({ value, label }) => (
            <Tab key={value} value={value} label={label} />
          ))}
        </Tabs>
        {PANELS.map(({ value, body }) => (
          <TabPanel key={value} idPrefix="labelled-by" value={value} activeValue={tab}>
            <Typography sx={{ pt: 2 }}>{body}</Typography>
          </TabPanel>
        ))}
      </Box>
    );
  },
};

export const Vertical: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`orientation=\"vertical\"` stacks the tabs and moves the theme divider to the inline edge, so the bar reads as a rail beside its panel. Lay the bar and panels out with flex at the callsite — the DS positions neither.",
      },
    },
  },
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

export const Scrollable: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`variant="scrollable"` keeps the tabs on one line and scrolls them rather than wrapping, with `scrollButtons="auto"` showing the arrows only when there is overflow. Reach for it when the tab count is data-driven and you cannot bound it at design time.',
      },
    },
  },
  render: () => {
    const REGIONS = [
      "Global",
      "Europe",
      "North America",
      "South America",
      "Africa",
      "Middle East",
      "South Asia",
      "East Asia",
      "Oceania",
    ];
    const [tab, setTab] = useState<TabValue>("Global");

    return (
      <Box sx={{ width: 420 }}>
        <Tabs
          idPrefix="regions"
          aria-label="Coverage by region"
          value={tab}
          onChange={(_, next) => setTab(next)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {REGIONS.map((region) => (
            <Tab key={region} value={region} label={region} />
          ))}
        </Tabs>
        {REGIONS.map((region) => (
          <TabPanel key={region} idPrefix="regions" value={region} activeValue={tab}>
            <Typography sx={{ pt: 2 }}>{region} coverage.</Typography>
          </TabPanel>
        ))}
      </Box>
    );
  },
};

export const WithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`icon` and `iconPosition` pass through to MUI untouched, so a tab can carry a DS icon beside its label. Paired here with `variant=\"fullWidth\"`, which divides the container equally between a small, fixed set of tabs.",
      },
    },
  },
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
