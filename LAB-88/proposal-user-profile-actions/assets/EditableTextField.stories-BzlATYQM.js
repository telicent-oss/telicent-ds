import{r as n,j as o}from"./iframe-CXSK8Dk-.js";import{E as r}from"./DropdownButton-vWLux3xG.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DfXchAa_.js";import"./SvgIcon-CwlR4LV8.js";import"./generateUtilityClass-Fzt3JCAB.js";import"./styled-DtvgUq6a.js";import"./generateUtilityClasses-Bj4Ss80x.js";import"./useTheme-BKykcnyZ.js";import"./Box-PoQ7y_F9.js";import"./Box-CN1tfwJW.js";import"./Container-BYH1eQOO.js";import"./styled-hp6s30PY.js";import"./createStyled-jo3qW0uY.js";import"./useThemeProps-CkYUtoJ-.js";import"./FlexBox-aDkc32O8.js";import"./Stack-DTT6iyaf.js";import"./Typography-_WXcuVAU.js";import"./Paper-CCY0nncl.js";import"./useThemeProps-BBCRbUjf.js";import"./Text-BMxl2SwS.js";import"./AdapterDayjs-DBeZyuIU.js";import"./Modal-C6fXv4Zz.js";import"./utils-BP8_ys-M.js";import"./TransitionGroupContext-CIYUs1Uk.js";import"./index-BH3lY3kJ.js";import"./resolveComponentProps-B-UI_umu.js";import"./Popover-Dbdn6-R4.js";import"./TextField-CsymqzzJ.js";import"./useFormControl-8AnV7jcl.js";import"./createSvgIcon-B4OWaiSw.js";import"./IconButton-CH8TE1o1.js";import"./ButtonBase-CyMDbepC.js";import"./DialogContent-CPmdNXcl.js";import"./Button-OtEdq2P_.js";import"./Chip-DpWSlKGB.js";import"./DateTimePicker-CuvapaAa.js";import"./Divider-Bv_OvFaD.js";import"./AppInfoRow-BqYxjxEK.js";import"./Chip-CP3VY8ZP.js";import"./Divider-B42Uh_Bj.js";import"./TreeView-DpdtxLcB.js";import"./Alert-B_Svt6kM.js";import"./LinearProgress-BzA3k14P.js";import"./Spinner-ClMpHh1d.js";import"./Dialog-B-CBTz5q.js";import"./MapToggleButtonPresentational-CEEmCWRw.js";import"./Remove-DsJJL5XN.js";import"./LinkButton-C4EtbQ1R.js";import"./TextField-C1RKnAyX.js";import"./Switch-Ck6dNew2.js";import"./DatePicker-63Sx7fEQ.js";import"./Paper-BtVQmXu1.js";import"./ErrorFallback-CyHZraUv.js";import"./ErrorFallbackText-CXNMYw6_.js";import"./ErrorFallbackWrapper-C9ggY6qV.js";import"./Brand-Bh3aijrf.js";import"./constants-CY3-_VsX.js";import"./Edit-6FH8M8KH.js";const Pe={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ue=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,u as NoInitialValue,p as WithErrorText,Ue as __namedExportsOrder,Pe as default};
