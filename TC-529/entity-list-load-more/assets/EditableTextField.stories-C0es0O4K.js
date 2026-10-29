import{r as a,a as n}from"./iframe-Bm3hXUOR.js";import{i as o}from"./EntityList-rJdJf1cx.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-_AwHYlr2.js";import"./Stack-CweGn0Hc.js";import"./styled-DyULGS0b.js";import"./extendSxProp-BuZx_F0_.js";import"./clsx-B-dksMZM.js";import"./styled-C7iFnRcW.js";import"./createStyled-BSW-AAi3.js";import"./useThemeProps-DbicsnOf.js";import"./composeClasses-fLhin0tj.js";import"./Text-DijcGIMv.js";import"./Typography-IeSSUSnG.js";import"./ListContext-DK998PZh.js";import"./ListItem-mVDRARA2.js";import"./FormControl-BPl_v2oA.js";import"./useFormControl-Dh2tG7y1.js";import"./TransitionGroupContext-TroGB69i.js";import"./resolveComponentProps-B_u2Bd7V.js";import"./ButtonBase-B90bUUd9.js";import"./Toolbar-BGwmXmZ6.js";import"./TextField-DZPOD6P2.js";import"./Modal-DT28HXjZ.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-BDu1bYir.js";import"./index-Cj-yI5r7.js";import"./index-DQBmKBjb.js";import"./utils-BaA0rvxy.js";import"./Popover-EfvB51d9.js";import"./Paper-pWUzODlp.js";import"./useControlled-BLxWakUc.js";import"./createSvgIcon-CY9Fp0_O.js";import"./SvgIcon-BeWTLv9H.js";import"./FormHelperText-B1KQ539b.js";import"./Close-DwHyc7oX.js";import"./Popper-ByZb3Mzn.js";import"./Badge-C2hR_d-s.js";import"./Chip-BZnuQMLc.js";import"./IconButton-CErjrx2_.js";import"./FormControlLabel-zVmiSlDE.js";import"./MenuItem-DPWeZRqW.js";import"./dividerClasses-DReHYfP6.js";import"./Button-CBrDpZ-p.js";import"./MapToggleButtonPresentational-CBDLh_cV.js";import"./Remove-BQa1AOEr.js";import"./Box-CexaEQmQ.js";import"./ExpandLessIcon-DBGEN9sP.js";import"./Box-D21XowzU.js";import"./Container-edJRQxXs.js";import"./CogIcon-BvyMh2cw.js";import"./InfoIcon-DtylHRhB.js";import"./ExpandMoreIcon-Rcc8lwpw.js";import"./ThemeSwitchRow-D2RDNnRH.js";import"./index-DCLPWREO.js";import"./IconButton-DbDsumXP.js";import"./Badge-Bln6FEW9.js";import"./Chip-sFPDCY_T.js";import"./Divider-1DTE9E3S.js";import"./Divider-eqbb1UOv.js";import"./TreeView-DbGOvJIf.js";import"./useThemeProps-Bp1dY9od.js";import"./Collapse-Ddn3acUj.js";import"./useSlot-Dr-m60mq.js";import"./AppInfoRow-C1wf-V0h.js";import"./_IconPopover-B-DWREQB.js";import"./AppSettings-ueUwBjzn.js";import"./SvgIcon-BOgW6Vs6.js";import"./TableRow-D-N1ayrG.js";import"./TableCell-D6yiUVMs.js";import"./Skeleton-D7hRqs-z.js";import"./Skeleton-B_UdrOGr.js";import"./Edit-RIIp7UWE.js";import"./LinearProgress-CayA7BiN.js";import"./LinearProgress-BUkYKEbD.js";import"./Spinner-DXnO_-hv.js";import"./CircularProgress-Dib0Lx_Z.js";import"./Dialog-BJXw5Ehe.js";import"./DialogContent-DMwkd_KF.js";import"./Alert-FBw1yGft.js";import"./ToggleButton-YWaXnOlt.js";import"./ToggleButton-BCPxy8Ge.js";import"./ToggleButtonGroup-DgGofYMS.js";import"./LinkButton-BXoA6ppQ.js";import"./TextField-ByxcbquB.js";import"./Switch-CDRD8Euo.js";import"./Switch-It0KOob1.js";import"./LabeledSwitch-DVDqP3zB.js";import"./RadioGroup-BAvBK26U.js";import"./FormControl-CiX3rHgQ.js";import"./FormHelperText-Bc9Sqjm2.js";import"./Tabs-3h5XvcqN.js";import"./MenuItem-CH4gFEae.js";import"./AccordionDetails-Ct_vIrVf.js";import"./Paper-BDi0dJoh.js";import"./ErrorFallback-DgO8QC3X.js";import"./ErrorFallbackText-C_qZY6-a.js";import"./ErrorFallbackWrapper-FM7Ac7RI.js";import"./Brand-CHH9dXMD.js";const St={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
