import type { Meta, StoryObj } from "@storybook/react-vite";
import Box from "@mui/material/Box";

import AppInfo from "./AppInfo";
import AppInfoRow from "./AppInfoRow";

const meta = {
  title: "Data display/App info",
  component: AppInfo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
An icon-button + popover shell that surfaces app metadata from the AppBar end slot. Every Telicent app uses this next to \`UserProfile\`, so the visual language and behaviour of the trigger and popover are enforced here rather than reimplemented per app.

The component is composition-first: it owns the trigger, the popover, and the layout, but nothing about what's inside. Consumers compose rows using \`AppInfoRow\` (or arbitrary JSX for exotic content).

---

### Supported use cases

- **Version-only** — the most common case. Pass a single \`AppInfoRow\` child with the version string.
- **Extra metadata rows** — compose additional \`AppInfoRow\` children for build hash, environment, licence, or anything else app-specific. All rows share the same styling.
- **Exotic content** — pass any JSX as children when a label:value row isn't the right shape (e.g. a copyright notice, a support link block). Match the visual style yourself, or lean on \`AppInfoRow\`.
- **Custom trigger id / label** — override \`id\` for stable E2E selectors (\`\${id}-trigger\`, \`\${id}-popover\`) and \`ariaLabel\` for the icon-button.

---

### When & how to use it

- **In the AppBar end slot** — place next to \`UserProfile\`. The anchor positioning is tuned for the top-right of the AppBar; do not use elsewhere.
- **App metadata comes from the app**, not the DS — read \`version\` from your app's \`package.json\` (via Vite \`define\`, direct import, or however your app configures it) and pass it as an \`AppInfoRow\` value.
- **Prefer \`AppInfoRow\` for every row** so per-app extensions share styling with the standard version row.

---

### Example

\`\`\`tsx
import { AppInfo, AppInfoRow } from "@telicent-oss/ds";
import { version } from "../../../package.json";

<AppInfo>
  <AppInfoRow label="Version" value={version} />
  <AppInfoRow label="Build" value={buildHash} />
  <AppInfoRow label="Environment" value={env} />
</AppInfo>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: "text",
      description:
        'Optional id prefix used for stable selectors (E2E, telemetry). Defaults to `"app-info"`, producing `${id}-trigger` and `${id}-popover`.',
    },
    ariaLabel: {
      control: "text",
      description:
        'Accessible label for the icon-button trigger and the popover dialog. Defaults to `"App information"`.',
    },
    children: {
      control: false,
      description:
        "Rows rendered inside the popover. Compose from `AppInfoRow` for standard label:value pairs.",
      table: { type: { summary: "ReactNode" } },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        {Story()}
      </Box>
    ),
  ],
} satisfies Meta<typeof AppInfo>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <AppInfoRow label="Version" value="1.16.0" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The minimum viable usage — a single Version row. Click the info icon to open the popover.",
      },
    },
  },
};

export const WithExtraRows: Story = {
  args: {
    children: (
      <>
        <AppInfoRow label="Version" value="1.16.0" />
        <AppInfoRow label="Build" value="a1b2c3d" />
        <AppInfoRow label="Environment" value="production" />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Additional metadata rows. Every row uses `AppInfoRow`, so styling is uniform — no special-cased first row.",
      },
    },
  },
};

export const LongVersion: Story = {
  args: {
    children: (
      <AppInfoRow label="Version" value="1.16.0-rc.3+build.2026-08-07.abc1234" />
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Verifies that long values wrap gracefully within the 240px popover — useful for pre-release builds that include build metadata.",
      },
    },
  },
};

export const CustomId: Story = {
  args: {
    id: "graph-app-info",
    children: (
      <AppInfoRow
        label="Version"
        value="1.16.0"
        id="graph-app-info-version"
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Override the id prefix on `AppInfo` to produce stable selectors for the trigger and popover. Put ids on individual `AppInfoRow` values as needed for E2E/telemetry.",
      },
    },
  },
};
