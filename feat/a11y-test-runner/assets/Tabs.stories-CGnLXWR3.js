import{r as c,b as r,a}from"./iframe-EHiispHx.js";import{T as b,a as o,b as s}from"./DropdownButton-Ch2KHcVV.js";import{M as _,G}from"./ExpandLessIcon-jYjB0fJU.js";import"./CogIcon-BeV-4FUk.js";import"./InfoIcon-XACXhAsZ.js";import"./ExpandMoreIcon-BYRPKxhi.js";import"./ThemeSwitchRow-CWrDPQ4c.js";import"./Text-COeFgyG1.js";import"./Chip-E-lZUDs8.js";import"./Divider-B6qZ_hw9.js";import"./TreeView-CUJ68v5-.js";import"./AppInfoRow-C5_ggrgQ.js";import"./AppSettings-C2atzlyc.js";import"./SvgIcon-4pLSFCsg.js";import"./TableRow-B3CsX6Fd.js";import{B as d}from"./Box-BaAFlwfY.js";import{T as l}from"./Typography-u692F7Lr.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-D_CvADku.js";import"./AdapterDayjs-ByeICk9b.js";import"./index-BM8MsdEI.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BZtHjZ0T.js";import"./extendSxProp-ChdDfLiy.js";import"./useThemeProps-BfDwWLGL.js";import"./useThemeProps-BJ2283JF.js";import"./Modal-C84-Mwi0.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CRo6hKdF.js";import"./resolveComponentProps-DB8vWEuZ.js";import"./generateUtilityClasses-g9ufi11G.js";import"./index-D6HbG4uh.js";import"./utils-BR7uOJR9.js";import"./composeClasses-fLhin0tj.js";import"./Popover-CNEqh9b6.js";import"./Paper-D5wyd3V2.js";import"./TextField-Dzy82oKI.js";import"./useFormControl-DfdyR1E3.js";import"./FormControl-BrydlDY8.js";import"./ListContext-BlVgl-Pi.js";import"./useControlled-OJY6NH35.js";import"./createSvgIcon-B8I8xlXT.js";import"./SvgIcon-DoFYhYUo.js";import"./FormHelperText-C_cemKQ0.js";import"./createStyled-C1fbm1Mc.js";import"./IconButton-D6RFmtWs.js";import"./ButtonBase-R0TygaOg.js";import"./DialogContent-CSkG4AHB.js";import"./Button-d-YWvRHk.js";import"./Chip-bJ3IowVa.js";import"./MenuItem-B3aA4AXj.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-D3s7jMPT.js";import"./Box-C_PltGBT.js";import"./FlexBox-Brwmqgps.js";import"./Stack-BDiVPNv1.js";import"./styled-Dsi4lrKP.js";import"./useSlot-BwMdRg8G.js";import"./LinearProgress-D1Fz4RJ-.js";import"./Spinner-ByzkNUK0.js";import"./Dialog-Dkx34yy5.js";import"./MapToggleButtonPresentational-D-V7ixFF.js";import"./Remove-qKz_hbHL.js";import"./Alert-C6RVlPi4.js";import"./ToggleButton-AWyPEjYi.js";import"./LinkButton-BEGAfp3_.js";import"./Container--hMSSlEw.js";import"./TextField-BsHv7ljj.js";import"./Divider-Bj27IAqR.js";import"./Switch-B0Tv5QGv.js";import"./LabeledSwitch-BXMnIWFI.js";import"./DatePicker-CBY6xzyW.js";import"./DateTimePicker-B1l5MsHG.js";import"./FormControl-D_AEerrZ.js";import"./FormHelperText-pfF9X1Ya.js";import"./MenuItem-BPyYHvK7.js";import"./AccordionDetails-Cu0Lnfok.js";import"./Collapse-DwqZb05A.js";import"./Paper-Jsu15PNh.js";import"./ErrorFallback-Cwh2Uo6W.js";import"./ErrorFallbackText-CjRh0P2N.js";import"./ErrorFallbackWrapper-CQZHS6gC.js";import"./Brand-CXxdZUN_.js";import"./Edit-FsVyeYJ0.js";const va={title:"Navigation/Tabs",component:b,tags:["autodocs"],parameters:{docs:{description:{component:'\nTab navigation with the accessibility wiring derived rather than hand-rolled.\n\n`@mui/material` ships no `TabPanel` — mui.com hands every reader a `CustomTabPanel` component and an `a11yProps(index)` helper to copy into their own codebase. The DS ships the panel and derives all four id attributes from two strings.\n\n---\n\n### The opinion\n\n- **`idPrefix` replaces `a11yProps`.** `Tabs` shares it with its `Tab` children through a private context; each `Tab` derives its `id` and `aria-controls`, and each `TabPanel` derives the matching `id` and `aria-labelledby`. Repeat the same `idPrefix` on the panels and the wiring follows.\n- **An accessible name is required by the type.** Pass `aria-label` or `aria-labelledby`, exactly one. An unnamed tablist does not compile (ADR-0001).\n- **`Tab` requires an explicit `value`, narrowed to `string | number`.** MUI falls back to the child\'s index; the DS does not, because the value lands in a DOM id. An object value would stringify to `[object Object]` and give two panels the same id.\n- **`TabPanel` owns `hidden`.** The element renders in both states, so a tab\'s `aria-controls` always resolves to a real node. Only the children are conditional.\n- **A `Tab` outside `Tabs` throws.** `role="tab"` outside a `tablist` is invalid ARIA, and a silent fallback would ship a tab set that looks right and is unwired.\n\n---\n\n### Accessibility\n\nTwo facts — which tab set this is (`idPrefix`) and which tab this is (`value`) — determine four strings:\n\n| Element | Attribute | Derived value |\n| --- | --- | --- |\n| `Tab` | `id` | `{idPrefix}-tab-{value}` |\n| `Tab` | `aria-controls` | `{idPrefix}-panel-{value}` |\n| `TabPanel` | `id` | `{idPrefix}-panel-{value}` |\n| `TabPanel` | `aria-labelledby` | `{idPrefix}-tab-{value}` |\n\nPanels are tab stops (`tabIndex={0}`), per WAI-ARIA APG, so a keyboard user can reach a panel whose content holds no focusable element. mui.com\'s `CustomTabPanel` omits this.\n\nGive every tab set on a page its own `idPrefix` — two sets sharing one prefix produce duplicate ids.\n\n---\n\n### `Tab` and `TabPanel` props\n\nThe controls panel below describes `Tabs`. Its two companions:\n\n| Component | Prop | Type | Notes |\n| --- | --- | --- | --- |\n| `Tab` | `value` | `string | number` | Required, where MUI falls back to the child index. Narrowed because it becomes part of a DOM id. |\n| `TabPanel` | `idPrefix` | `string` | Matches the `idPrefix` on this group\'s `Tabs`. |\n| `TabPanel` | `value` | `string | number` | This panel\'s own value, paired with the `Tab` carrying the same one. |\n| `TabPanel` | `activeValue` | `string | number` | The tab set\'s selected value — the same state `Tabs` receives. |\n| `TabPanel` | `keepMounted` | `boolean` | Hold the children in the tree while hidden. Defaults to `false`. |\n\nEverything else on `Tab` passes through to MUI; `TabPanel` accepts any `div` attribute except `hidden`, which it owns.\n\n---\n\n### Defaults\n\n- `keepMounted`: `false` — an inactive panel\'s children unmount, so an unseen panel costs nothing.\n- **Divider**: the tab-bar border sits on `MuiTabs`\' root in `tabs-overrides.ts`, reading its colour from `theme.palette.divider` and moving to the inline edge when `orientation="vertical"`. No `<Box sx={{ borderBottom: 1 }}>` wrapper at the callsite.\n- **Panel padding**: none. Spacing between a panel and the surrounding layout belongs to the app, so the DS bakes in no value.\n\n---\n\n### Other supported features\n\nEverything else on MUI\'s `Tabs` and `Tab` passes through, and a callsite prop overrides a DS default because `{...props}` spreads last — `variant`, `orientation`, `centered`, `scrollButtons`, `icon` / `iconPosition`, and `disabled` behave as MUI documents them.\n\n`keepMounted` on a `TabPanel` holds its children in the tree while the panel is hidden, for panels carrying form state worth preserving across a switch.\n\n---\n\n### When & how to use it\n\n- **Peer views of one subject** — different lenses on the same dataset, where the user moves freely between them.\n- **Not for stepping through a sequence** — a wizard or stepper carries the ordering and progress that tabs do not.\n- **Not for routing between pages** — links in a nav are the right shape; tabs imply the content belongs to the view already on screen.\n- **The consumer holds `value`** — `Tabs` is controlled, and `TabPanel` reads the same state through `activeValue`.\n\n---\n\n### Example\n\n```tsx\nimport { Tabs, Tab, TabPanel, Text } from "@telicent-oss/ds";\nimport { useState } from "react";\n\nconst DatasetDetail = () => {\n  const [tab, setTab] = useState("overview");\n\n  return (\n    <>\n      <Tabs\n        idPrefix="dataset"\n        aria-label="Dataset detail"\n        value={tab}\n        onChange={(_, next) => setTab(next)}\n      >\n        <Tab value="overview" label="Overview" />\n        <Tab value="schema" label="Schema" />\n      </Tabs>\n\n      <TabPanel idPrefix="dataset" value="overview" activeValue={tab}>\n        <Text sx={{ pt: 2 }}>Summary of the selected dataset.</Text>\n      </TabPanel>\n      <TabPanel idPrefix="dataset" value="schema" activeValue={tab}>\n        <Text sx={{ pt: 2 }}>Fields, types, and cardinality.</Text>\n      </TabPanel>\n    </>\n  );\n};\n```\n        '}}},argTypes:{idPrefix:{control:"text",description:"Namespace for the derived `id` / `aria-controls` / `aria-labelledby` triple. Repeat the same value on this group's `TabPanel`s. Unique per tab set on the page.",table:{type:{summary:"string"},category:"Tabs (DS)"}},"aria-label":{control:"text",description:"The tablist's accessible name, as a literal string. Required unless `aria-labelledby` is given — the type is a union permitting exactly one (ADR-0001).",table:{type:{summary:"string"},category:"Tabs (DS)"}},"aria-labelledby":{control:"text",description:"Id of a visible element naming the tablist. Required unless `aria-label` is given. Prefer this when a heading already names the tab set.",table:{type:{summary:"string"},category:"Tabs (DS)"}},value:{control:!1,description:"The selected tab's `value`. Controlled — hold it in the consumer.",table:{type:{summary:"string | number"},category:"Tabs"}},onChange:{control:!1,description:"Fired with `(event, nextValue)` when a tab is selected.",table:{type:{summary:"(event: SyntheticEvent, value: TabValue) => void"},category:"Tabs"}},orientation:{control:"radio",options:["horizontal","vertical"],description:'Tab bar direction. `"vertical"` also moves the theme divider from the bottom edge to the inline edge.',table:{defaultValue:{summary:"horizontal"},category:"Tabs"}},variant:{control:"radio",options:["standard","scrollable","fullWidth"],description:'Width behaviour. `"scrollable"` keeps tabs on one line and scrolls; `"fullWidth"` divides the container equally.',table:{defaultValue:{summary:"standard"},category:"Tabs"}}}},p=[{value:"overview",label:"Overview",body:"Summary of the selected dataset."},{value:"schema",label:"Schema",body:"Fields, types, and cardinality."},{value:"lineage",label:"Lineage",body:"Upstream and downstream dependencies."}],h={parameters:{docs:{description:{story:"The shape every other story varies. One `idPrefix` on the `Tabs` and the same string on each `TabPanel` is the whole of the accessibility wiring — inspect a tab to see the derived `id` and `aria-controls`."}}},render:()=>{const[i,n]=c.useState("overview");return r(d,{sx:{width:480},children:[a(b,{idPrefix:"dataset","aria-label":"Dataset detail",value:i,onChange:(t,e)=>n(e),children:p.map(({value:t,label:e})=>a(o,{value:t,label:e},t))}),p.map(({value:t,body:e})=>a(s,{idPrefix:"dataset",value:t,activeValue:i,children:a(l,{sx:{pt:2},children:e})},t))]})}},u={parameters:{docs:{description:{story:"The other half of the accessible-name union. When a visible heading already names the tab set, point `aria-labelledby` at it rather than repeating the text in an `aria-label` that can drift out of sync."}}},render:()=>{const[i,n]=c.useState("overview");return r(d,{sx:{width:480},children:[a(l,{id:"labelled-by-heading",variant:"h6",sx:{mb:1},children:"Dataset detail"}),a(b,{idPrefix:"labelled-by","aria-labelledby":"labelled-by-heading",value:i,onChange:(t,e)=>n(e),children:p.map(({value:t,label:e})=>a(o,{value:t,label:e},t))}),p.map(({value:t,body:e})=>a(s,{idPrefix:"labelled-by",value:t,activeValue:i,children:a(l,{sx:{pt:2},children:e})},t))]})}},m={parameters:{docs:{description:{story:'`orientation="vertical"` stacks the tabs and moves the theme divider to the inline edge, so the bar reads as a rail beside its panel. Lay the bar and panels out with flex at the callsite — the DS positions neither.'}}},render:()=>{const[i,n]=c.useState("overview");return r(d,{sx:{display:"flex",width:560},children:[a(b,{idPrefix:"vertical-dataset","aria-label":"Dataset detail",orientation:"vertical",value:i,onChange:(t,e)=>n(e),sx:{minWidth:160},children:p.map(({value:t,label:e})=>a(o,{value:t,label:e},t))}),p.map(({value:t,body:e})=>a(s,{idPrefix:"vertical-dataset",value:t,activeValue:i,children:a(l,{sx:{pl:3},children:e})},t))]})}},v={parameters:{docs:{description:{story:'`variant="scrollable"` keeps the tabs on one line and scrolls them rather than wrapping, with `scrollButtons="auto"` showing the arrows only when there is overflow. Reach for it when the tab count is data-driven and you cannot bound it at design time.'}}},render:()=>{const i=["Global","Europe","North America","South America","Africa","Middle East","South Asia","East Asia","Oceania"],[n,t]=c.useState("Global");return r(d,{sx:{width:420},children:[a(b,{idPrefix:"regions","aria-label":"Coverage by region",value:n,onChange:(e,O)=>t(O),variant:"scrollable",scrollButtons:"auto",children:i.map(e=>a(o,{value:e,label:e},e))}),i.map(e=>a(s,{idPrefix:"regions",value:e,activeValue:n,children:r(l,{sx:{pt:2},children:[e," coverage."]})},e))]})}},T={parameters:{docs:{description:{story:'`icon` and `iconPosition` pass through to MUI untouched, so a tab can carry a DS icon beside its label. Paired here with `variant="fullWidth"`, which divides the container equally between a small, fixed set of tabs.'}}},render:()=>{const[i,n]=c.useState("map");return r(d,{sx:{width:400},children:[r(b,{idPrefix:"view","aria-label":"Result view",value:i,onChange:(t,e)=>n(e),variant:"fullWidth",children:[a(o,{value:"map",label:"Map",icon:a(_,{}),iconPosition:"start"}),a(o,{value:"table",label:"Table",icon:a(G,{}),iconPosition:"start"})]}),a(s,{idPrefix:"view",value:"map",activeValue:i,children:a(l,{sx:{pt:2},children:"Map view."})}),a(s,{idPrefix:"view",value:"table",activeValue:i,children:a(l,{sx:{pt:2},children:"Table view."})})]})}},y={parameters:{docs:{description:{story:"`keepMounted` holds a hidden panel's children in the tree, so typed input survives a tab switch. Type in the first panel, switch away and back."}}},render:()=>{const[i,n]=c.useState("draft");return r(d,{sx:{width:400},children:[r(b,{idPrefix:"editor","aria-label":"Editor",value:i,onChange:(t,e)=>n(e),children:[a(o,{value:"draft",label:"Draft"}),a(o,{value:"preview",label:"Preview"})]}),a(s,{idPrefix:"editor",value:"draft",activeValue:i,keepMounted:!0,children:a(d,{component:"textarea",defaultValue:"",rows:4,sx:{mt:2,width:"100%"}})}),a(s,{idPrefix:"editor",value:"preview",activeValue:i,children:a(l,{sx:{pt:2},children:"Rendered preview."})})]})}};var x,g,f;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(g=h.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,P,S;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(W=(R=y.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const Ta=["Default","WithLabelledBy","Vertical","Scrollable","WithIcons","KeepMounted"];export{h as Default,y as KeepMounted,v as Scrollable,m as Vertical,T as WithIcons,u as WithLabelledBy,Ta as __namedExportsOrder,va as default};
