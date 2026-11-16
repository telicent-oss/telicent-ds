import{r as a,a as n}from"./iframe-C_A9w9Xb.js";import{i as o}from"./UserProfileContent-CRSr_rhf.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BVdDZnN4.js";import"./clsx-B-dksMZM.js";import"./styled-BxBMGnZ7.js";import"./extendSxProp-DbsjyKNJ.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DghXKeJ1.js";import"./TransitionGroupContext-BJMJdx4M.js";import"./MapToggleButtonPresentational-CdT4filz.js";import"./Remove-CC1RGYYl.js";import"./createSvgIcon-i-zQ-M6d.js";import"./SvgIcon-C8_G8FNz.js";import"./IconButton-DGQcrcgI.js";import"./Paper-DSCOcLrg.js";import"./Box-DB6K2VlN.js";import"./XIcon-D-mT89jA.js";import"./Stack-CcwLWQH2.js";import"./styled-DY34dW0Q.js";import"./createStyled-B7kozB3A.js";import"./useThemeProps-sj6Fs-gH.js";import"./Typography-BLZTU97p.js";import"./Box-fYkPIWZP.js";import"./Container-C4ujFY5f.js";import"./FlexBox-xFc9aoH-.js";import"./Brand-d6OKu9aw.js";import"./IconButton-DZaun261.js";import"./LinkButton-jvGGWVn2.js";import"./AppInfoRow-CShKA_AM.js";import"./_IconPopover-DZzlnGrx.js";import"./Popover-DKdEqhrZ.js";import"./utils-DHOV5Dn-.js";import"./index-i4WXsvPC.js";import"./index-BHdyBRPi.js";import"./Modal-xQORnQ13.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-r2KoCv7J.js";import"./useSlotProps-aaY8J2bg.js";import"./InfoIcon-CsN7XvfL.js";import"./Text-VJDIJLPP.js";import"./AppSettings-BpaW4aTJ.js";import"./CogIcon-Xohb8vl0.js";import"./Badge-CTGjuVUc.js";import"./Badge-BZZrZQQO.js";import"./Chip-4mXnUy-p.js";import"./Chip-umbtqylA.js";import"./Divider-DJS9w1fE.js";import"./Divider-uAMQ62Ay.js";import"./dividerClasses-BaXV3koW.js";import"./ThemeSwitchRow-QiuVBBXJ.js";import"./Skeleton-CuTvwxzQ.js";import"./Skeleton-DWpJL6zw.js";import"./TextField-CPHMgkHr.js";import"./useFormControl-2yPes8mR.js";import"./FormControl-fAwcUdMf.js";import"./ListContext-DDqsAt6U.js";import"./useControlled-3RSfgazB.js";import"./FormHelperText-C73ZFMlI.js";import"./MenuItem-BXjSr2Yp.js";import"./ExpandMoreIcon-BqYNX6oE.js";import"./ListItem-CqSEfq_v.js";import"./Toolbar-yZjFEbA8.js";import"./Close-XBuytlI5.js";import"./Popper-PPx8E8Kn.js";import"./FormControlLabel-TrbeFuul.js";import"./Edit-CwFXdWdx.js";import"./SvgIcon-BL6aEYyy.js";import"./TableRow-BzcwC7-J.js";import"./TableCell-DIcGZfcO.js";import"./TreeView-DGUcOfc2.js";import"./useThemeProps-mFM7TQzY.js";import"./index-BQ8CXDCk.js";import"./Collapse-jyqoWJz2.js";import"./Dialog-C55D5thn.js";import"./DialogContent-C9vdccJg.js";import"./Alert-DbC5Ef0h.js";import"./useSlot-DetFjtbb.js";import"./LinearProgress-CFMEE1Eh.js";import"./LinearProgress-MCxEeQKE.js";import"./Spinner-9Pq1qpOg.js";import"./CircularProgress-BFo9ue-1.js";import"./TextField-CDBDoTkX.js";import"./FormControl-DPrwx_NL.js";import"./FormHelperText-BBL7cKe3.js";import"./LabeledSwitch-iaBcHpl_.js";import"./Switch-Bx0dlzK_.js";import"./Switch-DvW86pnT.js";import"./RadioGroup-D0W8_lBw.js";import"./ToggleButton-DvpTABDR.js";import"./ToggleButton-Czzc7CD5.js";import"./ToggleButtonGroup-C2sUNclb.js";import"./MenuItem-BjrtayUA.js";import"./Tabs-CvGfBwpz.js";import"./AccordionSummary-J3dFvStq.js";import"./Paper-BUzr6iGG.js";import"./ErrorFallback-BWZMsFtf.js";import"./ErrorFallbackText-CBna-xSZ.js";import"./ErrorFallbackWrapper-CXtFrO_G.js";const St={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
