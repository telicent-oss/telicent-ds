import{r as n,j as o}from"./iframe-BXY8qhtT.js";import{E as r}from"./DropdownButton-CMCln0pB.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Bz3heM6b.js";import"./SvgIcon-Ny0aRQHI.js";import"./generateUtilityClass-wYVai49J.js";import"./styled-H7Fdw8PF.js";import"./generateUtilityClasses-BA7K2SXw.js";import"./useTheme-jpEbcY17.js";import"./Box-BKFfSYU7.js";import"./Box-DmdH8_CM.js";import"./Container-u3BuaPcs.js";import"./styled-bWS-fPzl.js";import"./createStyled-C5U3_gNR.js";import"./useThemeProps-lfivHL7Q.js";import"./FlexBox-H-sCRMiR.js";import"./Stack-mn3XG4cs.js";import"./Typography-D_A1aX7c.js";import"./Paper-Dxa9EUvO.js";import"./useThemeProps-DH9W_0R3.js";import"./Text-BYojZcvc.js";import"./AdapterDayjs-5XgIQcgH.js";import"./Modal-ipxBrzNN.js";import"./utils-CE69r2C4.js";import"./TransitionGroupContext-CryLiEHc.js";import"./index-WLUfl6fz.js";import"./resolveComponentProps-mqZrAnvV.js";import"./Popover-BVxxj8q6.js";import"./TextField-BpDVwlCN.js";import"./useFormControl-E--nQZxq.js";import"./createSvgIcon-DjsA-uZ8.js";import"./IconButton-B-B6ziHV.js";import"./ButtonBase-BadIhpsX.js";import"./DialogContent-CyDUkUFC.js";import"./Button-BGy2rwjE.js";import"./Chip-B3_yOCCL.js";import"./DateTimePicker-B7sYKJNb.js";import"./Divider-B2-WeumM.js";import"./AppInfoRow-ZAGiEJOr.js";import"./Chip-C5kaT8Lc.js";import"./Divider-BZWBYD5d.js";import"./TreeView-lJGuyWyx.js";import"./Alert-CbPLOKCy.js";import"./LinearProgress-BRbnBQfK.js";import"./Spinner-DiRwWvdE.js";import"./Dialog-Djinkl1M.js";import"./MapToggleButtonPresentational-BPCec7gk.js";import"./Remove-FN9daPXK.js";import"./LinkButton-CCn1fa7f.js";import"./TextField-BiPbqIQb.js";import"./Switch-CbYpuBJM.js";import"./DatePicker-B42bozBr.js";import"./Paper-BJ8D2bs1.js";import"./ErrorFallback-CXf1lrVR.js";import"./ErrorFallbackText-BbxsiRdP.js";import"./ErrorFallbackWrapper-F_6HkMfr.js";import"./Brand-BHfEveUR.js";import"./constants-BgFE9pGk.js";import"./Edit-0n8mwjN-.js";const Pe={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ue=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,u as NoInitialValue,p as WithErrorText,Ue as __namedExportsOrder,Pe as default};
