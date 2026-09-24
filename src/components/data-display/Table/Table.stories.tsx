import type { Meta, StoryObj } from "@storybook/react-vite";

import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const meta = {
  title: "Data display/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The MUI Table family exposed through DS — \`Table\`, \`TableHead\`, \`TableBody\`, \`TableRow\`, \`TableCell\`. Thin passthroughs today: the theme carries the visuals; the DS surface exists so apps can compose tables without importing \`@mui/material\` directly.

The five components work together — this page documents the family as one composition rather than five near-identical passthroughs.

---

### The opinion

- **First-pass passthroughs** — no props added or narrowed yet. The DS owns the palette; the wrappers exist purely to route imports through \`@telicent-oss/ds\` and give the family a home for future opinionation (default \`size\`, sticky-head defaults, row hover behaviour).
- **Not for grids/spreadsheets** — use \`@mui/x-data-grid\` (admin has a carve-out). Reach for the Table family when the data is structurally tabular but not interactive — read-only rows, occasional row click, no in-cell editing.

---

### Accessibility

- Renders semantic \`<table>\`, \`<thead>\`, \`<tbody>\`, \`<tr>\`, \`<th>\`, \`<td>\` — screen readers announce it as a table by default.
- \`TableCell\` derives \`role\` from position — \`th\` in \`TableHead\`, \`td\` in \`TableBody\`. Override with the \`component\` prop when the semantics differ from the visual position.
- For column headers, use \`<TableCell>\` inside \`<TableHead><TableRow>\` — no extra props needed.

---

### Other supported features

- **\`Table\`** — \`size="small" | "medium"\` (default \`medium\`), \`stickyHeader\`, \`padding="default" | "checkbox" | "none"\`.
- **\`TableRow\`** — \`hover\`, \`selected\`, \`onClick\` for row-click patterns.
- **\`TableCell\`** — \`align\`, \`padding\`, \`variant="head" | "body" | "footer"\`, \`component\` to change the rendered tag.
- All MUI props remain reachable via passthrough.

---

### When & how to use it

- **Read-only tabular data** — audit logs, activity streams, user lists in a card, small resource tables.
- **Structural data with occasional row click** — use \`TableRow onClick\` + \`hover\`.
- **Do not use for interactive grids** — sorting, filtering, virtualisation, in-cell edit, column reorder → \`@mui/x-data-grid\` (carve-out).
- **Prefer a list-style component** (\`List\`, \`AppInfoRow\`) when the data is one column of key-value pairs; a table is overkill.

---

### Example

\`\`\`tsx
import { Table, TableHead, TableBody, TableRow, TableCell } from "@telicent-oss/ds";

<Table size="small">
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Email</TableCell>
      <TableCell align="right">Roles</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id} hover>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell align="right">{user.roles.length}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium"],
      description:
        'Row density. `"medium"` (default) matches most surface designs; `"small"` for dense administrative tables (users, audit logs).',
    },
    stickyHeader: {
      control: "boolean",
      description:
        "When true, `TableHead` sticks to the top of the scroll container. Wrap in a fixed-height container (e.g. `overflow: auto`) for this to be useful.",
    },
    padding: {
      control: "radio",
      options: ["normal", "checkbox", "none"],
      description:
        "Cell padding preset. `\"checkbox\"` narrows the leading column for selection tables; `\"none\"` strips padding entirely for fully custom cells.",
    },
    children: {
      control: false,
      description: "`TableHead` and `TableBody` — compose them with `TableRow` and `TableCell`.",
      table: { type: { summary: "ReactNode" } },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
export type Story = StoryObj<typeof meta>;

type UserRow = { id: string; name: string; email: string; roles: number };

const USERS: UserRow[] = [
  { id: "u1", name: "Ada Lovelace", email: "ada@example.com", roles: 3 },
  { id: "u2", name: "Grace Hopper", email: "grace@example.com", roles: 5 },
  { id: "u3", name: "Barbara Liskov", email: "barbara@example.com", roles: 2 },
  { id: "u4", name: "Katherine Johnson", email: "katherine@example.com", roles: 1 },
];

const UsersTable = ({
  rows,
  ...args
}: React.ComponentProps<typeof Table> & { rows: UserRow[] }) => (
  <Table {...args}>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell align="right">Roles</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.length === 0 ? (
        <TableRow>
          <TableCell colSpan={3} align="center">
            No users found.
          </TableCell>
        </TableRow>
      ) : (
        rows.map((user) => (
          <TableRow key={user.id} hover>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell align="right">{user.roles}</TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  </Table>
);

export const Basic: Story = {
  render: (args) => <UsersTable rows={USERS} {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "The whole family composed for a typical read-only listing — head with column names, body with rows, right-aligned numeric column. This is the baseline shape most callsites should follow.",
      },
    },
  },
};

export const SmallSize: Story = {
  args: { size: "small" },
  render: (args) => <UsersTable rows={USERS} {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          '`size="small"` tightens row height and padding. Use in dense administrative views (audit logs, users tables, clients tables) where the user is scanning many rows at once.',
      },
    },
  },
};

export const StickyHeader: Story = {
  args: { stickyHeader: true },
  render: (args) => (
    <div style={{ height: 240, overflow: "auto", border: "1px solid rgba(0,0,0,0.12)" }}>
      <UsersTable
        rows={[...USERS, ...USERS, ...USERS].map((u, i) => ({ ...u, id: `${u.id}-${i}` }))}
        {...args}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Wrap the Table in a fixed-height, overflowing container and set `stickyHeader` to keep the column headers visible while the body scrolls. The wrapper is where the scroll boundary is defined — Table itself doesn't manage overflow.",
      },
    },
  },
};

export const EmptyState: Story = {
  render: (args) => <UsersTable rows={[]} {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Empty state is up to the caller — Table has no built-in placeholder. The idiomatic shape is a single `TableRow` with a `TableCell` spanning every column (`colSpan={N}`) and centered copy explaining why the table is empty.",
      },
    },
  },
};

export const LongContent: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableCell>Rule</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow hover>
          <TableCell>require-mfa</TableCell>
          <TableCell>
            All members of this workspace must complete multi-factor enrolment before their next
            session. Existing sessions are grandfathered until they expire or the member signs
            out.
          </TableCell>
        </TableRow>
        <TableRow hover>
          <TableCell>ip-allowlist</TableCell>
          <TableCell>
            Restricts sign-in to source IP ranges declared in the org's allowlist. Requests from
            outside those ranges are rejected before authentication runs.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Long cell content wraps within the column; the row height grows to accommodate it. Use this to sanity-check a callsite where description or notes columns may run long — the layout doesn't break, but if this is the norm rather than the exception, consider a two-line list instead of a table.",
      },
    },
  },
};
