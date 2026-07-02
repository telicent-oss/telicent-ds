import{j as i,r as W}from"./iframe-Crov0WQz.js";import{S as R}from"./Switch-B39EAJit.js";import{f as v}from"./figmaDesign-CKKXRVNK.js";import{B as O}from"./Box-BG0wW1Gw.js";import"./preload-helper-C1FmrZbK.js";import"./styled-Iiak7Ogq.js";import"./useFormControl-nQOCEbZr.js";import"./generateUtilityClasses-YSREvbxX.js";import"./ButtonBase-D84oecVH.js";import"./TransitionGroupContext-D_iDfzVR.js";import"./Typography-B9r5TGn1.js";import"./Stack-Bfojjyxu.js";import"./styled-CNP8R88q.js";import"./createStyled-BLdT8Qb_.js";import"./useThemeProps-ZmDRkbFp.js";const Q={title:"Inputs/Switch",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...v("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6071-28707&t=OvkaqgZRmhsF3DIW-4"),id:"switch-default",ariaLabel:"switch"},decorators:[e=>i(O,{sx:{margin:"auto"},children:e()})]},j=({...e})=>{const[I,L]=W.useState(!1);return i(R,{checked:I,onChange:U=>{L(U.target.checked)},id:"switch-demo",...e})},a={args:{checked:!0,id:"switch-default",onChange:()=>{}}},r={args:{checked:!1,id:"switch-disabled",disabled:!0,onChange:()=>{}}},s={args:{checked:!0,id:"switch-with-label",label:"Enable feature",onChange:()=>{}}},t={args:{checked:!1,id:"switch-required",label:"Required setting",required:!0,onChange:()=>{}}},n={args:{checked:!0,id:"switch-no-label",onChange:()=>{}}},o={render:e=>i(j,{...e}),args:{disabled:!1}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,p,w;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "switch-with-label",
    label: "Enable feature",
    onChange: () => {}
  }
}`,...(w=(p=s.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var b,f,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "switch-required",
    label: "Required setting",
    required: true,
    onChange: () => {}
  }
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,S,q;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const X=["Default","Disabled","WithLabel","Required","NoLabel","ExampleWithOnChange"];export{a as Default,r as Disabled,o as ExampleWithOnChange,n as NoLabel,t as Required,s as WithLabel,X as __namedExportsOrder,Q as default};
