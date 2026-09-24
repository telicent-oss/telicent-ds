import{a as e,b as s}from"./iframe-COFs_UtR.js";import{T as b,a as o,b as a,c as B,d as z}from"./TableRow-sL2cRuc0.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DXI8L4mD.js";import"./extendSxProp-BfveVk5X.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";const $={title:"Data display/Table",component:b,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe MUI Table family exposed through DS — `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell`. Thin passthroughs today: the theme carries the visuals; the DS surface exists so apps can compose tables without importing `@mui/material` directly.\n\nThe five components work together — this page documents the family as one composition rather than five near-identical passthroughs.\n\n---\n\n### The opinion\n\n- **First-pass passthroughs** — no props added or narrowed yet. The DS owns the palette; the wrappers exist purely to route imports through `@telicent-oss/ds` and give the family a home for future opinionation (default `size`, sticky-head defaults, row hover behaviour).\n- **Not for grids/spreadsheets** — use `@mui/x-data-grid` (admin has a carve-out). Reach for the Table family when the data is structurally tabular but not interactive — read-only rows, occasional row click, no in-cell editing.\n\n---\n\n### Accessibility\n\n- Renders semantic `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` — screen readers announce it as a table by default.\n- `TableCell` derives `role` from position — `th` in `TableHead`, `td` in `TableBody`. Override with the `component` prop when the semantics differ from the visual position.\n- For column headers, use `<TableCell>` inside `<TableHead><TableRow>` — no extra props needed.\n\n---\n\n### Other supported features\n\n- **`Table`** — `size="small" | "medium"` (default `medium`), `stickyHeader`, `padding="default" | "checkbox" | "none"`.\n- **`TableRow`** — `hover`, `selected`, `onClick` for row-click patterns.\n- **`TableCell`** — `align`, `padding`, `variant="head" | "body" | "footer"`, `component` to change the rendered tag.\n- All MUI props remain reachable via passthrough.\n\n---\n\n### When & how to use it\n\n- **Read-only tabular data** — audit logs, activity streams, user lists in a card, small resource tables.\n- **Structural data with occasional row click** — use `TableRow onClick` + `hover`.\n- **Do not use for interactive grids** — sorting, filtering, virtualisation, in-cell edit, column reorder → `@mui/x-data-grid` (carve-out).\n- **Prefer a list-style component** (`List`, `AppInfoRow`) when the data is one column of key-value pairs; a table is overkill.\n\n---\n\n### Example\n\n```tsx\nimport { Table, TableHead, TableBody, TableRow, TableCell } from "@telicent-oss/ds";\n\n<Table size="small">\n  <TableHead>\n    <TableRow>\n      <TableCell>Name</TableCell>\n      <TableCell>Email</TableCell>\n      <TableCell align="right">Roles</TableCell>\n    </TableRow>\n  </TableHead>\n  <TableBody>\n    {users.map((user) => (\n      <TableRow key={user.id} hover>\n        <TableCell>{user.name}</TableCell>\n        <TableCell>{user.email}</TableCell>\n        <TableCell align="right">{user.roles.length}</TableCell>\n      </TableRow>\n    ))}\n  </TableBody>\n</Table>\n```\n        '}}},argTypes:{size:{control:"radio",options:["small","medium"],description:'Row density. `"medium"` (default) matches most surface designs; `"small"` for dense administrative tables (users, audit logs).'},stickyHeader:{control:"boolean",description:"When true, `TableHead` sticks to the top of the scroll container. Wrap in a fixed-height container (e.g. `overflow: auto`) for this to be useful."},padding:{control:"radio",options:["normal","checkbox","none"],description:'Cell padding preset. `"checkbox"` narrows the leading column for selection tables; `"none"` strips padding entirely for fully custom cells.'},children:{control:!1,description:"`TableHead` and `TableBody` — compose them with `TableRow` and `TableCell`.",table:{type:{summary:"ReactNode"}}}}},l=[{id:"u1",name:"Ada Lovelace",email:"ada@example.com",roles:3},{id:"u2",name:"Grace Hopper",email:"grace@example.com",roles:5},{id:"u3",name:"Barbara Liskov",email:"barbara@example.com",roles:2},{id:"u4",name:"Katherine Johnson",email:"katherine@example.com",roles:1}],p=({rows:r,...i})=>s(b,{...i,children:[e(B,{children:s(o,{children:[e(a,{children:"Name"}),e(a,{children:"Email"}),e(a,{align:"right",children:"Roles"})]})}),e(z,{children:r.length===0?e(o,{children:e(a,{colSpan:3,align:"center",children:"No users found."})}):r.map(t=>s(o,{hover:!0,children:[e(a,{children:t.name}),e(a,{children:t.email}),e(a,{align:"right",children:t.roles})]},t.id))})]}),n={render:r=>e(p,{rows:l,...r}),parameters:{docs:{description:{story:"The whole family composed for a typical read-only listing — head with column names, body with rows, right-aligned numeric column. This is the baseline shape most callsites should follow."}}}},d={args:{size:"small"},render:r=>e(p,{rows:l,...r}),parameters:{docs:{description:{story:'`size="small"` tightens row height and padding. Use in dense administrative views (audit logs, users tables, clients tables) where the user is scanning many rows at once.'}}}},c={args:{stickyHeader:!0},render:r=>e("div",{style:{height:240,overflow:"auto",border:"1px solid rgba(0,0,0,0.12)"},children:e(p,{rows:[...l,...l,...l].map((i,t)=>({...i,id:`${i.id}-${t}`})),...r})}),parameters:{docs:{description:{story:"Wrap the Table in a fixed-height, overflowing container and set `stickyHeader` to keep the column headers visible while the body scrolls. The wrapper is where the scroll boundary is defined — Table itself doesn't manage overflow."}}}},h={render:r=>e(p,{rows:[],...r}),parameters:{docs:{description:{story:"Empty state is up to the caller — Table has no built-in placeholder. The idiomatic shape is a single `TableRow` with a `TableCell` spanning every column (`colSpan={N}`) and centered copy explaining why the table is empty."}}}},m={render:r=>s(b,{...r,children:[e(B,{children:s(o,{children:[e(a,{children:"Rule"}),e(a,{children:"Description"})]})}),s(z,{children:[s(o,{hover:!0,children:[e(a,{children:"require-mfa"}),e(a,{children:"All members of this workspace must complete multi-factor enrolment before their next session. Existing sessions are grandfathered until they expire or the member signs out."})]}),s(o,{hover:!0,children:[e(a,{children:"ip-allowlist"}),e(a,{children:"Restricts sign-in to source IP ranges declared in the org's allowlist. Requests from outside those ranges are rejected before authentication runs."})]})]})]}),parameters:{docs:{description:{story:"Long cell content wraps within the column; the row height grows to accommodate it. Use this to sanity-check a callsite where description or notes columns may run long — the layout doesn't break, but if this is the norm rather than the exception, consider a two-line list instead of a table."}}}};var u,g,T;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <UsersTable rows={USERS} {...args} />,
  parameters: {
    docs: {
      description: {
        story: "The whole family composed for a typical read-only listing — head with column names, body with rows, right-aligned numeric column. This is the baseline shape most callsites should follow."
      }
    }
  }
}`,...(T=(g=n.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var w,y,f;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => <UsersTable rows={USERS} {...args} />,
  parameters: {
    docs: {
      description: {
        story: '\`size="small"\` tightens row height and padding. Use in dense administrative views (audit logs, users tables, clients tables) where the user is scanning many rows at once.'
      }
    }
  }
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,R,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    stickyHeader: true
  },
  render: args => <div style={{
    height: 240,
    overflow: "auto",
    border: "1px solid rgba(0,0,0,0.12)"
  }}>
      <UsersTable rows={[...USERS, ...USERS, ...USERS].map((u, i) => ({
      ...u,
      id: \`\${u.id}-\${i}\`
    }))} {...args} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Wrap the Table in a fixed-height, overflowing container and set \`stickyHeader\` to keep the column headers visible while the body scrolls. The wrapper is where the scroll boundary is defined — Table itself doesn't manage overflow."
      }
    }
  }
}`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var x,k,S;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <UsersTable rows={[]} {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Empty state is up to the caller — Table has no built-in placeholder. The idiomatic shape is a single \`TableRow\` with a \`TableCell\` spanning every column (\`colSpan={N}\`) and centered copy explaining why the table is empty."
      }
    }
  }
}`,...(S=(k=h.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var H,U,E;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <Table {...args}>
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
    </Table>,
  parameters: {
    docs: {
      description: {
        story: "Long cell content wraps within the column; the row height grows to accommodate it. Use this to sanity-check a callsite where description or notes columns may run long — the layout doesn't break, but if this is the norm rather than the exception, consider a two-line list instead of a table."
      }
    }
  }
}`,...(E=(U=m.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};const O=["Basic","SmallSize","StickyHeader","EmptyState","LongContent"];export{n as Basic,h as EmptyState,m as LongContent,d as SmallSize,c as StickyHeader,O as __namedExportsOrder,$ as default};
