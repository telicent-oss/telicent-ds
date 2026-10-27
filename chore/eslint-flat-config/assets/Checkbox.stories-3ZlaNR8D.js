import{a as s,r as y}from"./iframe-DZvJTdLH.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{h as D}from"./UserProfileContent-BecRDo52.js";import{B as I}from"./Box-BKngloQ-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-_W7uhZIP.js";import"./clsx-B-dksMZM.js";import"./styled-CYiE1R_0.js";import"./extendSxProp-CJf5Ylsc.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Gs2OW64u.js";import"./TransitionGroupContext-DW-CadkF.js";import"./MapToggleButtonPresentational-Bv15blBa.js";import"./Remove-DfAAsDlO.js";import"./createSvgIcon-DAAJopla.js";import"./SvgIcon-Dh5ZJP-b.js";import"./IconButton-DUdtZIUE.js";import"./Paper-CCIRRnYl.js";import"./XIcon-QAa36Zq2.js";import"./Stack-Tdm1puzf.js";import"./styled-D3T-GcQA.js";import"./createStyled-DCQOt2Af.js";import"./useThemeProps-DukH9-pI.js";import"./Typography-CMsNHFNw.js";import"./Box-oyFUK34N.js";import"./Container-BneX2xXG.js";import"./FlexBox-DqoSphCj.js";import"./Brand-fdaXkxaR.js";import"./IconButton-8pZ9K19z.js";import"./LinkButton-oo7B018k.js";import"./AppInfoRow-BnZOAG2R.js";import"./_IconPopover-C-5OzzCa.js";import"./Popover-DCCxxHyt.js";import"./utils-BojYxu5F.js";import"./index-BeNEZCo_.js";import"./index-DZKKb8Ei.js";import"./Modal-B-Jrfzth.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CGbu6pRn.js";import"./useSlotProps-D1CGgc7b.js";import"./InfoIcon-zRlouagw.js";import"./Text-CeICp6tE.js";import"./AppSettings-CwOueJgv.js";import"./CogIcon-CIuYjsyA.js";import"./Badge-CXcYRuuH.js";import"./Badge-DAQPuUGC.js";import"./Chip-DOiPte_Q.js";import"./Chip-D0ft7hQi.js";import"./Divider-Bt0PK1Em.js";import"./Divider-Co3nspBN.js";import"./dividerClasses-DXr8v9nN.js";import"./ThemeSwitchRow-PZEOW11l.js";import"./index--cAEdwB6.js";import"./Skeleton-oWp-lzGI.js";import"./Skeleton-B6kfoS7x.js";import"./TextField--zteS9Z3.js";import"./useFormControl-DRohniRh.js";import"./FormControl-CMWNxSpD.js";import"./ListContext-IkSGtFSk.js";import"./useControlled-CMjA5emF.js";import"./FormHelperText-DSqqnB4u.js";import"./MenuItem-BbOJvVrz.js";import"./ExpandMoreIcon-CoyOjiP1.js";import"./ListItem-BW1ZgJz6.js";import"./Toolbar-BUoDdB4_.js";import"./Close-HI-kgcXD.js";import"./Popper-FEDRhdQ8.js";import"./FormControlLabel-W0LRkKmU.js";import"./Edit-7kV_dAD-.js";import"./SvgIcon-DjOKORyd.js";import"./TableRow-B_USo3AD.js";import"./TableCell-Dqb6AS6c.js";import"./TreeView-2KoVSPL2.js";import"./useThemeProps-HgEH_AVI.js";import"./Collapse-MMMT4y8r.js";import"./Dialog-DSHn1z9S.js";import"./DialogContent-B0W5F4Cx.js";import"./Alert-CcKbQcmF.js";import"./useSlot-CzbqdBW5.js";import"./LinearProgress-D96_7Ef0.js";import"./LinearProgress-CkoUAzn0.js";import"./Spinner-MO7bqc-q.js";import"./CircularProgress-CyLAzHGZ.js";import"./TextField-C7If2Wuf.js";import"./FormControl-CDX6nODe.js";import"./FormHelperText-CLInVfCn.js";import"./LabeledSwitch-CLfoxOWm.js";import"./Switch-BTn852xS.js";import"./Switch-D4XwAo5L.js";import"./RadioGroup-CHruPiDE.js";import"./ToggleButton-L5BGVeTP.js";import"./ToggleButton-wbRLKRj1.js";import"./ToggleButtonGroup-B8J0oCmm.js";import"./MenuItem-DN6TEHwr.js";import"./Tabs-CrI35iIi.js";import"./AccordionSummary-DG4EpXIp.js";import"./Paper-BMay5fSE.js";import"./ErrorFallback-Cd58QQxa.js";import"./ErrorFallbackText-MlzepuDI.js";import"./ErrorFallbackWrapper-CeD4slRe.js";const Rr={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
