import{j as c,r as y}from"./iframe-CDBxO6_b.js";import{e as D}from"./DropdownButton-CkksLEox.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-DfnvJTQw.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DEvOIRGm.js";import"./SvgIcon-DsW68TcN.js";import"./generateUtilityClass-KFl2kJbe.js";import"./styled-76qFXujn.js";import"./generateUtilityClasses-DaXJGzLl.js";import"./useTheme-rDhlhLy3.js";import"./Box-CySwnFLo.js";import"./Container-KMaT1f54.js";import"./styled-CphBOoQ3.js";import"./createStyled-C1rkA4Mv.js";import"./useThemeProps-fiQCP1N1.js";import"./FlexBox-BMs_YP_5.js";import"./Stack-mYJwoIT2.js";import"./Typography-vegYmcLy.js";import"./Paper-DMCPBJkm.js";import"./useThemeProps-DHX2ocPH.js";import"./Text-CdZr9e3u.js";import"./AdapterDayjs-CYb0KguN.js";import"./Modal-DEgg-C3h.js";import"./utils-Cr9e5xo4.js";import"./TransitionGroupContext-Cu_THlZq.js";import"./index-DWMSeB-r.js";import"./resolveComponentProps-BxRLFcsS.js";import"./Popover-0S23aSjL.js";import"./TextField-B7fvSw8O.js";import"./useFormControl-BLJrGv0p.js";import"./createSvgIcon-CEVPRCDB.js";import"./IconButton-D-oIe7cH.js";import"./ButtonBase-5WYJ2ezl.js";import"./DialogContent-DLgwMkMq.js";import"./Button-CAHqHr06.js";import"./Chip-CqmdbVD_.js";import"./DateTimePicker-DP5-_LCV.js";import"./Divider-BXpFwo5Y.js";import"./AppInfoRow-BwXDp_eE.js";import"./Chip-BLU3VkT1.js";import"./Divider-8ryveRxy.js";import"./TreeView-DuSVfVPL.js";import"./Alert-D-UKQ5P-.js";import"./LinearProgress-Ds_yNof7.js";import"./Spinner-DqjfiG1Z.js";import"./Dialog-Bf4YNW6N.js";import"./MapToggleButtonPresentational-DAgezT-5.js";import"./Remove-CQa5LtxQ.js";import"./LinkButton-ByQcFuFk.js";import"./TextField-Csj0W2gm.js";import"./Switch-aIvlRLf5.js";import"./DatePicker-OfEkbjGT.js";import"./Paper-TPWkBCMh.js";import"./ErrorFallback-cydewmqS.js";import"./ErrorFallbackText-DsJo2xyd.js";import"./ErrorFallbackWrapper-I5QMkt72.js";import"./Brand-CMTTc4Ce.js";import"./Edit-caJtQqsL.js";const Pe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
}`,...(S=(L=i.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const Ve=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,i as ExampleWithOnChange,t as WithCustomLabel,s as WithNoLabel,a as WithRequired,Ve as __namedExportsOrder,Pe as default};
