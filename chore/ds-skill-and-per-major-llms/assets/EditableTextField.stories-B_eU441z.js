import{r as n,j as o}from"./iframe-B2Ay8HHY.js";import{E as r}from"./DropdownButton-CmgzjG5S.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Ct43AKF1.js";import"./SvgIcon-O7zvTOEi.js";import"./generateUtilityClass-DRhqcJ3C.js";import"./styled-Cp8rcGr5.js";import"./generateUtilityClasses-n51uImyc.js";import"./useTheme-DUfeIRPs.js";import"./Box-BWzfxiHj.js";import"./Box-DiR6fmjD.js";import"./Container-IuJtd-i_.js";import"./styled-BVl11CwU.js";import"./createStyled-LnKMAta8.js";import"./useThemeProps-ieKjDhbz.js";import"./FlexBox-Cd5iPm6B.js";import"./Stack-CERZHvX_.js";import"./Typography-CaMlTbgu.js";import"./Paper-GGZQsb9V.js";import"./useThemeProps-Ct5eCcN4.js";import"./Text-C3v24AG7.js";import"./AdapterDayjs-piU1cTWH.js";import"./Modal-Dhbreh5C.js";import"./utils-BuawHli2.js";import"./TransitionGroupContext-BiERh0aS.js";import"./index-B8sFEjRQ.js";import"./resolveComponentProps-DavTyxC5.js";import"./Popover-Dd-QG0yq.js";import"./TextField-DgpfhAoQ.js";import"./useFormControl-CfQyKxf4.js";import"./createSvgIcon-DJYY3zlJ.js";import"./IconButton-DJ3dnZFG.js";import"./ButtonBase-CcZ3ellP.js";import"./DialogContent-VKCYrYYG.js";import"./Button-CmApE-h2.js";import"./Chip-CoN_kc_F.js";import"./DateTimePicker-VjhqFvjd.js";import"./Divider-0j4JbSTp.js";import"./AppInfoRow-t3PiwP7k.js";import"./Chip-pXx3H7uq.js";import"./Divider-DW0OUxzq.js";import"./TreeView-B36RPHSJ.js";import"./Alert-C8wDmmlT.js";import"./LinearProgress-CcZu-den.js";import"./Spinner-CLBlp-1z.js";import"./Dialog-BQEcgH8b.js";import"./MapToggleButtonPresentational-CBq2aYZI.js";import"./Remove-BxIVYSTr.js";import"./LinkButton-1B0tJmq_.js";import"./TextField-knF78Q6V.js";import"./Switch-Bwl2j2OC.js";import"./DatePicker-Q5cJzMzd.js";import"./Paper-CTXRsw4i.js";import"./ErrorFallback-CCOH-k8x.js";import"./ErrorFallbackText-BwbRAXPw.js";import"./ErrorFallbackWrapper-iyce9Q1e.js";import"./Brand-CniOL6Cz.js";import"./Edit-DJOWn5_1.js";const Me={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Pe=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,u as NoInitialValue,p as WithErrorText,Pe as __namedExportsOrder,Me as default};
