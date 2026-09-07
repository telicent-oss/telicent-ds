import{j as c,r as y}from"./iframe-DOdfunxu.js";import{c as D}from"./DropdownButton-ByqXHMOu.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-hyRQPaZ4.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B7_eivk6.js";import"./SvgIcon-DFomGA1f.js";import"./generateUtilityClass-BzCIKliO.js";import"./styled-N7qU7nSq.js";import"./generateUtilityClasses-CFD-9pLI.js";import"./useTheme-CTXZcIs4.js";import"./Box-DHRrNZX5.js";import"./Container-CPCeD-nf.js";import"./styled-D5fNiE7F.js";import"./createStyled-8QW6nx7o.js";import"./useThemeProps-D8V7PoaW.js";import"./FlexBox-DMv9SAJZ.js";import"./Stack-DwCY-dlK.js";import"./Typography-1e_UHE42.js";import"./Paper-CHErrLCd.js";import"./useThemeProps-DLNpf1VT.js";import"./Text-VYSLAOq5.js";import"./AdapterDayjs-CX9q05Th.js";import"./Modal-Cya2bj7G.js";import"./utils-CpWf8KQd.js";import"./TransitionGroupContext-KJ5bGa-X.js";import"./index-koODo2za.js";import"./resolveComponentProps-ChNdKYcA.js";import"./Popover-H5Nc25Qr.js";import"./TextField-B9CT7SDQ.js";import"./useFormControl-BYoapvFJ.js";import"./createSvgIcon-CZJ3IqX3.js";import"./IconButton-CsmqjV5u.js";import"./ButtonBase-CLoxpI8H.js";import"./DialogContent-C6cnJTIr.js";import"./Button-DQ93r4qZ.js";import"./Chip-BjXM18gl.js";import"./DateTimePicker-xNFlLIrM.js";import"./Divider-cnXSAO0W.js";import"./AppInfoRow-BOjAmyns.js";import"./Chip-BseIe8gJ.js";import"./Divider-pihCxoa4.js";import"./TreeView-DdA1N4tx.js";import"./Alert-s_Jivrbe.js";import"./LinearProgress-yqjeFZFn.js";import"./Spinner-CQdshHh4.js";import"./Dialog-IWGMIZQp.js";import"./MapToggleButtonPresentational-Cs7LiFb0.js";import"./Remove-mxIKVIiX.js";import"./LinkButton-CfRR_AtP.js";import"./TextField-CrzldOpU.js";import"./Switch-D-vofxUl.js";import"./DatePicker-Cb5XxovO.js";import"./Paper-CQpy0KVu.js";import"./ErrorFallback-CT7nYHa7.js";import"./ErrorFallbackText-nraKr_ob.js";import"./ErrorFallbackWrapper-fk64WSbi.js";import"./Brand-DGjLYV2R.js";import"./constants-Cxg4p8yF.js";import"./Edit-B4kKMPyK.js";const Ve={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
