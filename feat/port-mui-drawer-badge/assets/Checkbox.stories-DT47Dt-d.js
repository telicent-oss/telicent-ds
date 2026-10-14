import{a as s,r as y}from"./iframe-C-ZFHi7G.js";import{h as D}from"./DropdownButton-DBXQPZiC.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-C8RueU9X.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-CbH3sEfM.js";import"./SvgIcon-BJCkR60K.js";import"./clsx-B-dksMZM.js";import"./styled-Bk2IjbB5.js";import"./extendSxProp-dXted_0R.js";import"./composeClasses-fLhin0tj.js";import"./Box-PWf94AkS.js";import"./Container-CV6bOf61.js";import"./styled-DNl7Cs_R.js";import"./createStyled-vuo4qSuW.js";import"./useThemeProps-CDA2VJay.js";import"./FlexBox-lULQm6VU.js";import"./Stack-CmCwoFm_.js";import"./Typography-CkxFGaa5.js";import"./Paper-C6Xte-jc.js";import"./CogIcon-CmSwAq5_.js";import"./InfoIcon-DtvtTana.js";import"./ExpandMoreIcon-CEeNpfle.js";import"./ThemeSwitchRow-Dvzp5zbn.js";import"./index-rmUNOSJG.js";import"./Text-CHFW8IH8.js";import"./ListItem-CnFySCf3.js";import"./ListContext-CUNnWBoY.js";import"./FormControl-z8ekdGjB.js";import"./useFormControl-CgAT6IKY.js";import"./TransitionGroupContext-C0NcEdG2.js";import"./resolveComponentProps-Ji4pwD1h.js";import"./ButtonBase-UsKYAmFM.js";import"./Toolbar-BFoIYY9Z.js";import"./TextField-BnMSP8bO.js";import"./Modal-Bh0uOVdy.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-8MMKxgpT.js";import"./index-BiUXR6Fr.js";import"./utils-D_VBJbmQ.js";import"./Popover-CpBmz1D4.js";import"./useControlled-DIYZR1vI.js";import"./createSvgIcon-CgHhWzsp.js";import"./FormHelperText-YXdNPWNE.js";import"./Close-Da5sWuiq.js";import"./Popper-BYgvOfOT.js";import"./Badge-BRhX8-6K.js";import"./Chip-rsJ9-v4L.js";import"./IconButton-BSmPEpg3.js";import"./FormControlLabel-C_CoaMTJ.js";import"./MenuItem-CLSLkyOY.js";import"./dividerClasses-dRG9if5p.js";import"./IconButton-D4AMQVbi.js";import"./Badge-OR03eEi0.js";import"./Chip-B2wcrvAN.js";import"./Divider-O0zDh8J4.js";import"./Divider-B3REhvRn.js";import"./TreeView-CxyUEHYQ.js";import"./useThemeProps-DuHDulq9.js";import"./Collapse-Bi1bo0w0.js";import"./useSlot-CLq2sdyu.js";import"./AppInfoRow-DXVzvm-o.js";import"./_IconPopover-DOXgOPu3.js";import"./AppSettings-Dlv5aBW5.js";import"./SvgIcon-xwJ9lbKe.js";import"./TableRow-C03rPSUq.js";import"./TableCell-CB2ecjuI.js";import"./LinearProgress-BMstATZR.js";import"./LinearProgress-aqc0myF3.js";import"./Spinner-D6q0L9xa.js";import"./CircularProgress-BZGJCY_5.js";import"./Dialog-BGqZYpLW.js";import"./DialogContent-CNYTn0i-.js";import"./Button-eDvdHhIu.js";import"./MapToggleButtonPresentational-DrTKcpNc.js";import"./Remove-C6ct4kNK.js";import"./Alert-DuvNx40M.js";import"./ToggleButton-BzArV2oI.js";import"./ToggleButton-CBZbI2uz.js";import"./ToggleButtonGroup-DnQDLnGR.js";import"./LinkButton-DiWs23j2.js";import"./TextField-Dtcgs6IQ.js";import"./Switch-B9Vu7ZeK.js";import"./Switch-BYiHkx-A.js";import"./LabeledSwitch-Cjz_DPwA.js";import"./RadioGroup-D-HBNE5D.js";import"./FormControl-CgN7reua.js";import"./FormHelperText-BnLTH0UY.js";import"./Tabs-crUQBx1x.js";import"./MenuItem-MYpO4lco.js";import"./AccordionDetails-BU3W9zwP.js";import"./Paper-C2fTVCnQ.js";import"./ErrorFallback-CsyZPSJe.js";import"./ErrorFallbackText-DIe6Jt0v.js";import"./ErrorFallbackWrapper-BOMF25ch.js";import"./Brand-_mV_4qml.js";import"./Edit-wGiylSA_.js";const Sr={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>s(I,{sx:{margin:"auto"},children:e()})},M=({...e})=>{const[v,R]=y.useState(!1);return s(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},i={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},a={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},m={render:e=>s(M,{...e}),args:{disabled:!1}};var p,c,n;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const Dr=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,m as ExampleWithOnChange,t as WithCustomLabel,a as WithNoLabel,i as WithRequired,Dr as __namedExportsOrder,Sr as default};
