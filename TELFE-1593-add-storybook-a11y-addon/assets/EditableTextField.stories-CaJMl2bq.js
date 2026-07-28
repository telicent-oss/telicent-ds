import{r as n,j as o}from"./iframe-DiOxHtDb.js";import{E as r}from"./DropdownButton-D5H4ZN6Z.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DdMLfs8b.js";import"./createSvgIcon-Bct_3USy.js";import"./generateUtilityClass-BGBNebZi.js";import"./styled-BnW9PuXP.js";import"./generateUtilityClasses-cqFKly7s.js";import"./useTheme-CVqTLjnG.js";import"./Box-BgHTu-7g.js";import"./Box-Bw2aXqxB.js";import"./Container-KdOlOXUt.js";import"./styled-CBtLOs7W.js";import"./createStyled-DJUAM10Y.js";import"./useThemeProps-D92Ph84F.js";import"./Stack-DMVCg2VL.js";import"./Typography-DD85r3aG.js";import"./Paper-DD8Uzrbd.js";import"./useThemeProps-D5iojeUJ.js";import"./Text-lve70lr8.js";import"./AdapterDayjs-Bw8jeCZr.js";import"./Modal-D1jGZMpX.js";import"./utils-Cpn5Nc-9.js";import"./TransitionGroupContext-B0zfRRgr.js";import"./index-DV6lSy4S.js";import"./resolveComponentProps-DdsoJ6q3.js";import"./TextField-DJduElX5.js";import"./useFormControl-gW4Kn0M5.js";import"./IconButton-BBPQ8wpR.js";import"./ButtonBase-Bf3wJpyF.js";import"./DialogContent-WZ5vlnc6.js";import"./Button-CBCE0jtS.js";import"./Chip-DxnlP6yz.js";import"./DateTimePicker-E72uzE7D.js";import"./Divider-BAZX2ZXo.js";import"./Chip-ueCpo9tP.js";import"./Divider-BRU7MloR.js";import"./TreeView-BEBQjpEx.js";import"./Close-DyblsOO8.js";import"./LinearProgress-Ca-5RCUI.js";import"./Spinner-DBD_1EOk.js";import"./Dialog-CV47DXVk.js";import"./MapToggleButtonPresentational-CY2HZx6p.js";import"./Remove-BolgW9Tm.js";import"./TextField-CODSynKi.js";import"./Switch-BaPgqioG.js";import"./DatePicker-DvcNDPm0.js";import"./LinkButton-AP67oc2f.js";import"./Paper-CNPN9Zh5.js";import"./ErrorFallback-BmSWrFlV.js";import"./ErrorFallbackText-DVOaDD_c.js";import"./ErrorFallbackWrapper-BCV9v7sN.js";import"./Brand-ClGGejsO.js";import"./constants-BXamS6jK.js";import"./Edit-DgM3068Z.js";const ke={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
