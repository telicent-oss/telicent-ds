import{j as c,r as y}from"./iframe-CXSK8Dk-.js";import{c as D}from"./DropdownButton-vWLux3xG.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-CN1tfwJW.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DfXchAa_.js";import"./SvgIcon-CwlR4LV8.js";import"./generateUtilityClass-Fzt3JCAB.js";import"./styled-DtvgUq6a.js";import"./generateUtilityClasses-Bj4Ss80x.js";import"./useTheme-BKykcnyZ.js";import"./Box-PoQ7y_F9.js";import"./Container-BYH1eQOO.js";import"./styled-hp6s30PY.js";import"./createStyled-jo3qW0uY.js";import"./useThemeProps-CkYUtoJ-.js";import"./FlexBox-aDkc32O8.js";import"./Stack-DTT6iyaf.js";import"./Typography-_WXcuVAU.js";import"./Paper-CCY0nncl.js";import"./useThemeProps-BBCRbUjf.js";import"./Text-BMxl2SwS.js";import"./AdapterDayjs-DBeZyuIU.js";import"./Modal-C6fXv4Zz.js";import"./utils-BP8_ys-M.js";import"./TransitionGroupContext-CIYUs1Uk.js";import"./index-BH3lY3kJ.js";import"./resolveComponentProps-B-UI_umu.js";import"./Popover-Dbdn6-R4.js";import"./TextField-CsymqzzJ.js";import"./useFormControl-8AnV7jcl.js";import"./createSvgIcon-B4OWaiSw.js";import"./IconButton-CH8TE1o1.js";import"./ButtonBase-CyMDbepC.js";import"./DialogContent-CPmdNXcl.js";import"./Button-OtEdq2P_.js";import"./Chip-DpWSlKGB.js";import"./DateTimePicker-CuvapaAa.js";import"./Divider-Bv_OvFaD.js";import"./AppInfoRow-BqYxjxEK.js";import"./Chip-CP3VY8ZP.js";import"./Divider-B42Uh_Bj.js";import"./TreeView-DpdtxLcB.js";import"./Alert-B_Svt6kM.js";import"./LinearProgress-BzA3k14P.js";import"./Spinner-ClMpHh1d.js";import"./Dialog-B-CBTz5q.js";import"./MapToggleButtonPresentational-CEEmCWRw.js";import"./Remove-DsJJL5XN.js";import"./LinkButton-C4EtbQ1R.js";import"./TextField-C1RKnAyX.js";import"./Switch-Ck6dNew2.js";import"./DatePicker-63Sx7fEQ.js";import"./Paper-BtVQmXu1.js";import"./ErrorFallback-CyHZraUv.js";import"./ErrorFallbackText-CXNMYw6_.js";import"./ErrorFallbackWrapper-C9ggY6qV.js";import"./Brand-Bh3aijrf.js";import"./constants-CY3-_VsX.js";import"./Edit-6FH8M8KH.js";const Ve={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
A simple checkbox component built on Mui's \`<Checkbox>\` with our design-system theming and overrides. It supports the following use cases:

- **Controlled mode:** Pass \`checked\` and \`onChange\` to fully control the checkbox's state.
- **Uncontrolled mode:** Use the \`defaultChecked\` prop for the initial value and let the checkbox manage its own state.

---

### When & How to use it
- **Forms:** Use it in any form where you need to allow the user to select multiple or binary options (e.g., terms of service, preferences).

\`\`\`jsx
<Checkbox 
  checked={checkedValue} 
  id="checkbox-demo" 
  required={true}
  onChange={handleChange} 
/>
\`\`\`
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>c(I,{sx:{margin:"auto"},children:e()})},j=({...e})=>{const[v,R]=y.useState(!1);return c(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},s={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},i={render:e=>c(j,{...e}),args:{disabled:!1}};var n,m,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {}
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,l,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "checkbox-disabled",
    disabled: true,
    onChange: () => {}
  }
}`,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var u,g,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    label: "Custom Label",
    onChange: () => {}
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,x,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "checkbox-custom-label",
    label: "Required",
    required: true,
    onChange: () => {}
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,q,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    required: true,
    onChange: () => {}
  }
}`,...(w=(q=s.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var W,L,S;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(S=(L=i.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const _e=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,i as ExampleWithOnChange,t as WithCustomLabel,s as WithNoLabel,a as WithRequired,_e as __namedExportsOrder,Ve as default};
