import{a as s,r as y}from"./iframe-BRZEQbLf.js";import{h as D}from"./DropdownButton-N7mOiPnB.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-C-Jkwpue.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-CRw7mH6i.js";import"./SvgIcon-Cw9EbMaS.js";import"./clsx-B-dksMZM.js";import"./styled-B4tr5Gpt.js";import"./extendSxProp-DVGYUDL2.js";import"./composeClasses-fLhin0tj.js";import"./Box-Ssrk9oiz.js";import"./Container-F_s21ndw.js";import"./styled-D3McFGwu.js";import"./createStyled-C9tzuBR8.js";import"./useThemeProps-CoXr1FEd.js";import"./FlexBox-tS4lfUQV.js";import"./Stack-B7JViYfU.js";import"./Typography-zyOAXgEh.js";import"./Paper-e6uvZaws.js";import"./CogIcon-CYAkKwBZ.js";import"./InfoIcon-gVxMZ7aF.js";import"./ExpandMoreIcon-CodnJQ1t.js";import"./ThemeSwitchRow-BHEJY-8w.js";import"./index-COkuDLt1.js";import"./Text-DMBl0hvr.js";import"./AdapterDayjs-CiGj10BE.js";import"./useThemeProps-D0DlkUpD.js";import"./Modal-B2KfxTDw.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-BvGHbgO8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CbHM54-A.js";import"./index-BDWDU8-z.js";import"./utils-Cyajf9FY.js";import"./Popover-D2KkDtRr.js";import"./InputAdornment-BfwQk9eb.js";import"./useFormControl-Co9F6LxC.js";import"./TextField-Bebx8VFJ.js";import"./FormControl-C-aOZzhL.js";import"./ListContext-I50NLL-h.js";import"./useControlled-D1dqjRMI.js";import"./createSvgIcon-oad7o5IJ.js";import"./FormHelperText-BQ_DNaGt.js";import"./IconButton-DVslTQgr.js";import"./ButtonBase-HJ4mmBfm.js";import"./DialogContent-CFFTpGiD.js";import"./Button-CUHSn2HN.js";import"./Chip-BprlDat8.js";import"./DataGrid-CtLBQ2rA.js";import"./index-CFm5lWVH.js";import"./Switch-DLYnFPqF.js";import"./FormControlLabel-RsIdwsU5.js";import"./Skeleton-rphQfOFS.js";import"./MenuItem--HWde8Qw.js";import"./dividerClasses-CUMrjw2R.js";import"./LinearProgress-B8OYi-3g.js";import"./Divider-C9VN5X_l.js";import"./CircularProgress-D9PR8cnY.js";import"./Close-DWL9XO9n.js";import"./Tabs-3USXMiN9.js";import"./TableCell-Dtrs0rAS.js";import"./ToggleButton-DYW4-3w7.js";import"./_IconPopover-CjPnZK6_.js";import"./Chip-DEZNB5qQ.js";import"./Divider-DfQyPts_.js";import"./TreeView-BNZRdyEt.js";import"./Collapse-DspQfHEJ.js";import"./useSlot-Da5iOCrs.js";import"./AppInfoRow-ClgwB6er.js";import"./AppSettings-thUazhA0.js";import"./SvgIcon-CCghYlx6.js";import"./TableRow-BNDJvZVS.js";import"./LinearProgress-CUlx6isd.js";import"./Spinner-IqwRn4dW.js";import"./Dialog-DSKAGJMO.js";import"./MapToggleButtonPresentational-BS9z7Dku.js";import"./Remove-CWBxjnqT.js";import"./Alert-Df9Ot4b9.js";import"./ToggleButton-CFbnS39h.js";import"./ToggleButtonGroup-B4rhHnrt.js";import"./LinkButton-DQmtcsO3.js";import"./TextField-Dmzeh5Vn.js";import"./Switch-BQ28hVZN.js";import"./LabeledSwitch-Qta80UJb.js";import"./DatePicker-kXhjc28H.js";import"./DateTimePicker-KkImEtet.js";import"./LocalizationProvider-I81jBPQe.js";import"./RadioGroup-CVVu-mNd.js";import"./FormControl-Bh6ylgh2.js";import"./FormHelperText-eEO_7Hve.js";import"./MenuItem-CELqUZNo.js";import"./AccordionDetails-BU2K71MQ.js";import"./Paper-B8J14Eb1.js";import"./ErrorFallback-DNF8piMD.js";import"./ErrorFallbackText-DFl1Netk.js";import"./ErrorFallbackWrapper-C5T8ZSzH.js";import"./Brand-DmInPiXq.js";import"./Edit-rGVb-MEj.js";const Dr={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const vr=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,m as ExampleWithOnChange,t as WithCustomLabel,a as WithNoLabel,i as WithRequired,vr as __namedExportsOrder,Dr as default};
