import{r as a,a as n}from"./iframe-Qc_S7xDc.js";import{i as o}from"./UserProfileContent-BtTtKEHB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dj7cUP7O.js";import"./clsx-B-dksMZM.js";import"./styled-CgcIX_5n.js";import"./extendSxProp-BDprp3VL.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-BGM1JOzh.js";import"./TransitionGroupContext-CPUMsqsi.js";import"./MapToggleButtonPresentational-BTwyEcFF.js";import"./Remove-BPrAu3rF.js";import"./createSvgIcon-vUDj1WZO.js";import"./SvgIcon-CVLqOmKr.js";import"./IconButton-BfhPabTn.js";import"./Paper-C70JDaiv.js";import"./Box-CxkKEmSS.js";import"./XIcon-FwcEWS-P.js";import"./Stack-DoNqUwFA.js";import"./styled-BB7A3pcn.js";import"./createStyled-CUdeGtFR.js";import"./useThemeProps-BxFBB-sR.js";import"./Typography-Cu-yy0Da.js";import"./Box-DtX81eGL.js";import"./Container-C-AxOArc.js";import"./FlexBox-DBS92b2G.js";import"./Brand-CXuO_7Nj.js";import"./IconButton-CRgr_6IA.js";import"./LinkButton-PZL0MtA6.js";import"./AppInfoRow-L9Ct41uR.js";import"./_IconPopover-CVwwBihx.js";import"./Popover-C5IN9cMT.js";import"./utils-ckqgl2AC.js";import"./index-xdr6vpDP.js";import"./index-DFgxXqr5.js";import"./Modal-KUCWN-hc.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C8vHIN9n.js";import"./useSlotProps-fAUM90Vx.js";import"./InfoIcon-WP7T-PZz.js";import"./Text-B8g7NM2g.js";import"./AppSettings-DLGgVhD4.js";import"./CogIcon-QfRJwl7x.js";import"./Badge-DH4M2IdE.js";import"./Badge-if7a42J8.js";import"./Chip-DtxHEqsM.js";import"./Chip-uL9TB9Pu.js";import"./Divider-CTYdoKka.js";import"./Divider-D8fiawbv.js";import"./dividerClasses-yonhPajF.js";import"./ThemeSwitchRow-B00tKUjH.js";import"./Skeleton-BJSorI16.js";import"./Skeleton-Dkff_NGZ.js";import"./TextField-xzu_DPyE.js";import"./useFormControl-xNPWxtva.js";import"./FormControl-X_hisCzp.js";import"./ListContext-BHAyDyBX.js";import"./useControlled-Cpi-ico-.js";import"./FormHelperText-DwzhRR8K.js";import"./MenuItem-TKTN96be.js";import"./ExpandMoreIcon-CcvmRhY8.js";import"./ListItem-C8W6Ik8d.js";import"./Toolbar-DSDblHdz.js";import"./Close-CIhAeHGU.js";import"./Popper-BT4vA2xI.js";import"./FormControlLabel-DLxcqeM9.js";import"./Edit-BvmZceNx.js";import"./SvgIcon-BrScsTXV.js";import"./TableRow-DHvRRQH1.js";import"./TableCell-_uNta8pa.js";import"./TreeView-BfiblcHE.js";import"./useThemeProps-Df8lhP5o.js";import"./index-C7V_D8MZ.js";import"./Collapse-CYu1yO86.js";import"./Dialog-DQAHdxrq.js";import"./DialogContent-DxaHQn4a.js";import"./Alert-C-ywUKjz.js";import"./useSlot-Cj9015tv.js";import"./LinearProgress-YzlvXZ7B.js";import"./LinearProgress-Cx-vdS0c.js";import"./Spinner-CFkE0pqS.js";import"./CircularProgress-Cu2BM2_M.js";import"./TextField-CMKqH5KV.js";import"./FormControl-BQbHDIJ4.js";import"./FormHelperText-Ca1ptZ2c.js";import"./LabeledSwitch-Z3aJeObb.js";import"./Switch-DDlhBOlC.js";import"./Switch-CLg_WwE6.js";import"./RadioGroup-Bf07373r.js";import"./ToggleButton-ClkVXijM.js";import"./ToggleButton-DMCkzxLU.js";import"./ToggleButtonGroup-B1_EfocB.js";import"./MenuItem-CFb7InxQ.js";import"./Tabs-C5IpzZMr.js";import"./AccordionSummary-Bp6-l77_.js";import"./Paper-CUW1p5Tc.js";import"./ErrorFallback-CETo05fh.js";import"./ErrorFallbackText-CMA-asQU.js";import"./ErrorFallbackWrapper-iwCi0O44.js";const St={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
