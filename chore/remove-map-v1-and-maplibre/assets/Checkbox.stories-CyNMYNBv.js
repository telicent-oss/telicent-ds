import{j as c,r as y}from"./iframe-BR2e2YDK.js";import{c as D}from"./DropdownButton-BcIbR7mn.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-Cjy76m6G.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-jc37Ujil.js";import"./SvgIcon-Cv-K0R04.js";import"./generateUtilityClass-DMHzQu2S.js";import"./styled-D2dzNnNb.js";import"./generateUtilityClasses-Dg3UIE_r.js";import"./useTheme-s-RP8QJy.js";import"./Box-DUkA7BwQ.js";import"./Container-BqQatTiF.js";import"./styled-BxRNAcX1.js";import"./createStyled-CY95Mz_9.js";import"./useThemeProps-DwRsn42H.js";import"./FlexBox-GegQ6KoK.js";import"./Stack-COhqTIW9.js";import"./Typography-DUgZ7jdW.js";import"./Paper-Bu9Xtg_J.js";import"./useThemeProps-Db0C_hKt.js";import"./Text-G3gRIU3S.js";import"./AdapterDayjs-Cqhoz3bg.js";import"./Modal-a8XaxvFh.js";import"./utils-BDR_SyG2.js";import"./TransitionGroupContext-ClPOJll4.js";import"./index-DPx2uLoP.js";import"./resolveComponentProps-4VX9PFU8.js";import"./Popover-Baj7zd45.js";import"./TextField-BYBS7QeR.js";import"./useFormControl-BDmNOi78.js";import"./createSvgIcon-BCjTwnIN.js";import"./IconButton-Bays2K--.js";import"./ButtonBase-CmJPQ6Im.js";import"./DialogContent-wB_kMJWd.js";import"./Button-D2nWt4S8.js";import"./Chip-Bs3GvNHw.js";import"./DateTimePicker-BhkD0_Tn.js";import"./Divider-Dz7TZSIi.js";import"./AppInfoRow-DakeCdvn.js";import"./Chip-Ba4FoljX.js";import"./Divider-BLHqQnsK.js";import"./TreeView-CdxXinPI.js";import"./Alert-C4X40l06.js";import"./LinearProgress-Bi0KtS5W.js";import"./Spinner-KSKr4HCV.js";import"./Dialog-BOV1hoDB.js";import"./MapToggleButtonPresentational-CDIZBpSC.js";import"./Remove-DuE88Ezs.js";import"./LinkButton-BqutvHI0.js";import"./TextField-ByfWKBjI.js";import"./Switch-EzT8Sy71.js";import"./DatePicker-Bv_1Qb5R.js";import"./Paper-DeFLSdpX.js";import"./ErrorFallback-9noxw0Ql.js";import"./ErrorFallbackText-DAVlUHED.js";import"./ErrorFallbackWrapper-DctsmiY9.js";import"./Brand-Bmi4u6qq.js";import"./Edit-DHIa2SgU.js";const Pe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
