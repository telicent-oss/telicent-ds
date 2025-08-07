import{j as r}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{D as x}from"./DateTimePicker-B6bKRrji.js";import{r as T}from"./index-Dl6G-zuu.js";import{d as o}from"./AdapterDayjs-DuWp5629.js";import{B as f}from"./Box-BpjgVFAP.js";import"./jsx-runtime-DMAvRu52.js";import"./useThemeProps-D7jdKLbb.js";import"./defaultTheme-DzLjz-dB.js";import"./useThemeProps-BLCE57Tg.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./useTheme-Bb3Mws8A.js";import"./index-BfyspvgH.js";import"./styled-Bv4hMCY2.js";import"./generateUtilityClasses-UcMdw3-3.js";import"./ButtonBase-DQ5wMQUc.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-BbVSaS1S.js";import"./useTheme-BorXEO18.js";import"./Popover-BtZEiDAe.js";import"./utils-BgVWvv5k.js";import"./index-B0kOWIl9.js";import"./Paper-qM_AAhp8.js";import"./createSvgIcon-DsapHZbt.js";import"./SvgIcon-CUsqqB9A.js";import"./Typography-0bha627S.js";import"./Button-CfsaO-rc.js";import"./Divider-Cjysf9bk.js";import"./Menu-x1DlT4eR.js";import"./colorManipulator-BRx-aaGP.js";import"./IconButton-BOLdoQUj.js";import"./useId-CkA8naEk.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./createStyled-HgSNW-x4.js";import"./Chip-D8IxPV3x.js";const ae={title:"Inputs/DateTimePicker",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
A reusable date & time input built on MUI's \`<DateTimePicker>\`, themed and wrapped in a \`LocalizationProvider\` with \`dayjs\` for convenience.

---

### When & How to use it

Use this component when your UI needs to collect a **precise date and time**, such as scheduling, events, or time-based records.

No need to wrap in a \`LocalizationProvider\` — it's already handled internally.

---

#### ✅ Controlled usage

\`\`\`tsx
const [value, setValue] = useState(dayjs());

<DateTimePicker
  label="Start time"
  value={value}
  onChange={setValue}
/>
\`\`\`

#### ✅ With date-time limits

\`\`\`tsx
<DateTimePicker
  value={value}
  onChange={setValue}
  minDateTime={dayjs().startOf("day")}
  maxDateTime={dayjs().endOf("day")}
/>
\`\`\`
`}}},decorators:[e=>r(f,{sx:{maxWidth:320,mx:"auto"},children:e()})]},s=({...e})=>{const[y,D]=T.useState(o());return r(x,{value:y,onChange:D,...e})},t={render:e=>r(s,{...e}),args:{label:"Pick date & time"}},a={render:e=>r(s,{...e}),args:{label:"Restricted time range",minDateTime:o().startOf("day"),maxDateTime:o().add(2,"day").endOf("day"),helperText:"Only available within the next 48 hours"}},i={render:e=>r(s,{...e}),args:{label:"Required field",error:!0,helperText:"Date and time are required"}};var n,m,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <RenderDateTimePicker {...args} />,
  args: {
    label: "Pick date & time"
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <RenderDateTimePicker {...args} />,
  args: {
    label: "Restricted time range",
    minDateTime: dayjs().startOf("day"),
    maxDateTime: dayjs().add(2, "day").endOf("day"),
    helperText: "Only available within the next 48 hours"
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,h,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <RenderDateTimePicker {...args} />,
  args: {
    label: "Required field",
    error: true,
    helperText: "Date and time are required"
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const ie=["Default","WithMinMax","ErrorState"];export{t as Default,i as ErrorState,a as WithMinMax,ie as __namedExportsOrder,ae as default};
