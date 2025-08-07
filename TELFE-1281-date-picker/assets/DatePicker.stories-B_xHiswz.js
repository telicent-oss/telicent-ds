import{j as t}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{D}from"./DatePicker-C_0vTJAs.js";import{r as P}from"./index-Dl6G-zuu.js";import{d as s}from"./AdapterDayjs-DuWp5629.js";import{B as k}from"./Box-BpjgVFAP.js";import"./jsx-runtime-DMAvRu52.js";import"./useThemeProps-D7jdKLbb.js";import"./defaultTheme-DzLjz-dB.js";import"./useThemeProps-BLCE57Tg.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./useTheme-Bb3Mws8A.js";import"./index-BfyspvgH.js";import"./styled-Bv4hMCY2.js";import"./Typography-0bha627S.js";import"./generateUtilityClasses-UcMdw3-3.js";import"./index-BbVSaS1S.js";import"./Popover-BtZEiDAe.js";import"./useTheme-BorXEO18.js";import"./utils-BgVWvv5k.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-B0kOWIl9.js";import"./Paper-qM_AAhp8.js";import"./ButtonBase-DQ5wMQUc.js";import"./colorManipulator-BRx-aaGP.js";import"./IconButton-BOLdoQUj.js";import"./useId-CkA8naEk.js";import"./createSvgIcon-DsapHZbt.js";import"./SvgIcon-CUsqqB9A.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./Menu-x1DlT4eR.js";import"./createStyled-HgSNW-x4.js";import"./Button-CfsaO-rc.js";import"./Chip-D8IxPV3x.js";const re={title:"Inputs/DatePicker",component:D,tags:["autodocs"],parameters:{docs:{description:{component:`
A date-only input built on MUI's \`<DatePicker>\`, wrapped with our design-system styling and pre-configured with \`dayjs\` support.

---

### When & How to use it

Use this component when you need users to pick a **single calendar date**, with or without constraints. It is already wrapped in a \`LocalizationProvider\` internally, so no setup is needed.

#### ✅ Controlled usage

\`\`\`tsx
const [date, setDate] = useState(dayjs());

<DatePicker
  label="Start date"
  value={date}
  onChange={setDate}
/>
\`\`\`

#### ✅ With date limits

\`\`\`tsx
<DatePicker
  value={date}
  onChange={setDate}
  minDate={dayjs().subtract(7, "day")}
  maxDate={dayjs().add(7, "day")}
/>
\`\`\`
`}}},decorators:[e=>t(k,{sx:{maxWidth:300,mx:"auto"},children:e()})]},i=({...e})=>{const[h,x]=P.useState(s());return t(D,{value:h,onChange:x,...e})},r={render:e=>t(i,{...e}),args:{label:"Pick a date"}},a={render:e=>t(i,{...e}),args:{label:"Restricted range",minDate:s().subtract(5,"day"),maxDate:s().add(5,"day"),helperText:"You can only select dates within ±5 days"}},o={render:e=>t(i,{...e}),args:{label:"Required",error:!0,helperText:"Please select a valid date"}};var n,d,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <RenderDatePicker {...args} />,
  args: {
    label: "Pick a date"
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,c,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <RenderDatePicker {...args} />,
  args: {
    label: "Restricted range",
    minDate: dayjs().subtract(5, "day"),
    maxDate: dayjs().add(5, "day"),
    helperText: "You can only select dates within ±5 days"
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <RenderDatePicker {...args} />,
  args: {
    label: "Required",
    error: true,
    helperText: "Please select a valid date"
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const ae=["Default","WithMinMax","ErrorState"];export{r as Default,o as ErrorState,a as WithMinMax,ae as __namedExportsOrder,re as default};
