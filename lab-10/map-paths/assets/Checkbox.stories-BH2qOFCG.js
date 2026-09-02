import{j as c,r as y}from"./iframe-BWbl0n-m.js";import{c as D}from"./DropdownButton-Mnj2kdS-.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-B9rg1may.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DyG3eNif.js";import"./SvgIcon-Bh4gxdfA.js";import"./generateUtilityClass-B_owxAgJ.js";import"./styled-DcXC8MdH.js";import"./generateUtilityClasses-TDbmritb.js";import"./useTheme-DmjRKZlb.js";import"./Box-BWzji7VQ.js";import"./Container-7PTy0-Eg.js";import"./styled-B4qHdp8Z.js";import"./createStyled-BUAz3FAp.js";import"./useThemeProps-B16WFuAG.js";import"./FlexBox-D_1rxin-.js";import"./Stack-CtzM8nP1.js";import"./Typography-CipE5iZZ.js";import"./Paper-Ds_iTmZx.js";import"./useThemeProps-6iXLcsdV.js";import"./Text-BpKGjeEj.js";import"./AdapterDayjs-4bvMsGl4.js";import"./Modal-BI24WZXX.js";import"./utils-Cj96EfuL.js";import"./TransitionGroupContext-BO9wJbcY.js";import"./index-D4MyRL19.js";import"./resolveComponentProps-DiK6_J4b.js";import"./Popover-BrYdNkwn.js";import"./TextField-ZNJA485N.js";import"./useFormControl-QicCnhBY.js";import"./createSvgIcon-vKc29NSt.js";import"./IconButton-DGKGWhyR.js";import"./ButtonBase-BKCC3Yfm.js";import"./DialogContent-CXuQtc83.js";import"./Button-C3fDFpoh.js";import"./Chip-BIc5mAwZ.js";import"./DateTimePicker-BUJ_NzTy.js";import"./Divider-BFWv2Sw5.js";import"./AppInfoRow--FDyu7yq.js";import"./Chip-C4CcYR6m.js";import"./Divider-SV-WqojL.js";import"./TreeView-znzljYnu.js";import"./Alert-DWppgABV.js";import"./LinearProgress-Cl656I14.js";import"./Spinner-B46se6MY.js";import"./Dialog-DeNq9WSz.js";import"./MapToggleButtonPresentational-BeOeGCzD.js";import"./Remove-KmRfI7Zo.js";import"./LinkButton-YSkiBdlL.js";import"./TextField-BsHv-Zfc.js";import"./Switch-B1CDaN66.js";import"./DatePicker-Bq3_9IkT.js";import"./Paper-Cai4wMuA.js";import"./ErrorFallback-B0s2UmXa.js";import"./ErrorFallbackText-DO82QlLj.js";import"./ErrorFallbackWrapper-Cs11x7fa.js";import"./Brand-CGpa3lI_.js";import"./constants-Bhc0tOON.js";import"./Edit-WmDTDE_G.js";const Ve={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
