import{a as s,r as y}from"./iframe-DXJBL9x_.js";import{h as D}from"./DropdownButton-Ck1F7xyJ.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-DPlGyRLj.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-uPUcmea-.js";import"./SvgIcon-BBzlhV2G.js";import"./clsx-B-dksMZM.js";import"./styled-CsWZb9OH.js";import"./extendSxProp-BPFiFnsi.js";import"./composeClasses-fLhin0tj.js";import"./Box-Bo6aUxrI.js";import"./Container-BpkmvtTi.js";import"./styled-BdvaptCO.js";import"./createStyled-CUvqKir0.js";import"./useThemeProps-BZz2lqqB.js";import"./FlexBox-B4rVdveV.js";import"./Stack-CuewDGku.js";import"./Typography-DJo4I-Wf.js";import"./Paper-Nu-QYyfA.js";import"./CogIcon-CoAjbINP.js";import"./InfoIcon-CoapGGcx.js";import"./ExpandMoreIcon-B33Ufify.js";import"./ThemeSwitchRow-rqOztiFe.js";import"./index-B-3eVBdp.js";import"./Text-Cd8V4L35.js";import"./ListItem-DFG_Xp5J.js";import"./ListContext-DOzi5bno.js";import"./FormControl-BZ3xKumC.js";import"./useFormControl-D4YDRhpd.js";import"./TransitionGroupContext-DhxQb8WC.js";import"./resolveComponentProps-CZl0YMKu.js";import"./ButtonBase-wJquHDGD.js";import"./Toolbar-Cz2sYW1x.js";import"./TextField-Dbn4DLF2.js";import"./Modal-BlVhDwBS.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-DSK8Y_R1.js";import"./utils-BzNNiNjo.js";import"./Popover-DvuxT2TT.js";import"./useControlled-JK2H1dPE.js";import"./createSvgIcon-CeNn4fLw.js";import"./FormHelperText-CLNyKbC1.js";import"./Close-DmbqPrtW.js";import"./Popper-CRY2U-m0.js";import"./Chip-oiyFfkOd.js";import"./IconButton-BDsd9--s.js";import"./FormControlLabel-BqmsWTqz.js";import"./MenuItem-DlV2oXej.js";import"./dividerClasses-B8vzaTuv.js";import"./_IconPopover-mqjPC8DF.js";import"./Chip-CvK8d6TP.js";import"./Divider-CVknC9dk.js";import"./Divider-CS83Zk5t.js";import"./TreeView-nY6YMZFU.js";import"./useThemeProps-CKi109gG.js";import"./Collapse-B3IwCn1j.js";import"./useSlot-CnB4Ksxy.js";import"./AppInfoRow-C_MXw4cX.js";import"./AppSettings-Bto6a5pX.js";import"./SvgIcon-BbV-GOw9.js";import"./TableRow-BFQIGQ0G.js";import"./TableCell-DsNOT7cG.js";import"./LinearProgress-ClOceYjE.js";import"./LinearProgress-DJoYhu9o.js";import"./Spinner-DmOJpO9I.js";import"./CircularProgress-BgbeK7sO.js";import"./Dialog-DoNpHslV.js";import"./DialogContent-BqAwFh2L.js";import"./Button-CkvRo_6-.js";import"./MapToggleButtonPresentational-ChQ52gJU.js";import"./Remove-lRy76Il0.js";import"./Alert-BgRBlvRq.js";import"./ToggleButton-Cp5pdiR3.js";import"./ToggleButton-b13yIPKW.js";import"./ToggleButtonGroup-nwMGxtld.js";import"./LinkButton-CFWDgi0H.js";import"./TextField-DbSeX_av.js";import"./Switch-Boc9Q6ti.js";import"./Switch-CbrWC3x_.js";import"./LabeledSwitch-DiCSkMqY.js";import"./RadioGroup-WuHXBzoT.js";import"./FormControl---tfQNLE.js";import"./FormHelperText-C_xlgv_t.js";import"./Tabs-CsJEKlqa.js";import"./MenuItem-D7ka_INz.js";import"./AccordionDetails-oiuPsPgc.js";import"./Paper-CDWZhXCm.js";import"./ErrorFallback-CSZl7Tiy.js";import"./ErrorFallbackText-Bilm7gRB.js";import"./ErrorFallbackWrapper-pg5NbF54.js";import"./Brand-nMISz8L9.js";import"./Edit-DidijPs9.js";const qr={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>s(I,{sx:{margin:"auto"},children:e()})},M=({...e})=>{const[v,R]=y.useState(!1);return s(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},i={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},a={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},m={render:e=>s(M,{...e}),args:{disabled:!1}};var c,p,n;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {}
  }
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var d,h,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "checkbox-disabled",
    disabled: true,
    onChange: () => {}
  }
}`,...(l=(h=o.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var u,g,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    label: "Custom Label",
    onChange: () => {}
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,x,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "checkbox-custom-label",
    label: "Required",
    required: true,
    onChange: () => {}
  }
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,q,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    required: true,
    onChange: () => {}
  }
}`,...(w=(q=a.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var W,L,S;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const wr=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,m as ExampleWithOnChange,t as WithCustomLabel,a as WithNoLabel,i as WithRequired,wr as __namedExportsOrder,qr as default};
