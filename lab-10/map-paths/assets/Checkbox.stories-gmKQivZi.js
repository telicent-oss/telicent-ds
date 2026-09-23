import{j as c,r as y}from"./iframe-DK5e7ZOT.js";import{e as D}from"./DropdownButton-DiNdw6-A.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-CviFExpe.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DxV6urXZ.js";import"./SvgIcon-D6AH0iNF.js";import"./generateUtilityClass-CJ1oYMmM.js";import"./styled-whwJNJEY.js";import"./generateUtilityClasses-De74ogiH.js";import"./useTheme-6u7oaTI_.js";import"./Box-DZbp-pEY.js";import"./Container-CBY4xLcq.js";import"./styled-Cvi2Yhbz.js";import"./createStyled-DZLwdHSi.js";import"./useThemeProps-C49gig2L.js";import"./FlexBox-_W6sVTx8.js";import"./Stack-D9tKsaGV.js";import"./Typography-DtWNdwUY.js";import"./Paper-CkmaxJia.js";import"./useThemeProps-B27knm1v.js";import"./Text-CgE9U0QS.js";import"./AdapterDayjs-BNNJxlxy.js";import"./Modal-DmgCBfl7.js";import"./utils-BPA7G_xE.js";import"./TransitionGroupContext-chR__9Zz.js";import"./index-BXTU90x9.js";import"./resolveComponentProps-BehVUnHR.js";import"./Popover-BL6vaQzp.js";import"./TextField-DVauQNmD.js";import"./useFormControl-DE-Z70Nv.js";import"./createSvgIcon-D4CWCoDK.js";import"./IconButton-DQxImuDe.js";import"./ButtonBase-DbfXnrFH.js";import"./DialogContent-B_p2qS1z.js";import"./Button-Bv1CAZBN.js";import"./Chip-DF7wqBOO.js";import"./DateTimePicker-Cmtn6oRj.js";import"./Divider-Bv5BlnnD.js";import"./AppInfoRow-8GncKDGn.js";import"./Chip-DgY181Ve.js";import"./Divider-CKdiT8EK.js";import"./TreeView-0iiQTVqV.js";import"./Alert-D3zd-dEy.js";import"./LinearProgress-DKPT-xSE.js";import"./Spinner-B4ZuhRHw.js";import"./Dialog-GFqm4Lft.js";import"./MapToggleButtonPresentational-DRlZN78V.js";import"./Remove-CLzfP5Pm.js";import"./LinkButton-DFGT5LNA.js";import"./TextField-ZbgnM2uQ.js";import"./Switch-CqtrnZSy.js";import"./DatePicker-Vi5l2hai.js";import"./Paper-DYeLzx0r.js";import"./ErrorFallback-C_jb8-Gz.js";import"./ErrorFallbackText-Ba6aZeYG.js";import"./ErrorFallbackWrapper-Cymj5yYi.js";import"./Brand-Bc1Aa_GQ.js";import"./Edit-705h0DKO.js";const Pe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
