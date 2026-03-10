import{j as i}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{S as R}from"./Switch-ht_R1eYr.js";import{r as W}from"./index-CTjT7uj6.js";import{f as v}from"./figmaDesign-CKKXRVNK.js";import{B as O}from"./Box-CRiiUqfG.js";import"./jsx-runtime-CB_V9I5Y.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./useFormControl-DPKvkoC5.js";import"./generateUtilityClasses-axRDXlOb.js";import"./ButtonBase-C9YLNer7.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./TransitionGroupContext-Bu81adgJ.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./Typography-NY1t2oJS.js";import"./Stack-C-VLTEnn.js";import"./styled-D52li5_j.js";import"./createStyled-MF3orRa4.js";import"./useThemeProps-BQrQzAVn.js";import"./useTheme-CZEWbKR4.js";const ae={title:"Inputs/Switch",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...v("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6071-28707&t=OvkaqgZRmhsF3DIW-4"),id:"switch-default",ariaLabel:"switch"},decorators:[e=>i(O,{sx:{margin:"auto"},children:e()})]},j=({...e})=>{const[I,L]=W.useState(!1);return i(R,{checked:I,onChange:U=>{L(U.target.checked)},id:"switch-demo",...e})},a={args:{checked:!0,id:"switch-default",onChange:()=>{}}},r={args:{checked:!1,id:"switch-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"switch-with-label",label:"Enable feature",onChange:()=>{}}},s={args:{checked:!1,id:"switch-required",label:"Required setting",required:!0,onChange:()=>{}}},n={args:{checked:!0,id:"switch-no-label",onChange:()=>{}}},o={render:e=>i(j,{...e}),args:{disabled:!1}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "switch-default",
    onChange: () => {}
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,m,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "switch-disabled",
    disabled: true,
    onChange: () => {}
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,u,w;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "switch-with-label",
    label: "Enable feature",
    onChange: () => {}
  }
}`,...(w=(u=t.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var f,b,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "switch-required",
    label: "Required setting",
    required: true,
    onChange: () => {}
  }
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,S,q;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "switch-no-label",
    onChange: () => {}
  }
}`,...(q=(S=n.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var x,D,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <RenderSwitch {...args} />,
  args: {
    disabled: false
  }
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const re=["Default","Disabled","WithLabel","Required","NoLabel","ExampleWithOnChange"];export{a as Default,r as Disabled,o as ExampleWithOnChange,n as NoLabel,s as Required,t as WithLabel,re as __namedExportsOrder,ae as default};
