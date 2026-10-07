import{r as c,b as l,a as e}from"./iframe-DoV3QjMy.js";import{T as b,a as n,b as o}from"./DropdownButton-BhbMAESU.js";import{M as U,G as j}from"./ExpandLessIcon-wPSuN2L4.js";import"./CogIcon-BrM3bM08.js";import"./InfoIcon-CiYXzfUV.js";import"./ExpandMoreIcon-B2nIi4ex.js";import"./ThemeSwitchRow-FSCnqxc5.js";import"./Text-5OLsLL-X.js";import"./Chip-DJ5vTtwO.js";import"./Divider-DRlkiuEy.js";import"./TreeView-BoweCL_Q.js";import"./AppInfoRow-LLJ-5Iyu.js";import"./AppSettings-BRMLiFkJ.js";import"./SvgIcon-DWBoWjNh.js";import"./TableRow-CeRToYDZ.js";import{B as d}from"./Box-i9wHmHIK.js";import{T as s}from"./Typography-C5M9lYVd.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-R2nn2wZz.js";import"./AdapterDayjs-BKhrlOSN.js";import"./index-CQhMpfvr.js";import"./clsx-B-dksMZM.js";import"./styled-CPIBH1-1.js";import"./extendSxProp-fXUqE6Bn.js";import"./useThemeProps-BOXpzJ5n.js";import"./useThemeProps-TdGp5_1L.js";import"./Modal-DOjyMiRU.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-D3Q5HB-K.js";import"./resolveComponentProps-Y7s_nXSn.js";import"./index-DW2iM9tp.js";import"./utils-wGaMTb_1.js";import"./composeClasses-fLhin0tj.js";import"./Popover-DGWDneoN.js";import"./Paper-D8EuXHEg.js";import"./TextField-CBauxFJv.js";import"./useFormControl-BBJmWV5Z.js";import"./FormControl-NT9TewQW.js";import"./ListContext-DSsdSFYa.js";import"./useControlled-D4ltESLF.js";import"./createSvgIcon-BXWXI27a.js";import"./SvgIcon-LfRk_hx7.js";import"./FormHelperText-DH_PsvUH.js";import"./createStyled-eXdYsONq.js";import"./IconButton-Do8WBZlm.js";import"./ButtonBase-B3vut5uf.js";import"./DialogContent-Cxk4mq_R.js";import"./Button-Q5m5wgGr.js";import"./Chip-ChxBfEd0.js";import"./MenuItem-Bi0nOKmr.js";import"./dividerClasses-DWbaFYr4.js";import"./_IconPopover-3JecEz2K.js";import"./Box-BOj_am_D.js";import"./FlexBox-DBCcJIxQ.js";import"./Stack-BdMqYFWr.js";import"./styled-B-12PeFE.js";import"./useSlot-BdGIBGt4.js";import"./LinearProgress-B2ekBvrP.js";import"./Spinner-CSc35F_z.js";import"./Dialog-ypZzlQrl.js";import"./MapToggleButtonPresentational-DTPSB-td.js";import"./Remove-DZnC4XqL.js";import"./Alert-DNKQv9Xy.js";import"./ToggleButton-CcNjzFiL.js";import"./ToggleButtonGroup-CBnYeWXB.js";import"./LinkButton-RAsf-V-S.js";import"./Container-BCAp1nsC.js";import"./TextField-nss9Ddfr.js";import"./Divider-B_fO4zSk.js";import"./Switch-Dv-Mdd5-.js";import"./LabeledSwitch-CGdobyKV.js";import"./DatePicker-D3z9p8TY.js";import"./DateTimePicker-C5tnYF0t.js";import"./FormControl-Dx2UVhU_.js";import"./FormHelperText-DzTrQ05w.js";import"./MenuItem-98KVhiDY.js";import"./AccordionDetails-nJFr__g1.js";import"./Collapse-CsdAK5Wv.js";import"./Paper-Ci4OLb79.js";import"./ErrorFallback-ChSIl1-_.js";import"./ErrorFallbackText-DVL8h8i-.js";import"./ErrorFallbackWrapper-CrN-k4Ys.js";import"./Brand-CDQ5BSnl.js";import"./Edit-CXAUVhGa.js";const xa={title:"Navigation/Tabs",component:b,tags:["autodocs"],parameters:{docs:{description:{component:'\nTab navigation with the accessibility wiring derived rather than hand-rolled.\n\n`@mui/material` ships no `TabPanel` — mui.com hands every reader a `CustomTabPanel` component and an `a11yProps(index)` helper to copy into their own codebase. The DS ships the panel and derives all four id attributes from two strings.\n\n---\n\n### The opinion\n\n- **`idPrefix` replaces `a11yProps`.** `Tabs` shares it with its `Tab` children through a private context; each `Tab` derives its `id` and `aria-controls`, and each `TabPanel` derives the matching `id` and `aria-labelledby`. Repeat the same `idPrefix` on the panels and the wiring follows.\n- **An accessible name is required by the type.** Pass `aria-label` or `aria-labelledby`, exactly one. An unnamed tablist does not compile (ADR-0001).\n- **`Tab` requires an explicit `value`, narrowed to `string | number`.** MUI falls back to the child\'s index; the DS does not, because the value lands in a DOM id. An object value would stringify to `[object Object]` and give two panels the same id.\n- **`TabPanel` owns `hidden`.** The element renders in both states, so a tab\'s `aria-controls` always resolves to a real node. Only the children are conditional.\n- **A `Tab` outside `Tabs` throws.** `role="tab"` outside a `tablist` is invalid ARIA, and a silent fallback would ship a tab set that looks right and is unwired.\n\n- **`pill` restyles the group without changing its semantics.** A bordered well hugging its tabs, the selected tab filled, no underline indicator. The tablist role, roving tabindex and derived ids are untouched — it is a skin, not a second tabs component. A boolean rather than a `variant` value, because MUI\'s `Tabs` already owns `variant` for `standard | scrollable | fullWidth`.\n---\n\n### Accessibility\n\nTwo facts — which tab set this is (`idPrefix`) and which tab this is (`value`) — determine four strings:\n\n| Element | Attribute | Derived value |\n| --- | --- | --- |\n| `Tab` | `id` | `{idPrefix}-tab-{value}` |\n| `Tab` | `aria-controls` | `{idPrefix}-panel-{value}` |\n| `TabPanel` | `id` | `{idPrefix}-panel-{value}` |\n| `TabPanel` | `aria-labelledby` | `{idPrefix}-tab-{value}` |\n\nPanels are tab stops (`tabIndex={0}`), per WAI-ARIA APG, so a keyboard user can reach a panel whose content holds no focusable element. mui.com\'s `CustomTabPanel` omits this.\n\nGive every tab set on a page its own `idPrefix` — two sets sharing one prefix produce duplicate ids.\n\n---\n\n### `Tab` and `TabPanel` props\n\nThe controls panel below describes `Tabs`. Its two companions:\n\n| Component | Prop | Type | Notes |\n| --- | --- | --- | --- |\n| `Tab` | `value` | `string | number` | Required, where MUI falls back to the child index. Narrowed because it becomes part of a DOM id. |\n| `TabPanel` | `idPrefix` | `string` | Matches the `idPrefix` on this group\'s `Tabs`. |\n| `TabPanel` | `value` | `string | number` | This panel\'s own value, paired with the `Tab` carrying the same one. |\n| `TabPanel` | `activeValue` | `string | number` | The tab set\'s selected value — the same state `Tabs` receives. |\n| `TabPanel` | `keepMounted` | `boolean` | Hold the children in the tree while hidden. Defaults to `false`. |\n\nEverything else on `Tab` passes through to MUI; `TabPanel` accepts any `div` attribute except `hidden`, which it owns.\n\n---\n\n### Defaults\n\n- `keepMounted`: `false` — an inactive panel\'s children unmount, so an unseen panel costs nothing.\n- **Divider**: the tab-bar border sits on `MuiTabs`\' root in `tabs-overrides.ts`, reading its colour from `theme.palette.divider` and moving to the inline edge when `orientation="vertical"`. No `<Box sx={{ borderBottom: 1 }}>` wrapper at the callsite.\n- **Panel padding**: none. Spacing between a panel and the surrounding layout belongs to the app, so the DS bakes in no value.\n\n---\n\n### Other supported features\n\nEverything else on MUI\'s `Tabs` and `Tab` passes through, and a callsite prop overrides a DS default because `{...props}` spreads last — `variant`, `orientation`, `centered`, `scrollButtons`, `icon` / `iconPosition`, and `disabled` behave as MUI documents them.\n\n`keepMounted` on a `TabPanel` holds its children in the tree while the panel is hidden, for panels carrying form state worth preserving across a switch.\n\n---\n\n### When & how to use it\n\n- **Peer views of one subject** — different lenses on the same dataset, where the user moves freely between them.\n- **Not for stepping through a sequence** — a wizard or stepper carries the ordering and progress that tabs do not.\n- **Not for routing between pages** — links in a nav are the right shape; tabs imply the content belongs to the view already on screen.\n- **The consumer holds `value`** — `Tabs` is controlled, and `TabPanel` reads the same state through `activeValue`.\n\n---\n\n### Example\n\n```tsx\nimport { Tabs, Tab, TabPanel, Text } from "@telicent-oss/ds";\nimport { useState } from "react";\n\nconst DatasetDetail = () => {\n  const [tab, setTab] = useState("overview");\n\n  return (\n    <>\n      <Tabs\n        idPrefix="dataset"\n        aria-label="Dataset detail"\n        value={tab}\n        onChange={(_, next) => setTab(next)}\n      >\n        <Tab value="overview" label="Overview" />\n        <Tab value="schema" label="Schema" />\n      </Tabs>\n\n      <TabPanel idPrefix="dataset" value="overview" activeValue={tab}>\n        <Text sx={{ pt: 2 }}>Summary of the selected dataset.</Text>\n      </TabPanel>\n      <TabPanel idPrefix="dataset" value="schema" activeValue={tab}>\n        <Text sx={{ pt: 2 }}>Fields, types, and cardinality.</Text>\n      </TabPanel>\n    </>\n  );\n};\n```\n        '}}},argTypes:{pill:{control:"boolean",description:"Render as a pill group: bordered well, filled selected tab, no indicator. Semantics are unchanged.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Tabs (DS)"}},idPrefix:{control:"text",description:"Namespace for the derived `id` / `aria-controls` / `aria-labelledby` triple. Repeat the same value on this group's `TabPanel`s. Unique per tab set on the page.",table:{type:{summary:"string"},category:"Tabs (DS)"}},"aria-label":{control:"text",description:"The tablist's accessible name, as a literal string. Required unless `aria-labelledby` is given — the type is a union permitting exactly one (ADR-0001).",table:{type:{summary:"string"},category:"Tabs (DS)"}},"aria-labelledby":{control:"text",description:"Id of a visible element naming the tablist. Required unless `aria-label` is given. Prefer this when a heading already names the tab set.",table:{type:{summary:"string"},category:"Tabs (DS)"}},value:{control:!1,description:"The selected tab's `value`. Controlled — hold it in the consumer.",table:{type:{summary:"string | number"},category:"Tabs"}},onChange:{control:!1,description:"Fired with `(event, nextValue)` when a tab is selected.",table:{type:{summary:"(event: SyntheticEvent, value: TabValue) => void"},category:"Tabs"}},orientation:{control:"radio",options:["horizontal","vertical"],description:'Tab bar direction. `"vertical"` also moves the theme divider from the bottom edge to the inline edge.',table:{defaultValue:{summary:"horizontal"},category:"Tabs"}},variant:{control:"radio",options:["standard","scrollable","fullWidth"],description:'Width behaviour. `"scrollable"` keeps tabs on one line and scrolls; `"fullWidth"` divides the container equally.',table:{defaultValue:{summary:"standard"},category:"Tabs"}}}},p=[{value:"overview",label:"Overview",body:"Summary of the selected dataset."},{value:"schema",label:"Schema",body:"Fields, types, and cardinality."},{value:"lineage",label:"Lineage",body:"Upstream and downstream dependencies."}],h={parameters:{docs:{description:{story:"The shape every other story varies. One `idPrefix` on the `Tabs` and the same string on each `TabPanel` is the whole of the accessibility wiring — inspect a tab to see the derived `id` and `aria-controls`."}}},render:()=>{const[t,r]=c.useState("overview");return l(d,{sx:{width:480},children:[e(b,{idPrefix:"dataset","aria-label":"Dataset detail",value:t,onChange:(i,a)=>r(a),children:p.map(({value:i,label:a})=>e(n,{value:i,label:a},i))}),p.map(({value:i,body:a})=>e(o,{idPrefix:"dataset",value:i,activeValue:t,children:e(s,{sx:{pt:2},children:a})},i))]})}},u={parameters:{docs:{description:{story:"The other half of the accessible-name union. When a visible heading already names the tab set, point `aria-labelledby` at it rather than repeating the text in an `aria-label` that can drift out of sync."}}},render:()=>{const[t,r]=c.useState("overview");return l(d,{sx:{width:480},children:[e(s,{id:"labelled-by-heading",variant:"h6",sx:{mb:1},children:"Dataset detail"}),e(b,{idPrefix:"labelled-by","aria-labelledby":"labelled-by-heading",value:t,onChange:(i,a)=>r(a),children:p.map(({value:i,label:a})=>e(n,{value:i,label:a},i))}),p.map(({value:i,body:a})=>e(o,{idPrefix:"labelled-by",value:i,activeValue:t,children:e(s,{sx:{pt:2},children:a})},i))]})}},m={parameters:{docs:{description:{story:'`orientation="vertical"` stacks the tabs and moves the theme divider to the inline edge, so the bar reads as a rail beside its panel. Lay the bar and panels out with flex at the callsite — the DS positions neither.'}}},render:()=>{const[t,r]=c.useState("overview");return l(d,{sx:{display:"flex",width:560},children:[e(b,{idPrefix:"vertical-dataset","aria-label":"Dataset detail",orientation:"vertical",value:t,onChange:(i,a)=>r(a),sx:{minWidth:160},children:p.map(({value:i,label:a})=>e(n,{value:i,label:a},i))}),p.map(({value:i,body:a})=>e(o,{idPrefix:"vertical-dataset",value:i,activeValue:t,children:e(s,{sx:{pl:3},children:a})},i))]})}},v={parameters:{docs:{description:{story:'`variant="scrollable"` keeps the tabs on one line and scrolls them rather than wrapping, with `scrollButtons="auto"` showing the arrows only when there is overflow. Reach for it when the tab count is data-driven and you cannot bound it at design time.'}}},render:()=>{const t=["Global","Europe","North America","South America","Africa","Middle East","South Asia","East Asia","Oceania"],[r,i]=c.useState("Global");return l(d,{sx:{width:420},children:[e(b,{idPrefix:"regions","aria-label":"Coverage by region",value:r,onChange:(a,q)=>i(q),variant:"scrollable",scrollButtons:"auto",children:t.map(a=>e(n,{value:a,label:a},a))}),t.map(a=>e(o,{idPrefix:"regions",value:a,activeValue:r,children:l(s,{sx:{pt:2},children:[a," coverage."]})},a))]})}},T={parameters:{docs:{description:{story:'`icon` and `iconPosition` pass through to MUI untouched, so a tab can carry a DS icon beside its label. Paired here with `variant="fullWidth"`, which divides the container equally between a small, fixed set of tabs.'}}},render:()=>{const[t,r]=c.useState("map");return l(d,{sx:{width:400},children:[l(b,{idPrefix:"view","aria-label":"Result view",value:t,onChange:(i,a)=>r(a),variant:"fullWidth",children:[e(n,{value:"map",label:"Map",icon:e(U,{}),iconPosition:"start"}),e(n,{value:"table",label:"Table",icon:e(j,{}),iconPosition:"start"})]}),e(o,{idPrefix:"view",value:"map",activeValue:t,children:e(s,{sx:{pt:2},children:"Map view."})}),e(o,{idPrefix:"view",value:"table",activeValue:t,children:e(s,{sx:{pt:2},children:"Table view."})})]})}},y={parameters:{docs:{description:{story:"`keepMounted` holds a hidden panel's children in the tree, so typed input survives a tab switch. Type in the first panel, switch away and back."}}},render:()=>{const[t,r]=c.useState("draft");return l(d,{sx:{width:400},children:[l(b,{idPrefix:"editor","aria-label":"Editor",value:t,onChange:(i,a)=>r(a),children:[e(n,{value:"draft",label:"Draft"}),e(n,{value:"preview",label:"Preview"})]}),e(o,{idPrefix:"editor",value:"draft",activeValue:t,keepMounted:!0,children:e(d,{component:"textarea",defaultValue:"",rows:4,sx:{mt:2,width:"100%"}})}),e(o,{idPrefix:"editor",value:"preview",activeValue:t,children:e(s,{sx:{pt:2},children:"Rendered preview."})})]})}},g={parameters:{docs:{description:{story:"The pill treatment. Reach for it where the tab set is a compact control in a toolbar or beside a heading, rather than the page's primary navigation — the underlined default carries more weight and is the better choice for the latter."}}},render:()=>{const[t,r]=c.useState("overview");return l(d,{children:[l(b,{pill:!0,idPrefix:"pill-demo","aria-label":"Entity sections",value:t,onChange:(i,a)=>r(a),children:[e(n,{value:"overview",label:"Overview"}),e(n,{value:"similar",label:"Similar entities"}),e(n,{value:"grid",label:"Grid"}),e(n,{value:"documents",label:"Documents"})]}),e(o,{idPrefix:"pill-demo",value:"overview",activeValue:t,children:e(s,{children:"Overview panel"})}),e(o,{idPrefix:"pill-demo",value:"similar",activeValue:t,children:e(s,{children:"Similar entities panel"})}),e(o,{idPrefix:"pill-demo",value:"grid",activeValue:t,children:e(s,{children:"Grid panel"})}),e(o,{idPrefix:"pill-demo",value:"documents",activeValue:t,children:e(s,{children:"Documents panel"})})]})}};var x,f,w;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The shape every other story varies. One \`idPrefix\` on the \`Tabs\` and the same string on each \`TabPanel\` is the whole of the accessibility wiring — inspect a tab to see the derived \`id\` and \`aria-controls\`."
      }
    }
  },
  render: () => {
    const [tab, setTab] = useState<TabValue>("overview");
    return <Box sx={{
      width: 480
    }}>
        <Tabs idPrefix="dataset" aria-label="Dataset detail" value={tab} onChange={(_, next) => setTab(next)}>
          {PANELS.map(({
          value,
          label
        }) => <Tab key={value} value={value} label={label} />)}
        </Tabs>
        {PANELS.map(({
        value,
        body
      }) => <TabPanel key={value} idPrefix="dataset" value={value} activeValue={tab}>
            <Typography sx={{
          pt: 2
        }}>{body}</Typography>
          </TabPanel>)}
      </Box>;
  }
}`,...(w=(f=h.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var P,S,V;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The other half of the accessible-name union. When a visible heading already names the tab set, point \`aria-labelledby\` at it rather than repeating the text in an \`aria-label\` that can drift out of sync."
      }
    }
  },
  render: () => {
    const [tab, setTab] = useState<TabValue>("overview");
    return <Box sx={{
      width: 480
    }}>
        <Typography id="labelled-by-heading" variant="h6" sx={{
        mb: 1
      }}>
          Dataset detail
        </Typography>
        <Tabs idPrefix="labelled-by" aria-labelledby="labelled-by-heading" value={tab} onChange={(_, next) => setTab(next)}>
          {PANELS.map(({
          value,
          label
        }) => <Tab key={value} value={value} label={label} />)}
        </Tabs>
        {PANELS.map(({
        value,
        body
      }) => <TabPanel key={value} idPrefix="labelled-by" value={value} activeValue={tab}>
            <Typography sx={{
          pt: 2
        }}>{body}</Typography>
          </TabPanel>)}
      </Box>;
  }
}`,...(V=(S=u.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var D,A,k;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`orientation=\\"vertical\\"\` stacks the tabs and moves the theme divider to the inline edge, so the bar reads as a rail beside its panel. Lay the bar and panels out with flex at the callsite — the DS positions neither."
      }
    }
  },
  render: () => {
    const [tab, setTab] = useState<TabValue>("overview");
    return <Box sx={{
      display: "flex",
      width: 560
    }}>
        <Tabs idPrefix="vertical-dataset" aria-label="Dataset detail" orientation="vertical" value={tab} onChange={(_, next) => setTab(next)} sx={{
        minWidth: 160
      }}>
          {PANELS.map(({
          value,
          label
        }) => <Tab key={value} value={value} label={label} />)}
        </Tabs>
        {PANELS.map(({
        value,
        body
      }) => <TabPanel key={value} idPrefix="vertical-dataset" value={value} activeValue={tab}>
            <Typography sx={{
          pl: 3
        }}>{body}</Typography>
          </TabPanel>)}
      </Box>;
  }
}`,...(k=(A=m.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var M,E,B;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`variant="scrollable"\` keeps the tabs on one line and scrolls them rather than wrapping, with \`scrollButtons="auto"\` showing the arrows only when there is overflow. Reach for it when the tab count is data-driven and you cannot bound it at design time.'
      }
    }
  },
  render: () => {
    const REGIONS = ["Global", "Europe", "North America", "South America", "Africa", "Middle East", "South Asia", "East Asia", "Oceania"];
    const [tab, setTab] = useState<TabValue>("Global");
    return <Box sx={{
      width: 420
    }}>
        <Tabs idPrefix="regions" aria-label="Coverage by region" value={tab} onChange={(_, next) => setTab(next)} variant="scrollable" scrollButtons="auto">
          {REGIONS.map(region => <Tab key={region} value={region} label={region} />)}
        </Tabs>
        {REGIONS.map(region => <TabPanel key={region} idPrefix="regions" value={region} activeValue={tab}>
            <Typography sx={{
          pt: 2
        }}>{region} coverage.</Typography>
          </TabPanel>)}
      </Box>;
  }
}`,...(B=(E=v.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var I,C,R;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`icon\` and \`iconPosition\` pass through to MUI untouched, so a tab can carry a DS icon beside its label. Paired here with \`variant=\\"fullWidth\\"\`, which divides the container equally between a small, fixed set of tabs."
      }
    }
  },
  render: () => {
    const [tab, setTab] = useState<TabValue>("map");
    return <Box sx={{
      width: 400
    }}>
        <Tabs idPrefix="view" aria-label="Result view" value={tab} onChange={(_, next) => setTab(next)} variant="fullWidth">
          <Tab value="map" label="Map" icon={<MapIcon />} iconPosition="start" />
          <Tab value="table" label="Table" icon={<GridIcon />} iconPosition="start" />
        </Tabs>
        <TabPanel idPrefix="view" value="map" activeValue={tab}>
          <Typography sx={{
          pt: 2
        }}>Map view.</Typography>
        </TabPanel>
        <TabPanel idPrefix="view" value="table" activeValue={tab}>
          <Typography sx={{
          pt: 2
        }}>Table view.</Typography>
        </TabPanel>
      </Box>;
  }
}`,...(R=(C=T.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var N,O,W;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`keepMounted\` holds a hidden panel's children in the tree, so typed input survives a tab switch. Type in the first panel, switch away and back."
      }
    }
  },
  render: () => {
    const [tab, setTab] = useState<TabValue>("draft");
    return <Box sx={{
      width: 400
    }}>
        <Tabs idPrefix="editor" aria-label="Editor" value={tab} onChange={(_, next) => setTab(next)}>
          <Tab value="draft" label="Draft" />
          <Tab value="preview" label="Preview" />
        </Tabs>
        <TabPanel idPrefix="editor" value="draft" activeValue={tab} keepMounted>
          <Box component="textarea" defaultValue="" rows={4} sx={{
          mt: 2,
          width: "100%"
        }} />
        </TabPanel>
        <TabPanel idPrefix="editor" value="preview" activeValue={tab}>
          <Typography sx={{
          pt: 2
        }}>Rendered preview.</Typography>
        </TabPanel>
      </Box>;
  }
}`,...(W=(O=y.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var G,_,L;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The pill treatment. Reach for it where the tab set is a compact control in a toolbar or beside a heading, rather than the page's primary navigation — the underlined default carries more weight and is the better choice for the latter."
      }
    }
  },
  render: () => {
    const [tab, setTab] = useState<TabValue>("overview");
    return <Box>
        <Tabs pill idPrefix="pill-demo" aria-label="Entity sections" value={tab} onChange={(_, next: TabValue) => setTab(next)}>
          <Tab value="overview" label="Overview" />
          <Tab value="similar" label="Similar entities" />
          <Tab value="grid" label="Grid" />
          <Tab value="documents" label="Documents" />
        </Tabs>
        <TabPanel idPrefix="pill-demo" value="overview" activeValue={tab}>
          <Typography>Overview panel</Typography>
        </TabPanel>
        <TabPanel idPrefix="pill-demo" value="similar" activeValue={tab}>
          <Typography>Similar entities panel</Typography>
        </TabPanel>
        <TabPanel idPrefix="pill-demo" value="grid" activeValue={tab}>
          <Typography>Grid panel</Typography>
        </TabPanel>
        <TabPanel idPrefix="pill-demo" value="documents" activeValue={tab}>
          <Typography>Documents panel</Typography>
        </TabPanel>
      </Box>;
  }
}`,...(L=(_=g.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const fa=["Default","WithLabelledBy","Vertical","Scrollable","WithIcons","KeepMounted","Pill"];export{h as Default,y as KeepMounted,g as Pill,v as Scrollable,m as Vertical,T as WithIcons,u as WithLabelledBy,fa as __namedExportsOrder,xa as default};
