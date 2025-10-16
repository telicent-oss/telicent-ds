import{j as o}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as n}from"./index-Dl6G-zuu.js";import{E as a}from"./Drawer-BZz4X7Qz.js";import"./jsx-runtime-DMAvRu52.js";import"./constants-DClgvJaG.js";import"./iframe-BihtMBQA.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BorXEO18.js";import"./defaultTheme-DzLjz-dB.js";import"./useTheme-Bb3Mws8A.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./UserProfile-B-204ua-.js";import"./Text-BVIdl1Jw.js";import"./Typography-Dhe6o_9I.js";import"./styled-gOU_XONt.js";import"./generateUtilityClasses-Btm8e7dB.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./UserIcon-DpDI8rF2.js";import"./SvgIcon-ByXbI411.js";import"./index-BfyspvgH.js";import"./FlexBox-DVTFmfFO.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./createSvgIcon-MUYTbX0p.js";import"./Popover-ChqH2Att.js";import"./utils-BgVWvv5k.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-BG42kFkz.js";import"./IconButton-CV1Rw-GO.js";import"./ButtonBase-DExEX2yL.js";import"./Menu-z0RjVFYM.js";import"./index-BbVSaS1S.js";import"./TextField-_uwvimc2.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-LX5PD6Iu.js";import"./useThemeProps-D7jdKLbb.js";import"./colorManipulator-BRx-aaGP.js";import"./Button-B3igqjqf.js";import"./Chip-CpI9GRDB.js";import"./TelicentHorizontalSVG-B3Sdezn-.js";import"./FlexGrid-BoEfBcU9.js";import"./Container-FF4Fdp1b.js";import"./Box-Dhn_9KCB.js";import"./DataSetIcon-BPiH7weE.js";import"./DateTimePicker-DBMjeEsM.js";import"./Divider-rhjpeBHv.js";import"./UIThemeProvider-BS_sxDlI.js";import"./ThemeProvider-GiwL96Kb.js";import"./IconButton-6csnvzSG.js";import"./Chip-tBdBanDh.js";import"./Divider-CByba2Al.js";import"./TreeView-DJkxzt72.js";import"./UserProfileContent-CQNj73V_.js";import"./LinearProgress-BvlhFhje.js";import"./Button-2o7EfnUw.js";import"./LinkButton-udFJw26p.js";import"./TextField-Bjo93FIX.js";import"./DatePicker-D-OuTvCY.js";import"./Card-B74XhqI-.js";import"./CardActions-BsipVerF.js";import"./Popover-CqIy5M7D.js";import"./Paper-BsJ-nzzS.js";import"./ErrorFallback-Db8jP4lY.js";import"./ErrorFallbackText-B2VVr9Qi.js";import"./ErrorFallbackWrapper-CwjhO7ym.js";import"./MapToggleButtonPresentational-DCqTgYa9.js";import"./Remove-M8FIgJpc.js";import"./Edit-DTNJPwPG.js";const Je={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
