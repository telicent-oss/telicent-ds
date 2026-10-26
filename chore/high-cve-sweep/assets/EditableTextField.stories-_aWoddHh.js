import{r as a,a as n}from"./iframe-BrOrNHEh.js";import{i as o}from"./EntityList-H_0K-dzQ.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-D5UCFB1S.js";import"./Stack-CkS2dy7z.js";import"./styled-B7Gun_NM.js";import"./extendSxProp-Duzm6Lca.js";import"./clsx-B-dksMZM.js";import"./styled-Bt2mTeFf.js";import"./createStyled-BOu-1Jtm.js";import"./useThemeProps-Cz1Ild6z.js";import"./composeClasses-fLhin0tj.js";import"./Text-DFwA3vR5.js";import"./Typography-Dpm-p6ja.js";import"./ListContext-7u-aoan4.js";import"./ListItem-KJHx1wCT.js";import"./FormControl-DZ_EUKmb.js";import"./useFormControl-BruFV-Qx.js";import"./TransitionGroupContext-Dt8HhoUr.js";import"./resolveComponentProps-DmG19-z7.js";import"./ButtonBase-DftoHfZR.js";import"./Toolbar-hT1KjkR5.js";import"./TextField-B2xiZYVb.js";import"./Modal-Cq6MPz4D.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-DGBa8jx5.js";import"./index-DbLrVmhX.js";import"./index-DI5L87ft.js";import"./utils-weDOyctD.js";import"./Popover-fh7sV9SA.js";import"./Paper-vuiB8TOC.js";import"./useControlled-BjktlrWs.js";import"./createSvgIcon-BVz2CBJw.js";import"./SvgIcon-oJ7O5BsC.js";import"./FormHelperText-CVrFiion.js";import"./Close-C1Ajlgcl.js";import"./Popper-BMlA55IB.js";import"./Badge-LDV7duPO.js";import"./Chip-FRFfDpZp.js";import"./IconButton-D5nyRFzv.js";import"./FormControlLabel-Ci79UUIH.js";import"./MenuItem-DmQEqCQc.js";import"./dividerClasses-Cf_Zsr30.js";import"./Button-CSBjMYNz.js";import"./MapToggleButtonPresentational-DjTLtwPH.js";import"./Remove-BXICJJmX.js";import"./Box-BfS4SYDH.js";import"./ExpandLessIcon-BzZ4XDrP.js";import"./Box-CLS-9xVu.js";import"./Container-BQSx0dcU.js";import"./CogIcon-DLVK3cal.js";import"./InfoIcon-BSsggCtY.js";import"./ExpandMoreIcon-hM54sdJa.js";import"./ThemeSwitchRow-CXKB4Cad.js";import"./index-DAO22fas.js";import"./IconButton-DY0MGdyy.js";import"./Badge-BMrbfaBl.js";import"./Chip-BkKs13LT.js";import"./Divider-EangdiJD.js";import"./Divider-B8FqOrn9.js";import"./TreeView-CY6JI_wL.js";import"./useThemeProps-DdH0afsQ.js";import"./Collapse-BxbbjR-2.js";import"./useSlot-T2OhbpiU.js";import"./AppInfoRow-BoeKISh2.js";import"./_IconPopover-M7QzOQvw.js";import"./AppSettings-8Bz0ezeY.js";import"./SvgIcon-M1RTRqad.js";import"./TableRow-B288CNJ8.js";import"./TableCell--9jHtUYw.js";import"./Skeleton-g9QI3QGP.js";import"./Skeleton-F5pzjQNl.js";import"./Edit-4mo734kz.js";import"./LinearProgress-Dhxq7sJJ.js";import"./LinearProgress-BFSiQRwS.js";import"./Spinner-DB7mFyLO.js";import"./CircularProgress-ClV7g0pC.js";import"./Dialog-B_-7JoVZ.js";import"./DialogContent-R-0O7NC9.js";import"./Alert-C2LM2JGB.js";import"./ToggleButton-h1qrIylX.js";import"./ToggleButton-RaOfILww.js";import"./ToggleButtonGroup-DJERzG3r.js";import"./LinkButton-tyFKol7f.js";import"./TextField--1bCY3MA.js";import"./Switch-v5jAUzas.js";import"./Switch-DUyEOTYL.js";import"./LabeledSwitch-xfpQoVPs.js";import"./RadioGroup-BxGwEAqL.js";import"./FormControl-DfXZkWqG.js";import"./FormHelperText-aeiOJUMu.js";import"./Tabs-BjpX6Btc.js";import"./MenuItem-DhoBzDNC.js";import"./AccordionDetails-CYEP5uVx.js";import"./Paper-oJZ4x_5E.js";import"./ErrorFallback-Bx0JnRhm.js";import"./ErrorFallbackText-B1EPTBkB.js";import"./ErrorFallbackWrapper-C9HUOcDg.js";import"./Brand-Dz7COHp9.js";const St={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
