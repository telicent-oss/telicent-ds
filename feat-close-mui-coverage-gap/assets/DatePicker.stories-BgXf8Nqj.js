import{a as t,r as x}from"./iframe-COFs_UtR.js";import{D as h}from"./DatePicker-DSnxmH6o.js";import{d as n}from"./AdapterDayjs-C5Ouz9-c.js";import{B as b}from"./Box-DSZohf0j.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-B3b-1bce.js";import"./useThemeProps-C1YLMFu1.js";import"./index-CLjgFykj.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DXI8L4mD.js";import"./extendSxProp-BfveVk5X.js";import"./Typography-DDyWDEsv.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./Modal-D75gtkH-.js";import"./utils-CkqtT2AM.js";import"./TransitionGroupContext-DualJ8j1.js";import"./index-VPMfSmH7.js";import"./resolveComponentProps-HkkRA5J0.js";import"./useTheme-Br9ekNhD.js";import"./Popover-B7jPgFGm.js";import"./Paper-B8rmAYsL.js";import"./TextField-CbdZofsN.js";import"./useFormControl-CMXAxTns.js";import"./FormControl-CYTfQVUB.js";import"./useControlled-D1cEG3pG.js";import"./createSvgIcon-C2hSwNby.js";import"./SvgIcon-Cu8kR4gr.js";import"./FormHelperText-pSG34NeB.js";import"./createStyled-btN_05Dm.js";import"./IconButton-CdDcys5a.js";import"./ButtonBase-CdL6rHd2.js";import"./DialogContent-Bg1OWUuV.js";import"./Button-zSX_KHde.js";import"./Chip-BvLE5o4D.js";const ae={title:"Inputs/DatePicker",component:h,tags:["autodocs"],parameters:{docs:{description:{component:`
A date-only input built on MUI's \`<DatePicker>\`, wrapped with our design-system styling and pre-configured with \`dayjs\` support.

---

The value is controlled when its parent manages it by providing a value prop.

### When & How to use it

Use this component when you need users to pick a **single calendar date**, with or without constraints. It is already wrapped in a \`LocalizationProvider\` internally, so no setup is needed.

#### Controlled usage example

\`\`\`tsx
import dayjs from "dayjs";

const [date, setDate] = useState(dayjs());

<DatePicker
  label="Start date"
  value={date}
  onChange={setDate}
/>
\`\`\`

`}}},decorators:[e=>t(b,{sx:{width:"100%",mx:"auto"},children:e()})]},o=({...e})=>{const[D,w]=x.useState(n());return t(h,{value:D,onChange:w,...e})},a={render:e=>t(o,{...e}),args:{label:"Pick a date"}},r={render:e=>t(o,{...e}),args:{label:"Required",errorMsg:"Oops, something went wrong with the validation",helperText:"Please select a valid date"}},s={render:e=>t(o,{...e}),args:{label:"Restricted range",minDate:n().subtract(5,"day"),maxDate:n().add(5,"day"),helperText:"You can only select dates within ±5 days"},parameters:{docs:{description:{story:`
You can use dayjs to dynamicaly restrict the date and time range. If you have specific date you can do that by passing a string \`dayjs('2025-08-07')\`
\`\`\`
<DatePicker
  value={value}
  onChange={setValue}
  label="Restricted time range"
  minDateTime={dayjs().subtract(5, "day")}
  maxDateTime={dayjs().add(5, "day")}
  helperText="You can only select dates within ±5 days"
/>
\`\`\`

`}}}};var i,d,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <RenderDatePicker {...args} />,
  args: {
    label: "Pick a date"
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <RenderDatePicker {...args} />,
  args: {
    label: "Required",
    errorMsg: "Oops, something went wrong with the validation",
    helperText: "Please select a valid date"
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,y,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <RenderDatePicker {...args} />,
  args: {
    label: "Restricted range",
    minDate: dayjs().subtract(5, "day"),
    maxDate: dayjs().add(5, "day"),
    helperText: "You can only select dates within ±5 days"
  },
  parameters: {
    docs: {
      description: {
        story: \`
You can use dayjs to dynamicaly restrict the date and time range. If you have specific date you can do that by passing a string \\\`dayjs('2025-08-07')\\\`
\\\`\\\`\\\`
<DatePicker
  value={value}
  onChange={setValue}
  label="Restricted time range"
  minDateTime={dayjs().subtract(5, "day")}
  maxDateTime={dayjs().add(5, "day")}
  helperText="You can only select dates within ±5 days"
/>
\\\`\\\`\\\`

\`
      }
    }
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const re=["Default","ErrorState","WithDateRestrictions"];export{a as Default,r as ErrorState,s as WithDateRestrictions,re as __namedExportsOrder,ae as default};
