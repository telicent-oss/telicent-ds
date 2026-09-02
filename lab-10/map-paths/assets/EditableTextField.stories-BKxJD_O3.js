import{r as n,j as o}from"./iframe-B7cgaF-W.js";import{E as r}from"./DropdownButton-Bb9iv5Vp.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BtEJ_j6a.js";import"./SvgIcon-CKN6T3r7.js";import"./generateUtilityClass-CYYdSLkV.js";import"./styled-B4hBdXs8.js";import"./generateUtilityClasses-7dram_XT.js";import"./useTheme-C9EIWu0e.js";import"./Box-CAg4Tsx7.js";import"./Box-v5biCQrT.js";import"./Container-DG9eXktv.js";import"./styled-aVKOBDcM.js";import"./createStyled-Ce75f-lr.js";import"./useThemeProps-DlhzAd0d.js";import"./FlexBox-DluCer-4.js";import"./Stack-C6HoR8k_.js";import"./Typography-DkJGsGTz.js";import"./Paper-BKCTlbQt.js";import"./useThemeProps-BLibk0ql.js";import"./Text-BTENkRLl.js";import"./AdapterDayjs-D1JpjkDV.js";import"./Modal-fooyFAIn.js";import"./utils-ClUtXAkm.js";import"./TransitionGroupContext-CZMjPoSB.js";import"./index-BginLdfj.js";import"./resolveComponentProps-b5o32fTm.js";import"./Popover-CTprQocu.js";import"./TextField-xW4lS50G.js";import"./useFormControl-B16JOFh2.js";import"./createSvgIcon-COsRokbB.js";import"./IconButton-Bwd-EBYU.js";import"./ButtonBase-pQD2E2i9.js";import"./DialogContent-CNCdvslU.js";import"./Button-bDQ4SD0F.js";import"./Chip-DqEC1oBy.js";import"./DateTimePicker-DuNCNG6Z.js";import"./Divider-qfOKhuSJ.js";import"./AppInfoRow-r354Xlqo.js";import"./Chip-C6_gr9Pz.js";import"./Divider-BYFJjNuf.js";import"./TreeView-Bm1zocjB.js";import"./Alert-DtTRNFbi.js";import"./LinearProgress-CHRD2DQp.js";import"./Spinner-dWVS9oPt.js";import"./Dialog-BLosbDfR.js";import"./MapToggleButtonPresentational-sMVPGoTJ.js";import"./Remove-BbJaJSzw.js";import"./LinkButton-DnPOi2Ez.js";import"./TextField-COjfZI8j.js";import"./Switch-CstIlIBg.js";import"./DatePicker-DBSyE5Fx.js";import"./Paper-DhD2fAsS.js";import"./ErrorFallback-CZ61smpx.js";import"./ErrorFallbackText-CfsRx3Jq.js";import"./ErrorFallbackWrapper-CV5TbnXm.js";import"./Brand-uk6lJML6.js";import"./constants-n8O9gxh0.js";import"./Edit-BDgoEkz2.js";const Pe={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
