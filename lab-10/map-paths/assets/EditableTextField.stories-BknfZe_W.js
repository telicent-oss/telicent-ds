import{r as n,j as o}from"./iframe-CYeXSRCn.js";import{E as r}from"./DropdownButton-Bqbdc4Q1.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DgdKDg--.js";import"./SvgIcon-1lsXHHt1.js";import"./generateUtilityClass-CRJ1fUnr.js";import"./styled-Ch7TYyIp.js";import"./generateUtilityClasses-8aJfFmyf.js";import"./useTheme-C01aVLuh.js";import"./Box-B-xAxOdf.js";import"./Box-BL2kbC6f.js";import"./Container-Di2XLZDk.js";import"./styled-DHAnpyzb.js";import"./createStyled-BAXDNbou.js";import"./useThemeProps-zxRs09PI.js";import"./FlexBox-yPpBoTQ5.js";import"./Stack-YJQQ9jj8.js";import"./Typography-m86ksWAT.js";import"./Paper-CUHDivEI.js";import"./useThemeProps-CaCGsMmh.js";import"./Text-BrJzNAfR.js";import"./AdapterDayjs-C0uSp_M-.js";import"./Modal-Dvtocw5a.js";import"./utils-CkwS266W.js";import"./TransitionGroupContext-O-4sDslW.js";import"./index-Df4rPAmw.js";import"./resolveComponentProps-D0S80uWW.js";import"./Popover-C0_hs2rD.js";import"./TextField-CXdIwcSO.js";import"./useFormControl-QoKFw2_D.js";import"./createSvgIcon-Bg1pYGJE.js";import"./IconButton-CYyrSHuW.js";import"./ButtonBase-BtjCcquE.js";import"./DialogContent-_FhiVOAB.js";import"./Button-BSTFOQew.js";import"./Chip-DC_dEvmi.js";import"./DateTimePicker-iI1kKlBI.js";import"./Divider-BwUUxUUy.js";import"./AppInfoRow-CAMu3Yom.js";import"./Chip-DzPpf97O.js";import"./Divider-VlLlx1-K.js";import"./TreeView-hK-Zr8DT.js";import"./Alert-DI7B7ATA.js";import"./LinearProgress-tLf1McQP.js";import"./Spinner-CPAmDtKw.js";import"./Dialog-CwAPF42_.js";import"./MapToggleButtonPresentational-CxLzaM7Q.js";import"./Remove-ubGyGJQ1.js";import"./LinkButton-Cz3BzB8v.js";import"./TextField-CUXZxfyV.js";import"./Switch-C6_n0qq1.js";import"./DatePicker-Qsz_6cJq.js";import"./Paper-CyTJnt6J.js";import"./ErrorFallback-BPyngFVf.js";import"./ErrorFallbackText-C2TAg_HC.js";import"./ErrorFallbackWrapper-Bq_dmHdG.js";import"./Brand-ll5GJx6P.js";import"./Edit-B7Jljab-.js";const Me={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
