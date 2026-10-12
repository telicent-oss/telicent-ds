import{a as m,r as y}from"./iframe-Cd_b2o5a.js";import{h as D}from"./DropdownButton-cxua4Oxx.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-D6LYlQtG.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-aVvcYNN5.js";import"./SvgIcon-B1KGk51t.js";import"./clsx-B-dksMZM.js";import"./styled-CGYYy0Dj.js";import"./extendSxProp-DmO-r4ow.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DMI-kw-e.js";import"./Box-dq88Ct6Q.js";import"./Container-Bzr0bNjy.js";import"./styled-DR5ZaSIi.js";import"./createStyled-BiNrR7bs.js";import"./useThemeProps-BeXTsOsN.js";import"./FlexBox-9GQOwYlj.js";import"./Stack-07laLbzL.js";import"./Typography-CsrEffoZ.js";import"./Paper-hJ6PGTek.js";import"./CogIcon-DhPeOlSR.js";import"./InfoIcon-CUR1EQCO.js";import"./ExpandMoreIcon-C7D9oUmn.js";import"./ThemeSwitchRow-BnpCDuSK.js";import"./index-M60GgTXs.js";import"./Text-Wjy9gNmi.js";import"./AdapterDayjs-C1RvpKBK.js";import"./useThemeProps-BJpOgLh3.js";import"./Modal-D0r_KFjq.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CXwLzekK.js";import"./resolveComponentProps-DcS_ho5J.js";import"./index-t4Ln2bEE.js";import"./utils-DuG08QIw.js";import"./Popover-hZ9yWhQ1.js";import"./TextField-Dko6rREu.js";import"./useFormControl-BYRlGA8y.js";import"./FormControl-LraBFmA3.js";import"./ListContext-B_SN-Vsv.js";import"./useControlled-DH9GLKAS.js";import"./createSvgIcon-Bb20z-GJ.js";import"./FormHelperText-Dsn6gvV_.js";import"./IconButton-BvOf-PbX.js";import"./ButtonBase-DtNJCaLI.js";import"./DialogContent-D9MmNMVa.js";import"./Button-9YQTmtlR.js";import"./Chip-Bai6p_3l.js";import"./MenuItem-BLZc0iJP.js";import"./dividerClasses-Du-ckaEr.js";import"./_IconPopover-CiSr5uQZ.js";import"./Chip-Blkti73k.js";import"./Divider-9h0MPdjV.js";import"./Divider-D1nuRWHP.js";import"./TreeView-DMlgxYdm.js";import"./Collapse-BgXK0y6u.js";import"./useSlot-CybJwoih.js";import"./AppInfoRow-Bf3N0ddF.js";import"./AppSettings-Czqo5fXt.js";import"./SvgIcon-U-axE2xd.js";import"./TableRow-DC5TBsGP.js";import"./LinearProgress-Bni58dnK.js";import"./Spinner-BwzA_JHU.js";import"./Dialog-CDfX8NcR.js";import"./MapToggleButtonPresentational-D8XYaC1X.js";import"./Remove-DqG_RTGn.js";import"./Alert-CMzup6BR.js";import"./ToggleButton-C3nKEC15.js";import"./ToggleButtonGroup-CoNFQC6R.js";import"./LinkButton-DOqUGJcT.js";import"./TextField-LWye6xaa.js";import"./Switch-vWVIvl1D.js";import"./LabeledSwitch-C8r-iiSL.js";import"./DatePicker-CtgFdiGq.js";import"./DateTimePicker-CED5Da2b.js";import"./FormControl-DlJ-t_WI.js";import"./FormHelperText-Bmovl1Lw.js";import"./MenuItem-IST6gdzD.js";import"./AccordionDetails-CK9RoavB.js";import"./Paper-Hgkbc48O.js";import"./ErrorFallback-Dt0mghmj.js";import"./ErrorFallbackText-B2d79ctb.js";import"./ErrorFallbackWrapper-BG5Vtd-v.js";import"./Brand-DegRULdI.js";import"./Edit-CNNLFkXb.js";const hr={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>m(I,{sx:{margin:"auto"},children:e()})},M=({...e})=>{const[v,R]=y.useState(!1);return m(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},i={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},s={render:e=>m(M,{...e}),args:{disabled:!1}};var c,n,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {}
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var d,h,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const lr=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,s as ExampleWithOnChange,t as WithCustomLabel,i as WithNoLabel,a as WithRequired,lr as __namedExportsOrder,hr as default};
