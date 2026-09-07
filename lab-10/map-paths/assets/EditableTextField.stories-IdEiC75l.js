import{r as n,j as o}from"./iframe-ciw1KLRs.js";import{E as r}from"./DropdownButton-DnxPQZL5.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Faf48ldY.js";import"./SvgIcon-DTc-5gfq.js";import"./generateUtilityClass-Cq12-ors.js";import"./styled-C2eEG51T.js";import"./generateUtilityClasses-mmv1qYeK.js";import"./useTheme-BHgtQyQE.js";import"./Box-HbuxBumj.js";import"./Box-902PeKhJ.js";import"./Container-B4cr1y6P.js";import"./styled-IIpvbrdl.js";import"./createStyled-MdD6v-m0.js";import"./useThemeProps-CD771-QY.js";import"./FlexBox-CDrP42BZ.js";import"./Stack-BsqiUcB-.js";import"./Typography--d6z-ax-.js";import"./Paper-8D9ezffr.js";import"./useThemeProps-CifS_No0.js";import"./Text-BL5BnwYw.js";import"./AdapterDayjs-O0yRhyo9.js";import"./Modal-BfMSqNIi.js";import"./utils-CidoV_y6.js";import"./TransitionGroupContext-BaiKyvyF.js";import"./index-BpPfUxeP.js";import"./resolveComponentProps-B0NCZEz3.js";import"./Popover-DG-knyjb.js";import"./TextField-pGEePhF0.js";import"./useFormControl-BblJSTXJ.js";import"./createSvgIcon-BDEo2c1Q.js";import"./IconButton-BMVls5k1.js";import"./ButtonBase-ClETMG4i.js";import"./DialogContent-1fvduG_D.js";import"./Button-CDrOWbr-.js";import"./Chip-PFEXkFqS.js";import"./DateTimePicker-Bj6EpZ10.js";import"./Divider-CjkQD9g8.js";import"./AppInfoRow-Cm2LKcgP.js";import"./Chip-DC0m9kxe.js";import"./Divider-CNdMEHKo.js";import"./TreeView-BFv2UIjz.js";import"./Alert-BIf5zh0i.js";import"./LinearProgress-DL5qgfW7.js";import"./Spinner-DiZv0D1w.js";import"./Dialog-CL0RDkI6.js";import"./MapToggleButtonPresentational-BuqOJVfe.js";import"./Remove-udeFhnPg.js";import"./LinkButton-vyYCYFuJ.js";import"./TextField-BiumEcKM.js";import"./Switch-BuYUgYFl.js";import"./DatePicker-CS8TkJd8.js";import"./Paper-D5KjIdWZ.js";import"./ErrorFallback-DCZhT-vP.js";import"./ErrorFallbackText-CwHlYFUh.js";import"./ErrorFallbackWrapper-DP0a9Fbv.js";import"./Brand-BPQCwrjg.js";import"./constants-UR64nFDG.js";import"./Edit-Cef1b_05.js";const Pe={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
