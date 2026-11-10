import{r as a,a as n}from"./iframe-BZHB3Un-.js";import{i as o}from"./UserProfileContent-DAd2yYLO.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D-ZFpLGt.js";import"./clsx-B-dksMZM.js";import"./styled-DFCsjTlG.js";import"./extendSxProp-CzgBeSy5.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-CSj4P6pw.js";import"./TransitionGroupContext-CMC_19_q.js";import"./MapToggleButtonPresentational-Cp4hYjou.js";import"./Remove-B95LyZ4A.js";import"./createSvgIcon-Di0onuak.js";import"./SvgIcon-DX0QMT8j.js";import"./IconButton-7ww1QELc.js";import"./Paper-DUpmP5HH.js";import"./Box-CTxcfl9f.js";import"./XIcon-CMSbyjlB.js";import"./Stack-DxNHW9Oc.js";import"./styled-cmwt6iFF.js";import"./createStyled-DxnKb23n.js";import"./useThemeProps-D_zUfiSC.js";import"./Typography-z5FfRvY3.js";import"./Box-DiPYbFt5.js";import"./Container-DmrKR_aT.js";import"./FlexBox-tGhr2yqn.js";import"./Brand-MqwDsCPU.js";import"./IconButton-CM4zelNT.js";import"./LinkButton-D_rBBBP1.js";import"./AppInfoRow-DrjnbaOW.js";import"./_IconPopover-CbWDY7xq.js";import"./Popover-BjbYehdE.js";import"./utils-cH3ejkVE.js";import"./index-B0Xunt1t.js";import"./index-B5k6Jcma.js";import"./Modal-NAHaE5zp.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BrqKpcQI.js";import"./useSlotProps-CPJK55gG.js";import"./InfoIcon-CWbtE50h.js";import"./Text-3mwzoKOr.js";import"./AppSettings-Cnd9oPXt.js";import"./CogIcon-B4CvVzjS.js";import"./Badge-CnTk467N.js";import"./Badge-C_HtVrdi.js";import"./Chip-B5Qnfnmc.js";import"./Chip-wc17TB0W.js";import"./Divider-DzclfdEu.js";import"./Divider-CWRJhMbi.js";import"./dividerClasses-jWT-D4rl.js";import"./ThemeSwitchRow-DyN5Xd5p.js";import"./Skeleton-DwMrttJW.js";import"./Skeleton-B-oRqWrL.js";import"./TextField-PID_gPrg.js";import"./useFormControl-DJsbcvO2.js";import"./FormControl-BGctbngO.js";import"./ListContext-DbBECZus.js";import"./useControlled-CHatxUO2.js";import"./FormHelperText-t48YGxt5.js";import"./MenuItem-C9dMsQON.js";import"./ExpandMoreIcon-BY91CUws.js";import"./ListItem-Bl45hr75.js";import"./Toolbar-D0C-FHY9.js";import"./Close-N_DdzxXD.js";import"./Popper-Pcs9Nhir.js";import"./FormControlLabel-j7Gb_XUM.js";import"./Edit-Ba53KRFr.js";import"./SvgIcon-QkI8KwIQ.js";import"./TableRow-B32Y4JfJ.js";import"./TableCell-CBeb-3yx.js";import"./TreeView-CewVhRNn.js";import"./useThemeProps-ceYpTy6o.js";import"./index-VU7a6TPT.js";import"./Collapse-DZqhyoUz.js";import"./Dialog-Cs7wfcZs.js";import"./DialogContent-DPJEn1dC.js";import"./Alert-Dez6eiMf.js";import"./useSlot-BDNWXL-n.js";import"./LinearProgress-EmU5nnew.js";import"./LinearProgress-BihuoFKl.js";import"./Spinner-D5Jd85BR.js";import"./CircularProgress-DNevguKX.js";import"./TextField-DY3kfjm3.js";import"./FormControl-BG0iQYvU.js";import"./FormHelperText-DGuryOxw.js";import"./LabeledSwitch-CjU-tu_0.js";import"./Switch-CWWkTEfH.js";import"./Switch-CP1MaWVZ.js";import"./RadioGroup-DHwZAtU9.js";import"./ToggleButton-DNWc6yfH.js";import"./ToggleButton-BXdPjjSE.js";import"./ToggleButtonGroup-DMSjue0t.js";import"./MenuItem-BxQ5rQ8Q.js";import"./Tabs-BwMTEiRO.js";import"./AccordionSummary-CsGp2Z5d.js";import"./Paper-DAPKePBK.js";import"./ErrorFallback-BzU2Dhgy.js";import"./ErrorFallbackText-DZhyfm5F.js";import"./ErrorFallbackWrapper-CkvBZjx3.js";const St={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
