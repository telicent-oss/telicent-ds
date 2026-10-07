import{r as o,a as n}from"./iframe-Y1N6bk8p.js";import{E as a}from"./DropdownButton-DLugr0xg.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-Cl7uik3S.js";import"./SvgIcon-CxVDfqSx.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DiMPCvor.js";import"./extendSxProp-DbTy98VK.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-D-jdU__u.js";import"./Box-D3afCydQ.js";import"./Box-CXk6M6mR.js";import"./Container-D3Y9-mOQ.js";import"./styled-WAGLmHxX.js";import"./createStyled-BL_vYvCM.js";import"./useThemeProps-Biv_2OSw.js";import"./FlexBox-DoF2Tbdg.js";import"./Stack-D8q2WUfD.js";import"./Typography-DmCu6xYW.js";import"./Paper-DN68ECSn.js";import"./CogIcon-DvPSQXZo.js";import"./InfoIcon-Ct5f0UzT.js";import"./ExpandMoreIcon-CeKVlKWF.js";import"./ThemeSwitchRow-BSMzMCw1.js";import"./index-LiVer2cg.js";import"./Text-B8NihZq2.js";import"./AdapterDayjs-DP2CnPXm.js";import"./useThemeProps-DFwnlb8_.js";import"./Modal-B4PiUlG8.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-w0BzhBs7.js";import"./resolveComponentProps-DtqC7Jdc.js";import"./index-CriZbu4z.js";import"./utils-FxzgolTc.js";import"./Popover-CwKmJLrH.js";import"./TextField-D67MRuoC.js";import"./useFormControl-D_Xige0L.js";import"./FormControl-v9I3oitM.js";import"./ListContext-BSGrFhbe.js";import"./useControlled-zS0ZvXST.js";import"./createSvgIcon-CqGXTWJV.js";import"./FormHelperText-DAWPwhSQ.js";import"./IconButton-BTiO4iMN.js";import"./ButtonBase-Dh8n1X5l.js";import"./DialogContent-C9N2UKrx.js";import"./Button-D5koxhYf.js";import"./Chip-BA5IS77I.js";import"./MenuItem-2qdsD5am.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-BSW2238Q.js";import"./Chip-Bbcx00in.js";import"./Divider-BxRyf5aR.js";import"./Divider-Cu_DPk8e.js";import"./TreeView-BLSiq3QR.js";import"./Collapse-DAMiDAlQ.js";import"./useSlot-sFClRxF7.js";import"./AppInfoRow-CjdXbBLa.js";import"./AppSettings-Dhwai-20.js";import"./SvgIcon-DDcy4gnv.js";import"./TableRow-CUQU1TNz.js";import"./LinearProgress-DijGLa0J.js";import"./Spinner-D28ZfjXd.js";import"./Dialog-B3meZdDB.js";import"./MapToggleButtonPresentational-DWQxMudH.js";import"./Remove-DH3EMgKC.js";import"./Alert-D3Q4Es8x.js";import"./ToggleButton-ClBjS5Ky.js";import"./LinkButton-C0iWbNJQ.js";import"./TextField-BgCiXhS4.js";import"./Switch-DUAgT_Dc.js";import"./LabeledSwitch-BWamddRC.js";import"./DatePicker-G9qJ6QsT.js";import"./DateTimePicker-BmvwZZ-N.js";import"./FormControl-DNaghd-n.js";import"./FormHelperText-kXl3i3tQ.js";import"./MenuItem-B6NIKMg1.js";import"./AccordionDetails-xda9fO-T.js";import"./Paper-D1WHigEv.js";import"./ErrorFallback-Cmgcm6jb.js";import"./ErrorFallbackText-COet1f5O.js";import"./ErrorFallbackWrapper-C4fgBbmv.js";import"./Brand-NzozEoiB.js";import"./Edit-BAaxdE7v.js";const at={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
