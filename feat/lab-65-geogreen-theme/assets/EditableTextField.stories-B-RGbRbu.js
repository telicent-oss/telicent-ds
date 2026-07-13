import{r as n,j as o}from"./iframe-BTs8Qz_v.js";import{E as r}from"./DropdownButton-G-K-EndC.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-qL3nc6Ye.js";import"./createSvgIcon-ZqZYcYJv.js";import"./generateUtilityClass-XH2js52g.js";import"./styled-B0ve5Lte.js";import"./generateUtilityClasses-DzsYMhVt.js";import"./useTheme-BY7-I-_D.js";import"./Box-Ajc45ecz.js";import"./Box-BHCfSNSs.js";import"./Container-BT4lQ41_.js";import"./styled-DgGoeEUu.js";import"./createStyled-CiTOBok1.js";import"./useThemeProps-CHaXSOO8.js";import"./Stack-Cl9uE_8Z.js";import"./Typography-Bwzy_pT0.js";import"./Paper-DxuvVAQ6.js";import"./useThemeProps-XRwC7y3X.js";import"./Text-By5Br_b-.js";import"./AdapterDayjs-B4hS7p71.js";import"./Modal-BHy1MODJ.js";import"./utils-DsGpmSH6.js";import"./TransitionGroupContext-C2nTmoPW.js";import"./index-Anq-NE1T.js";import"./resolveComponentProps-BSvdUFPL.js";import"./TextField-BCq8fbtP.js";import"./useFormControl-kbGIszV2.js";import"./IconButton-BOjLmXTD.js";import"./ButtonBase-DlDbZFIP.js";import"./DialogContent-pg1EBpb5.js";import"./Button-B27AaC1x.js";import"./Chip-BttY0NCV.js";import"./DateTimePicker-C0SYLDsK.js";import"./Divider-CN9HmWY3.js";import"./Chip-bGugLWYg.js";import"./Divider-D8qwfiZK.js";import"./TreeView-D9FXVNiU.js";import"./Close-Ck6AS4Zz.js";import"./LinearProgress-BtCU_M3F.js";import"./Spinner-m7x04DVn.js";import"./Dialog-IL7KeYEd.js";import"./MapToggleButtonPresentational-C7HzS0Xc.js";import"./Remove-bxF0BX3Y.js";import"./TextField-BL90cYaN.js";import"./Switch-5GXWpenZ.js";import"./DatePicker-XxDKSNN6.js";import"./LinkButton-B7KGF6ie.js";import"./Paper-BjLrjFfj.js";import"./ErrorFallback-75I18Wfm.js";import"./ErrorFallbackText-CkvOLZB-.js";import"./ErrorFallbackWrapper-Do3gktls.js";import"./Brand-BV9ZwJS1.js";import"./constants-7Gz8l8bJ.js";import"./Edit-ClsnfoJ9.js";const ke={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},i={render:()=>{const[e,t]=n.useState("Click the pencil to edit");return o(r,{value:e,onSave:t,label:"test input"})}},l={render:()=>{const[e,t]=n.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return o(r,{value:e,onSave:a=>{t(a)},label:"long input text",fullWidth:!0})}},s={render:()=>{const[e,t]=n.useState("Edit me!");return o(r,{value:e,onSave:a=>{t(a)},label:"long input text",sx:{width:"250px"}})}},p={render:()=>{const[e,t]=n.useState("Edit me!");return o(r,{value:e,onSave:a=>{t(a)},label:"long input text",error:!0,errorText:"Something went wrong!"})}},u={render:()=>{const[e,t]=n.useState("");return o(r,{value:e,onSave:a=>{t(a)},label:"This is an empty field",helperText:"This is a helper text, that will show on the input field as long as there are no errorText"})}};var m,h,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const We=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,u as NoInitialValue,p as WithErrorText,We as __namedExportsOrder,ke as default};
