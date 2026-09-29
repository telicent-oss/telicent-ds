import{r as o,a as n}from"./iframe-pSdNPpsj.js";import{E as a}from"./DropdownButton-PfYIilVr.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-8kjnvaru.js";import"./SvgIcon-BonYN8Aw.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BV2hxUmf.js";import"./extendSxProp-DB41LN08.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DVtKZHc7.js";import"./Box-CBjBaWaN.js";import"./Box-BoiUcmPE.js";import"./Container-2KzmGqL8.js";import"./styled-DydIvW0v.js";import"./createStyled-BCHR6s5i.js";import"./useThemeProps-CYWg9EgA.js";import"./FlexBox-hv-hpSGA.js";import"./Stack-Bs31Dqc4.js";import"./Typography-xJSRyULv.js";import"./Paper-CaOTbWnl.js";import"./CogIcon-BfeV780C.js";import"./InfoIcon-CvY1jMPl.js";import"./ExpandMoreIcon-k57z5o9e.js";import"./ThemeSwitchRow-BPScvN64.js";import"./index-DpDMCIG9.js";import"./Text-C8xYhcTn.js";import"./AdapterDayjs-Dder9SCv.js";import"./useThemeProps-xIwPk4zG.js";import"./Modal-Bours3kv.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-DQVEqSZG.js";import"./resolveComponentProps-DPCNAT4d.js";import"./index-CxGjzryR.js";import"./utils-BwusbXFX.js";import"./Popover-BBnSYe1Z.js";import"./TextField-nhnGPtzx.js";import"./useFormControl-CUuOM4EU.js";import"./FormControl-BvmTFN4D.js";import"./ListContext-vhA9Ec2W.js";import"./useControlled-CTRf4Kyy.js";import"./createSvgIcon-DQJUL0l4.js";import"./FormHelperText-C4G4-bY5.js";import"./IconButton-sbMpLibE.js";import"./ButtonBase-12w3s8A9.js";import"./DialogContent-6bzIhVp6.js";import"./Button-C4RV-peR.js";import"./Chip-BlG_pkiR.js";import"./MenuItem-CaHZacD4.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-Dbgx90FC.js";import"./Chip-CoSGGU0m.js";import"./Divider-BiRkEI1F.js";import"./Divider-C_qV4GnK.js";import"./TreeView-B43DTxN_.js";import"./Collapse-DCgMY-AU.js";import"./useSlot-D8cXYJ0o.js";import"./AppInfoRow-CmmXVQhw.js";import"./AppSettings-DiAaHAeX.js";import"./SvgIcon-Dk67ihyJ.js";import"./TableRow-BbcetRBz.js";import"./LinearProgress-4g4fQEVB.js";import"./Spinner-BhDP1jI-.js";import"./Dialog-HQr-WHjL.js";import"./MapToggleButtonPresentational-B3hG9Xgp.js";import"./Remove-C7Qh0rfw.js";import"./Alert-D6vFGcfN.js";import"./ToggleButton-DYJg3xc1.js";import"./LinkButton-CCaJDHCZ.js";import"./TextField-D6oyfCHl.js";import"./Switch-PrjoLUoj.js";import"./LabeledSwitch-BdwUyAoI.js";import"./DatePicker-BkGr75tM.js";import"./DateTimePicker-CPfgqStp.js";import"./FormControl-DGv8wv7P.js";import"./FormHelperText-c9msRWby.js";import"./MenuItem-Rg5Kc0O5.js";import"./AccordionDetails-xCw9eoCi.js";import"./Paper-DVNzQMfL.js";import"./ErrorFallback-aVzTS4kp.js";import"./ErrorFallbackText-C0CAwCyb.js";import"./ErrorFallbackWrapper-GQ-Y6ktD.js";import"./Brand-Bitp_hZv.js";import"./Edit-BGaDb461.js";const at={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},i={render:()=>{const[e,t]=o.useState("Click the pencil to edit");return n(a,{value:e,onSave:t,label:"test input"})}},l={render:()=>{const[e,t]=o.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return n(a,{value:e,onSave:r=>{t(r)},label:"long input text",fullWidth:!0})}},s={render:()=>{const[e,t]=o.useState("Edit me!");return n(a,{value:e,onSave:r=>{t(r)},label:"long input text",sx:{width:"250px"}})}},p={render:()=>{const[e,t]=o.useState("Edit me!");return n(a,{value:e,onSave:r=>{t(r)},label:"long input text",error:!0,errorText:"Something went wrong!"})}},m={render:()=>{const[e,t]=o.useState("");return n(a,{value:e,onSave:r=>{t(r)},label:"This is an empty field",helperText:"This is a helper text, that will show on the input field as long as there are no errorText"})}};var d,h,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ot=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,m as NoInitialValue,p as WithErrorText,ot as __namedExportsOrder,at as default};
