import{r as n,j as o}from"./iframe-2R0I_iab.js";import{E as r}from"./DropdownButton-DIABJQSC.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DgD39kRa.js";import"./createSvgIcon-mEStq9kO.js";import"./generateUtilityClass-CD2y2PA9.js";import"./styled-DOqFaxF3.js";import"./generateUtilityClasses-CQX3K1Az.js";import"./useTheme-DIsbzBAj.js";import"./Box-DkaRWSls.js";import"./Box-CnYDa6Qf.js";import"./Container-CVVcdNPZ.js";import"./styled-DSveC2VB.js";import"./createStyled-7MyDbkZC.js";import"./useThemeProps-BZXXP621.js";import"./Stack-CY2zen42.js";import"./Typography-CLpqeEo-.js";import"./Paper-d8y5ElZ3.js";import"./useThemeProps-DFSQRIyd.js";import"./Text-ijTctchc.js";import"./AdapterDayjs-C0knh-V0.js";import"./Modal-CTV7kQyA.js";import"./utils-Cmi71HQq.js";import"./TransitionGroupContext-DqwjpCqS.js";import"./index-cXybQAtE.js";import"./resolveComponentProps-Cv5RNStH.js";import"./TextField-CGJuDnTR.js";import"./useFormControl-Dksspww5.js";import"./IconButton-2Ggfedl3.js";import"./ButtonBase-CCY4F8Yx.js";import"./DialogContent-BFfU8EFI.js";import"./Button-Bvu6LaZX.js";import"./Chip-Ci5Wvh6t.js";import"./DateTimePicker-Dk1S7IIq.js";import"./Divider-CD7sLQ3W.js";import"./Chip-CR4NBaGA.js";import"./Divider-DmfX1O82.js";import"./TreeView-DooNYzs2.js";import"./Close-DqanLwtm.js";import"./LinearProgress-dsytnwK0.js";import"./Spinner-CnGh8NP_.js";import"./Dialog-3ino5muI.js";import"./MapToggleButtonPresentational-Bc5YYuzo.js";import"./Remove-DkyK2kxE.js";import"./TextField-DYkturVF.js";import"./Switch-D_taiJx6.js";import"./DatePicker-BB6UCZL8.js";import"./LinkButton-p2kJftH-.js";import"./Paper-rT427azC.js";import"./ErrorFallback-DwUrMpBh.js";import"./ErrorFallbackText-mQySYuZ9.js";import"./ErrorFallbackWrapper-BbmJfuZU.js";import"./Brand-JWp-aIIF.js";import"./constants-CTxUe8Mo.js";import"./Edit-CEDurCbO.js";const ke={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
