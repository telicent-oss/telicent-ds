import{j as i}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{S as L}from"./Switch-hsriPZgu.js";import{r as y}from"./index-CTjT7uj6.js";import{B as I}from"./Box-CRiiUqfG.js";import"./jsx-runtime-CB_V9I5Y.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./useFormControl-DPKvkoC5.js";import"./generateUtilityClasses-axRDXlOb.js";import"./ButtonBase-C9YLNer7.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./TransitionGroupContext-Bu81adgJ.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./Typography-NY1t2oJS.js";import"./Stack-C-VLTEnn.js";import"./styled-D52li5_j.js";import"./createStyled-MF3orRa4.js";import"./useThemeProps-BQrQzAVn.js";import"./useTheme-CZEWbKR4.js";const $={title:"Inputs/Switch",component:L,tags:["autodocs"],parameters:{docs:{description:{component:`
A simple switch component built on Mui's \`<Switch>\` with our design-system theming and overrides. It supports the following use cases:

- **Controlled mode:** Pass \`checked\` and \`onChange\` to fully control the switch state.
- **Uncontrolled mode:** Use \`defaultChecked\` for the initial value and let the switch manage its own state.

---

### When & How to use it
- **Settings toggles:** Ideal for enabling/disabling settings or features.
- **Forms:** Use when the user needs to toggle a binary option.

\`\`\`jsx
<Switch
  checked={enabled}
  id="switch-demo"
  onChange={handleChange}
  label="Enable notifications"
/>
\`\`\`
`}},id:"switch-default",ariaLabel:"switch"},decorators:[e=>i(I,{sx:{margin:"auto"},children:e()})]},O=({...e})=>{const[W,D]=y.useState(!1);return i(L,{checked:W,onChange:j=>{D(j.target.checked)},id:"switch-demo",...e})},r={args:{checked:!0,id:"switch-default",onChange:()=>{}}},a={args:{checked:!1,id:"switch-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"switch-with-label",label:"Enable feature",onChange:()=>{}}},s={args:{checked:!1,id:"switch-required",label:"Required setting",required:!0,onChange:()=>{}}},n={args:{checked:!0,id:"switch-no-label",onChange:()=>{}}},o={render:e=>i(O,{...e}),args:{disabled:!1}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "switch-default",
    onChange: () => {}
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,m,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "switch-disabled",
    disabled: true,
    onChange: () => {}
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "switch-with-label",
    label: "Enable feature",
    onChange: () => {}
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,f,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "switch-required",
    label: "Required setting",
    required: true,
    onChange: () => {}
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,S,x;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "switch-no-label",
    onChange: () => {}
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var q,E,R;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <RenderSwitch {...args} />,
  args: {
    disabled: false
  }
}`,...(R=(E=o.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const ee=["Default","Disabled","WithLabel","Required","NoLabel","ExampleWithOnChange"];export{r as Default,a as Disabled,o as ExampleWithOnChange,n as NoLabel,s as Required,t as WithLabel,ee as __namedExportsOrder,$ as default};
