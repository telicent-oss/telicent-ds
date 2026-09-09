import{r as n,j as o}from"./iframe-BSHZoLH0.js";import{E as r}from"./DropdownButton-DJdqotpZ.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CHfoFH7k.js";import"./SvgIcon-DC5_2IrZ.js";import"./generateUtilityClass-93OEZURd.js";import"./styled-CmvYIxHZ.js";import"./generateUtilityClasses-Dmf-VZ7g.js";import"./useTheme-wykRndr8.js";import"./Box-DF0XtrAi.js";import"./Box-Bi27dI0Y.js";import"./Container-DSzlElAn.js";import"./styled-DpjO08Qt.js";import"./createStyled-CXLXU_b5.js";import"./useThemeProps-D1mqY05e.js";import"./FlexBox-Cic89pYt.js";import"./Stack-DL55RpSh.js";import"./Typography-B6wCg7xE.js";import"./Paper-u2F4-x87.js";import"./useThemeProps-BiMA9qcn.js";import"./Text-BTMH42VK.js";import"./AdapterDayjs-DtpCU4aK.js";import"./Modal-BI0OjZNh.js";import"./utils-CEnASBxq.js";import"./TransitionGroupContext-bIsVkF__.js";import"./index-CfPnIGXk.js";import"./resolveComponentProps-DF06A6lx.js";import"./Popover-D9PrNx1G.js";import"./TextField-D0AHhzbv.js";import"./useFormControl-CjQ9hJs3.js";import"./createSvgIcon-BAA291eo.js";import"./IconButton-BH6roq5J.js";import"./ButtonBase-DmGCS8gm.js";import"./DialogContent-sjLbqYOm.js";import"./Button-BGj1rfsC.js";import"./Chip-40aXZDOw.js";import"./DateTimePicker-yuJZFQX_.js";import"./Divider-D09lGavG.js";import"./AppInfoRow-RkbytSj0.js";import"./Chip-BniXzfdZ.js";import"./Divider-BZJnezW1.js";import"./TreeView-CzzylW8x.js";import"./Alert-BrDYZj8C.js";import"./LinearProgress-Cgz4Xu1_.js";import"./Spinner-DYac5LQn.js";import"./Dialog-BeIaWLBv.js";import"./MapToggleButtonPresentational-D_VEx1TD.js";import"./Remove-Bso_SpPx.js";import"./LinkButton-DfD1itup.js";import"./TextField-D855Mpyf.js";import"./Switch-S5xN80Zo.js";import"./DatePicker-B_uUVeOn.js";import"./Paper-DYqddmBf.js";import"./ErrorFallback-DQXVOLvB.js";import"./ErrorFallbackText-DKNgRgr1.js";import"./ErrorFallbackWrapper-CVlp2bT8.js";import"./Brand-B-VTUx_1.js";import"./Edit-DszYU_yI.js";const Me={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
