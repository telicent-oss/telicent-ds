import{j as c,r as y}from"./iframe-DNDUxcaO.js";import{c as D}from"./DropdownButton-Gjs_u29X.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-Bkz_GRi9.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BkYOIqa1.js";import"./SvgIcon-D_gSiXU4.js";import"./generateUtilityClass-yRtlLDX3.js";import"./styled-DfedMCu0.js";import"./generateUtilityClasses-B3dIEnov.js";import"./useTheme-CjRP5Zih.js";import"./Box-CyVPnPuN.js";import"./Container-CFQML5lf.js";import"./styled-CEZOB1IF.js";import"./createStyled-BMssbegF.js";import"./useThemeProps-DbfhoLXT.js";import"./FlexBox-B99FqBon.js";import"./Stack-CmDJwrDz.js";import"./Typography-D2D0xmuv.js";import"./Paper-CFCWWK2T.js";import"./useThemeProps-CvpeLjbL.js";import"./Text-BzABXIyF.js";import"./AdapterDayjs-CH9J21mu.js";import"./Modal-BxwzYNJH.js";import"./utils-HRKdNepk.js";import"./TransitionGroupContext-BuYwsTCk.js";import"./index-BfdHqeMj.js";import"./resolveComponentProps-BREYvZrN.js";import"./Popover-Ajs4D1Yg.js";import"./TextField-BpITMWTL.js";import"./useFormControl-Bme-q2O6.js";import"./createSvgIcon-Dauu6_Iu.js";import"./IconButton-BJQhOQlg.js";import"./ButtonBase-DnXvlvN-.js";import"./DialogContent-CynUCe-Z.js";import"./Button-DTJ9V6nt.js";import"./Chip-cnnRKU4-.js";import"./DateTimePicker-BB_R5cc9.js";import"./Divider-DrpONNh4.js";import"./AppInfoRow-Cc3GEOw8.js";import"./Chip-BpOQvEWJ.js";import"./Divider-CZP54Ze7.js";import"./TreeView-D5w0NpN-.js";import"./Alert-DO3pQkEQ.js";import"./LinearProgress-C7U5-zF-.js";import"./Spinner-B7aIcwLu.js";import"./Dialog-BNQpFNSR.js";import"./MapToggleButtonPresentational-DA_-a6wQ.js";import"./Remove-kGFwgJC6.js";import"./LinkButton-smfWLNJd.js";import"./TextField-CIJj8B3P.js";import"./Switch-C0MMkom0.js";import"./DatePicker-D-5DE768.js";import"./Paper-CHGMDtz6.js";import"./ErrorFallback-B5ZQhcnu.js";import"./ErrorFallbackText-CjRaFV8l.js";import"./ErrorFallbackWrapper-12v0M5tK.js";import"./Brand-GUpF-d_h.js";import"./constants-DsUVBwT7.js";import"./Edit-B-a3iYoh.js";const Ve={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
