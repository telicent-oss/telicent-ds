import{r as a,a as n}from"./iframe-C1kADl7K.js";import{i as o}from"./EntityList-DD__byuN.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-0Zk8Z1wf.js";import"./Stack-VS7yGLX2.js";import"./styled-B_lTjOn2.js";import"./extendSxProp-A80SNn2E.js";import"./clsx-B-dksMZM.js";import"./styled-Dqs76Ca-.js";import"./createStyled-Cjai_X-W.js";import"./useThemeProps-Ceyy6DTc.js";import"./composeClasses-fLhin0tj.js";import"./Text-HgubeblD.js";import"./Typography-B2gj4f-z.js";import"./ListContext-CpKQvUa4.js";import"./ListItem-zqYHDaok.js";import"./FormControl-FAVJKkDC.js";import"./useFormControl-DZcbumU_.js";import"./TransitionGroupContext-DqUd00ju.js";import"./resolveComponentProps-CH300SQ3.js";import"./ButtonBase-NZH3pNGk.js";import"./Toolbar-BXcFouCQ.js";import"./TextField-LvDA3ZY0.js";import"./Modal-ZwwWAhia.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-Ddp69iyh.js";import"./index-7_0JHsY4.js";import"./index-CSdfPHX6.js";import"./utils-DhhX_lJH.js";import"./Popover-BhjfhAkg.js";import"./Paper-DQDiDue-.js";import"./useControlled-CMijF2lP.js";import"./createSvgIcon-vxqAnrWb.js";import"./SvgIcon-Dgf8Yk0z.js";import"./FormHelperText-Ctz0a05h.js";import"./Close-DlnbITpg.js";import"./Popper-BIvXmWfM.js";import"./Badge-DVEzrCrb.js";import"./Chip-Cday2RBB.js";import"./IconButton-D9H-eKUV.js";import"./FormControlLabel-DE2FMvJ1.js";import"./MenuItem-An3zk10d.js";import"./dividerClasses-B_31kY5s.js";import"./Button-CRAaBK8B.js";import"./MapToggleButtonPresentational-FOs4i9Kd.js";import"./Remove-Bj49Kl6q.js";import"./Box-BdLyxJDN.js";import"./ExpandLessIcon-BAbK8V4h.js";import"./Box-LsPv36hu.js";import"./Container-BJFXwx0J.js";import"./CogIcon-BR-e7jH6.js";import"./InfoIcon-CR0eptQ5.js";import"./ExpandMoreIcon-Ca-rTBJg.js";import"./ThemeSwitchRow-DggDMvDb.js";import"./index-BeWUlcg2.js";import"./IconButton-D5lK2i8o.js";import"./Badge-CFK-UBwA.js";import"./Chip-Dl8h3Hwb.js";import"./Divider-f5jacwQy.js";import"./Divider-CijklUH2.js";import"./TreeView-BNkh8rg4.js";import"./useThemeProps-V4VNHFY4.js";import"./Collapse-D-lGiZGf.js";import"./useSlot-DWlSKb9c.js";import"./AppInfoRow-C2KGKin4.js";import"./_IconPopover-BigTk8_r.js";import"./AppSettings-Ce1ekPQV.js";import"./SvgIcon-DjNXdhgA.js";import"./TableRow-Cp9U1s9E.js";import"./TableCell-YjjddMcy.js";import"./Skeleton-Dd-aKLDg.js";import"./Skeleton-Cw8vu2zv.js";import"./Edit-B0xnlOWG.js";import"./LinearProgress-D7LbuYfT.js";import"./LinearProgress-Cc3KIWRO.js";import"./Spinner-oxy8AqCs.js";import"./CircularProgress-CPCux3_H.js";import"./Dialog-CJUISWAB.js";import"./DialogContent-Dmn_sdtG.js";import"./Alert-B6r98CIF.js";import"./ToggleButton-CltJGPg5.js";import"./ToggleButton-D0NaummI.js";import"./ToggleButtonGroup-CjMZ_ebh.js";import"./LinkButton-DYifi3rJ.js";import"./TextField-Ls5lKTbc.js";import"./Switch-vKlz1c9P.js";import"./Switch-Bxq9Tkvu.js";import"./LabeledSwitch-DORL5yab.js";import"./RadioGroup-BMjLAN0C.js";import"./FormControl-Ckwgi1a3.js";import"./FormHelperText-CyMEtxqf.js";import"./Tabs-a25RXXRz.js";import"./MenuItem-YUdwQe2h.js";import"./AccordionDetails-C7SPSNj5.js";import"./Paper-Dv5b5qFz.js";import"./ErrorFallback-2Hmi_7YV.js";import"./ErrorFallbackText-Bksmpx64.js";import"./ErrorFallbackWrapper-dwx0rRDf.js";import"./Brand-DxKKSwRE.js";const St={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
