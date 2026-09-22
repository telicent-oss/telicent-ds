import{r as n,j as o}from"./iframe-wwyKJVT7.js";import{E as r}from"./DropdownButton-BjR4G6c6.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BJUhZHXy.js";import"./SvgIcon-CUVs1lE1.js";import"./generateUtilityClass-CkoJfXzB.js";import"./styled-LpRxHRpP.js";import"./generateUtilityClasses-lZioDJSU.js";import"./useTheme-fWgDsTlF.js";import"./Box-BfkY0LoG.js";import"./Box-CvHLitPM.js";import"./Container-Ex8awo5l.js";import"./styled-CqLf-K_6.js";import"./createStyled-7rACZg1S.js";import"./useThemeProps-DGz7F6m3.js";import"./FlexBox-PSVLjaHH.js";import"./Stack-DkIolbKj.js";import"./Typography-KsMZ-Lzq.js";import"./Paper-Ty8OBP7-.js";import"./useThemeProps-6ff9_uQw.js";import"./Text-Cs_t5jTe.js";import"./AdapterDayjs-DLuz1KZP.js";import"./Modal-FJt4lU_X.js";import"./utils-De2QkNKz.js";import"./TransitionGroupContext-Ci1yj1nx.js";import"./index-Bc6yxq3M.js";import"./resolveComponentProps-Tez3FZ9N.js";import"./Popover-ad1rGmx0.js";import"./TextField-DQEmSFXz.js";import"./useFormControl-Bu5lKDwq.js";import"./createSvgIcon-Bca1zsRN.js";import"./IconButton-DAUWwzIO.js";import"./ButtonBase-ZfxRSw2y.js";import"./DialogContent-B9FHsown.js";import"./Button-BUB-REPY.js";import"./Chip-dWFWXs2g.js";import"./DateTimePicker-CCwiql_t.js";import"./Divider-CgD_nbzY.js";import"./AppInfoRow-DD0pDyG_.js";import"./Chip-BBcf24H1.js";import"./Divider-DvGORPwC.js";import"./TreeView-BUpBgZFV.js";import"./Alert-BSE5AHq1.js";import"./LinearProgress-rfUNUhKS.js";import"./Spinner-tbj581ml.js";import"./Dialog-BtzheIZz.js";import"./MapToggleButtonPresentational-DIhML7LJ.js";import"./Remove-BOsHTnyW.js";import"./LinkButton-tlP8KO0e.js";import"./TextField-DzD39lVx.js";import"./Switch-DnCT64eH.js";import"./DatePicker-C6MhubZW.js";import"./Paper-K6NL7s7r.js";import"./ErrorFallback-SJMDDmk_.js";import"./ErrorFallbackText-CQHNy6L3.js";import"./ErrorFallbackWrapper-C_Ne2lSR.js";import"./Brand-Bn9laiH-.js";import"./Edit-CBu4FngS.js";const Me={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
