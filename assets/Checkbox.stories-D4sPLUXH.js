import{j as i,r as y}from"./iframe-D9lU07Zf.js";import{b as D}from"./DropdownButton-DzsOMP1u.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-CSybQHSa.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-r0zPa3RZ.js";import"./createSvgIcon-DFI5qBHU.js";import"./generateUtilityClass-D7q2yxGy.js";import"./styled-DoKDlkZ_.js";import"./generateUtilityClasses-DlijklOR.js";import"./useTheme-SybXv74r.js";import"./Box-BJrD4UE_.js";import"./Container-BcSzuyYl.js";import"./styled-DiYYYjn2.js";import"./createStyled-BPBpdXBm.js";import"./useThemeProps-BAvRSqZ0.js";import"./Stack-BnA3evNe.js";import"./Typography-C6RHNrrz.js";import"./Paper-Cej6lYK6.js";import"./useThemeProps-BVMIZTQV.js";import"./Text-HEEd4Tr4.js";import"./AdapterDayjs-BjHxbXQG.js";import"./Modal-8YIgZsH9.js";import"./utils-CoFbKNqr.js";import"./TransitionGroupContext-jFit0_oH.js";import"./index-BBdfoeT5.js";import"./resolveComponentProps-E2VM1uz1.js";import"./TextField-CJ0-8TEN.js";import"./useFormControl-TA3T3Av9.js";import"./IconButton-tmuZo6L6.js";import"./ButtonBase-DSNICrLd.js";import"./DialogContent-BS32uX7_.js";import"./Button-DhyX7BiZ.js";import"./Chip-DoVi98mw.js";import"./DateTimePicker-CMScypHs.js";import"./Divider-AwwvZxp0.js";import"./Chip-luU8AZ1L.js";import"./Divider-BrsXIlBD.js";import"./TreeView-CJsNe1p9.js";import"./Close-C_etf32Q.js";import"./LinearProgress-Bxn_kvK2.js";import"./Spinner-DfGKdH87.js";import"./Dialog-Cw8kg19x.js";import"./MapToggleButtonPresentational-BbUeRSZp.js";import"./Remove-Be9W_CKm.js";import"./TextField-DFYGxZvh.js";import"./Switch-CoEGI3zX.js";import"./DatePicker-KE2OE2TB.js";import"./LinkButton-XbvtPO8L.js";import"./Paper-BwpRoinM.js";import"./ErrorFallback-BXGLlVLh.js";import"./ErrorFallbackText-C1gmEt6Z.js";import"./ErrorFallbackWrapper-DnVofVwB.js";import"./Brand-CKNi3Y53.js";import"./constants-mTaQgHmf.js";import"./Edit-CFpkLirJ.js";const Fe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>i(I,{sx:{margin:"auto"},children:e()})},j=({...e})=>{const[v,R]=y.useState(!1);return i(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},s={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},c={render:e=>i(j,{...e}),args:{disabled:!1}};var n,m,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var u,b,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    label: "Custom Label",
    onChange: () => {}
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var k,x,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(q=s.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var W,L,S;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const He=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,c as ExampleWithOnChange,t as WithCustomLabel,s as WithNoLabel,a as WithRequired,He as __namedExportsOrder,Fe as default};
