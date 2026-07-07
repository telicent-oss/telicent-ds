import{j as a,r as f}from"./iframe-CYKKeyXc.js";import{D as g}from"./DateTimePicker-CUaoXgcA.js";import{d as i}from"./AdapterDayjs-LnHs1126.js";import{B as x}from"./Box-B5Idbuu2.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-nKkQeJ84.js";import"./useThemeProps-CSMSYrHE.js";import"./styled-DYVy4BQZ.js";import"./generateUtilityClasses-BddLF0YE.js";import"./ButtonBase-BY4v5x24.js";import"./TransitionGroupContext-BZlRwI3u.js";import"./useTheme-Clo7ftRJ.js";import"./TextField-BKgBwIu3.js";import"./useFormControl-e1pRvXOc.js";import"./Modal-B6zc8eMd.js";import"./utils-BTMGMaS4.js";import"./index-BOq1Y2DU.js";import"./Paper-mUQjj_jn.js";import"./createSvgIcon-BCA_qiKo.js";import"./Typography-BqCL54fa.js";import"./Button-BK6a-J9_.js";import"./Divider-CZT4G2av.js";import"./createStyled-BrwGJ6p7.js";import"./IconButton-CwWFg1EF.js";import"./DialogContent-DBkrQtLX.js";import"./Chip-BigX0SwN.js";const G={title:"Inputs/DateTimePicker",component:g,tags:["autodocs"],parameters:{docs:{description:{component:`
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

`}}},decorators:[e=>a(x,{sx:{width:"100%",mx:"auto"},children:e()})]},s=({...e})=>{const[D,T]=f.useState(i());return a(g,{value:D,onChange:T,...e})},t={render:e=>a(s,{...e}),args:{label:"Pick date & time"}},r={render:e=>a(s,{...e}),args:{label:"Required field",error:!0,errorMsg:"Something went wrong",helperText:"Date and time are required"}},n={render:e=>a(s,{...e}),args:{label:"Restricted time range",minDateTime:i().startOf("day"),maxDateTime:i().add(2,"day").endOf("day"),helperText:"Only available within the next 48 hours"},parameters:{docs:{description:{story:`
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
`}}}};var o,d,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <RenderDateTimePicker {...args} />,
  args: {
    label: "Pick date & time"
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <RenderDateTimePicker {...args} />,
  args: {
    label: "Required field",
    error: true,
    errorMsg: "Something went wrong",
    helperText: "Date and time are required"
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,y,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const J=["Default","ErrorState","WithDateRestrictions"];export{t as Default,r as ErrorState,n as WithDateRestrictions,J as __namedExportsOrder,G as default};
