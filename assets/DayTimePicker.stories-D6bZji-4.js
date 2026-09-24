import{a,r as f}from"./iframe-COFs_UtR.js";import{D as g}from"./DateTimePicker-D_pIcGw1.js";import{d as n}from"./AdapterDayjs-C5Ouz9-c.js";import{B as x}from"./Box-DSZohf0j.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-B3b-1bce.js";import"./useThemeProps-C1YLMFu1.js";import"./index-CLjgFykj.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DXI8L4mD.js";import"./extendSxProp-BfveVk5X.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-CdL6rHd2.js";import"./TransitionGroupContext-DualJ8j1.js";import"./useTheme-Br9ekNhD.js";import"./Popover-B7jPgFGm.js";import"./utils-CkqtT2AM.js";import"./index-VPMfSmH7.js";import"./Modal-D75gtkH-.js";import"./resolveComponentProps-HkkRA5J0.js";import"./Paper-B8rmAYsL.js";import"./createSvgIcon-C2hSwNby.js";import"./SvgIcon-Cu8kR4gr.js";import"./Typography-DDyWDEsv.js";import"./Button-zSX_KHde.js";import"./Divider-CEy0w4OC.js";import"./TextField-CbdZofsN.js";import"./useFormControl-CMXAxTns.js";import"./FormControl-CYTfQVUB.js";import"./useControlled-D1cEG3pG.js";import"./FormHelperText-pSG34NeB.js";import"./createStyled-btN_05Dm.js";import"./IconButton-CdDcys5a.js";import"./DialogContent-Bg1OWUuV.js";import"./Chip-BvLE5o4D.js";const re={title:"Inputs/DateTimePicker",component:g,tags:["autodocs"],parameters:{docs:{description:{component:`
A reusable date & time input built on MUI's \`<DateTimePicker>\`, themed and wrapped in a \`LocalizationProvider\` with \`dayjs\` for convenience.

---

### When & How to use it

Use this component when your UI needs to collect a **precise date and time**, such as scheduling, events, or time-based records.

No need to wrap in a \`LocalizationProvider\` — it's already handled internally.

---

#### Controlled usage example

\`\`\`tsx
import dayjs, { Dayjs } from "dayjs";

const [value, setValue] = useState(dayjs());

<DateTimePicker
  label="Start time"
  value={value}
  onChange={setValue}
/>
\`\`\`

`}}},decorators:[e=>a(x,{sx:{width:"100%",mx:"auto"},children:e()})]},o=({...e})=>{const[D,T]=f.useState(n());return a(g,{value:D,onChange:T,...e})},t={render:e=>a(o,{...e}),args:{label:"Pick date & time"}},r={render:e=>a(o,{...e}),args:{label:"Required field",error:!0,errorMsg:"Something went wrong",helperText:"Date and time are required"}},i={render:e=>a(o,{...e}),args:{label:"Restricted time range",minDateTime:n().startOf("day"),maxDateTime:n().add(2,"day").endOf("day"),helperText:"Only available within the next 48 hours"},parameters:{docs:{description:{story:`
You can use dayjs to dynamicaly restrict the date and time range. If you have specific date you can do that by passing a string \`dayjs('2025-08-07T08:00')\`
\`\`\`
<DateTimePicker
  value={value}
  onChange={setValue}
  label="Restricted time range"
  minDateTime={dayjs().startOf("day")}
  maxDateTime={dayjs().add(2, "day").endOf("day")}
  helperText="Only available within the next 48 hours"
/>
\`\`\`
`}}}};var s,d,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <RenderDateTimePicker {...args} />,
  args: {
    label: "Pick date & time"
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <RenderDateTimePicker {...args} />,
  args: {
    label: "Required field",
    error: true,
    errorMsg: "Something went wrong",
    helperText: "Date and time are required"
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,y,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <RenderDateTimePicker {...args} />,
  args: {
    label: "Restricted time range",
    minDateTime: dayjs().startOf("day"),
    maxDateTime: dayjs().add(2, "day").endOf("day"),
    helperText: "Only available within the next 48 hours"
  },
  parameters: {
    docs: {
      description: {
        story: \`
You can use dayjs to dynamicaly restrict the date and time range. If you have specific date you can do that by passing a string \\\`dayjs('2025-08-07T08:00')\\\`
\\\`\\\`\\\`
<DateTimePicker
  value={value}
  onChange={setValue}
  label="Restricted time range"
  minDateTime={dayjs().startOf("day")}
  maxDateTime={dayjs().add(2, "day").endOf("day")}
  helperText="Only available within the next 48 hours"
/>
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const ie=["Default","ErrorState","WithDateRestrictions"];export{t as Default,r as ErrorState,i as WithDateRestrictions,ie as __namedExportsOrder,re as default};
