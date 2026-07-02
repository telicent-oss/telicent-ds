import{r as n,j as o}from"./iframe-Crov0WQz.js";import{E as r}from"./DropdownButton-CLtoK2nQ.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BpACv-KD.js";import"./createSvgIcon-YDz-o7-b.js";import"./styled-Iiak7Ogq.js";import"./generateUtilityClasses-YSREvbxX.js";import"./useTheme-B_goZ4qo.js";import"./Container-B68-6-yw.js";import"./styled-CNP8R88q.js";import"./createStyled-BLdT8Qb_.js";import"./useThemeProps-ZmDRkbFp.js";import"./Stack-Bfojjyxu.js";import"./Box-BG0wW1Gw.js";import"./Typography-B9r5TGn1.js";import"./Paper-Dqj2J0bD.js";import"./useThemeProps-BHR99ymZ.js";import"./Text-D0Fnpi2n.js";import"./AdapterDayjs-5PvZCLYQ.js";import"./Modal-Ckwnu49q.js";import"./utils-DmCjym0s.js";import"./TransitionGroupContext-D_iDfzVR.js";import"./index-DKz44-9c.js";import"./TextField-DoWg8ST_.js";import"./useFormControl-nQOCEbZr.js";import"./IconButton-CkgmJ1wq.js";import"./ButtonBase-D84oecVH.js";import"./DialogContent-Bogzx-91.js";import"./Button-CacSTNVY.js";import"./Chip-CTEj_6SL.js";import"./DateTimePicker-CZdkDgZx.js";import"./Divider-B4WphmzU.js";import"./Chip-C1hb46nu.js";import"./Divider-DjIAefNA.js";import"./TreeView-BhCu4_vt.js";import"./LinearProgress-xJR7lhkP.js";import"./Spinner-BFZivWxB.js";import"./Dialog-DoAt61AO.js";import"./MapToggleButtonPresentational-C7M7o9lk.js";import"./Remove-Dh7kVVq0.js";import"./TextField-08-w4XG5.js";import"./Switch-B39EAJit.js";import"./DatePicker-PvBZCpyj.js";import"./LinkButton-CKRF2-uU.js";import"./Paper-DuUVMjJy.js";import"./ErrorFallback-DVSKIMBt.js";import"./ErrorFallbackText-C98aj5QV.js";import"./ErrorFallbackWrapper-CV687E_O.js";import"./Brand-DTDlbVRJ.js";import"./constants-BsbrBYOu.js";import"./Edit-DYqlQ0Co.js";const Ee={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
