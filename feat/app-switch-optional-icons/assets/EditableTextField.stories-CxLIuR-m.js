import{r as o,a as n}from"./iframe-B8lru9Ox.js";import{E as a}from"./DropdownButton-D5bjMSjg.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DqrK-S_Y.js";import"./SvgIcon-BgwuaJOO.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-B7kmWUc9.js";import"./extendSxProp-DjHg015s.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-lbsOwaIT.js";import"./Box-DtmlQxFY.js";import"./Box-D2AU3WA-.js";import"./Container-DOlWnnaB.js";import"./styled-LsKj47KW.js";import"./createStyled-_4klY0ey.js";import"./useThemeProps-DqCYqzYY.js";import"./FlexBox-QL3KD45m.js";import"./Stack-DQqlKiUu.js";import"./Typography-DtJW_51A.js";import"./Paper-4eMZAmsM.js";import"./CogIcon-Ch-cC12G.js";import"./InfoIcon-buuMzVkD.js";import"./ThemeSwitchRow-D81wGVaD.js";import"./index-DX_1Zw-E.js";import"./Text-Cy_FjCVa.js";import"./AdapterDayjs-B05HZLDs.js";import"./useThemeProps-DVQSamuW.js";import"./Modal-DMbdFXDI.js";import"./utils-D4kUvPaj.js";import"./TransitionGroupContext-Bg30LDe0.js";import"./index-BhBzwTqv.js";import"./resolveComponentProps-B4S3ggFk.js";import"./Popover-DGL3i7op.js";import"./TextField-Eij0i_Vp.js";import"./useFormControl-CLg-uBwy.js";import"./FormControl-DRfKH_qZ.js";import"./useControlled-D13dP5S1.js";import"./createSvgIcon-Cs4F3KcN.js";import"./FormHelperText-Bbq3OgSk.js";import"./IconButton-DUSx-Z4B.js";import"./ButtonBase-B1n-NBaA.js";import"./DialogContent-Bv7qBY9o.js";import"./Button-B6b6ie_Y.js";import"./Chip-DS6faPIl.js";import"./DateTimePicker-B2f9rqpT.js";import"./Divider-BythBDcI.js";import"./_IconPopover-BtykrXQA.js";import"./Chip-C7-LDCye.js";import"./Divider-CGpXJFUY.js";import"./TreeView-Skztq0S6.js";import"./Alert-CutSt2-9.js";import"./AppInfoRow-CnKSgvK0.js";import"./AppSettings-DhijNEqA.js";import"./TableRow-CSSGEL79.js";import"./LinearProgress-BbwxtDnN.js";import"./Spinner-DZRjnsts.js";import"./Dialog-BXhz5J8P.js";import"./MapToggleButtonPresentational-D0yGj-7g.js";import"./Remove-D_OeaEKR.js";import"./LinkButton-BR4a1XmD.js";import"./TextField-D7q2BR5w.js";import"./Switch-DP0Ivfww.js";import"./LabeledSwitch-0Oeg2Pzv.js";import"./DatePicker-BayJyfOL.js";import"./FormControl-z0pYS_Fc.js";import"./FormHelperText-BbhR6ctA.js";import"./Paper-CkTdphIQ.js";import"./ErrorFallback-BOH60sVX.js";import"./ErrorFallbackText-CjuRVe4b.js";import"./ErrorFallbackWrapper-CHBRDu9p.js";import"./Brand-BQ4MZmxe.js";import"./Edit-XXHTxPCB.js";const Je={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
