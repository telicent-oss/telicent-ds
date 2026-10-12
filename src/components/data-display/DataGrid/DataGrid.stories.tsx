import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import DataGrid from "./DataGrid";
import type { GridColDef, GridRenderCellParams, GridRowParams } from "./DataGrid";
import Chip from "../Chip/Chip";
import { Text } from "../Text/Text";

const meta: Meta<typeof DataGrid> = {
  title: "Data display/DataGrid",
  component: DataGrid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Tabular data with pagination, sorting, and themed styling. Wraps MUI X \`DataGrid\` with a palette-driven override set and a handful of DS defaults so a bare \`<DataGrid rows={...} columns={...} />\` renders on-theme without any configuration.

MUI X's out-of-the-box DataGrid renders with hover highlights, row click selection, resizable columns, a column menu, and a fixed height — plus MUI's own Paper/MenuItem/IconButton defaults for the pagination row. The DS undoes those at component scope via a nested \`ThemeProvider\`, so the global DS theme stays untouched while the grid reads as a Telicent surface.

---

### The opinion

- **\`autoHeight\` defaults to \`true\`.** The grid grows with its content rather than scrolling inside a fixed box. Pass \`autoHeight={false}\` when the grid lives in a scroll container with a known height.
- **\`disableColumnResize\` defaults to \`true\`.** Set column widths with \`width\` or \`flex\` on \`GridColDef\` — resizing lets end-users destabilise layout without lasting benefit. Pass \`disableColumnResize={false}\` to opt back in.
- **\`disableRowSelectionOnClick\` defaults to \`true\`.** Clicking a row doesn't select it; use \`onRowClick\` for navigation. A click that silently selects a row is almost always a bug (users don't know they just toggled state).
- **Row hover + pointer cursor are off by default and auto-opted-in when \`onRowClick\` is set.** The baked theme suppresses MUI's default row hover so non-interactive grids don't flicker on mouseover. The wrapper detects \`onRowClick\` and re-enables \`cursor: "pointer"\` + \`backgroundColor: palette.action.hover\` — zero \`sx\` at the callsite. Pass your own \`sx\` to override.
- **\`disableColumnMenu\` defaults to \`true\`.** No per-column hide / filter / pin menu. The DS prefers deliberate column config over end-user grid tinkering.
- **\`pagination\` defaults to \`true\`, \`pageSizeOptions\` defaults to \`[10, 25, 50]\`, initial \`pageSize\` is \`10\`.** Every DS grid paginates. Override \`pageSizeOptions\` for larger datasets, or set \`initialState.pagination.paginationModel.pageSize\` for a different first page size.
- **\`initialSort\` is a DS convenience prop.** Pass a \`GridSortModel\` and the DS routes it to \`initialState.sorting.sortModel\` — avoids the nested-object dance for the common case.
- **Nested \`ThemeProvider\`.** The grid applies its \`MuiPaper\` / \`MuiMenuItem\` / \`MuiTablePagination\` / \`MuiIconButton\` overrides inside a child theme so pagination / page-size selector / icon buttons inside the grid read on-theme without leaking those overrides to Paper / MenuItem / etc. elsewhere in the app. Palette tokens resolve against the outer theme, so dark/light switching Just Works.

---

### Defaults

- \`autoHeight\`: \`true\`
- \`disableColumnResize\`: \`true\`
- \`disableRowSelectionOnClick\`: \`true\`
- \`disableColumnMenu\`: \`true\`
- \`pagination\`: \`true\`
- \`pageSizeOptions\`: \`[10, 25, 50]\`
- initial \`pageSize\`: \`10\`
- Palette-driven grid chrome (headers, cells, footer, sort icons, focus outlines, scrollbar fillers) — via the nested \`ThemeProvider\`, not \`sx\` at the callsite.

---

### Other supported features

Everything else on MUI X's \`DataGrid\` passes through, and a callsite prop overrides a DS default because \`{...rest}\` spreads last — \`onRowClick\`, \`loading\`, \`slots\` / \`slotProps\`, \`getRowId\`, \`checkboxSelection\`, server-side pagination/sorting/filtering, custom cell renderers via \`renderCell\`, and the full \`initialState\` shape all behave as MUI X documents them.

---

### When & how to use it

- **Reach for \`DataGrid\`** when the data is large enough to need pagination or sort, or when columns need their own render functions / value getters.
- **Reach for \`Table\`** (the DS \`Table\` / \`TableBody\` / \`TableRow\` / \`TableCell\` family) when the data is small, fixed, and the layout is more interesting than a strict grid — DataGrid's row-virtualisation and column model are overkill below ~20 rows.
- **Server-side data**: pass \`paginationMode="server"\`, \`sortingMode="server"\`, and the matching \`rowCount\` / \`onPaginationModelChange\` / \`onSortModelChange\` props. The DS defaults don't interfere.

---

### Example

\`\`\`tsx
import { DataGrid } from "@telicent-oss/ds";
import type { GridColDef } from "@telicent-oss/ds";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 120 },
  { field: "name", headerName: "Name", flex: 2 },
  { field: "role", headerName: "Role", flex: 1 },
];

<DataGrid
  rows={rows}
  columns={columns}
  initialSort={[{ field: "name", sort: "asc" }]}
  onRowClick={(row) => navigate(\`/users/\${row.id}\`)}
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    rows: {
      control: false,
      description: "Row data. Each row needs an `id` field (or pass `getRowId`).",
      table: { type: { summary: "readonly GridValidRowModel[]" }, category: "DataGrid" },
    },
    columns: {
      control: false,
      description:
        "Column config. Use `width` or `flex` to size, `renderCell` for custom cells, `valueGetter` / `valueFormatter` for derived values.",
      table: { type: { summary: "readonly GridColDef[]" }, category: "DataGrid" },
    },
    initialSort: {
      control: false,
      description:
        "DS convenience prop. Passes through to `initialState.sorting.sortModel` — gives the grid an initial sort without the nested-object dance.",
      table: { type: { summary: "GridSortModel" }, category: "DataGrid (DS)" },
    },
    autoHeight: {
      control: "boolean",
      description:
        "DS defaults this to `true`. Pass `false` when the grid lives in a scroll container with a fixed height.",
      table: { defaultValue: { summary: "true" }, category: "DataGrid (DS)" },
    },
    disableColumnResize: {
      control: "boolean",
      description:
        "DS defaults this to `true`. Pass `false` to let end-users resize columns at runtime.",
      table: { defaultValue: { summary: "true" }, category: "DataGrid (DS)" },
    },
    disableRowSelectionOnClick: {
      control: "boolean",
      description:
        "DS defaults this to `true`. Use `onRowClick` for navigation; opt back in only when a row click should toggle selection state.",
      table: { defaultValue: { summary: "true" }, category: "DataGrid (DS)" },
    },
    disableColumnMenu: {
      control: "boolean",
      description:
        "DS defaults this to `true`. Pass `false` to restore MUI's per-column hide / filter / pin menu.",
      table: { defaultValue: { summary: "true" }, category: "DataGrid (DS)" },
    },
    pagination: {
      control: "boolean",
      description: "DS defaults this to `true`. Every DS grid paginates.",
      table: { defaultValue: { summary: "true" }, category: "DataGrid (DS)" },
    },
    pageSizeOptions: {
      control: false,
      description:
        "DS defaults this to `[10, 25, 50]`. Override for larger datasets (e.g. `[25, 50, 100]`).",
      table: {
        type: { summary: "number[]" },
        defaultValue: { summary: "[10, 25, 50]" },
        category: "DataGrid (DS)",
      },
    },
    loading: {
      control: "boolean",
      description: "Shows the overlay. Palette-driven, so it reads correctly in dark and light.",
      table: { defaultValue: { summary: "false" }, category: "DataGrid" },
    },
    onRowClick: {
      control: false,
      description:
        "Fired with `(GridRowParams, event, details)`. Use for navigation — DS disables click-to-select, so this is the primary way to make rows interactive.",
      table: {
        type: { summary: "(params: GridRowParams, event, details) => void" },
        category: "DataGrid",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DataGrid>;

type Row = { id: string; name: string; role: "Admin" | "Analyst" | "Viewer"; status: "Active" | "Pending" | "Disabled" };

const rows: Row[] = [
  { id: "u-001", name: "Ada Lovelace", role: "Analyst", status: "Active" },
  { id: "u-002", name: "Alan Turing", role: "Admin", status: "Active" },
  { id: "u-003", name: "Grace Hopper", role: "Admin", status: "Active" },
  { id: "u-004", name: "Katherine Johnson", role: "Analyst", status: "Pending" },
  { id: "u-005", name: "Hedy Lamarr", role: "Viewer", status: "Disabled" },
  { id: "u-006", name: "Dennis Ritchie", role: "Admin", status: "Active" },
  { id: "u-007", name: "Margaret Hamilton", role: "Analyst", status: "Active" },
  { id: "u-008", name: "John von Neumann", role: "Admin", status: "Pending" },
  { id: "u-009", name: "Barbara Liskov", role: "Admin", status: "Active" },
  { id: "u-010", name: "Donald Knuth", role: "Viewer", status: "Active" },
  { id: "u-011", name: "Linus Torvalds", role: "Admin", status: "Active" },
  { id: "u-012", name: "Guido van Rossum", role: "Analyst", status: "Active" },
];

const basicColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 120 },
  { field: "name", headerName: "Name", flex: 2 },
  { field: "role", headerName: "Role", flex: 1 },
];

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The shape every other story varies. No `sx` at the callsite — the themed chrome, pagination row with `[10, 25, 50]` options, auto-sized height, and column sizing all come from the DS defaults. Flip the Storybook theme in the toolbar to see dark/light handling.",
      },
    },
  },
  args: { rows, columns: basicColumns },
};

export const WithInitialSort: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`initialSort` is a DS convenience prop that routes to `initialState.sorting.sortModel`. Here the grid opens sorted by name ascending. The arrow on the sorted column reads in `primary.main` — a palette consequence, not an `sx` override.",
      },
    },
  },
  args: {
    rows,
    columns: basicColumns,
    initialSort: [{ field: "name", sort: "asc" }],
  },
};

export const WithCustomCellRenderer: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A `renderCell` function on a column swaps raw text for any ReactNode — here a status column renders a DS `Chip`. The nested theme makes DS components inside cells inherit the DS palette and typography, not MUI's defaults.",
      },
    },
  },
  render: () => {
    const columns: GridColDef[] = [
      { field: "name", headerName: "Name", flex: 2 },
      { field: "role", headerName: "Role", flex: 1 },
      {
        field: "status",
        headerName: "Status",
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
          const status = params.value as Row["status"];
          return (
            <Chip
              label={status}
              color={
                status === "Active"
                  ? "success"
                  : status === "Pending"
                  ? "warning"
                  : "default"
              }
              size="small"
            />
          );
        },
      },
    ];
    return <DataGrid rows={rows} columns={columns} />;
  },
};

export const ClickableRows: Story = {
  parameters: {
    docs: {
      description: {
        story: `
DS disables click-to-select by default, so \`onRowClick\` is the primary way to make rows interactive. The handler receives \`GridRowParams\` — use \`.row\` to get the full row object and route or open a drawer from there.

**Hover + cursor are opted in for you.** The baked theme suppresses MUI's default row hover so non-interactive grids don't flicker on mouseover. When \`onRowClick\` is set, the DS wrapper re-enables \`cursor: "pointer"\` and \`backgroundColor: palette.action.hover\` on \`.MuiDataGrid-row:hover\` — no \`sx\` boilerplate at the callsite. Callsite \`sx\` still wins (spread last), so pass your own to swap the hover colour or opt out entirely.
        `,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<Row | null>(null);
    return (
      <>
        <DataGrid
          rows={rows}
          columns={basicColumns}
          onRowClick={(params: GridRowParams) => setSelected(params.row as Row)}
        />
        <Text variant="body2" sx={{ mt: 2 }}>
          {selected
            ? `Last clicked: ${selected.name} (${selected.role})`
            : "Click a row to see its details."}
        </Text>
      </>
    );
  },
};

export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`loading` renders MUI's overlay on top of the current rows. The overlay background inherits `background.default` so the loading state reads on-theme in dark and light.",
      },
    },
  },
  args: { rows, columns: basicColumns, loading: true },
};

export const Empty: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "An empty grid still renders its header, footer, and pagination row — all palette-driven. MUI's default 'No rows' overlay sits in the body. Replace via `slots.noRowsOverlay` when the empty state should carry its own illustration or CTA.",
      },
    },
  },
  args: { rows: [], columns: basicColumns },
};
