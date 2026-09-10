import{r as h,a as r,j as a}from"./iframe-Ce2OCE46.js";import{T as b,a as s,b as o}from"./DropdownButton-BZeAU0hR.js";import{M as _,G}from"./UserIcon-BeBbW4ae.js";import"./FlexBox-QXmAoGfV.js";import"./Text-iWgBtTEF.js";import"./Chip-D2Ptw4F5.js";import"./Divider-BydDTYUN.js";import"./TreeView-B4RWPXCG.js";import"./AppInfoRow-iVaYeCli.js";import{B as d}from"./Box-DPN8iDtX.js";import{T as l}from"./Typography-wgrPajcY.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DnGJj7RI.js";import"./useThemeProps-iW1JeY1q.js";import"./useTheme-CLM2GVtV.js";import"./AdapterDayjs-C4Mp3q20.js";import"./generateUtilityClass-Dpfkq2Nk.js";import"./styled-DG4DTdgR.js";import"./Modal-QVS8IAeT.js";import"./utils-DCsrA1oL.js";import"./TransitionGroupContext-B68BF-iQ.js";import"./index-CxlNYX3Y.js";import"./resolveComponentProps-DSEEQlqm.js";import"./generateUtilityClasses-XCYs_VDx.js";import"./Popover-Dt_6Onsk.js";import"./Paper-afLuPYhe.js";import"./TextField-Doc_CKDt.js";import"./useFormControl-D3zcrAfb.js";import"./createSvgIcon-CR2ME6BQ.js";import"./SvgIcon-1ianXB1D.js";import"./createStyled-C5CYLvYR.js";import"./IconButton-BTekjOnP.js";import"./ButtonBase-xU-UolfF.js";import"./DialogContent-DJkb6jt4.js";import"./Button-Cy1pOnfQ.js";import"./Chip-DrR5OuDg.js";import"./DateTimePicker-Ki4uwXEw.js";import"./Divider-DXzVK-0q.js";import"./Stack-9i_ZvuDA.js";import"./styled-B5NIKwPN.js";import"./Alert-DL7N4iSe.js";import"./LinearProgress-C2y7bs6L.js";import"./Spinner-Baj4KosW.js";import"./Dialog-DNWScIyV.js";import"./MapToggleButtonPresentational-DHVSXtub.js";import"./Remove-D6Util3l.js";import"./LinkButton-CGtVXD2M.js";import"./Box-BOtHEcpc.js";import"./Container-bE4ocZr9.js";import"./TextField-DHJTJtHu.js";import"./Switch-DK_hgLX1.js";import"./DatePicker-DU4_X1Kg.js";import"./Paper-dwBSwh0G.js";import"./ErrorFallback-DcjVRdtL.js";import"./ErrorFallbackText-C2I-OeKi.js";import"./ErrorFallbackWrapper-DpFlGNMA.js";import"./Brand-BDH5l_wz.js";import"./constants-DI5LickN.js";import"./Edit-DmBLMWan.js";const Fe={title:"Navigation/Tabs",component:b,tags:["autodocs"],parameters:{docs:{description:{component:'\nTab navigation with the accessibility wiring derived rather than hand-rolled.\n\n`@mui/material` ships no `TabPanel` — mui.com hands every reader a `CustomTabPanel` component and an `a11yProps(index)` helper to copy into their own codebase. The DS ships the panel and derives all four id attributes from two strings.\n\n---\n\n### The opinion\n\n- **`idPrefix` replaces `a11yProps`.** `Tabs` shares it with its `Tab` children through a private context; each `Tab` derives its `id` and `aria-controls`, and each `TabPanel` derives the matching `id` and `aria-labelledby`. Repeat the same `idPrefix` on the panels and the wiring follows.\n- **An accessible name is required by the type.** Pass `aria-label` or `aria-labelledby`, exactly one. An unnamed tablist does not compile (ADR-0001).\n- **`Tab` requires an explicit `value`, narrowed to `string | number`.** MUI falls back to the child\'s index; the DS does not, because the value lands in a DOM id. An object value would stringify to `[object Object]` and give two panels the same id.\n- **`TabPanel` owns `hidden`.** The element renders in both states, so a tab\'s `aria-controls` always resolves to a real node. Only the children are conditional.\n- **A `Tab` outside `Tabs` throws.** `role="tab"` outside a `tablist` is invalid ARIA, and a silent fallback would ship a tab set that looks right and is unwired.\n\n---\n\n### Accessibility\n\nTwo facts — which tab set this is (`idPrefix`) and which tab this is (`value`) — determine four strings:\n\n| Element | Attribute | Derived value |\n| --- | --- | --- |\n| `Tab` | `id` | `{idPrefix}-tab-{value}` |\n| `Tab` | `aria-controls` | `{idPrefix}-panel-{value}` |\n| `TabPanel` | `id` | `{idPrefix}-panel-{value}` |\n| `TabPanel` | `aria-labelledby` | `{idPrefix}-tab-{value}` |\n\nPanels are tab stops (`tabIndex={0}`), per WAI-ARIA APG, so a keyboard user can reach a panel whose content holds no focusable element. mui.com\'s `CustomTabPanel` omits this.\n\nGive every tab set on a page its own `idPrefix` — two sets sharing one prefix produce duplicate ids.\n\n---\n\n### `Tab` and `TabPanel` props\n\nThe controls panel below describes `Tabs`. Its two companions:\n\n| Component | Prop | Type | Notes |\n| --- | --- | --- | --- |\n| `Tab` | `value` | `string | number` | Required, where MUI falls back to the child index. Narrowed because it becomes part of a DOM id. |\n| `TabPanel` | `idPrefix` | `string` | Matches the `idPrefix` on this group\'s `Tabs`. |\n| `TabPanel` | `value` | `string | number` | This panel\'s own value, paired with the `Tab` carrying the same one. |\n| `TabPanel` | `activeValue` | `string | number` | The tab set\'s selected value — the same state `Tabs` receives. |\n| `TabPanel` | `keepMounted` | `boolean` | Hold the children in the tree while hidden. Defaults to `false`. |\n\nEverything else on `Tab` passes through to MUI; `TabPanel` accepts any `div` attribute except `hidden`, which it owns.\n\n---\n\n### Defaults\n\n- `keepMounted`: `false` — an inactive panel\'s children unmount, so an unseen panel costs nothing.\n- **Divider**: the tab-bar border sits on `MuiTabs`\' root in `tabs-overrides.ts`, reading its colour from `theme.palette.divider` and moving to the inline edge when `orientation="vertical"`. No `<Box sx={{ borderBottom: 1 }}>` wrapper at the callsite.\n- **Panel padding**: none. Spacing between a panel and the surrounding layout belongs to the app, so the DS bakes in no value.\n\n---\n\n### Other supported features\n\nEverything else on MUI\'s `Tabs` and `Tab` passes through, and a callsite prop overrides a DS default because `{...props}` spreads last — `variant`, `orientation`, `centered`, `scrollButtons`, `icon` / `iconPosition`, and `disabled` behave as MUI documents them.\n\n`keepMounted` on a `TabPanel` holds its children in the tree while the panel is hidden, for panels carrying form state worth preserving across a switch.\n\n---\n\n### When & how to use it\n\n- **Peer views of one subject** — different lenses on the same dataset, where the user moves freely between them.\n- **Not for stepping through a sequence** — a wizard or stepper carries the ordering and progress that tabs do not.\n- **Not for routing between pages** — links in a nav are the right shape; tabs imply the content belongs to the view already on screen.\n- **The consumer holds `value`** — `Tabs` is controlled, and `TabPanel` reads the same state through `activeValue`.\n\n---\n\n### Example\n\n```tsx\nimport { Tabs, Tab, TabPanel, Text } from "@telicent-oss/ds";\nimport { useState } from "react";\n\nconst DatasetDetail = () => {\n  const [tab, setTab] = useState("overview");\n\n  return (\n    <>\n      <Tabs\n        idPrefix="dataset"\n        aria-label="Dataset detail"\n        value={tab}\n        onChange={(_, next) => setTab(next)}\n      >\n        <Tab value="overview" label="Overview" />\n        <Tab value="schema" label="Schema" />\n      </Tabs>\n\n      <TabPanel idPrefix="dataset" value="overview" activeValue={tab}>\n        <Text sx={{ pt: 2 }}>Summary of the selected dataset.</Text>\n      </TabPanel>\n      <TabPanel idPrefix="dataset" value="schema" activeValue={tab}>\n        <Text sx={{ pt: 2 }}>Fields, types, and cardinality.</Text>\n      </TabPanel>\n    </>\n  );\n};\n```\n        '}}},argTypes:{idPrefix:{control:"text",description:"Namespace for the derived `id` / `aria-controls` / `aria-labelledby` triple. Repeat the same value on this group's `TabPanel`s. Unique per tab set on the page.",table:{type:{summary:"string"},category:"Tabs (DS)"}},"aria-label":{control:"text",description:"The tablist's accessible name, as a literal string. Required unless `aria-labelledby` is given — the type is a union permitting exactly one (ADR-0001).",table:{type:{summary:"string"},category:"Tabs (DS)"}},"aria-labelledby":{control:"text",description:"Id of a visible element naming the tablist. Required unless `aria-label` is given. Prefer this when a heading already names the tab set.",table:{type:{summary:"string"},category:"Tabs (DS)"}},value:{control:!1,description:"The selected tab's `value`. Controlled — hold it in the consumer.",table:{type:{summary:"string | number"},category:"Tabs"}},onChange:{control:!1,description:"Fired with `(event, nextValue)` when a tab is selected.",table:{type:{summary:"(event: SyntheticEvent, value: TabValue) => void"},category:"Tabs"}},orientation:{control:"radio",options:["horizontal","vertical"],description:'Tab bar direction. `"vertical"` also moves the theme divider from the bottom edge to the inline edge.',table:{defaultValue:{summary:"horizontal"},category:"Tabs"}},variant:{control:"radio",options:["standard","scrollable","fullWidth"],description:'Width behaviour. `"scrollable"` keeps tabs on one line and scrolls; `"fullWidth"` divides the container equally.',table:{defaultValue:{summary:"standard"},category:"Tabs"}}}},c=[{value:"overview",label:"Overview",body:"Summary of the selected dataset."},{value:"schema",label:"Schema",body:"Fields, types, and cardinality."},{value:"lineage",label:"Lineage",body:"Upstream and downstream dependencies."}],p={parameters:{docs:{description:{story:"The shape every other story varies. One `idPrefix` on the `Tabs` and the same string on each `TabPanel` is the whole of the accessibility wiring — inspect a tab to see the derived `id` and `aria-controls`."}}},render:()=>{const[n,i]=h.useState("overview");return r(d,{sx:{width:480},children:[a(b,{idPrefix:"dataset","aria-label":"Dataset detail",value:n,onChange:(t,e)=>i(e),children:c.map(({value:t,label:e})=>a(s,{value:t,label:e},t))}),c.map(({value:t,body:e})=>a(o,{idPrefix:"dataset",value:t,activeValue:n,children:a(l,{sx:{pt:2},children:e})},t))]})}},u={parameters:{docs:{description:{story:"The other half of the accessible-name union. When a visible heading already names the tab set, point `aria-labelledby` at it rather than repeating the text in an `aria-label` that can drift out of sync."}}},render:()=>{const[n,i]=h.useState("overview");return r(d,{sx:{width:480},children:[a(l,{id:"labelled-by-heading",variant:"h6",sx:{mb:1},children:"Dataset detail"}),a(b,{idPrefix:"labelled-by","aria-labelledby":"labelled-by-heading",value:n,onChange:(t,e)=>i(e),children:c.map(({value:t,label:e})=>a(s,{value:t,label:e},t))}),c.map(({value:t,body:e})=>a(o,{idPrefix:"labelled-by",value:t,activeValue:n,children:a(l,{sx:{pt:2},children:e})},t))]})}},m={parameters:{docs:{description:{story:'`orientation="vertical"` stacks the tabs and moves the theme divider to the inline edge, so the bar reads as a rail beside its panel. Lay the bar and panels out with flex at the callsite — the DS positions neither.'}}},render:()=>{const[n,i]=h.useState("overview");return r(d,{sx:{display:"flex",width:560},children:[a(b,{idPrefix:"vertical-dataset","aria-label":"Dataset detail",orientation:"vertical",value:n,onChange:(t,e)=>i(e),sx:{minWidth:160},children:c.map(({value:t,label:e})=>a(s,{value:t,label:e},t))}),c.map(({value:t,body:e})=>a(o,{idPrefix:"vertical-dataset",value:t,activeValue:n,children:a(l,{sx:{pl:3},children:e})},t))]})}},v={parameters:{docs:{description:{story:'`variant="scrollable"` keeps the tabs on one line and scrolls them rather than wrapping, with `scrollButtons="auto"` showing the arrows only when there is overflow. Reach for it when the tab count is data-driven and you cannot bound it at design time.'}}},render:()=>{const n=["Global","Europe","North America","South America","Africa","Middle East","South Asia","East Asia","Oceania"],[i,t]=h.useState("Global");return r(d,{sx:{width:420},children:[a(b,{idPrefix:"regions","aria-label":"Coverage by region",value:i,onChange:(e,O)=>t(O),variant:"scrollable",scrollButtons:"auto",children:n.map(e=>a(s,{value:e,label:e},e))}),n.map(e=>a(o,{idPrefix:"regions",value:e,activeValue:i,children:r(l,{sx:{pt:2},children:[e," coverage."]})},e))]})}},T={parameters:{docs:{description:{story:'`icon` and `iconPosition` pass through to MUI untouched, so a tab can carry a DS icon beside its label. Paired here with `variant="fullWidth"`, which divides the container equally between a small, fixed set of tabs.'}}},render:()=>{const[n,i]=h.useState("map");return r(d,{sx:{width:400},children:[r(b,{idPrefix:"view","aria-label":"Result view",value:n,onChange:(t,e)=>i(e),variant:"fullWidth",children:[a(s,{value:"map",label:"Map",icon:a(_,{}),iconPosition:"start"}),a(s,{value:"table",label:"Table",icon:a(G,{}),iconPosition:"start"})]}),a(o,{idPrefix:"view",value:"map",activeValue:n,children:a(l,{sx:{pt:2},children:"Map view."})}),a(o,{idPrefix:"view",value:"table",activeValue:n,children:a(l,{sx:{pt:2},children:"Table view."})})]})}},y={parameters:{docs:{description:{story:"`keepMounted` holds a hidden panel's children in the tree, so typed input survives a tab switch. Type in the first panel, switch away and back."}}},render:()=>{const[n,i]=h.useState("draft");return r(d,{sx:{width:400},children:[r(b,{idPrefix:"editor","aria-label":"Editor",value:n,onChange:(t,e)=>i(e),children:[a(s,{value:"draft",label:"Draft"}),a(s,{value:"preview",label:"Preview"})]}),a(o,{idPrefix:"editor",value:"draft",activeValue:n,keepMounted:!0,children:a(d,{component:"textarea",defaultValue:"",rows:4,sx:{mt:2,width:"100%"}})}),a(o,{idPrefix:"editor",value:"preview",activeValue:n,children:a(l,{sx:{pt:2},children:"Rendered preview."})})]})}};var x,g,f;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(g=p.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,P,S;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(P=u.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var V,D,A;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(D=m.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var k,M,E;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(M=v.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var B,I,C;T.parameters={...T.parameters,docs:{...(B=T.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(I=T.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var N,R,W;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(W=(R=y.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const Ke=["Default","WithLabelledBy","Vertical","Scrollable","WithIcons","KeepMounted"];export{p as Default,y as KeepMounted,v as Scrollable,m as Vertical,T as WithIcons,u as WithLabelledBy,Ke as __namedExportsOrder,Fe as default};
