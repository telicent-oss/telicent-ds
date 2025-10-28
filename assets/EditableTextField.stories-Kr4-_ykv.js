import{j as o}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as n}from"./index-Dl6G-zuu.js";import{E as a}from"./Drawer-Cl0eh9nj.js";import"./jsx-runtime-DMAvRu52.js";import"./constants-BQ4cxhgd.js";import"./iframe-BOd0hhho.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-KUAcGPiB.js";import"./defaultTheme-BO-GVTvG.js";import"./useTheme-Pepcoth9.js";import"./GlobalStyles-Dgqu9ZBa.js";import"./GlobalStyles-DUEYx911.js";import"./UserProfile-BxAQRKdr.js";import"./Text-BFNiasyU.js";import"./Typography-Cuh1ru_h.js";import"./styled-CxLuQ4yi.js";import"./generateUtilityClasses-BrkKsHLY.js";import"./DefaultPropsProvider-CqwcgZRv.js";import"./UserIcon-BXQcnugD.js";import"./SvgIcon-CLvgKtsF.js";import"./index-BfyspvgH.js";import"./FlexBox-CtZjnzR4.js";import"./styled-DQdJekOl.js";import"./createStyled-a9EbIl6L.js";import"./useThemeProps-cJESbEea.js";import"./createSvgIcon-DtNep-FY.js";import"./Popover-BWwK9c_C.js";import"./utils-C8sSVwFJ.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-CYPvuqVC.js";import"./IconButton-aZDif4_A.js";import"./ButtonBase-COX4AZc7.js";import"./Menu-6SEWvgOm.js";import"./index-CfJV9iyf.js";import"./Select-B3yJvOVt.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-Dxz3ssCX.js";import"./useThemeProps-7HV0XwLr.js";import"./colorManipulator-BzIEvLd4.js";import"./TextField-BXF1k-T7.js";import"./Button-BVpYsrGj.js";import"./Chip-CGb5QCI3.js";import"./TelicentHorizontalSVG-DlSq0ZBw.js";import"./FlexGrid-CT_1tX54.js";import"./Container-0fCyAqte.js";import"./Box-D_PqCh9-.js";import"./DataSetIcon-XV4rPdps.js";import"./MenuItem-B-D4s_cu.js";import"./dividerClasses-Bf8NGDkJ.js";import"./UIThemeProvider-Bf8bDzz-.js";import"./ThemeProvider-CXSeX4Uf.js";import"./IconButton-s5-t7JwX.js";import"./Chip-CZtKK3pl.js";import"./Divider-BInkGxYa.js";import"./Divider-nQy9ALGk.js";import"./TreeView-CLm9yUm1.js";import"./UserProfileContent-Dj2MBbg7.js";import"./LinearProgress-CwQNtVoX.js";import"./Button-KcRgJ0xu.js";import"./LinkButton-CCP5S-HK.js";import"./TextField-um4XWDOw.js";import"./Select-BKxTornM.js";import"./DatePicker-BaeNpiHF.js";import"./DateTimePicker-Bc91_Vqm.js";import"./Card-FwEEuDZt.js";import"./CardActions-hlVg_9Nm.js";import"./Popover-C7MCebY1.js";import"./Paper-DqTy2_Xb.js";import"./ErrorFallback-R5oVL8pn.js";import"./ErrorFallbackText-BLmhXvDQ.js";import"./ErrorFallbackWrapper-Cv-_dl0b.js";import"./MapToggleButtonPresentational-bPqb6oXs.js";import"./Remove-D5fK3_9H.js";import"./Edit-DuWAK1JC.js";const Xe={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
