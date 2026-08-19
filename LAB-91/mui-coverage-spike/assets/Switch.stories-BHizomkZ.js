import{j as i,r as W}from"./iframe-DMZf_z8l.js";import{S as R}from"./Switch-BQB_GfyU.js";import{f as v}from"./figmaDesign-CKKXRVNK.js";import{B as O}from"./Box-XIzbJh1C.js";import"./preload-helper-C1FmrZbK.js";import"./Switch-DxARBW3E.js";import"./generateUtilityClass-CywfVb3a.js";import"./SwitchBase-YxaFrIa4.js";import"./styled-BhjXjSTi.js";import"./useFormControl-CLapPuwA.js";import"./generateUtilityClasses-E8kj8mkK.js";import"./useControlled-DmhfUatr.js";import"./ButtonBase-CaB-e0eH.js";import"./useTimeout-Dp-kS1kI.js";import"./TransitionGroupContext-DfY19jQi.js";import"./useForkRef-grDcQant.js";import"./useIsFocusVisible-DqWR0OJa.js";import"./useEventCallback-DqnP5vMh.js";import"./FormControlLabel-DRU7CgXY.js";import"./formControlState-Dq1zat_P.js";import"./Typography-Dihg_BSw.js";import"./Stack-Dzo5snOq.js";import"./styled-D0RxRnUW.js";import"./createStyled-CZZlTSAv.js";import"./useThemeProps-DjMRGlTh.js";const ne={title:"Inputs/Switch",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...v("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6071-28707&t=OvkaqgZRmhsF3DIW-4"),id:"switch-default",ariaLabel:"switch"},decorators:[e=>i(O,{sx:{margin:"auto"},children:e()})]},j=({...e})=>{const[I,L]=W.useState(!1);return i(R,{checked:I,onChange:U=>{L(U.target.checked)},id:"switch-demo",...e})},r={args:{checked:!0,id:"switch-default",onChange:()=>{}}},a={args:{checked:!1,id:"switch-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"switch-with-label",label:"Enable feature",onChange:()=>{}}},s={args:{checked:!1,id:"switch-required",label:"Required setting",required:!0,onChange:()=>{}}},o={args:{checked:!0,id:"switch-no-label",onChange:()=>{}}},n={render:e=>i(j,{...e}),args:{disabled:!1}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "switch-default",
    onChange: () => {}
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,m,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "switch-disabled",
    disabled: true,
    onChange: () => {}
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,w;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,S,q;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "switch-no-label",
    onChange: () => {}
  }
}`,...(q=(S=o.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var x,D,E;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <RenderSwitch {...args} />,
  args: {
    disabled: false
  }
}`,...(E=(D=n.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const ie=["Default","Disabled","WithLabel","Required","NoLabel","ExampleWithOnChange"];export{r as Default,a as Disabled,n as ExampleWithOnChange,o as NoLabel,s as Required,t as WithLabel,ie as __namedExportsOrder,ne as default};
