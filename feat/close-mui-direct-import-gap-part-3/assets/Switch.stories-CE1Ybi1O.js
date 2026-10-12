import{a as i,r as W}from"./iframe-aFe7UUBz.js";import{S as R}from"./Switch-4P0ZX1Dh.js";import{f as v}from"./figmaDesign-CKKXRVNK.js";import{B as O}from"./Box-C4GBjpR7.js";import"./preload-helper-C1FmrZbK.js";import"./Switch-CYakBrxK.js";import"./generateUtilityClass-DYVh7KgR.js";import"./FormControlLabel-AQIEhTjn.js";import"./styled-BisXqFak.js";import"./extendSxProp-Cg1_Zgz3.js";import"./useFormControl-BWvbFyMh.js";import"./generateUtilityClasses-g9ufi11G.js";import"./useControlled-DSueLwQ1.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase--L73nkrK.js";import"./TransitionGroupContext-CzKtgD_a.js";import"./Typography-BW_wQ-ow.js";import"./Stack-DONLWdUd.js";import"./styled-pNRJu87k.js";import"./createStyled-BGui5uB2.js";import"./useThemeProps-wiEASLar.js";const re={title:"Inputs/Switch",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...v("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6071-28707&t=OvkaqgZRmhsF3DIW-4"),id:"switch-default",ariaLabel:"switch"},decorators:[e=>i(O,{sx:{margin:"auto"},children:e()})]},y=({...e})=>{const[I,L]=W.useState(!1);return i(R,{checked:I,onChange:U=>{L(U.target.checked)},id:"switch-demo",...e})},a={args:{checked:!0,id:"switch-default",onChange:()=>{}}},r={args:{checked:!1,id:"switch-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"switch-with-label",label:"Enable feature",onChange:()=>{}}},s={args:{checked:!1,id:"switch-required",label:"Required setting",required:!0,onChange:()=>{}}},n={args:{checked:!0,id:"switch-no-label",onChange:()=>{}}},o={render:e=>i(y,{...e}),args:{disabled:!1}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "switch-default",
    onChange: () => {}
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,m,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "switch-disabled",
    disabled: true,
    onChange: () => {}
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,w;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "switch-with-label",
    label: "Enable feature",
    onChange: () => {}
  }
}`,...(w=(u=t.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var b,f,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "switch-required",
    label: "Required setting",
    required: true,
    onChange: () => {}
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,S,q;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const te=["Default","Disabled","WithLabel","Required","NoLabel","ExampleWithOnChange"];export{a as Default,r as Disabled,o as ExampleWithOnChange,n as NoLabel,s as Required,t as WithLabel,te as __namedExportsOrder,re as default};
