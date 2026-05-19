import{j as o}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{r as n}from"./index-CTjT7uj6.js";import{E as a}from"./AuthModal-Du-gkYTW.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-DOFQHH6y.js";import"./Typography-Dt5bLYJQ.js";import"./identifier-NKQQRePw.js";import"./styled-CjWt8UVi.js";import"./generateUtilityClasses-B2BBkElw.js";import"./DefaultPropsProvider-DtThQIVP.js";import"./constants-KYtGOcw0.js";import"./iframe-BLoGSFSA.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DPnT8y_r.js";import"./useTheme-Ke1uTKsJ.js";import"./GlobalStyles-vI--UIQO.js";import"./GlobalStyles-sLZUO0b6.js";import"./useThemeProps-C2Iq9OHP.js";import"./useThemeProps-nZW5Papo.js";import"./ButtonBase-DFf65YyL.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-5fkkG_Vc.js";import"./Select-gRzCjZbZ.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-3f11im9F.js";import"./utils-B1Pnwxg8.js";import"./Paper-CLsLNy44.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DvZHek-i.js";import"./ListItem-DAm1IJrN.js";import"./UserIcon-CYDlAMM8.js";import"./Container-hm5vFygi.js";import"./styled-VzSze10G.js";import"./createStyled-Bvwk-_EE.js";import"./Stack-CY4EFDZz.js";import"./Box-vAbK_4PI.js";import"./AppBar-DsGNkIzs.js";import"./Toolbar-CWAIilLy.js";import"./Chip-CMxnGK95.js";import"./IconButton-Bo7QGuUx.js";import"./Switch-7uPqVfWJ.js";import"./MenuItem-nMzlburO.js";import"./dividerClasses-BU2gZmHL.js";import"./UIThemeProvider-Brj0zjMt.js";import"./colorManipulator-BRsEHmOt.js";import"./ThemeProvider-un6kJHlG.js";import"./Chip-BRwbwVbv.js";import"./Card-D8BkeIZl.js";import"./Divider-CKsZbUR-.js";import"./Card-BG9kVIdx.js";import"./TreeView-BkIoI9QN.js";import"./LinearProgress-CUuKFvvX.js";import"./LinearProgress-BfvI3P-T.js";import"./Spinner-DTNXzZM5.js";import"./Dialog-IWHBpnq2.js";import"./DialogContent-BwRvQmzV.js";import"./Button-ZGJdOyfv.js";import"./MapToggleButtonPresentational-DMcR06l5.js";import"./Remove-ORZ2Ffdu.js";import"./TextField-_IJI58oT.js";import"./TextField-C5Vpu56G.js";import"./Select-B2EkDVMA.js";import"./Switch-nwTgaDx0.js";import"./DatePicker-Cd3EM856.js";import"./AdapterDayjs-Kn4cdtM7.js";import"./DateTimePicker-DGWs0BNw.js";import"./Tabs-DRIhGf0U.js";import"./LinkButton-aT7Hu3l6.js";import"./Paper-Bl82cnKL.js";import"./ErrorFallback-CGP1zAVd.js";import"./ErrorFallbackText-D-_xaRa8.js";import"./ErrorFallbackWrapper-H8jVUQSn.js";import"./Brand-lXzjEeMF.js";import"./Edit-C1ZXnIQP.js";const Xe={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
