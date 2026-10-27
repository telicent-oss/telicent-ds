import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { fn } from "storybook/test";

import type { EntityListColumn } from "./EntityList";
import EntityList from "./EntityList";

type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  createdAt: Date;
};

const USERS: User[] = [
  { id: "u-001", name: "Alice Chen", email: "alice@example.com", role: "Admin", createdAt: new Date("2024-01-15") },
  { id: "u-002", name: "Bob Garcia", email: "bob@example.com", role: "Editor", createdAt: new Date("2024-02-03") },
  { id: "u-003", name: "Carol Ndlovu", email: "carol@example.com", role: "Viewer", createdAt: new Date("2024-03-21") },
  { id: "u-004", name: "David Kim", email: "david@example.com", role: "Editor", createdAt: new Date("2024-04-08") },
  { id: "u-005", name: "Eve O'Brien", email: "eve@example.com", role: "Admin", createdAt: new Date("2024-05-19") },
  { id: "u-006", name: "Frank Müller", email: "frank@example.com", role: "Viewer", createdAt: new Date("2024-06-02") },
  { id: "u-007", name: "Grace Patel", email: "grace@example.com", role: "Editor", createdAt: new Date("2024-07-14") },
  { id: "u-008", name: "Henri Dupont", email: "henri@example.com", role: "Viewer", createdAt: new Date("2024-08-30") },
  { id: "u-009", name: "Isla Kowalski", email: "isla@example.com", role: "Admin", createdAt: new Date("2024-09-11") },
  { id: "u-010", name: "Jin Watanabe", email: "jin@example.com", role: "Editor", createdAt: new Date("2024-10-25") },
  { id: "u-011", name: "Kate Lindqvist", email: "kate@example.com", role: "Viewer", createdAt: new Date("2024-11-06") },
  { id: "u-012", name: "Luca Rossi", email: "luca@example.com", role: "Editor", createdAt: new Date("2024-12-18") },
];

const COLUMNS: EntityListColumn<User>[] = [
  {
    key: "name",
    header: "Name",
    flex: 2,
    render: (u) => <strong>{u.name}</strong>,
    getSortValue: (u) => u.name,
  },
  {
    key: "email",
    header: "Email",
    flex: 3,
    render: (u) => u.email,
    getSortValue: (u) => u.email,
  },
  {
    key: "role",
    header: "Role",
    flex: 1,
    render: (u) => u.role,
    getSortValue: (u) => u.role,
  },
  {
    key: "createdAt",
    header: "Created",
    flex: 2,
    render: (u) => u.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
    getSortValue: (u) => u.createdAt,
  },
];

const meta: Meta<typeof EntityList<User>> = {
  title: "Data display/EntityList",
  component: EntityList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Semantic, keyboard-accessible list of entities where each row navigates to a detail page. Renders as a \`<section>\` landmark containing a \`<ul>\` of \`<a href>\` rows — pure HTML semantics, no router coupling.

Unlike \`DataGrid\` (which implements the ARIA grid pattern for spreadsheet-like data), \`EntityList\` uses the ARIA list pattern because each row is a single navigational entity, not a cell-level grid. Screen readers announce "link, View Alice" instead of "row 3 of 24, cell 1 of 5".

---

### The opinion

- **Each row is a native \`<a href>\`.** Right-click copy link, cmd/ctrl-click open in new tab, shift-click open in new window, screen reader "link" announcement, deep-linking, SSR — all work for free because we render real anchors.
- **Click interception is explicit and router-agnostic.** The primitive doesn't import any router. Pass \`onItemClick\` to intercept plain left-clicks for SPA navigation; omit it to let the browser do full-page navigation (useful for static sites, docs, or non-SPA contexts).
- **Modifier-click is always honored.** The \`onItemClick\` handler only fires on an unmodified left-click (no meta/ctrl/shift/alt, button === 0). Any other click falls through to native anchor behavior, so cmd-click still opens in a new tab even in SPAs.
- **Sortable headers are \`<button>\` elements** with \`aria-sort\` — the native convention screen readers announce. Non-sortable columns render as plain text (omit \`getSortValue\` on a column to make it non-sortable). Clicking a sortable header toggles ascending → descending and resets to page 1.
- **Display-only mode.** Omit \`getItemHref\` to render rows as inert \`<div>\`s with no chevron, no hover tint, no focus outline. Use for permission-gated views where the user can see rows but not act on them.
- **Pagination is always visible** when there are items (not just when there's more than one page). The page-size dropdown is always available so users can expand to see more.
- **Palette-driven styling.** Hover, focus, divider, and active-sort colors all pull from \`theme.palette\` — dark/light switching works automatically.

---

### SPA integration

Pass an \`onItemClick\` callback that calls your router's navigate function:

\`\`\`tsx
import { useNavigate } from "react-router-dom";
import { EntityList } from "@telicent-oss/ds";

const navigate = useNavigate();

<EntityList
  items={users}
  columns={columns}
  getItemKey={(u) => u.id}
  getItemHref={(u) => \`/users/\${u.id}\`}
  getItemLabel={(u) => \`View \${u.name}\`}
  onItemClick={(_, href) => navigate(href)}
/>;
\`\`\`

Apps with many \`EntityList\` instances typically wrap this once:

\`\`\`tsx
// src/components/EntityList.ts
import { EntityList as DSEntityList, EntityListProps } from "@telicent-oss/ds";
import { useNavigate } from "react-router-dom";

export const EntityList = <T,>(props: EntityListProps<T>) => {
  const navigate = useNavigate();
  return <DSEntityList onItemClick={(_, href) => navigate(href)} {...props} />;
};
\`\`\`

---

### When & how to use it

- **Reach for \`EntityList\`** for a navigational list of entities where each row opens a detail page — users, groups, clients, service accounts, backups.
- **Reach for \`DataGrid\`** when the data is genuinely tabular/analytical — filterable columns, cell-level editing, column reordering, or when consumers need to compare values across rows.
- **Reach for \`Table\`** when the data is small, fixed, and the layout is more interesting than a strict grid.

---
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EntityList<User>>;

export const Interactive: Story = {
  args: {
    items: USERS,
    columns: COLUMNS,
    getItemKey: (u: User) => u.id,
    getItemHref: (u: User) => `/users/${u.id}`,
    getItemLabel: (u: User) => `View user ${u.name}`,
    ariaLabel: "Users",
    initialSort: { key: "name", direction: "asc" },
    // Intercept clicks here so Storybook doesn't navigate away to a 404.
    // The row is still a real <a href>, so right-click copy-link and
    // cmd/ctrl-click open-in-new-tab still demonstrate anchor semantics.
    onItemClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default usage. Each row is a real `<a href>` — right-click to copy the link or cmd/ctrl-click to open in a new tab. Plain left-clicks are intercepted here (the Actions panel shows them firing) so Storybook doesn't navigate away; omit `onItemClick` in your app to let the browser follow the href.",
      },
    },
  },
};

export const DisplayOnly: Story = {
  args: {
    items: USERS,
    columns: COLUMNS,
    getItemKey: (u: User) => u.id,
    ariaLabel: "Users (read-only)",
    initialSort: { key: "name", direction: "asc" },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Omit `getItemHref` to render rows as inert elements — no chevron, no hover tint, no focus outline. Useful for permission-gated views where the user can see rows but not act on them.",
      },
    },
  },
};

export const WithSPAInterception: Story = {
  render: (args) => {
    const [lastClicked, setLastClicked] = useState<string | null>(null);
    return (
      <>
        <EntityList
          {...args}
          onItemClick={(_item, href) => setLastClicked(href)}
        />
        <p style={{ marginTop: 16 }}>
          <strong>onItemClick fired for:</strong> {lastClicked ?? "(click a row)"}
        </p>
      </>
    );
  },
  args: {
    items: USERS,
    columns: COLUMNS,
    getItemKey: (u: User) => u.id,
    getItemHref: (u: User) => `/users/${u.id}`,
    getItemLabel: (u: User) => `View user ${u.name}`,
    ariaLabel: "Users",
    initialSort: { key: "name", direction: "asc" },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Passing `onItemClick` intercepts plain left-clicks for SPA navigation. Try cmd-click / ctrl-click / middle-click — those modifier clicks are preserved and open in a new tab/window (native browser behavior), while plain clicks fire the callback.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    items: [],
    columns: COLUMNS,
    getItemKey: (u: User) => u.id,
    getItemHref: (u: User) => `/users/${u.id}`,
    getItemLabel: (u: User) => `View user ${u.name}`,
    ariaLabel: "Users",
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    items: [],
    columns: COLUMNS,
    getItemKey: (u: User) => u.id,
    getItemHref: (u: User) => `/users/${u.id}`,
    getItemLabel: (u: User) => `View user ${u.name}`,
    ariaLabel: "Users",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default empty-state message. Pass `renderEmpty` to customize (e.g. show a search-specific message).",
      },
    },
  },
};
