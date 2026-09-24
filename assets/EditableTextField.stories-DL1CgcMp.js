import{r as o,a as n}from"./iframe-COFs_UtR.js";import{E as a}from"./DropdownButton-DdQkmJUC.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BFtUc4n_.js";import"./SvgIcon-Cu8kR4gr.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DXI8L4mD.js";import"./extendSxProp-BfveVk5X.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-Br9ekNhD.js";import"./Box-BEb_3Tji.js";import"./Box-DSZohf0j.js";import"./Container-D004PVc3.js";import"./styled-DsoO9eq7.js";import"./createStyled-btN_05Dm.js";import"./useThemeProps-C1YLMFu1.js";import"./FlexBox-CM3pIGUP.js";import"./Stack-Udab0hUQ.js";import"./Typography-DDyWDEsv.js";import"./Paper-B8rmAYsL.js";import"./CogIcon-DOgitz6v.js";import"./InfoIcon-x18FY27k.js";import"./ThemeSwitchRow-D9BYjnUD.js";import"./index-CLjgFykj.js";import"./Text-DRb1poC2.js";import"./AdapterDayjs-C5Ouz9-c.js";import"./useThemeProps-B3b-1bce.js";import"./Modal-D75gtkH-.js";import"./utils-CkqtT2AM.js";import"./TransitionGroupContext-DualJ8j1.js";import"./index-VPMfSmH7.js";import"./resolveComponentProps-HkkRA5J0.js";import"./Popover-B7jPgFGm.js";import"./TextField-CbdZofsN.js";import"./useFormControl-CMXAxTns.js";import"./FormControl-CYTfQVUB.js";import"./useControlled-D1cEG3pG.js";import"./createSvgIcon-C2hSwNby.js";import"./FormHelperText-pSG34NeB.js";import"./IconButton-CdDcys5a.js";import"./ButtonBase-CdL6rHd2.js";import"./DialogContent-Bg1OWUuV.js";import"./Button-zSX_KHde.js";import"./Chip-BvLE5o4D.js";import"./DateTimePicker-D_pIcGw1.js";import"./Divider-CEy0w4OC.js";import"./_IconPopover-DMMWxGzb.js";import"./Chip-A07BHzeG.js";import"./Divider-CZSVcPjF.js";import"./TreeView-m4trFAYo.js";import"./Alert-D-nOd5MK.js";import"./AppInfoRow-B60RiNSZ.js";import"./AppSettings-BOKLsdFo.js";import"./TableRow-sL2cRuc0.js";import"./LinearProgress-CXvQl4fD.js";import"./Spinner-J2JsTlyl.js";import"./Dialog-Djic2CFV.js";import"./MapToggleButtonPresentational-DeY3mUq6.js";import"./Remove-CdEeIubw.js";import"./LinkButton-CKtknzFJ.js";import"./TextField-CzTYTlCu.js";import"./Switch-5JMBQZns.js";import"./LabeledSwitch-e4hrpLv0.js";import"./DatePicker-DSnxmH6o.js";import"./FormControl-CuWG66iZ.js";import"./FormHelperText-Dzx1WlCL.js";import"./Paper-D-Oim7GD.js";import"./ErrorFallback-TQb8da9R.js";import"./ErrorFallbackText-C8RcO45_.js";import"./ErrorFallbackWrapper-D42w-3GQ.js";import"./Brand-Bs80UuC1.js";import"./Edit-BOV9wVf0.js";const Je={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},i={render:()=>{const[e,t]=o.useState("Click the pencil to edit");return n(a,{value:e,onSave:t,label:"test input"})}},l={render:()=>{const[e,t]=o.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return n(a,{value:e,onSave:r=>{t(r)},label:"long input text",fullWidth:!0})}},s={render:()=>{const[e,t]=o.useState("Edit me!");return n(a,{value:e,onSave:r=>{t(r)},label:"long input text",sx:{width:"250px"}})}},p={render:()=>{const[e,t]=o.useState("Edit me!");return n(a,{value:e,onSave:r=>{t(r)},label:"long input text",error:!0,errorText:"Something went wrong!"})}},u={render:()=>{const[e,t]=o.useState("");return n(a,{value:e,onSave:r=>{t(r)},label:"This is an empty field",helperText:"This is a helper text, that will show on the input field as long as there are no errorText"})}};var d,h,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(C=(b=p.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var E,f,y;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="This is an empty field" helperText="This is a helper text, that will show on the input field as long as there are no errorText" />;
  }
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Le=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,u as NoInitialValue,p as WithErrorText,Le as __namedExportsOrder,Je as default};
