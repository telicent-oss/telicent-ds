import{r as n,j as o}from"./iframe-sCMTah6I.js";import{E as r}from"./DropdownButton-5YfSb9Fn.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-4_LEutpy.js";import"./SvgIcon-CkgeR1pA.js";import"./generateUtilityClass-BYp2rJcs.js";import"./styled-DiK4NeDs.js";import"./generateUtilityClasses-9ji0KBHh.js";import"./useTheme-Cv8UvDsx.js";import"./Box-srHswpXa.js";import"./Box-DN1xyrcF.js";import"./Container-DVMysQv8.js";import"./styled-Bzi5a8Nn.js";import"./createStyled-BO5OqwSA.js";import"./useThemeProps-Cd4SWnkA.js";import"./FlexBox-CRw_PPcA.js";import"./Stack-DFUJU3IC.js";import"./Typography-C7H7tdJH.js";import"./Paper-Dj0XEFgg.js";import"./useThemeProps-CwuygNVU.js";import"./Text-9kYsGMH2.js";import"./AdapterDayjs-CjuRIhml.js";import"./Modal-VHuAw1xl.js";import"./utils-BShRNaI0.js";import"./TransitionGroupContext-CHNcdvbO.js";import"./index-1i7MGYri.js";import"./resolveComponentProps-BFmcRe6X.js";import"./Popover-DMdSQ1Gm.js";import"./TextField-CBhaYsMI.js";import"./useFormControl-OPIlrXbI.js";import"./createSvgIcon-CmrJPXWi.js";import"./IconButton-CYN9JXU4.js";import"./ButtonBase-DeG36Vwr.js";import"./DialogContent-BTIhtZgK.js";import"./Button-D80LzkP1.js";import"./Chip-hCr7175Z.js";import"./DateTimePicker-BfEgPMRC.js";import"./Divider-_tu6IKvy.js";import"./AppInfoRow-CnKYYJBk.js";import"./Chip-3WkjkahH.js";import"./Divider-BueWLHhh.js";import"./TreeView-BIfksvo4.js";import"./Alert-mijamWS4.js";import"./LinearProgress-DAPaXVKP.js";import"./Spinner-DUsSOKlD.js";import"./Dialog-DbeRkryw.js";import"./MapToggleButtonPresentational-Douysrfr.js";import"./Remove-CBCNzEQH.js";import"./LinkButton-nPoqBe3W.js";import"./TextField-D2x4JNLw.js";import"./Switch-9QJLy3Eh.js";import"./DatePicker-D-6cx-Gj.js";import"./Paper-CAqAKMmN.js";import"./ErrorFallback-BSr14lue.js";import"./ErrorFallbackText-wsO76vmK.js";import"./ErrorFallbackWrapper-D0L8TNPl.js";import"./Brand-D2huPEYW.js";import"./Edit-WLzQi74Q.js";const Me={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
