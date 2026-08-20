import{j as c,r as y}from"./iframe-lbVyLo9M.js";import{c as D}from"./DropdownButton-DodwJLhq.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-DlYuhDE8.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BYJvLZx1.js";import"./SvgIcon-BhjTKujD.js";import"./generateUtilityClass-mLX-m29y.js";import"./styled-thNUQRPl.js";import"./generateUtilityClasses-DGf4tbvL.js";import"./useTheme-CLkEv95-.js";import"./Box-C83oWY3G.js";import"./Container-DLPgUEUh.js";import"./styled-DCbo4I3z.js";import"./createStyled-lowEfwXB.js";import"./useThemeProps-At40PQ24.js";import"./FlexBox-NMVzPqDV.js";import"./Stack-CcM8nxhu.js";import"./Typography-7qJHmYWv.js";import"./Paper-D-csFAd3.js";import"./useThemeProps-CR3q6hIr.js";import"./Text-GZhHB46q.js";import"./AdapterDayjs-Bh746Glk.js";import"./Modal-DR8JHd-z.js";import"./utils-CtBn2Om0.js";import"./TransitionGroupContext-CHRtULwj.js";import"./index-DAZgcoYU.js";import"./resolveComponentProps-Dc14A0Xg.js";import"./Popover-BdniOjWh.js";import"./TextField-VYpRKwSw.js";import"./useFormControl-CZxL2IaN.js";import"./createSvgIcon-V9v0b-rh.js";import"./IconButton-D9SltU1Q.js";import"./ButtonBase-CvSf6vSn.js";import"./DialogContent-CfoP2HP5.js";import"./Button-Bf8_SP8e.js";import"./Chip-CPeHQbdq.js";import"./DateTimePicker-DtUwUzaw.js";import"./Divider-DHhQsNL_.js";import"./AppInfoRow-COyx2En4.js";import"./Chip-Cs6bMZDw.js";import"./Divider-BOL12Syp.js";import"./TreeView-DEjBOrW7.js";import"./Alert-C83Wtki0.js";import"./LinearProgress-D1WH3K-w.js";import"./Spinner-CX2KmoCf.js";import"./Dialog-BJNkPgfD.js";import"./MapToggleButtonPresentational-BtIuW8W8.js";import"./Remove-qUnvA5Qg.js";import"./LinkButton-XIf9yczH.js";import"./TextField-Z8WmXcEs.js";import"./Switch-vGqTkiql.js";import"./DatePicker-NdtGOenD.js";import"./Paper-BJ_QnuCU.js";import"./ErrorFallback-DSQ6d8ue.js";import"./ErrorFallbackText-CXIKZcAb.js";import"./ErrorFallbackWrapper-DbmuJJ7f.js";import"./Brand-BVn3cdyI.js";import"./constants-BK6Qtb1C.js";import"./Edit-DcejEQXi.js";const Ve={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
