import{a as s,r as y}from"./iframe-aFe7UUBz.js";import{h as D}from"./DropdownButton-CGpi1hqS.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-C4GBjpR7.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-_Gn5GBEU.js";import"./SvgIcon--evEnJni.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BisXqFak.js";import"./extendSxProp-Cg1_Zgz3.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./Box-D3NLLewX.js";import"./Container-SU972UVC.js";import"./styled-pNRJu87k.js";import"./createStyled-BGui5uB2.js";import"./useThemeProps-wiEASLar.js";import"./FlexBox-CmBTY25V.js";import"./Stack-DONLWdUd.js";import"./Typography-BW_wQ-ow.js";import"./Paper-Dibq-B0l.js";import"./CogIcon-Dzw3a1eq.js";import"./InfoIcon-DtypYTQN.js";import"./ExpandMoreIcon-CXldgYGR.js";import"./ThemeSwitchRow-Dg_y3FM8.js";import"./index-BZ_yw_br.js";import"./Text-DzLxPjqb.js";import"./AdapterDayjs-KkvHR9Mv.js";import"./useThemeProps-BXD491Jy.js";import"./Modal-B6NB2nb_.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CzKtgD_a.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-COer71JX.js";import"./index-BCoUhWCm.js";import"./utils-DumdPjpW.js";import"./Popover-DAqhZQe9.js";import"./InputAdornment-CZufPfa6.js";import"./useFormControl-BWvbFyMh.js";import"./TextField-BJ5r44lN.js";import"./FormControl-Drt8KI8a.js";import"./ListContext-BI1i6AEx.js";import"./useControlled-DSueLwQ1.js";import"./createSvgIcon-B8v7KFIv.js";import"./FormHelperText-B1iyLw_g.js";import"./IconButton-B1f28KGp.js";import"./ButtonBase--L73nkrK.js";import"./DialogContent-BK3fYsXw.js";import"./Button-i5m3WpsB.js";import"./Chip-jnP50xz1.js";import"./DataGrid-DvrmVkGc.js";import"./index-hVAbpQul.js";import"./Switch-CYakBrxK.js";import"./FormControlLabel-AQIEhTjn.js";import"./Skeleton-BYYXkkHT.js";import"./MenuItem-BksAsHXH.js";import"./dividerClasses-ClH17Faz.js";import"./LinearProgress-DoDInf46.js";import"./Divider-D0LHX0qm.js";import"./CircularProgress-C8hIlNO3.js";import"./Close-EYRLp0W2.js";import"./Tabs-D7uWqjx4.js";import"./TableCell-BAKDulqq.js";import"./ToggleButton-d-GapL7d.js";import"./_IconPopover-YVipcYc4.js";import"./Chip-CUl3csw_.js";import"./Divider-Dp_aJAS1.js";import"./TreeView-CZ0g_WUA.js";import"./Collapse-_-rzgl6R.js";import"./useSlot-CmIeWFIT.js";import"./AppInfoRow-F3c1S5e4.js";import"./AppSettings-DScsrM9R.js";import"./SvgIcon-Bpd7uWoU.js";import"./TableRow-b_2L1XJo.js";import"./LinearProgress-khjbRmBd.js";import"./Spinner-CWY5xgQX.js";import"./Dialog-DRC_GMD1.js";import"./MapToggleButtonPresentational-JgXdEZxi.js";import"./Remove-BYWHJlSb.js";import"./Alert-DqW_EzS7.js";import"./ToggleButton-DfTYlbw3.js";import"./LinkButton-17csqiIs.js";import"./TextField-Cx5VJ8ov.js";import"./Switch-4P0ZX1Dh.js";import"./LabeledSwitch-CLOpL5K_.js";import"./DatePicker-BxrT-zy4.js";import"./DateTimePicker-Di_rakTc.js";import"./LocalizationProvider-BHfuR2cp.js";import"./RadioGroup-OxucSz7v.js";import"./FormControl-DEBxrS_-.js";import"./FormHelperText-4VYnSz9d.js";import"./MenuItem-CpN00EoB.js";import"./AccordionDetails-fAqhD8kD.js";import"./Paper-B-DWjYaW.js";import"./ErrorFallback-DGzzW2Jr.js";import"./ErrorFallbackText-B_Z_nAtZ.js";import"./ErrorFallbackWrapper-CBwm4dqE.js";import"./Brand-GlYAhSh3.js";import"./Edit-qB64VPbS.js";const Dr={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
