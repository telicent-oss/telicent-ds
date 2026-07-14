import{j as i,r as y}from"./iframe-BfEsncEF.js";import{b as D}from"./DropdownButton-99vgIkCV.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-CtVv9OHw.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DAdv8Ixp.js";import"./createSvgIcon-C6teTnyS.js";import"./generateUtilityClass-DLTO8EZ0.js";import"./styled-CKEjpOwx.js";import"./generateUtilityClasses-CgDs_uOe.js";import"./useTheme-BD06mfPU.js";import"./Box-ChCTlzLQ.js";import"./Container-DHCExKqq.js";import"./styled-D7FRfLSG.js";import"./createStyled-KEG0ma0P.js";import"./useThemeProps-D2PMoY2V.js";import"./Stack-DB3Y16n1.js";import"./Typography-Cur-qBxx.js";import"./Paper-CmIu2cj4.js";import"./useThemeProps-j1RL-BpF.js";import"./Text-BMw1ybWa.js";import"./AdapterDayjs-D6qtZrEv.js";import"./Modal-BoRvpCnD.js";import"./utils-D9P5YpBK.js";import"./TransitionGroupContext-BiIjqEy8.js";import"./index-CuxFIe6q.js";import"./resolveComponentProps-2Wttismo.js";import"./TextField-BV7Va00E.js";import"./useFormControl-3m3RTCoN.js";import"./IconButton-scd69Lv3.js";import"./ButtonBase-CyDfjua2.js";import"./DialogContent-orjmG92r.js";import"./Button-jK3vDH7L.js";import"./Chip-C3EaWfE-.js";import"./DateTimePicker-C-sZiwTj.js";import"./Divider-BDyVO8zM.js";import"./Chip-wEw5ZNvW.js";import"./Divider-Berqrx4H.js";import"./TreeView-D2h7huiz.js";import"./Close-1c413Acz.js";import"./LinearProgress-4SIHWNA8.js";import"./Spinner-p-63cFPN.js";import"./Dialog-BfMJ9NKL.js";import"./MapToggleButtonPresentational-Bgmt2_LX.js";import"./Remove-DoXNBLDf.js";import"./TextField-M5Osf9JN.js";import"./Switch-C_gUrCjS.js";import"./DatePicker-D3jVMaej.js";import"./LinkButton-DybG3JjG.js";import"./Paper-VpNf2qxV.js";import"./ErrorFallback-Dn6So0DV.js";import"./ErrorFallbackText-DoD_00IC.js";import"./ErrorFallbackWrapper-DKy8QON8.js";import"./Brand-B8b8xuEA.js";import"./constants-C1bu_m5W.js";import"./Edit-CfOidwdt.js";const Fe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>i(I,{sx:{margin:"auto"},children:e()})},j=({...e})=>{const[v,R]=y.useState(!1);return i(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},s={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},c={render:e=>i(j,{...e}),args:{disabled:!1}};var n,m,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var u,b,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    label: "Custom Label",
    onChange: () => {}
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var k,x,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(q=s.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var W,L,S;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const He=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,c as ExampleWithOnChange,t as WithCustomLabel,s as WithNoLabel,a as WithRequired,He as __namedExportsOrder,Fe as default};
