import{j as o}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as n}from"./index-Dl6G-zuu.js";import{E as a}from"./AuthModal-CcTf7jpD.js";import"./jsx-runtime-DMAvRu52.js";import"./Text-8Kdc4mds.js";import"./Typography-BrwPcXc_.js";import"./identifier-y0bUoTO6.js";import"./styled-0JAKTnfS.js";import"./generateUtilityClasses-Nvsm4CNa.js";import"./DefaultPropsProvider-5cPhPzqh.js";import"./constants-D6JbaO56.js";import"./iframe-DfdgjJFF.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BzMTtAHJ.js";import"./useTheme-DD-YLZ4_.js";import"./GlobalStyles-vabYxzRP.js";import"./GlobalStyles-CHovE7rY.js";import"./UserProfile-B0RVUakH.js";import"./UserIcon-B9flVcwo.js";import"./SvgIcon-CCVYAiJY.js";import"./index-BfyspvgH.js";import"./FlexBox-CPV3qV_w.js";import"./styled-BJZjZNjA.js";import"./createStyled-CQbojMn1.js";import"./useThemeProps-dlg6X6gD.js";import"./createSvgIcon-CHKs_KBR.js";import"./Popover-lQsAd3LZ.js";import"./utils-CMxZCPCo.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-DSYDI967.js";import"./IconButton-CJWQDxju.js";import"./ButtonBase-BPGrtmaq.js";import"./Menu-DOiAulci.js";import"./index-CGpTQFWu.js";import"./TextField-BXJNoCm8.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs--Bc0--O2.js";import"./useThemeProps-Dn9YwK3s.js";import"./colorManipulator-_kX1Zyzf.js";import"./Button-C78fFQkL.js";import"./Chip-Dals-zk3.js";import"./TelicentHorizontalSVG-CQqo1iNz.js";import"./FlexGrid-BXR2iRV0.js";import"./Container-Bt7wgl8Z.js";import"./Box-BF-qgu-5.js";import"./DataSetIcon-DHhYydZc.js";import"./DateTimePicker-BfS6ExPs.js";import"./Divider-ByP1puSd.js";import"./UIThemeProvider-Yl8oZnWo.js";import"./ThemeProvider-bcdU8uNZ.js";import"./IconButton-B3KtzcW5.js";import"./Chip-DwEDWKOc.js";import"./Divider-D5viUhla.js";import"./TreeView-Cv9rbGZ0.js";import"./UserProfileContent-Be3-9Jzl.js";import"./LinearProgress-DXAYFx38.js";import"./Button-BUdKq2Nf.js";import"./LinkButton-D3-RYoWb.js";import"./TextField-PJfMD1VO.js";import"./DatePicker-CBr8yT-u.js";import"./Card-DEzO0riq.js";import"./CardActions-B8gFKj_f.js";import"./Popover-DMDv2fuJ.js";import"./Paper-DkOGDDl7.js";import"./ErrorFallback-BQDrKlpt.js";import"./ErrorFallbackText-D0ectygn.js";import"./ErrorFallbackWrapper-Drru2TWq.js";import"./MapToggleButtonPresentational-DDiBoo1Q.js";import"./Remove-ABIIxDNk.js";import"./Edit-ClXqq_Xi.js";const Je={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},i={render:()=>{const[e,t]=n.useState("Click the pencil to edit");return o(a,{value:e,onSave:t,label:"test input"})}},l={render:()=>{const[e,t]=n.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return o(a,{value:e,onSave:r=>{t(r)},label:"long input text",fullWidth:!0})}},s={render:()=>{const[e,t]=n.useState("Edit me!");return o(a,{value:e,onSave:r=>{t(r)},label:"long input text",sx:{width:"250px"}})}},p={render:()=>{const[e,t]=n.useState("Edit me!");return o(a,{value:e,onSave:r=>{t(r)},label:"long input text",error:!0,errorText:"Something went wrong!"})}},m={render:()=>{const[e,t]=n.useState("");return o(a,{value:e,onSave:r=>{t(r)},label:"This is an empty field",helperText:"This is a helper text, that will show on the input field as long as there are no errorText"})}};var d,h,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(C=(b=p.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var E,f,y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="This is an empty field" helperText="This is a helper text, that will show on the input field as long as there are no errorText" />;
  }
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Le=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,m as NoInitialValue,p as WithErrorText,Le as __namedExportsOrder,Je as default};
