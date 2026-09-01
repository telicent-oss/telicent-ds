import{j as c,r as y}from"./iframe-BXY8qhtT.js";import{c as D}from"./DropdownButton-CMCln0pB.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-DmdH8_CM.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Bz3heM6b.js";import"./SvgIcon-Ny0aRQHI.js";import"./generateUtilityClass-wYVai49J.js";import"./styled-H7Fdw8PF.js";import"./generateUtilityClasses-BA7K2SXw.js";import"./useTheme-jpEbcY17.js";import"./Box-BKFfSYU7.js";import"./Container-u3BuaPcs.js";import"./styled-bWS-fPzl.js";import"./createStyled-C5U3_gNR.js";import"./useThemeProps-lfivHL7Q.js";import"./FlexBox-H-sCRMiR.js";import"./Stack-mn3XG4cs.js";import"./Typography-D_A1aX7c.js";import"./Paper-Dxa9EUvO.js";import"./useThemeProps-DH9W_0R3.js";import"./Text-BYojZcvc.js";import"./AdapterDayjs-5XgIQcgH.js";import"./Modal-ipxBrzNN.js";import"./utils-CE69r2C4.js";import"./TransitionGroupContext-CryLiEHc.js";import"./index-WLUfl6fz.js";import"./resolveComponentProps-mqZrAnvV.js";import"./Popover-BVxxj8q6.js";import"./TextField-BpDVwlCN.js";import"./useFormControl-E--nQZxq.js";import"./createSvgIcon-DjsA-uZ8.js";import"./IconButton-B-B6ziHV.js";import"./ButtonBase-BadIhpsX.js";import"./DialogContent-CyDUkUFC.js";import"./Button-BGy2rwjE.js";import"./Chip-B3_yOCCL.js";import"./DateTimePicker-B7sYKJNb.js";import"./Divider-B2-WeumM.js";import"./AppInfoRow-ZAGiEJOr.js";import"./Chip-C5kaT8Lc.js";import"./Divider-BZWBYD5d.js";import"./TreeView-lJGuyWyx.js";import"./Alert-CbPLOKCy.js";import"./LinearProgress-BRbnBQfK.js";import"./Spinner-DiRwWvdE.js";import"./Dialog-Djinkl1M.js";import"./MapToggleButtonPresentational-BPCec7gk.js";import"./Remove-FN9daPXK.js";import"./LinkButton-CCn1fa7f.js";import"./TextField-BiPbqIQb.js";import"./Switch-CbYpuBJM.js";import"./DatePicker-B42bozBr.js";import"./Paper-BJ8D2bs1.js";import"./ErrorFallback-CXf1lrVR.js";import"./ErrorFallbackText-BbxsiRdP.js";import"./ErrorFallbackWrapper-F_6HkMfr.js";import"./Brand-BHfEveUR.js";import"./constants-BgFE9pGk.js";import"./Edit-0n8mwjN-.js";const Ve={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
