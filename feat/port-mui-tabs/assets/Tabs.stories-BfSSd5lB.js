import{r as h,a as n,j as e}from"./iframe-2ae3jLtY.js";import{T as d,a as o,b as s}from"./DropdownButton-BpmbuP-W.js";import{M as k,G as A}from"./UserIcon-C9xuM1bb.js";import"./FlexBox-BAOPxaZ7.js";import"./Text-CtYPczsC.js";import"./Chip-BsvBzIp-.js";import"./Divider-M5RYGepX.js";import"./TreeView-DdTK-PUs.js";import"./AppInfoRow-B--uq7Sd.js";import{B as l}from"./Box-CxnaGThj.js";import{T as p}from"./Typography-CKX7xI1z.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-5tLqmsws.js";import"./useThemeProps-CjP8yKq7.js";import"./useTheme-D2IgbBvW.js";import"./AdapterDayjs-WX-3Svd1.js";import"./generateUtilityClass-DBJjU6LW.js";import"./styled-Cj2-Y3sw.js";import"./Modal-Ct5j1anh.js";import"./utils-BRBAF39N.js";import"./TransitionGroupContext-CBaIu8bW.js";import"./index-_aQ6azBP.js";import"./resolveComponentProps-Cd-xgkW-.js";import"./generateUtilityClasses-VYWBwYVV.js";import"./Popover-CVm97bWw.js";import"./Paper-D44EUSF6.js";import"./TextField-CtUdVhYe.js";import"./useFormControl-CedqS7-r.js";import"./createSvgIcon-CPbPJc4P.js";import"./SvgIcon-sVmN0tjE.js";import"./createStyled-BadfWLO8.js";import"./IconButton-DHZQ4I-9.js";import"./ButtonBase-BhlfSjKw.js";import"./DialogContent-QyBYExTq.js";import"./Button-w3dj99fq.js";import"./Chip-C9Sq19CS.js";import"./DateTimePicker-D7ooMU44.js";import"./Divider-Cb5TCzV-.js";import"./Stack-AhKTZxfl.js";import"./styled-BH3fMlC7.js";import"./Alert-DnPepOi0.js";import"./LinearProgress-CsGPtdNT.js";import"./Spinner-Ce4Lduox.js";import"./Dialog-zSVX8tBH.js";import"./MapToggleButtonPresentational-DEZRespE.js";import"./Remove-DUc8tOl9.js";import"./LinkButton-DFUlFy7Z.js";import"./Box-DcijUUVm.js";import"./Container-lpa-al36.js";import"./TextField-rZhfzkLQ.js";import"./Switch-B6fBRjkG.js";import"./DatePicker-DoQqJsHZ.js";import"./Paper-Cyq_1M7S.js";import"./ErrorFallback-DoY8WDiN.js";import"./ErrorFallbackText-D5Vin4ef.js";import"./ErrorFallbackWrapper-Bw7iQJps.js";import"./Brand-CpWuTQBH.js";import"./constants-DPt7sep6.js";import"./Edit-CdllxfNz.js";const Le={title:"Navigation/Tabs",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"\nTab navigation, wired for accessibility by the DS.\n\n`Tabs` and its `Tab` children share an **`idPrefix`**; each `Tab` derives\nits `id` and `aria-controls` from that prefix plus its own `value`, and each\n`TabPanel` derives the matching `id` and `aria-labelledby`. There is no\n`a11yProps` helper to copy and no id to type twice — repeat the same\n`idPrefix` on the panels and the wiring follows.\n\nDifferences from a hand-rolled MUI tab set:\n- An accessible name (`aria-label` or `aria-labelledby`) is required by the type.\n- `Tab` requires an explicit `value`; it is `string | number` because it lands in a DOM id.\n- Panels are tab stops (`tabIndex={0}`), per WAI-ARIA APG.\n- The divider under the tab bar comes from the theme, not an `sx` wrapper.\n- Padding inside a panel is yours to set — the DS has no opinion on it.\n        "}}}},v=[{value:"overview",label:"Overview",body:"Summary of the selected dataset."},{value:"schema",label:"Schema",body:"Fields, types, and cardinality."},{value:"lineage",label:"Lineage",body:"Upstream and downstream dependencies."}],c={render:()=>{const[r,i]=h.useState("overview");return n(l,{sx:{width:480},children:[e(d,{idPrefix:"dataset","aria-label":"Dataset detail",value:r,onChange:(a,t)=>i(t),children:v.map(({value:a,label:t})=>e(o,{value:a,label:t},a))}),v.map(({value:a,body:t})=>e(s,{idPrefix:"dataset",value:a,activeValue:r,children:e(p,{sx:{pt:2},children:t})},a))]})}},b={render:()=>{const[r,i]=h.useState("overview");return n(l,{sx:{display:"flex",width:560},children:[e(d,{idPrefix:"vertical-dataset","aria-label":"Dataset detail",orientation:"vertical",value:r,onChange:(a,t)=>i(t),sx:{minWidth:160},children:v.map(({value:a,label:t})=>e(o,{value:a,label:t},a))}),v.map(({value:a,body:t})=>e(s,{idPrefix:"vertical-dataset",value:a,activeValue:r,children:e(p,{sx:{pl:3},children:t})},a))]})}},m={render:()=>{const[r,i]=h.useState("map");return n(l,{sx:{width:400},children:[n(d,{idPrefix:"view","aria-label":"Result view",value:r,onChange:(a,t)=>i(t),variant:"fullWidth",children:[e(o,{value:"map",label:"Map",icon:e(k,{}),iconPosition:"start"}),e(o,{value:"table",label:"Table",icon:e(A,{}),iconPosition:"start"})]}),e(s,{idPrefix:"view",value:"map",activeValue:r,children:e(p,{sx:{pt:2},children:"Map view."})}),e(s,{idPrefix:"view",value:"table",activeValue:r,children:e(p,{sx:{pt:2},children:"Table view."})})]})}},u={parameters:{docs:{description:{story:"`keepMounted` holds a hidden panel's children in the tree, so typed input survives a tab switch. Type in the first panel, switch away and back."}}},render:()=>{const[r,i]=h.useState("draft");return n(l,{sx:{width:400},children:[n(d,{idPrefix:"editor","aria-label":"Editor",value:r,onChange:(a,t)=>i(t),children:[e(o,{value:"draft",label:"Draft"}),e(o,{value:"preview",label:"Preview"})]}),e(s,{idPrefix:"editor",value:"draft",activeValue:r,keepMounted:!0,children:e(l,{component:"textarea",defaultValue:"",rows:4,sx:{mt:2,width:"100%"}})}),e(s,{idPrefix:"editor",value:"preview",activeValue:r,children:e(p,{sx:{pt:2},children:"Rendered preview."})})]})}};var x,T,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(T=c.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var f,w,P;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(P=(w=b.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var g,S,V;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(V=(S=m.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var M,D,B;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(D=u.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const Ne=["Default","Vertical","WithIcons","KeepMounted"];export{c as Default,u as KeepMounted,b as Vertical,m as WithIcons,Ne as __namedExportsOrder,Le as default};
