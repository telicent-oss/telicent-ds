import{j as c,r as y}from"./iframe-LIGj3d-Q.js";import{c as D}from"./DropdownButton-BJ8ATclk.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-ZS7CRD1W.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BZq18jI_.js";import"./SvgIcon-D7LY-Es_.js";import"./generateUtilityClass-BBJ39S72.js";import"./styled-CMrnC_6X.js";import"./generateUtilityClasses-CdCMisAN.js";import"./useTheme-Drvcy2jL.js";import"./Box-Xmc6gVQw.js";import"./Container-DsY-R8Xi.js";import"./styled-BE6CXqzB.js";import"./createStyled-DkzSDqqT.js";import"./useThemeProps-CsX7Y_ml.js";import"./FlexBox-CW-13tp1.js";import"./Stack-BLybbMM6.js";import"./Typography-D3mJSaGG.js";import"./Paper-BQl-weoM.js";import"./useThemeProps-OVRUsTmW.js";import"./Text-C1ckyoQT.js";import"./AdapterDayjs-Ch4KVDrb.js";import"./Modal-C9wnEkLA.js";import"./utils-DXkjnBan.js";import"./TransitionGroupContext-BcEhJ9yi.js";import"./index-DxBxG5lA.js";import"./resolveComponentProps-pTf1jdNZ.js";import"./Popover-DB9tZCoT.js";import"./TextField-Zx-ZjNDc.js";import"./useFormControl-B8GjATra.js";import"./createSvgIcon-BsE78Bbg.js";import"./IconButton-E06dBbED.js";import"./ButtonBase-DLqnRUvo.js";import"./DialogContent-Cu4YKXbj.js";import"./Button-Q_dOly4u.js";import"./Chip-O7SJtB9c.js";import"./DateTimePicker-BhHVL6O-.js";import"./Divider-CvUfSPVx.js";import"./AppInfoRow-CM-T5Qzd.js";import"./Chip-259Gi_f0.js";import"./Divider-K2aGA6fe.js";import"./TreeView-CY1-K2Qs.js";import"./Alert-CSa2GtHR.js";import"./LinearProgress-w3c5P4tQ.js";import"./Spinner-BXyU6yX3.js";import"./Dialog-DGOK43e8.js";import"./MapToggleButtonPresentational-DAJ6zUSX.js";import"./Remove-ZVe8f5hM.js";import"./LinkButton-BtKNy-FT.js";import"./TextField-CnjLxEi3.js";import"./Switch-fYOd7byu.js";import"./DatePicker-C-nFnRZR.js";import"./Paper-DkXRXPRv.js";import"./ErrorFallback-DKu42nBH.js";import"./ErrorFallbackText-N065n6oW.js";import"./ErrorFallbackWrapper-D0RMVwUL.js";import"./Brand-DWzMeGAm.js";import"./constants-CiN2e574.js";import"./Edit-t2iHK7-h.js";const Ve={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
