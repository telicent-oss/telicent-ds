import{r as n,j as o}from"./iframe-D9lU07Zf.js";import{E as r}from"./DropdownButton-DzsOMP1u.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-r0zPa3RZ.js";import"./createSvgIcon-DFI5qBHU.js";import"./generateUtilityClass-D7q2yxGy.js";import"./styled-DoKDlkZ_.js";import"./generateUtilityClasses-DlijklOR.js";import"./useTheme-SybXv74r.js";import"./Box-BJrD4UE_.js";import"./Box-CSybQHSa.js";import"./Container-BcSzuyYl.js";import"./styled-DiYYYjn2.js";import"./createStyled-BPBpdXBm.js";import"./useThemeProps-BAvRSqZ0.js";import"./Stack-BnA3evNe.js";import"./Typography-C6RHNrrz.js";import"./Paper-Cej6lYK6.js";import"./useThemeProps-BVMIZTQV.js";import"./Text-HEEd4Tr4.js";import"./AdapterDayjs-BjHxbXQG.js";import"./Modal-8YIgZsH9.js";import"./utils-CoFbKNqr.js";import"./TransitionGroupContext-jFit0_oH.js";import"./index-BBdfoeT5.js";import"./resolveComponentProps-E2VM1uz1.js";import"./TextField-CJ0-8TEN.js";import"./useFormControl-TA3T3Av9.js";import"./IconButton-tmuZo6L6.js";import"./ButtonBase-DSNICrLd.js";import"./DialogContent-BS32uX7_.js";import"./Button-DhyX7BiZ.js";import"./Chip-DoVi98mw.js";import"./DateTimePicker-CMScypHs.js";import"./Divider-AwwvZxp0.js";import"./Chip-luU8AZ1L.js";import"./Divider-BrsXIlBD.js";import"./TreeView-CJsNe1p9.js";import"./Close-C_etf32Q.js";import"./LinearProgress-Bxn_kvK2.js";import"./Spinner-DfGKdH87.js";import"./Dialog-Cw8kg19x.js";import"./MapToggleButtonPresentational-BbUeRSZp.js";import"./Remove-Be9W_CKm.js";import"./TextField-DFYGxZvh.js";import"./Switch-CoEGI3zX.js";import"./DatePicker-KE2OE2TB.js";import"./LinkButton-XbvtPO8L.js";import"./Paper-BwpRoinM.js";import"./ErrorFallback-BXGLlVLh.js";import"./ErrorFallbackText-C1gmEt6Z.js";import"./ErrorFallbackWrapper-DnVofVwB.js";import"./Brand-CKNi3Y53.js";import"./constants-mTaQgHmf.js";import"./Edit-CFpkLirJ.js";const ke={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
