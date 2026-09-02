import{j as c,r as y}from"./iframe-B7cgaF-W.js";import{c as D}from"./DropdownButton-Bb9iv5Vp.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-v5biCQrT.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BtEJ_j6a.js";import"./SvgIcon-CKN6T3r7.js";import"./generateUtilityClass-CYYdSLkV.js";import"./styled-B4hBdXs8.js";import"./generateUtilityClasses-7dram_XT.js";import"./useTheme-C9EIWu0e.js";import"./Box-CAg4Tsx7.js";import"./Container-DG9eXktv.js";import"./styled-aVKOBDcM.js";import"./createStyled-Ce75f-lr.js";import"./useThemeProps-DlhzAd0d.js";import"./FlexBox-DluCer-4.js";import"./Stack-C6HoR8k_.js";import"./Typography-DkJGsGTz.js";import"./Paper-BKCTlbQt.js";import"./useThemeProps-BLibk0ql.js";import"./Text-BTENkRLl.js";import"./AdapterDayjs-D1JpjkDV.js";import"./Modal-fooyFAIn.js";import"./utils-ClUtXAkm.js";import"./TransitionGroupContext-CZMjPoSB.js";import"./index-BginLdfj.js";import"./resolveComponentProps-b5o32fTm.js";import"./Popover-CTprQocu.js";import"./TextField-xW4lS50G.js";import"./useFormControl-B16JOFh2.js";import"./createSvgIcon-COsRokbB.js";import"./IconButton-Bwd-EBYU.js";import"./ButtonBase-pQD2E2i9.js";import"./DialogContent-CNCdvslU.js";import"./Button-bDQ4SD0F.js";import"./Chip-DqEC1oBy.js";import"./DateTimePicker-DuNCNG6Z.js";import"./Divider-qfOKhuSJ.js";import"./AppInfoRow-r354Xlqo.js";import"./Chip-C6_gr9Pz.js";import"./Divider-BYFJjNuf.js";import"./TreeView-Bm1zocjB.js";import"./Alert-DtTRNFbi.js";import"./LinearProgress-CHRD2DQp.js";import"./Spinner-dWVS9oPt.js";import"./Dialog-BLosbDfR.js";import"./MapToggleButtonPresentational-sMVPGoTJ.js";import"./Remove-BbJaJSzw.js";import"./LinkButton-DnPOi2Ez.js";import"./TextField-COjfZI8j.js";import"./Switch-CstIlIBg.js";import"./DatePicker-DBSyE5Fx.js";import"./Paper-DhD2fAsS.js";import"./ErrorFallback-CZ61smpx.js";import"./ErrorFallbackText-CfsRx3Jq.js";import"./ErrorFallbackWrapper-CV5TbnXm.js";import"./Brand-uk6lJML6.js";import"./constants-n8O9gxh0.js";import"./Edit-BDgoEkz2.js";const Ve={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
