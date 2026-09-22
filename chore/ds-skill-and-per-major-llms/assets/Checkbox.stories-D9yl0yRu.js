import{j as c,r as y}from"./iframe-D2xSd84e.js";import{e as D}from"./DropdownButton-C0SajuR0.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-AGJ8HEdo.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DLxTDp4e.js";import"./SvgIcon-B_Vuuw4i.js";import"./generateUtilityClass-CL5j5EH9.js";import"./styled-Uo2f4_eJ.js";import"./generateUtilityClasses-BgNbkMmP.js";import"./useTheme-DD50os6u.js";import"./Box-aVZbDO8n.js";import"./Container-t30wv68u.js";import"./styled-jm0NCBmc.js";import"./createStyled-Q-b37U0V.js";import"./useThemeProps-Be8ecqSA.js";import"./FlexBox-DFBellf-.js";import"./Stack-DDjwWG7N.js";import"./Typography-CrXkC3Kj.js";import"./Paper-CMPnbo-3.js";import"./useThemeProps-CRX3G5nR.js";import"./Text-YKd5ufxb.js";import"./AdapterDayjs-CiYnk4U8.js";import"./Modal-C7up1KKP.js";import"./utils-B-UbRgM8.js";import"./TransitionGroupContext-d_Wi5FWz.js";import"./index-CFHJHd4f.js";import"./resolveComponentProps-6RrFLM_1.js";import"./Popover-DC9XfNY8.js";import"./TextField-BGl_E-Mk.js";import"./useFormControl-Cm4ESQ5Z.js";import"./createSvgIcon-BEH_TywE.js";import"./IconButton-r2Lpaq8o.js";import"./ButtonBase-wo9-0n7F.js";import"./DialogContent-B91V-Ggp.js";import"./Button-CT09wWAC.js";import"./Chip-2ePwHCRw.js";import"./DateTimePicker-BuM--HXU.js";import"./Divider-CZRs-x0D.js";import"./AppInfoRow-DY_H98te.js";import"./Chip-CYDyhIWX.js";import"./Divider-iCQqHWoM.js";import"./TreeView-C70c9-5p.js";import"./Alert-B22QG778.js";import"./LinearProgress-BJVPH0JL.js";import"./Spinner-CNKuUvLk.js";import"./Dialog-COLBK_8G.js";import"./MapToggleButtonPresentational-CsNIma1D.js";import"./Remove-7bR9n6m0.js";import"./LinkButton-CzHaV0bx.js";import"./TextField-2b4aPcPE.js";import"./Switch-bG2W1qCe.js";import"./DatePicker-BZgfSvoM.js";import"./Paper-BZvfaCOX.js";import"./ErrorFallback-BIncdLow.js";import"./ErrorFallbackText-ZC0AQgkA.js";import"./ErrorFallbackWrapper-CHAW5TC5.js";import"./Brand-rY45k5xL.js";import"./Edit-gqxvj0va.js";const Pe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
