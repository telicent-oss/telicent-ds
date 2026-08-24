import{j as c,r as y}from"./iframe-DBgioWeW.js";import{c as D}from"./DropdownButton-BabsKrW9.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-BcBTuFed.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BZNRAdYq.js";import"./SvgIcon-TllpJj-5.js";import"./generateUtilityClass-CLTaAhKf.js";import"./styled-BFNF5QCQ.js";import"./generateUtilityClasses-Biy-3Iuq.js";import"./useTheme-C1yOJVtG.js";import"./Box-BMRHnFd3.js";import"./Container-CCihsyAb.js";import"./styled-Ciq6By-E.js";import"./createStyled-1Z_SCf_6.js";import"./useThemeProps-DD_wnCUH.js";import"./FlexBox-WvRGoRmd.js";import"./Stack-49KLdOgs.js";import"./Typography-0sG5OmeS.js";import"./Paper-ReDLUWfy.js";import"./useThemeProps-CMLYgd7W.js";import"./Text-BgUfptMq.js";import"./AdapterDayjs-a3XxtfRM.js";import"./Modal-CpjZt_2L.js";import"./utils-BFDACMv_.js";import"./TransitionGroupContext-B_89mR0Z.js";import"./index-CZMS6Q7o.js";import"./resolveComponentProps-BcqjDzNz.js";import"./Popover-MaL5oiYC.js";import"./TextField-DG8mdDgF.js";import"./useFormControl-B5a28znY.js";import"./createSvgIcon-pQhiwPMe.js";import"./IconButton-CV8_PS-T.js";import"./ButtonBase-CdfKuLiZ.js";import"./DialogContent-hHcY6KWM.js";import"./Button-DAGEP08y.js";import"./Chip-CaiYGmRd.js";import"./DateTimePicker-C2SjaMhl.js";import"./Divider-BtQ4DxGj.js";import"./AppInfoRow-Dzw9MtOg.js";import"./Chip-CFF8wAV8.js";import"./Divider-mG2cL4cg.js";import"./TreeView-Bk0Y2Vpn.js";import"./Alert-Dbl8MlCd.js";import"./LinearProgress-CgkIvIK9.js";import"./Spinner-CWMexREX.js";import"./Dialog-S6JnYG3y.js";import"./MapToggleButtonPresentational-CWWsP1Bq.js";import"./Remove-BC-lmLjV.js";import"./LinkButton-B5-1f7yZ.js";import"./TextField-Bgagizd7.js";import"./Switch-PbDUnJEB.js";import"./DatePicker-BF5iZhcx.js";import"./Paper-7C0C2edj.js";import"./ErrorFallback-CKRDg2e3.js";import"./ErrorFallbackText-DWxCPdpF.js";import"./ErrorFallbackWrapper-DYW1qU0r.js";import"./Brand-Bx9Nu_uI.js";import"./constants--Gti5moB.js";import"./Edit-BOpYoOgP.js";const Ve={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
