import{r as n,j as o}from"./iframe-IZoSKsE3.js";import{E as r}from"./DropdownButton-B5TP08KZ.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-RuE3VV1c.js";import"./createSvgIcon-D0jCcW4R.js";import"./generateUtilityClass-DxC2Wx0F.js";import"./styled-PcYrI7eH.js";import"./generateUtilityClasses-COTvziYz.js";import"./useTheme-CsPhboDS.js";import"./Box-uH6Ohr9R.js";import"./Box-DfvW-z9e.js";import"./Container-DG8DPGND.js";import"./styled-xThT8ge4.js";import"./createStyled-AIvOzxUM.js";import"./useThemeProps-Fa_ce5Ni.js";import"./Stack-9NxgANXW.js";import"./Typography-CQLnp7AW.js";import"./Paper-ClTtkpZ4.js";import"./useThemeProps-DTUKyBXe.js";import"./Text-Kj3CiPWT.js";import"./AdapterDayjs-X4Nz8chh.js";import"./Modal-z7cB2q78.js";import"./utils-Df1nm0Py.js";import"./TransitionGroupContext-Q2DBTf-m.js";import"./index-DlegAnnu.js";import"./resolveComponentProps-2LdfrHoa.js";import"./TextField-C1yTht9j.js";import"./useFormControl-BUYDSUI9.js";import"./IconButton-DegQ21xD.js";import"./ButtonBase-qLroFK0e.js";import"./DialogContent-CeI2ul6W.js";import"./Button-CeFHt3lU.js";import"./Chip-D1Z91CjO.js";import"./DateTimePicker-Cp3vG90e.js";import"./Divider-BYw826Ky.js";import"./Chip-B0Z93eta.js";import"./Divider-B-3_Adf4.js";import"./TreeView-CuKNTmME.js";import"./Close-Bkeo-_v7.js";import"./LinearProgress-DReytKR0.js";import"./Spinner-BRYGcylR.js";import"./Dialog-CAOjiQ45.js";import"./MapToggleButtonPresentational-BDY0ODha.js";import"./Remove-CPvZ5wnT.js";import"./TextField-Bfy6L2oH.js";import"./Switch-DV-LHNwK.js";import"./DatePicker-jgDY5iU9.js";import"./LinkButton-DuZk3qqS.js";import"./Paper-CERtHtjI.js";import"./ErrorFallback-xEgWIGhC.js";import"./ErrorFallbackText-CmtVqweP.js";import"./ErrorFallbackWrapper-CT6MF4FT.js";import"./Brand-BVth3CVq.js";import"./constants-CIQOnJ5P.js";import"./Edit-CK78KsNY.js";const ke={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
