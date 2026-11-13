import{r as a,a as n}from"./iframe-DunpSdH6.js";import{i as o}from"./UserProfileContent-D_7QN1X2.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-stnAc-Tj.js";import"./clsx-B-dksMZM.js";import"./styled-DLhCII3n.js";import"./extendSxProp-DbmafzOS.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-TD2UFsiu.js";import"./TransitionGroupContext-DpYXvT-8.js";import"./MapToggleButtonPresentational-DhL_tRuE.js";import"./Remove-CypNUzA-.js";import"./createSvgIcon-DoUG9alq.js";import"./SvgIcon-DvaLc9-e.js";import"./IconButton-BxRM68Nx.js";import"./Paper-BnYpX6e-.js";import"./Box-B-pmLQD1.js";import"./XIcon-B-AAlqIS.js";import"./Stack-CGlC5oSp.js";import"./styled-DlfzhkfP.js";import"./createStyled-BLV0Zz4B.js";import"./useThemeProps-BeK64rtS.js";import"./Typography-Cnm5zE5B.js";import"./Box-CCnO3-HF.js";import"./Container-COQeBzQQ.js";import"./FlexBox-DwjKj-U_.js";import"./Brand-D0GB8OW-.js";import"./IconButton-CnZQJMnz.js";import"./LinkButton-BoEmtgzU.js";import"./AppInfoRow-TLJdMOCL.js";import"./_IconPopover-kbbuypBQ.js";import"./Popover-DsC-QvdX.js";import"./utils-W3WhWsKZ.js";import"./index-MiBr_QQr.js";import"./index-DLav748F.js";import"./Modal-d3tziOSd.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-Cq-RMR5j.js";import"./useSlotProps-CVslE_Pq.js";import"./InfoIcon-C6C5JcpY.js";import"./Text-CAHfJU7X.js";import"./AppSettings-CieG7Itn.js";import"./CogIcon-DURisWGj.js";import"./Badge-DfmfDckY.js";import"./Badge-DNThIf1X.js";import"./Chip-ClFjssnv.js";import"./Chip-Cph2lDK-.js";import"./Divider-DOwJyp8h.js";import"./Divider-CZk7lu9D.js";import"./dividerClasses-DaEwxQ2U.js";import"./ThemeSwitchRow-DKnKmbOE.js";import"./Skeleton-OXXt9MRY.js";import"./Skeleton-DeprtIml.js";import"./TextField-Bmgg2D5C.js";import"./useFormControl-DJJUNb1q.js";import"./FormControl-g-yWrPYN.js";import"./ListContext-C9AaZLBf.js";import"./useControlled-D5RrLse2.js";import"./FormHelperText-BuPvD1hT.js";import"./MenuItem-B2bWzFXk.js";import"./ExpandMoreIcon-BIxTqLU3.js";import"./ListItem-BhthYCMo.js";import"./Toolbar-DNoBnjCT.js";import"./Close-Cj-9lqkJ.js";import"./Popper-DYqxq4vL.js";import"./FormControlLabel-oM-7wre-.js";import"./Edit-DCrwz_Eh.js";import"./SvgIcon-DQ2JuKIZ.js";import"./TableRow-D4o3RwxN.js";import"./TableCell-xtN6Kl0n.js";import"./TreeView-BDnoQbge.js";import"./useThemeProps-BitkL5n2.js";import"./index-CZvxb2J0.js";import"./Collapse-WWGG7p11.js";import"./Dialog-CK4_JL4u.js";import"./DialogContent-DkAI-Cl0.js";import"./Alert-CN792Xkl.js";import"./useSlot-CWMKbCxx.js";import"./LinearProgress-aosU5P48.js";import"./LinearProgress-DX42AqMp.js";import"./Spinner-BAHqvCO1.js";import"./CircularProgress-CpVFRLj9.js";import"./TextField-B0XeM5G1.js";import"./FormControl-Bz1Pa-gf.js";import"./FormHelperText-D3Z6WRSy.js";import"./LabeledSwitch-CQiKhy5B.js";import"./Switch-zPa9dcOV.js";import"./Switch-d71D0uBO.js";import"./RadioGroup-DjTHdfvI.js";import"./ToggleButton-wesw0Lhu.js";import"./ToggleButton-DGKJly8H.js";import"./ToggleButtonGroup-DhWfGsgc.js";import"./MenuItem-iCAnPddj.js";import"./Tabs-CIlDC37T.js";import"./AccordionSummary-ChOmO8Ka.js";import"./Paper-CNdqdVGK.js";import"./ErrorFallback-DcOvTajC.js";import"./ErrorFallbackText-DYZvmVRS.js";import"./ErrorFallbackWrapper-rsg5SlDs.js";const St={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},i={render:()=>{const[e,t]=a.useState("Click the pencil to edit");return n(o,{value:e,onSave:t,label:"test input"})}},l={render:()=>{const[e,t]=a.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return n(o,{value:e,onSave:r=>{t(r)},label:"long input text",fullWidth:!0})}},s={render:()=>{const[e,t]=a.useState("Edit me!");return n(o,{value:e,onSave:r=>{t(r)},label:"long input text",sx:{width:"250px"}})}},p={render:()=>{const[e,t]=a.useState("Edit me!");return n(o,{value:e,onSave:r=>{t(r)},label:"long input text",error:!0,errorText:"Something went wrong!"})}},m={render:()=>{const[e,t]=a.useState("");return n(o,{value:e,onSave:r=>{t(r)},label:"This is an empty field",helperText:"This is a helper text, that will show on the input field as long as there are no errorText"})}},Tt=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];var d,h,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as Basic,s as CustomWidth,l as FullWidth,m as NoInitialValue,p as WithErrorText,Tt as __namedExportsOrder,St as default};
