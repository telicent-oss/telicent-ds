import{a as c,r as y}from"./iframe-QjimQxGJ.js";import{g as D}from"./DropdownButton-BqQMtZNv.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-BdgnJPj4.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-C4O34cYP.js";import"./SvgIcon-qDEXG8Q2.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-k9OHEYOT.js";import"./extendSxProp-CWL_eOV9.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-h6Umsisj.js";import"./Box-kqiIuPV6.js";import"./Container-DqveXh-O.js";import"./styled-DdRNySmR.js";import"./createStyled-kkTu4cdj.js";import"./useThemeProps-GaSBv1_5.js";import"./FlexBox-BHBK3XbM.js";import"./Stack-BCJid8GC.js";import"./Typography-BALYr_AM.js";import"./Paper-B4HMI984.js";import"./CogIcon-DoAefpgk.js";import"./InfoIcon-KAZwn8zl.js";import"./ThemeSwitchRow-CqJgfSGe.js";import"./index-BhQh1m69.js";import"./Text-CbHxOYIZ.js";import"./AdapterDayjs-COKlw25t.js";import"./useThemeProps-qyYKSYwF.js";import"./Modal-DPpC_MaX.js";import"./utils-DWVeh98X.js";import"./TransitionGroupContext-BNsz8i9y.js";import"./index-C895Ui_J.js";import"./resolveComponentProps-u9w1Xhfi.js";import"./Popover-D6-B0sHe.js";import"./TextField-BxmNESyD.js";import"./useFormControl-CLcxU0V8.js";import"./FormControl-pQC5AWwY.js";import"./useControlled-ClIGAfqi.js";import"./createSvgIcon-B0ZMIwZ-.js";import"./FormHelperText-D3ES7yVt.js";import"./IconButton-CdzYSU6E.js";import"./ButtonBase-B3FHfXkx.js";import"./DialogContent-DEerxyRB.js";import"./Button-B0acl6RO.js";import"./Chip-BIs9pIL_.js";import"./DateTimePicker-Cs-8dsfN.js";import"./Divider-CfN-tf0_.js";import"./_IconPopover-enaiw0Ag.js";import"./Chip-D2kTYDHW.js";import"./Divider-D4gWlnBJ.js";import"./TreeView-DHji-qEu.js";import"./Alert-BIYPLeJ4.js";import"./AppInfoRow-DsusScyS.js";import"./AppSettings-Blvm1PFt.js";import"./TableRow-ipCVlD9g.js";import"./LinearProgress-CCUeeTNk.js";import"./Spinner-ZqiMizuS.js";import"./Dialog-CQqj-Shc.js";import"./MapToggleButtonPresentational-DlVdc9iK.js";import"./Remove-CZV99RA6.js";import"./LinkButton-C1rXXMBH.js";import"./TextField-Cc6z2PNl.js";import"./Switch-T5c-KsvY.js";import"./LabeledSwitch-CY2Gql7U.js";import"./DatePicker-CZCRHMp9.js";import"./FormControl-CNaUogrQ.js";import"./FormHelperText-BO3t8uTC.js";import"./Paper-BSq9F4WF.js";import"./ErrorFallback-Dzp1pGy2.js";import"./ErrorFallbackText-D_comUev.js";import"./ErrorFallbackWrapper-CDfvx67q.js";import"./Brand-DAKosmlu.js";import"./Edit-D8MCsODy.js";const rr={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>c(I,{sx:{margin:"auto"},children:e()})},M=({...e})=>{const[v,R]=y.useState(!1);return c(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},i={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},s={render:e=>c(M,{...e}),args:{disabled:!1}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const or=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,s as ExampleWithOnChange,t as WithCustomLabel,i as WithNoLabel,a as WithRequired,or as __namedExportsOrder,rr as default};
