import{r as o,a as n}from"./iframe-QjimQxGJ.js";import{E as a}from"./DropdownButton-BqQMtZNv.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-C4O34cYP.js";import"./SvgIcon-qDEXG8Q2.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-k9OHEYOT.js";import"./extendSxProp-CWL_eOV9.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-h6Umsisj.js";import"./Box-kqiIuPV6.js";import"./Box-BdgnJPj4.js";import"./Container-DqveXh-O.js";import"./styled-DdRNySmR.js";import"./createStyled-kkTu4cdj.js";import"./useThemeProps-GaSBv1_5.js";import"./FlexBox-BHBK3XbM.js";import"./Stack-BCJid8GC.js";import"./Typography-BALYr_AM.js";import"./Paper-B4HMI984.js";import"./CogIcon-DoAefpgk.js";import"./InfoIcon-KAZwn8zl.js";import"./ThemeSwitchRow-CqJgfSGe.js";import"./index-BhQh1m69.js";import"./Text-CbHxOYIZ.js";import"./AdapterDayjs-COKlw25t.js";import"./useThemeProps-qyYKSYwF.js";import"./Modal-DPpC_MaX.js";import"./utils-DWVeh98X.js";import"./TransitionGroupContext-BNsz8i9y.js";import"./index-C895Ui_J.js";import"./resolveComponentProps-u9w1Xhfi.js";import"./Popover-D6-B0sHe.js";import"./TextField-BxmNESyD.js";import"./useFormControl-CLcxU0V8.js";import"./FormControl-pQC5AWwY.js";import"./useControlled-ClIGAfqi.js";import"./createSvgIcon-B0ZMIwZ-.js";import"./FormHelperText-D3ES7yVt.js";import"./IconButton-CdzYSU6E.js";import"./ButtonBase-B3FHfXkx.js";import"./DialogContent-DEerxyRB.js";import"./Button-B0acl6RO.js";import"./Chip-BIs9pIL_.js";import"./DateTimePicker-Cs-8dsfN.js";import"./Divider-CfN-tf0_.js";import"./_IconPopover-enaiw0Ag.js";import"./Chip-D2kTYDHW.js";import"./Divider-D4gWlnBJ.js";import"./TreeView-DHji-qEu.js";import"./Alert-BIYPLeJ4.js";import"./AppInfoRow-DsusScyS.js";import"./AppSettings-Blvm1PFt.js";import"./TableRow-ipCVlD9g.js";import"./LinearProgress-CCUeeTNk.js";import"./Spinner-ZqiMizuS.js";import"./Dialog-CQqj-Shc.js";import"./MapToggleButtonPresentational-DlVdc9iK.js";import"./Remove-CZV99RA6.js";import"./LinkButton-C1rXXMBH.js";import"./TextField-Cc6z2PNl.js";import"./Switch-T5c-KsvY.js";import"./LabeledSwitch-CY2Gql7U.js";import"./DatePicker-CZCRHMp9.js";import"./FormControl-CNaUogrQ.js";import"./FormHelperText-BO3t8uTC.js";import"./Paper-BSq9F4WF.js";import"./ErrorFallback-Dzp1pGy2.js";import"./ErrorFallbackText-D_comUev.js";import"./ErrorFallbackWrapper-CDfvx67q.js";import"./Brand-DAKosmlu.js";import"./Edit-D8MCsODy.js";const Je={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
