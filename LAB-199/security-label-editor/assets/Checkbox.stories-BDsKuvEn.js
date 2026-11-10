import{a as s,r as y}from"./iframe-BZHB3Un-.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{h as D}from"./UserProfileContent-DAd2yYLO.js";import{B as I}from"./Box-CTxcfl9f.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D-ZFpLGt.js";import"./clsx-B-dksMZM.js";import"./styled-DFCsjTlG.js";import"./extendSxProp-CzgBeSy5.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-CSj4P6pw.js";import"./TransitionGroupContext-CMC_19_q.js";import"./MapToggleButtonPresentational-Cp4hYjou.js";import"./Remove-B95LyZ4A.js";import"./createSvgIcon-Di0onuak.js";import"./SvgIcon-DX0QMT8j.js";import"./IconButton-7ww1QELc.js";import"./Paper-DUpmP5HH.js";import"./XIcon-CMSbyjlB.js";import"./Stack-DxNHW9Oc.js";import"./styled-cmwt6iFF.js";import"./createStyled-DxnKb23n.js";import"./useThemeProps-D_zUfiSC.js";import"./Typography-z5FfRvY3.js";import"./Box-DiPYbFt5.js";import"./Container-DmrKR_aT.js";import"./FlexBox-tGhr2yqn.js";import"./Brand-MqwDsCPU.js";import"./IconButton-CM4zelNT.js";import"./LinkButton-D_rBBBP1.js";import"./AppInfoRow-DrjnbaOW.js";import"./_IconPopover-CbWDY7xq.js";import"./Popover-BjbYehdE.js";import"./utils-cH3ejkVE.js";import"./index-B0Xunt1t.js";import"./index-B5k6Jcma.js";import"./Modal-NAHaE5zp.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BrqKpcQI.js";import"./useSlotProps-CPJK55gG.js";import"./InfoIcon-CWbtE50h.js";import"./Text-3mwzoKOr.js";import"./AppSettings-Cnd9oPXt.js";import"./CogIcon-B4CvVzjS.js";import"./Badge-CnTk467N.js";import"./Badge-C_HtVrdi.js";import"./Chip-B5Qnfnmc.js";import"./Chip-wc17TB0W.js";import"./Divider-DzclfdEu.js";import"./Divider-CWRJhMbi.js";import"./dividerClasses-jWT-D4rl.js";import"./ThemeSwitchRow-DyN5Xd5p.js";import"./Skeleton-DwMrttJW.js";import"./Skeleton-B-oRqWrL.js";import"./TextField-PID_gPrg.js";import"./useFormControl-DJsbcvO2.js";import"./FormControl-BGctbngO.js";import"./ListContext-DbBECZus.js";import"./useControlled-CHatxUO2.js";import"./FormHelperText-t48YGxt5.js";import"./MenuItem-C9dMsQON.js";import"./ExpandMoreIcon-BY91CUws.js";import"./ListItem-Bl45hr75.js";import"./Toolbar-D0C-FHY9.js";import"./Close-N_DdzxXD.js";import"./Popper-Pcs9Nhir.js";import"./FormControlLabel-j7Gb_XUM.js";import"./Edit-Ba53KRFr.js";import"./SvgIcon-QkI8KwIQ.js";import"./TableRow-B32Y4JfJ.js";import"./TableCell-CBeb-3yx.js";import"./TreeView-CewVhRNn.js";import"./useThemeProps-ceYpTy6o.js";import"./index-VU7a6TPT.js";import"./Collapse-DZqhyoUz.js";import"./Dialog-Cs7wfcZs.js";import"./DialogContent-DPJEn1dC.js";import"./Alert-Dez6eiMf.js";import"./useSlot-BDNWXL-n.js";import"./LinearProgress-EmU5nnew.js";import"./LinearProgress-BihuoFKl.js";import"./Spinner-D5Jd85BR.js";import"./CircularProgress-DNevguKX.js";import"./TextField-DY3kfjm3.js";import"./FormControl-BG0iQYvU.js";import"./FormHelperText-DGuryOxw.js";import"./LabeledSwitch-CjU-tu_0.js";import"./Switch-CWWkTEfH.js";import"./Switch-CP1MaWVZ.js";import"./RadioGroup-DHwZAtU9.js";import"./ToggleButton-DNWc6yfH.js";import"./ToggleButton-BXdPjjSE.js";import"./ToggleButtonGroup-DMSjue0t.js";import"./MenuItem-BxQ5rQ8Q.js";import"./Tabs-BwMTEiRO.js";import"./AccordionSummary-CsGp2Z5d.js";import"./Paper-DAPKePBK.js";import"./ErrorFallback-BzU2Dhgy.js";import"./ErrorFallbackText-DZhyfm5F.js";import"./ErrorFallbackWrapper-CkvBZjx3.js";const Rr={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>s(I,{sx:{margin:"auto"},children:e()})},M=({...e})=>{const[v,R]=y.useState(!1);return s(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},i={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},a={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},m={render:e=>s(M,{...e}),args:{disabled:!1}},Ur=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];var p,c,n;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {}
  }
}`,...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var d,h,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};export{r as Default,o as Disabled,m as ExampleWithOnChange,t as WithCustomLabel,a as WithNoLabel,i as WithRequired,Ur as __namedExportsOrder,Rr as default};
