import{a as c,r as y}from"./iframe-B8lru9Ox.js";import{g as D}from"./DropdownButton-D5bjMSjg.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-D2AU3WA-.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DqrK-S_Y.js";import"./SvgIcon-BgwuaJOO.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-B7kmWUc9.js";import"./extendSxProp-DjHg015s.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-lbsOwaIT.js";import"./Box-DtmlQxFY.js";import"./Container-DOlWnnaB.js";import"./styled-LsKj47KW.js";import"./createStyled-_4klY0ey.js";import"./useThemeProps-DqCYqzYY.js";import"./FlexBox-QL3KD45m.js";import"./Stack-DQqlKiUu.js";import"./Typography-DtJW_51A.js";import"./Paper-4eMZAmsM.js";import"./CogIcon-Ch-cC12G.js";import"./InfoIcon-buuMzVkD.js";import"./ThemeSwitchRow-D81wGVaD.js";import"./index-DX_1Zw-E.js";import"./Text-Cy_FjCVa.js";import"./AdapterDayjs-B05HZLDs.js";import"./useThemeProps-DVQSamuW.js";import"./Modal-DMbdFXDI.js";import"./utils-D4kUvPaj.js";import"./TransitionGroupContext-Bg30LDe0.js";import"./index-BhBzwTqv.js";import"./resolveComponentProps-B4S3ggFk.js";import"./Popover-DGL3i7op.js";import"./TextField-Eij0i_Vp.js";import"./useFormControl-CLg-uBwy.js";import"./FormControl-DRfKH_qZ.js";import"./useControlled-D13dP5S1.js";import"./createSvgIcon-Cs4F3KcN.js";import"./FormHelperText-Bbq3OgSk.js";import"./IconButton-DUSx-Z4B.js";import"./ButtonBase-B1n-NBaA.js";import"./DialogContent-Bv7qBY9o.js";import"./Button-B6b6ie_Y.js";import"./Chip-DS6faPIl.js";import"./DateTimePicker-B2f9rqpT.js";import"./Divider-BythBDcI.js";import"./_IconPopover-BtykrXQA.js";import"./Chip-C7-LDCye.js";import"./Divider-CGpXJFUY.js";import"./TreeView-Skztq0S6.js";import"./Alert-CutSt2-9.js";import"./AppInfoRow-CnKSgvK0.js";import"./AppSettings-DhijNEqA.js";import"./TableRow-CSSGEL79.js";import"./LinearProgress-BbwxtDnN.js";import"./Spinner-DZRjnsts.js";import"./Dialog-BXhz5J8P.js";import"./MapToggleButtonPresentational-D0yGj-7g.js";import"./Remove-D_OeaEKR.js";import"./LinkButton-BR4a1XmD.js";import"./TextField-D7q2BR5w.js";import"./Switch-DP0Ivfww.js";import"./LabeledSwitch-0Oeg2Pzv.js";import"./DatePicker-BayJyfOL.js";import"./FormControl-z0pYS_Fc.js";import"./FormHelperText-BbhR6ctA.js";import"./Paper-CkTdphIQ.js";import"./ErrorFallback-BOH60sVX.js";import"./ErrorFallbackText-CjuRVe4b.js";import"./ErrorFallbackWrapper-CHBRDu9p.js";import"./Brand-BQ4MZmxe.js";import"./Edit-XXHTxPCB.js";const rr={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
