import{r as a,a as n}from"./iframe-Cc505q8T.js";import{i as o}from"./UserProfileContent-BCGV3pt1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BGbQUNXq.js";import"./clsx-B-dksMZM.js";import"./styled-BvzKQ4sx.js";import"./extendSxProp-DK-r-88F.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-xv6WL43m.js";import"./TransitionGroupContext-CQcyUDLY.js";import"./MapToggleButtonPresentational-SEdkkgro.js";import"./Remove-wLSkQjhc.js";import"./createSvgIcon-C2iK1MKO.js";import"./SvgIcon-QK6eTELx.js";import"./IconButton-wGfyijkC.js";import"./Paper-BEgnxPoV.js";import"./Box-DBDnR1g8.js";import"./XIcon-DfplpFrn.js";import"./Stack-CXQatkal.js";import"./styled-nyzOJzdX.js";import"./createStyled-DL0YunmW.js";import"./useThemeProps-DUoDE_hW.js";import"./Typography-JA0wl7ef.js";import"./Box-C7w_TU32.js";import"./Container-C5FmO0ZG.js";import"./FlexBox-INXNFDos.js";import"./Brand-B_inw8Nn.js";import"./IconButton-bijqnudJ.js";import"./LinkButton-CrQZWdvL.js";import"./AppInfoRow-DNstdpiQ.js";import"./_IconPopover-CEgvvroX.js";import"./Popover-B-7QVUjC.js";import"./utils-llZg6Ldu.js";import"./index-BYRKYzg2.js";import"./index-E67BpH2O.js";import"./Modal-B1TMbF1u.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CEFtJ1JV.js";import"./useSlotProps-vDTfIZOq.js";import"./InfoIcon-Dz7o8k3j.js";import"./Text-CeS4nIe3.js";import"./AppSettings-CJGIgiF6.js";import"./CogIcon-ChH7stlR.js";import"./Badge-CaVpaSp6.js";import"./Badge-UZyuKCJw.js";import"./Chip-CSt2gfB4.js";import"./Chip-C0LSZzbe.js";import"./Divider-DoUPlLT7.js";import"./Divider-CzNUtG-0.js";import"./dividerClasses-BvSlSoD1.js";import"./ThemeSwitchRow-DppX6RPX.js";import"./Skeleton-NT2g86kk.js";import"./Skeleton-wC5DXAYG.js";import"./TextField-BD6Mkee3.js";import"./useFormControl-C6vP74Jn.js";import"./FormControl-Ca5m24gk.js";import"./ListContext-mDo66NCa.js";import"./useControlled-bQ2OS_cP.js";import"./FormHelperText-BoGba_Gk.js";import"./MenuItem-CezCKy8F.js";import"./ExpandMoreIcon-ldPi6jMj.js";import"./ListItem-B3mBow1c.js";import"./Toolbar-bO9Fqt8n.js";import"./Close-DueXUMhB.js";import"./Popper-nweOkxzE.js";import"./FormControlLabel-CbfZt0_t.js";import"./Edit-CHOg278_.js";import"./SvgIcon-BEgI93BA.js";import"./TableRow-DCNIHjLK.js";import"./TableCell-B-Xo9P4q.js";import"./TreeView-BzLLrYY7.js";import"./useThemeProps-vZa-IxWp.js";import"./index-CmE1T0Xl.js";import"./Collapse-QTd9ButL.js";import"./Dialog-Co_6VBJM.js";import"./DialogContent-DXpWtf-D.js";import"./Alert-wTSBptqR.js";import"./useSlot-DSvhdQyN.js";import"./LinearProgress-CF5PbK0_.js";import"./LinearProgress-B38XWAmN.js";import"./Spinner-CkaqrDBP.js";import"./CircularProgress-Bo5P2Z-p.js";import"./TextField-CwQOSZsD.js";import"./FormControl-Bh0L5A3e.js";import"./FormHelperText-Dd5c2IgU.js";import"./LabeledSwitch-BO0Zz5ka.js";import"./Switch-ChbOueU7.js";import"./Switch-CHwrG2-X.js";import"./RadioGroup-CFZqodNP.js";import"./ToggleButton-D96Gk9kD.js";import"./ToggleButton--FZGV6SF.js";import"./ToggleButtonGroup-DaCVckCp.js";import"./MenuItem-CS3aBPeu.js";import"./Tabs-DF-xdkqW.js";import"./AccordionSummary-Bssa8i78.js";import"./Paper-DT8s_h7n.js";import"./ErrorFallback-BhqQfFtZ.js";import"./ErrorFallbackText-CIKedg_H.js";import"./ErrorFallbackWrapper-CGtn1SJd.js";const St={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
