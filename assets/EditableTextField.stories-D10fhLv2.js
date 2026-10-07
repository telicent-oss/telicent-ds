import{r as o,a as n}from"./iframe-AFxgTgVh.js";import{E as a}from"./DropdownButton-CmjCz-up.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-Coc8f085.js";import"./SvgIcon-CgCZoLsz.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BsI0-Lki.js";import"./extendSxProp-BD-Y0mPz.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-CbdznVAQ.js";import"./Box-oVOzhj2X.js";import"./Box-BAyptZb_.js";import"./Container-Br5OlP2Q.js";import"./styled-BADavTd0.js";import"./createStyled-C-Iq8mjg.js";import"./useThemeProps-ChNg2e9b.js";import"./FlexBox-D3oDiYJs.js";import"./Stack-DmXgS0Zc.js";import"./Typography-DFz7k-kI.js";import"./Paper-CbgL2EIb.js";import"./CogIcon-DC6KQaAP.js";import"./InfoIcon-lSIhMqt2.js";import"./ExpandMoreIcon-CZhJx08f.js";import"./ThemeSwitchRow-C4g2Xynz.js";import"./index-CpoxvXIl.js";import"./Text-DXLE4G_s.js";import"./AdapterDayjs-DZVAbh7i.js";import"./useThemeProps-DHndbiQK.js";import"./Modal-qRAMf-Nc.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CXXJO1FV.js";import"./resolveComponentProps-BAwsKLAE.js";import"./index-4IveHujF.js";import"./utils-C0JGDBoq.js";import"./Popover-BsgVjdIR.js";import"./TextField-DxwO5kEU.js";import"./useFormControl-Bg5crxJM.js";import"./FormControl-B_dJc-MU.js";import"./ListContext-DytnD_x2.js";import"./useControlled-B8RTFtfz.js";import"./createSvgIcon-Dpm5xP5l.js";import"./FormHelperText-DMGyUIz_.js";import"./IconButton-DBTDpe9N.js";import"./ButtonBase-Be1Z9iU4.js";import"./DialogContent-DJzRyI5L.js";import"./Button-BVSqHqLN.js";import"./Chip-CLw8XhUv.js";import"./MenuItem-ksmP0_yb.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-3UG3pSje.js";import"./Chip-C6eTFzcU.js";import"./Divider-CiTbO13G.js";import"./Divider-Cs_qNx3V.js";import"./TreeView-Q7eAtxGU.js";import"./Collapse-CgizZByK.js";import"./useSlot-JMCK8GCP.js";import"./AppInfoRow-DaJEEGeD.js";import"./AppSettings-Bxrh47vJ.js";import"./SvgIcon-B1EPKKW1.js";import"./TableRow-CvYZ37P_.js";import"./LinearProgress-CpwNTlvx.js";import"./Spinner-rNhXcUyc.js";import"./Dialog-kpJLggSC.js";import"./MapToggleButtonPresentational-BeBKKkmg.js";import"./Remove-BR_Tqlmz.js";import"./Alert-B0IPru6R.js";import"./ToggleButton-DmIMHj3V.js";import"./LinkButton-DEB6LEJn.js";import"./TextField-B1Gh1rGr.js";import"./Switch-C_vcwcW1.js";import"./LabeledSwitch-BxWut5tD.js";import"./DatePicker-D23KJK8d.js";import"./DateTimePicker-CGr0SUDo.js";import"./FormControl-BEoO9Wxu.js";import"./FormHelperText-ByrV8KMP.js";import"./MenuItem-CSRF0Uv2.js";import"./AccordionDetails-5vciIkwG.js";import"./Paper-DERQ4Oel.js";import"./ErrorFallback-efIZsijd.js";import"./ErrorFallbackText-rPp7xJ4J.js";import"./ErrorFallbackWrapper-BFBmLnXB.js";import"./Brand-BuZzOnWw.js";import"./Edit-CnWyMZY6.js";const at={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
