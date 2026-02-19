import{j as o}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{r as n}from"./index-CTjT7uj6.js";import{E as a}from"./AuthModal-DQzmx7OJ.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-D7i5Vapy.js";import"./Typography-NY1t2oJS.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-lG5csJb9.js";import"./iframe-1MnXVmy2.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./UserProfile-D6O7wNKl.js";import"./UserIcon-o6gncd3f.js";import"./SvgIcon-nu1RSFLJ.js";import"./index-BRV0Se7Z.js";import"./FlexBox-wqE_3hOo.js";import"./styled-D52li5_j.js";import"./createStyled-MF3orRa4.js";import"./useThemeProps-BQrQzAVn.js";import"./createSvgIcon-BGbWkX_4.js";import"./Modal-nppWUrX9.js";import"./utils-BbBxhV03.js";import"./TransitionGroupContext-C2di2VJK.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./IconButton-D-oHTsme.js";import"./ButtonBase-DH2zkY_f.js";import"./Menu-Cib9lkAX.js";import"./index-CejG0Q0C.js";import"./Popover-hHU0kX9Y.js";import"./Paper-DurtPqdU.js";import"./Select-CQe_2BDr.js";import"./useId-DMVUMfb1.js";import"./Popper-DKho5otB.js";import"./TelicentHorizontalSVG-Cczi-KYX.js";import"./FlexGrid-WlHVYxOe.js";import"./Container-CeTulhJU.js";import"./Box-CRiiUqfG.js";import"./DataSetIcon-eLJEtM34.js";import"./AdapterDayjs-D_A3CBKl.js";import"./useThemeProps-BCPloJZh.js";import"./TextField-jmY6cT1k.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-DaEQE3W9.js";import"./Button-DwUhO5A1.js";import"./Chip-BVb47-Yv.js";import"./MenuItem-DDCSmGiz.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-CVgpJ9Or.js";import"./ThemeProvider-BnKwSnOu.js";import"./IconButton-Dha20OVG.js";import"./Chip-CaEkyDbp.js";import"./Divider-BNrRnzv6.js";import"./Divider-ALDgEm0R.js";import"./TreeView-BWiTPIDd.js";import"./UserProfileContent-D7SfyGJp.js";import"./LinearProgress-BKbPPN-u.js";import"./Dialog-LbicNw92.js";import"./Button-BBT7kpDa.js";import"./LinkButton-Cp_YKl9b.js";import"./TextField-Cl8VKv-k.js";import"./Select-DtgCaZa6.js";import"./Autocomplete-C-kTU09I.js";import"./DatePicker-DZxYbCmI.js";import"./DateTimePicker-BArbA-5v.js";import"./Card-BBAZs1GG.js";import"./CardActions-ahQ16fz_.js";import"./Popover-DfYJjWq1.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./MapToggleButtonPresentational-D_BfGPGk.js";import"./Remove-CFsi-mnJ.js";import"./Edit-gSW16YTz.js";const tt={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const rt=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,m as NoInitialValue,p as WithErrorText,rt as __namedExportsOrder,tt as default};
