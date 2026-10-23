import{r as a,a as n}from"./iframe-Cq2F8nnt.js";import{i as o}from"./EntityList-DaLKgoBW.js";import"./preload-helper-C1FmrZbK.js";import"./FlexBox-C04F2Oi9.js";import"./Stack-C0kkN408.js";import"./styled-BFu-il5r.js";import"./extendSxProp-C_3gOtzH.js";import"./clsx-B-dksMZM.js";import"./styled-DanlI2xt.js";import"./createStyled-Ch69_NI_.js";import"./useThemeProps-P0CvXcYF.js";import"./composeClasses-fLhin0tj.js";import"./Text-CBOSUAEh.js";import"./Typography-BwTJfg_0.js";import"./ListContext-BAusblW9.js";import"./ListItem-DKE093t7.js";import"./FormControl-BUNS3ShE.js";import"./useFormControl-CV4aeut4.js";import"./TransitionGroupContext-GhvSAu4t.js";import"./resolveComponentProps-Cqm51eMl.js";import"./ButtonBase-Dgq-9fM-.js";import"./Toolbar-oXmRnOPk.js";import"./TextField-DwlpbE60.js";import"./Modal-C_ZAcMul.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-Cvu7cjI6.js";import"./index-Yf-oiQ9v.js";import"./utils-B_pcJLAo.js";import"./Popover-CXsS9GGj.js";import"./Paper-u6GRQMwm.js";import"./useControlled-B1ajGRtS.js";import"./createSvgIcon-1goxyuUk.js";import"./SvgIcon-TnW6j3SK.js";import"./FormHelperText-BmifT0EA.js";import"./Close-CBbLzOeS.js";import"./Popper-C0YrUmlc.js";import"./Badge-BZpNOhc9.js";import"./Chip-DKKqjRmN.js";import"./IconButton-C1aFxNcW.js";import"./FormControlLabel-Be4X22x1.js";import"./MenuItem-DceuxKDN.js";import"./dividerClasses-C6GToXYV.js";import"./Button-JWos0z8D.js";import"./MapToggleButtonPresentational-BFzQ5gPJ.js";import"./Remove-B3S6saWd.js";import"./Box-BQK-RQwY.js";import"./ExpandLessIcon-Baa6e0mA.js";import"./Box-CAEYLSso.js";import"./Container-DqN7QDyr.js";import"./CogIcon-C7NF5K8t.js";import"./InfoIcon-DPqgxdQZ.js";import"./ExpandMoreIcon-DNBS7Ae_.js";import"./ThemeSwitchRow-9homoP8I.js";import"./index-D2fxJFUo.js";import"./IconButton-Ci8BXdvE.js";import"./Badge-_Ks2Ec9c.js";import"./Chip-1H0HG8HA.js";import"./Divider-sULGPtF-.js";import"./Divider-Bbde2_fu.js";import"./TreeView-GAhKaiG4.js";import"./useThemeProps-Dr3B81aN.js";import"./Collapse-BYeD06gr.js";import"./useSlot-CReHhYw8.js";import"./AppInfoRow-_l5cjwhy.js";import"./_IconPopover-CYGOjWq8.js";import"./AppSettings-BTMPNOva.js";import"./SvgIcon-BI9-VwwI.js";import"./TableRow-DlKh2N0Z.js";import"./TableCell-CEBLf8Yr.js";import"./Skeleton-BpIhNe2X.js";import"./Skeleton-Du6dERAP.js";import"./Edit-CXQT9gM2.js";import"./LinearProgress-G9ObWG-G.js";import"./LinearProgress-Crs6Zu4l.js";import"./Spinner-DzvFtaD2.js";import"./CircularProgress-BgI1_Xtz.js";import"./Dialog-DhKmN4qh.js";import"./DialogContent-rtf5aXKs.js";import"./Alert-CE5w6l2H.js";import"./ToggleButton-Bub8BXIU.js";import"./ToggleButton-CAEgdqR9.js";import"./ToggleButtonGroup-D-3xBYH1.js";import"./LinkButton-BtFJ8Ptt.js";import"./TextField-DLAYsvZY.js";import"./Switch-Dic_zt7r.js";import"./Switch-DvSveS_U.js";import"./LabeledSwitch-BYrzyMPQ.js";import"./RadioGroup-C-Ze-TFB.js";import"./FormControl-Doz5KOXY.js";import"./FormHelperText-BXOFl--T.js";import"./Tabs-V9ydvoHK.js";import"./MenuItem-DnUBD1eV.js";import"./AccordionDetails-gBwhydje.js";import"./Paper-DR1fCpm6.js";import"./ErrorFallback-BK4szP6K.js";import"./ErrorFallbackText-DH69geC6.js";import"./ErrorFallbackWrapper-Dy-bg1rq.js";import"./Brand-B5FmdXmX.js";const wt={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},i={render:()=>{const[e,t]=a.useState("Click the pencil to edit");return n(o,{value:e,onSave:t,label:"test input"})}},l={render:()=>{const[e,t]=a.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return n(o,{value:e,onSave:r=>{t(r)},label:"long input text",fullWidth:!0})}},s={render:()=>{const[e,t]=a.useState("Edit me!");return n(o,{value:e,onSave:r=>{t(r)},label:"long input text",sx:{width:"250px"}})}},p={render:()=>{const[e,t]=a.useState("Edit me!");return n(o,{value:e,onSave:r=>{t(r)},label:"long input text",error:!0,errorText:"Something went wrong!"})}},m={render:()=>{const[e,t]=a.useState("");return n(o,{value:e,onSave:r=>{t(r)},label:"This is an empty field",helperText:"This is a helper text, that will show on the input field as long as there are no errorText"})}};var d,h,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(C=(b=p.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var E,f,y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="This is an empty field" helperText="This is a helper text, that will show on the input field as long as there are no errorText" />;
  }
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const St=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,m as NoInitialValue,p as WithErrorText,St as __namedExportsOrder,wt as default};
