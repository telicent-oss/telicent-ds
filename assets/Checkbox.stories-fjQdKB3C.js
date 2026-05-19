import{j as c}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{c as D}from"./DropdownButton-DsEOrLxW.js";import{r as y}from"./index-CTjT7uj6.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-C8UM6PF1.js";import"./jsx-runtime-CB_V9I5Y.js";import"./UserIcon-Bv1k9Gkr.js";import"./createSvgIcon-zAUpwBvY.js";import"./defaultTheme-Cd36Xqui.js";import"./styled-Co95aX7f.js";import"./generateUtilityClasses-LAuhwvbW.js";import"./DefaultPropsProvider-BJrUAfpV.js";import"./useTheme-CXTcqjFy.js";import"./useTheme-N1zbQagn.js";import"./Container-DAUnO2s0.js";import"./styled-BFCnUgfa.js";import"./createStyled-DALmTr0F.js";import"./useThemeProps-DY6NRhpk.js";import"./Stack-D6Q4v-dm.js";import"./Typography-BTuSrW-Q.js";import"./Paper-C84P62Dn.js";import"./useThemeProps-mGX5p-it.js";import"./Text-DNDtww-5.js";import"./AdapterDayjs-Dcv1_Ch4.js";import"./index-gbGX4Sgq.js";import"./Modal-DMwGBxWQ.js";import"./utils-CZKs3qUl.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-DEWJqUJ8.js";import"./Select-BAcvQhzR.js";import"./useFormControl-DPKvkoC5.js";import"./useId-DMVUMfb1.js";import"./GlobalStyles-Bf3t3VSv.js";import"./GlobalStyles-Cv-yeoYN.js";import"./TextField-DC0Fsl0w.js";import"./IconButton-DNCXIZ2n.js";import"./ButtonBase-D3m3WlyT.js";import"./colorManipulator-_4WjNWDc.js";import"./DialogContent-CV9k0A3j.js";import"./Button-BnBRdIVR.js";import"./Chip-CxBAkcex.js";import"./MenuItem-BQe4uye3.js";import"./dividerClasses-l5WzAbKi.js";import"./UIThemeProvider-C1WxYNpB.js";import"./types-CMP91hxZ.js";import"./ThemeProvider-CVHsKeZ1.js";import"./Chip-CKDVrQLB.js";import"./Divider-oA2NDxbS.js";import"./Divider-B8c9urEZ.js";import"./TreeView-BEpIiRgO.js";import"./LinearProgress-DSGDjXQj.js";import"./Spinner-DhZwmjRq.js";import"./Dialog-BPI9Yj3K.js";import"./MapToggleButtonPresentational-D5YOt978.js";import"./Remove-BkPep7P_.js";import"./TextField-tnKbSM3S.js";import"./Select-3mUXH0tK.js";import"./Switch-BibpNf67.js";import"./DatePicker--dK9cNP8.js";import"./DateTimePicker-cy6yPI5j.js";import"./LinkButton-CVKymRM0.js";import"./Paper-24NI2w_o.js";import"./ErrorFallback-05kZtLFS.js";import"./ErrorFallbackText-BExZ28uU.js";import"./ErrorFallbackWrapper-76NLnkLs.js";import"./Brand-Kq-3gU1h.js";import"./constants-BOmE8RzX.js";import"./iframe-LMhFgRVo.js";import"../sb-preview/runtime.js";import"./Edit-GCVsx1H-.js";const Ze={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>c(I,{sx:{margin:"auto"},children:e()})},j=({...e})=>{const[v,R]=y.useState(!1);return c(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},i={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},s={render:e=>c(j,{...e}),args:{disabled:!1}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {}
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var d,l,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,q,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    required: true,
    onChange: () => {}
  }
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var W,L,S;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const $e=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,s as ExampleWithOnChange,t as WithCustomLabel,i as WithNoLabel,a as WithRequired,$e as __namedExportsOrder,Ze as default};
