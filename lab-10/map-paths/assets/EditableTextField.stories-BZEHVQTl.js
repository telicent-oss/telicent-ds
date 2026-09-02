import{r as n,j as o}from"./iframe-PEp56x0L.js";import{E as r}from"./DropdownButton-DIhkXD6k.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D5IxtVu8.js";import"./SvgIcon-Sjk8HnLS.js";import"./generateUtilityClass-ClfZNa_Z.js";import"./styled-DLDrBRHj.js";import"./generateUtilityClasses-DyOVJn4A.js";import"./useTheme-BSZw5MN3.js";import"./Box-BK9nt8mC.js";import"./Box-B6o03S8c.js";import"./Container-BIc8O_Mt.js";import"./styled-Bi96YKYe.js";import"./createStyled-C7aUgp1f.js";import"./useThemeProps-Cns6hruQ.js";import"./FlexBox-DO_yedUE.js";import"./Stack-DOKcr6kC.js";import"./Typography-BuaG1Q_e.js";import"./Paper-DH1tTpJY.js";import"./useThemeProps-BluO84mO.js";import"./Text-BE9OT0g0.js";import"./AdapterDayjs-Dl03QCHE.js";import"./Modal-BiN3QZLT.js";import"./utils-CjMfhMWa.js";import"./TransitionGroupContext-AlRG3TLe.js";import"./index-ChOmoK9v.js";import"./resolveComponentProps-BOHALUfl.js";import"./Popover-CbB3GNQq.js";import"./TextField-CsyMD93w.js";import"./useFormControl-CmlejeOA.js";import"./createSvgIcon-B5D28-yf.js";import"./IconButton-Bty9UGTd.js";import"./ButtonBase-DfDt7dR7.js";import"./DialogContent-DdWBBj2i.js";import"./Button-C-dOB-9O.js";import"./Chip-BzXyx1AI.js";import"./DateTimePicker-BlxDUfXp.js";import"./Divider-CPPkD8Ie.js";import"./AppInfoRow-CSs3ltLs.js";import"./Chip-xsskzt6u.js";import"./Divider-DFIJxqAs.js";import"./TreeView-Dc7Dm28S.js";import"./Alert-DH9l2_TQ.js";import"./LinearProgress-B8IpbQWX.js";import"./Spinner-C87LgWra.js";import"./Dialog-oL1MMI-D.js";import"./MapToggleButtonPresentational-BtNkUaS3.js";import"./Remove--QcwsUg6.js";import"./LinkButton-BxGp1dVi.js";import"./TextField-C_MLZHVa.js";import"./Switch-GGOdHWhI.js";import"./DatePicker--hD8iESL.js";import"./Paper-C-HgjC5-.js";import"./ErrorFallback-D4sVfazA.js";import"./ErrorFallbackText-C2TGfnqH.js";import"./ErrorFallbackWrapper-Bex9JT82.js";import"./Brand-Bq5i3QYE.js";import"./constants-5heSMDpw.js";import"./Edit-SjiPNWdK.js";const Pe={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
