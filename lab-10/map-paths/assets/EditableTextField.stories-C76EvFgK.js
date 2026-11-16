import{r as a,a as n}from"./iframe-BjrXztvy.js";import{i as o}from"./UserProfileContent-YwxxBLO1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-dBpFgvsm.js";import"./clsx-B-dksMZM.js";import"./styled-CZSAv6ph.js";import"./extendSxProp-Bthi1mip.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DKC4tNwY.js";import"./TransitionGroupContext-Bkt8ykp0.js";import"./MapToggleButtonPresentational-bfG7yowY.js";import"./Remove-gsWyX-Lp.js";import"./createSvgIcon-CPBnrQiH.js";import"./SvgIcon-B5isJYog.js";import"./IconButton-Bn9Hma8U.js";import"./Paper-BZgZdenZ.js";import"./Box-F47BA0Hn.js";import"./XIcon-ZQ00GxhK.js";import"./Stack-K8HBDx6V.js";import"./styled-OzlqGBn7.js";import"./createStyled-ChpmfdhO.js";import"./useThemeProps-Ggzu69aw.js";import"./Typography-WZdIHWv0.js";import"./Box-D4Yea7CC.js";import"./Container-Dz0UBrhB.js";import"./FlexBox-C2m_hHiB.js";import"./Brand-C4AyXs8s.js";import"./IconButton-BZNX4IRe.js";import"./LinkButton-BiG5XURl.js";import"./AppInfoRow-QQUqARHA.js";import"./_IconPopover-DMkjh4MO.js";import"./Popover-CHGOs9uC.js";import"./utils-BtEp1Xpe.js";import"./index-BxB4E5u0.js";import"./index-D0p7aeEW.js";import"./Modal-Cwfc4HGx.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BF5TirMe.js";import"./useSlotProps-BNqAOz95.js";import"./InfoIcon-D83JWA8r.js";import"./Text-BkX1azto.js";import"./AppSettings-D0R77tUT.js";import"./CogIcon-DausHvAi.js";import"./Badge-CijpDrIE.js";import"./Badge-ChEc66ZK.js";import"./Chip-C4L73zbZ.js";import"./Chip-Cehwhsrm.js";import"./Divider-CEsBrrMM.js";import"./Divider-D90yCN7B.js";import"./dividerClasses-CmrggnBC.js";import"./ThemeSwitchRow-CzgtAJPj.js";import"./Skeleton-Cnro9Ssf.js";import"./Skeleton-YERebpLh.js";import"./TextField-Be_m1itn.js";import"./useFormControl-BXFuf1AA.js";import"./FormControl-CpIrVJXG.js";import"./ListContext-BbQ-ELWI.js";import"./useControlled-B3nW4gSi.js";import"./FormHelperText-DriOhB8T.js";import"./MenuItem-9AWDicSn.js";import"./ExpandMoreIcon-Drhp9NBW.js";import"./ListItem-BQbfhaNb.js";import"./Toolbar-NHe4wN1N.js";import"./Close-PYRyZLFk.js";import"./Popper-BP6_mYu6.js";import"./FormControlLabel-uXfgMOYb.js";import"./Edit-D7Wj015S.js";import"./SvgIcon-C9kKGRGN.js";import"./TableRow-BEr1GK-h.js";import"./TableCell-CKU-Sz5Y.js";import"./TreeView-C6Uvz5eX.js";import"./useThemeProps-DBqV773e.js";import"./index-fBdo_AAp.js";import"./Collapse-zg8g8jza.js";import"./Dialog-FcaLo1D3.js";import"./DialogContent-Cgw15Yeq.js";import"./Alert-DObdqKgJ.js";import"./useSlot-BZ0PDpI2.js";import"./LinearProgress-BPc8EmDZ.js";import"./LinearProgress-CzGVD_iw.js";import"./Spinner-CqnH8Z1g.js";import"./CircularProgress-BVSVe6Bz.js";import"./TextField-PgPe3GS0.js";import"./FormControl-CpHzLQRo.js";import"./FormHelperText-DGEG7tzH.js";import"./LabeledSwitch-CTvl5H5e.js";import"./Switch-CDvU1aS9.js";import"./Switch-DaX5OEsQ.js";import"./RadioGroup-MrifhHnI.js";import"./ToggleButton-CW3SCIEP.js";import"./ToggleButton-COzVB-Rg.js";import"./ToggleButtonGroup-CxQmKDVQ.js";import"./MenuItem-DfJXPFQL.js";import"./Tabs-UNb_SPs_.js";import"./AccordionSummary-cUjWgv_9.js";import"./Paper-BL8jtYAu.js";import"./ErrorFallback-DxZnaklR.js";import"./ErrorFallbackText-CBSkGSIV.js";import"./ErrorFallbackWrapper-2Ab5_OqS.js";const St={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
A text display that can seamlessly switch between **read-only** and **edit** modes, ideal for inline editing in forms, tables, or profile pages.  

---

**How it works:**
1. In read-only mode, the current value is shown as text alongside an **edit** (pencil) icon.
2. Click the pencil icon to switch to edit mode, revealing a standard MUI \`<TextField>\` pre-filled with the current value.
3. Type your changes, then:
   - Click the **check** icon to save, triggering the \`onSave\` callback.
   - Click the **clear** icon to cancel and revert to the original value.

---

**Key Features:**
- Fully controlled via the \`value\` and \`onSave\` props.
- Inherits all standard MUI \`TextField\` props, allowing customization of width, placeholder, size, variant, and more.
- Works with any parent state management — simply update the \`value\` in \`onSave\` to persist changes.

---

**Props:**
- \`value: string\` — The current displayed text.
- \`onSave: (value: string) => void\` — Called when the user saves a new value.
- *(...plus all standard MUI \`TextFieldProps\`)*

**Tip:** Pass \`sx\` or \`style\` to control width, max-width, or other layout properties.

\`\`\`tsx
 const [value, setValue] = useState("");

<EditableTextField value={value} onSave={setValue} label="test input" />
\`\`\`
        `}}}},i={render:()=>{const[e,t]=a.useState("Click the pencil to edit");return n(o,{value:e,onSave:t,label:"test input"})}},l={render:()=>{const[e,t]=a.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return n(o,{value:e,onSave:r=>{t(r)},label:"long input text",fullWidth:!0})}},s={render:()=>{const[e,t]=a.useState("Edit me!");return n(o,{value:e,onSave:r=>{t(r)},label:"long input text",sx:{width:"250px"}})}},p={render:()=>{const[e,t]=a.useState("Edit me!");return n(o,{value:e,onSave:r=>{t(r)},label:"long input text",error:!0,errorText:"Something went wrong!"})}},m={render:()=>{const[e,t]=a.useState("");return n(o,{value:e,onSave:r=>{t(r)},label:"This is an empty field",helperText:"This is a helper text, that will show on the input field as long as there are no errorText"})}},Tt=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];var d,h,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Click the pencil to edit");
    return <EditableTextField value={value} onSave={setValue} label="test input" />;
  }
}`,...(c=(h=i.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var g,v,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="long input text" fullWidth />;
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,S,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Edit me!");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="long input text" sx={{
      width: "250px"
    }} />;
  }
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var V,b,C;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Edit me!");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="long input text" error={true} errorText="Something went wrong!" />;
  }
}`,...(C=(b=p.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var E,f,y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="This is an empty field" helperText="This is a helper text, that will show on the input field as long as there are no errorText" />;
  }
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as Basic,s as CustomWidth,l as FullWidth,m as NoInitialValue,p as WithErrorText,Tt as __namedExportsOrder,St as default};
