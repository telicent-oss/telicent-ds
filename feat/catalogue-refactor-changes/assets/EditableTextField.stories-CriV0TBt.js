import{r as n,j as o}from"./iframe-2a6KH_Y2.js";import{E as r}from"./DropdownButton-ee1y9LC3.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DsHhd6fS.js";import"./createSvgIcon-D_wZWHy4.js";import"./styled-DgdLtGG_.js";import"./generateUtilityClasses-CVtZWfJL.js";import"./useTheme-Cx6vnF0r.js";import"./Container-Du9KxdkV.js";import"./styled-D3ZZnIDk.js";import"./createStyled-DxFvKydN.js";import"./useThemeProps-vJmRtplj.js";import"./Stack-CojT_K4F.js";import"./Box-UIDy46IG.js";import"./Typography-DrPsKv4d.js";import"./Paper-BSuha06s.js";import"./useThemeProps-BL2jWHZa.js";import"./Text-kR8p7DIq.js";import"./AdapterDayjs-DDbCIOBk.js";import"./Modal-DJ8VBj3p.js";import"./utils-D2GhKSPk.js";import"./TransitionGroupContext-DW3H988m.js";import"./index-DrFhovnn.js";import"./TextField-BNf4QAhE.js";import"./useFormControl-CJp2h8rR.js";import"./IconButton-iUn1E9on.js";import"./ButtonBase-CsM7vvGl.js";import"./DialogContent-B_353Kkw.js";import"./Button-U2NznJnU.js";import"./Chip-D4g1B89E.js";import"./DateTimePicker-5YrKsRJP.js";import"./Divider-D9DUnApf.js";import"./Chip-CU7LtMVk.js";import"./Divider-wOcP7z2O.js";import"./TreeView-DYsm38IX.js";import"./LinearProgress-Di7e5FGy.js";import"./Spinner-A93-VFYS.js";import"./Dialog-CK4FehKs.js";import"./MapToggleButtonPresentational-BLFCwFJH.js";import"./Remove-CI5wx82-.js";import"./TextField-CfA3Y3m5.js";import"./Switch-DtkAca1Z.js";import"./DatePicker-DaayXdth.js";import"./LinkButton-Cms5QcfP.js";import"./Paper-wbthJljv.js";import"./ErrorFallback-uzjZCzEW.js";import"./ErrorFallbackText-B9n1SuaO.js";import"./ErrorFallbackWrapper-CvVKmhKf.js";import"./Brand-B-imz1vn.js";import"./constants-a7scF7as.js";import"./Edit-BAp5m9tO.js";const Ee={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},l={render:()=>{const[e,t]=n.useState("Click the pencil to edit");return o(r,{value:e,onSave:t,label:"test input"})}},i={render:()=>{const[e,t]=n.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return o(r,{value:e,onSave:a=>{t(a)},label:"long input text",fullWidth:!0})}},s={render:()=>{const[e,t]=n.useState("Edit me!");return o(r,{value:e,onSave:a=>{t(a)},label:"long input text",sx:{width:"250px"}})}},p={render:()=>{const[e,t]=n.useState("Edit me!");return o(r,{value:e,onSave:a=>{t(a)},label:"long input text",error:!0,errorText:"Something went wrong!"})}},u={render:()=>{const[e,t]=n.useState("");return o(r,{value:e,onSave:a=>{t(a)},label:"This is an empty field",helperText:"This is a helper text, that will show on the input field as long as there are no errorText"})}};var m,h,c;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Click the pencil to edit");
    return <EditableTextField value={value} onSave={setValue} label="test input" />;
  }
}`,...(c=(h=l.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var g,v,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="long input text" fullWidth />;
  }
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,S,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const fe=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{l as Basic,s as CustomWidth,i as FullWidth,u as NoInitialValue,p as WithErrorText,fe as __namedExportsOrder,Ee as default};
