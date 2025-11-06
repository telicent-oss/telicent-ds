import{j as o}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as n}from"./index-Dl6G-zuu.js";import{E as a}from"./AuthModal-Dxmm3PUd.js";import"./jsx-runtime-DMAvRu52.js";import"./Text-CBeXAxhM.js";import"./Typography-DqLej86Z.js";import"./identifier-C6mAUaLB.js";import"./styled-BErHg-7C.js";import"./generateUtilityClasses-Cuk6vP38.js";import"./DefaultPropsProvider-BOzBDHyA.js";import"./constants-YT2gossY.js";import"./iframe-7W-pLHgR.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-GyLrR4NU.js";import"./useTheme-Cg37eTMn.js";import"./GlobalStyles-B_QX4JcH.js";import"./GlobalStyles-D5xpOMhP.js";import"./UserProfile-U6PPuJfm.js";import"./UserIcon-BHVQbi_2.js";import"./SvgIcon-5gifbZ3Q.js";import"./index-BfyspvgH.js";import"./FlexBox-DBRDUZLj.js";import"./styled-BSjilmX5.js";import"./createStyled-BrBbf8qF.js";import"./useThemeProps-43QuDAxK.js";import"./createSvgIcon-Bol9-9si.js";import"./Popover-BpYca5tE.js";import"./utils-C-b4tsXR.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-ZbIfs51-.js";import"./IconButton-IqfnTl6g.js";import"./ButtonBase-C9t-hGNZ.js";import"./Menu-DHuUg7uu.js";import"./index-sTB3RqdK.js";import"./Select-DA9H3h4n.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-BOB3in7k.js";import"./useThemeProps-DWcfj1ju.js";import"./TextField-BTRe_bET.js";import"./colorManipulator-DXzzQmry.js";import"./Button-hINpI61k.js";import"./Chip-CDjOKJwQ.js";import"./TelicentHorizontalSVG-CP1sg2bX.js";import"./FlexGrid-BkekN5zB.js";import"./Container-Cq7J-8WQ.js";import"./Box-BszdSfjy.js";import"./DataSetIcon-Cm0wHARM.js";import"./MenuItem-CjZ2Ihro.js";import"./dividerClasses-D3mH6QPz.js";import"./UIThemeProvider-BJ1tYuEB.js";import"./ThemeProvider-zfew0pSd.js";import"./IconButton-bilmwfAO.js";import"./Chip-CNh8tqAF.js";import"./Divider-znOFDjy9.js";import"./Divider-hbCrYSvl.js";import"./TreeView-ChH5rGnF.js";import"./UserProfileContent-CK9uRPZy.js";import"./LinearProgress-Cj7B0DX4.js";import"./Button-BBG5pOsy.js";import"./LinkButton-BgGLg8K5.js";import"./TextField--TK6VeQv.js";import"./Select-DoDVo-ql.js";import"./DatePicker-BHNHf78D.js";import"./DateTimePicker-B-4oNDUL.js";import"./Card-CyosORb7.js";import"./CardActions-q60J-lzQ.js";import"./Popover-Bg0J4ozL.js";import"./Paper-BKrtg6OD.js";import"./ErrorFallback-DIksr2Zc.js";import"./ErrorFallbackText-Cj3I3SFq.js";import"./ErrorFallbackWrapper-D0yAoJ_c.js";import"./MapToggleButtonPresentational-CshO1-3B.js";import"./Remove-Dh6sdo_k.js";import"./Edit-uu0JEZaV.js";const Xe={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ye=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,m as NoInitialValue,p as WithErrorText,Ye as __namedExportsOrder,Xe as default};
