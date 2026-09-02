import{j as c,r as y}from"./iframe-BF8_hFNx.js";import{c as D}from"./DropdownButton-DVtRIcts.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-DHvMVfZy.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-rPKIWBtx.js";import"./SvgIcon-DhCv6bzj.js";import"./generateUtilityClass-C29SJJDl.js";import"./styled-kP_L0DyI.js";import"./generateUtilityClasses-B__cmnPL.js";import"./useTheme-DZci25c3.js";import"./Box-CUYKe1tY.js";import"./Container-BegR-SrU.js";import"./styled-CbMT73hZ.js";import"./createStyled-DokrzfuI.js";import"./useThemeProps-CDeIQJ38.js";import"./FlexBox-DrOT4QhN.js";import"./Stack-BIqzh-e3.js";import"./Typography-CtK18Imo.js";import"./Paper-BguOuIiI.js";import"./useThemeProps-1BPhIFnh.js";import"./Text-DU9ZnK76.js";import"./AdapterDayjs-117jxmi7.js";import"./Modal-DCxYWccC.js";import"./utils-BRCA_V7K.js";import"./TransitionGroupContext-BVj8p-WN.js";import"./index-COCuBnZd.js";import"./resolveComponentProps-DfO40KW_.js";import"./Popover-9qKCk_MS.js";import"./TextField-BS2ilkb_.js";import"./useFormControl-qErKgMum.js";import"./createSvgIcon-BcTBSPU2.js";import"./IconButton-Gc7uHhHy.js";import"./ButtonBase-Clf2zMkW.js";import"./DialogContent-BWIOdOfX.js";import"./Button-DP7o8EIN.js";import"./Chip-DWhy1Stt.js";import"./DateTimePicker-DeJSXd4V.js";import"./Divider-DT8mT7OZ.js";import"./AppInfoRow-zwSigULx.js";import"./Chip-WKeTVlom.js";import"./Divider-CC0GgcEz.js";import"./TreeView-o0agiv7Y.js";import"./Alert-Cs3YD2KW.js";import"./LinearProgress-BwRzna67.js";import"./Spinner-C8DyG1BW.js";import"./Dialog-BHLXSVSJ.js";import"./MapToggleButtonPresentational-DbTpgosD.js";import"./Remove-DT44vmSD.js";import"./LinkButton-BCmyYT1I.js";import"./TextField-BHAI0ohz.js";import"./Switch-5NEqFo5z.js";import"./DatePicker-C_QVF-r5.js";import"./Paper-DrXlW5u-.js";import"./ErrorFallback-CzP6Gni1.js";import"./ErrorFallbackText-C_Foeru1.js";import"./ErrorFallbackWrapper-DMxUkyYr.js";import"./Brand-C-qNgu8Q.js";import"./constants-DJrxGGyh.js";import"./Edit-Dno316tl.js";const Ve={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
