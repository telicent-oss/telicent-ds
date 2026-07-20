import{r as n,j as o}from"./iframe-DE4o_xuf.js";import{E as r}from"./DropdownButton-TZ8NqmLi.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BBsynfLU.js";import"./createSvgIcon-DtXO-Uv_.js";import"./generateUtilityClass-DHTzyDY3.js";import"./styled-CGCPQysn.js";import"./generateUtilityClasses-DcHmrLgo.js";import"./useTheme-BzESzBxP.js";import"./Box-CXnvlXpg.js";import"./Box-Bd_zZ9oM.js";import"./Container-CDYT1mRl.js";import"./styled-D-cxiqNK.js";import"./createStyled-BO30qbE7.js";import"./useThemeProps-o8Jugz6q.js";import"./Stack-Be4qbLTD.js";import"./Typography-Qj6Vzb5q.js";import"./Paper-CMgwwm5d.js";import"./useThemeProps-Ce-tiBQL.js";import"./Text-MlQGavPh.js";import"./AdapterDayjs-Bzej26a6.js";import"./Modal-UPQCKQyn.js";import"./utils-BL9EoQhp.js";import"./TransitionGroupContext-BzaUJiqI.js";import"./index-gBXGiVxM.js";import"./resolveComponentProps-DmD3T0IR.js";import"./TextField-CmaU-KBj.js";import"./useFormControl-CdjRoiJh.js";import"./IconButton-C6qkeN3E.js";import"./ButtonBase-CvPzqTPI.js";import"./DialogContent-BYVOVBvJ.js";import"./Button-CcspgIL3.js";import"./Chip-R4S1Xx1_.js";import"./DateTimePicker-BlH7Vx01.js";import"./Divider-CmASGeLX.js";import"./Chip-CMEv-3Ns.js";import"./Divider-DucMFgjg.js";import"./TreeView-971-ZmyF.js";import"./Close-Y3be_ga9.js";import"./LinearProgress-CPlFnB1B.js";import"./Spinner-D3FQHiVx.js";import"./Dialog-DlYa8EPP.js";import"./MapToggleButtonPresentational-O_uOzVPo.js";import"./Remove-kIiRQGnZ.js";import"./TextField-uvS4wcSl.js";import"./Switch-C0X6GqCf.js";import"./DatePicker-dmDL6v2V.js";import"./LinkButton-CHAlghlC.js";import"./Paper-DTmbpqUX.js";import"./ErrorFallback-DTTBcvO-.js";import"./ErrorFallbackText-DzH3d24h.js";import"./ErrorFallbackWrapper-B_0KWZTa.js";import"./Brand-Bsip24mJ.js";import"./constants-BOf8-UPq.js";import"./Edit-RumvcRpQ.js";const ke={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
