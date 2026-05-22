import{j as o}from"./emotion-react-jsx-runtime.browser.esm-OTCsP_zj.js";import{r as n}from"./index-7LYIoTbn.js";import{E as a}from"./DropdownButton-BmCXY5UI.js";import"./jsx-runtime-BjG_zV1W.js";import"./UserIcon-Cn55tEQ2.js";import"./createSvgIcon-DU2rVRio.js";import"./defaultTheme-ACnAOKMv.js";import"./styled-Dr6LHSty.js";import"./generateUtilityClasses-CBlNI-gU.js";import"./DefaultPropsProvider-BINl2W1D.js";import"./useTheme-BCfSMqPY.js";import"./useTheme-DmgbyzQG.js";import"./Container-Cpr-ywPw.js";import"./styled-xzbhM0n_.js";import"./createStyled-CsLhtPiI.js";import"./useThemeProps-DhNaUrQ2.js";import"./Stack-_9FQNGpJ.js";import"./Box-BVltnmec.js";import"./Typography-CSCiAqzj.js";import"./Paper-3rHlC0dZ.js";import"./useThemeProps-k0ivW4aO.js";import"./Text-D0lNsqSI.js";import"./AdapterDayjs-Cl81F8SA.js";import"./index-B4OJPA8G.js";import"./Modal-JNcevMIf.js";import"./utils-CXYPeQrV.js";import"./TransitionGroupContext-itkx9jux.js";import"./useEnhancedEffect-oYjd7u20.js";import"./index-DONRZHi-.js";import"./Select-BfRenVFP.js";import"./useFormControl-lkbi0or6.js";import"./useId-Cf3J66lm.js";import"./GlobalStyles-B130YdEm.js";import"./GlobalStyles-Canp8JzW.js";import"./TextField-BklvXUyq.js";import"./IconButton-K5H0oyhF.js";import"./ButtonBase-D1U61Dnt.js";import"./colorManipulator-4CHxWgpo.js";import"./DialogContent-CX0jwU1P.js";import"./Button-6gIpOcku.js";import"./Chip-D4rXNsqT.js";import"./MenuItem-bua5XKnv.js";import"./dividerClasses-Cw9q1-aC.js";import"./UIThemeProvider-4LUh-fR0.js";import"./types-CMP91hxZ.js";import"./ThemeProvider-BUQO26gH.js";import"./Chip-BwAmCpCJ.js";import"./Divider-wVQl8Tit.js";import"./Divider-A3I7BnBV.js";import"./TreeView-CTXybiJL.js";import"./LinearProgress-Bb8hrd7I.js";import"./Spinner-BOxs5Djo.js";import"./Dialog-vILqERHu.js";import"./MapToggleButtonPresentational-86Mslv2I.js";import"./Remove-B14EzRR3.js";import"./TextField-jr6Bp6UA.js";import"./Select-CyedWs7E.js";import"./Switch-CckCM0FO.js";import"./DatePicker-DcCgiJ2j.js";import"./DateTimePicker-Dp4MmL11.js";import"./LinkButton-D9Uz2SFG.js";import"./Paper-CmfYDRfa.js";import"./ErrorFallback-Box0VFpD.js";import"./ErrorFallbackText-BxC3bExW.js";import"./ErrorFallbackWrapper-Dv-Jy562.js";import"./Brand-DN1iXAq-.js";import"./constants-kJdNVYOF.js";import"./iframe-hlU8lZDx.js";import"../sb-preview/runtime.js";import"./Edit-DKn8TmSo.js";const qe={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},i={render:()=>{const[e,t]=n.useState("Click the pencil to edit");return o(a,{value:e,onSave:t,label:"test input"})}},l={render:()=>{const[e,t]=n.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return o(a,{value:e,onSave:r=>{t(r)},label:"long input text",fullWidth:!0})}},s={render:()=>{const[e,t]=n.useState("Edit me!");return o(a,{value:e,onSave:r=>{t(r)},label:"long input text",sx:{width:"250px"}})}},p={render:()=>{const[e,t]=n.useState("Edit me!");return o(a,{value:e,onSave:r=>{t(r)},label:"long input text",error:!0,errorText:"Something went wrong!"})}},u={render:()=>{const[e,t]=n.useState("");return o(a,{value:e,onSave:r=>{t(r)},label:"This is an empty field",helperText:"This is a helper text, that will show on the input field as long as there are no errorText"})}};var d,h,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const De=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,u as NoInitialValue,p as WithErrorText,De as __namedExportsOrder,qe as default};
