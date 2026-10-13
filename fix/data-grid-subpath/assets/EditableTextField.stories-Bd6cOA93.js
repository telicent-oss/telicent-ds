import{r as o,a as n}from"./iframe-BmJaKzpA.js";import{E as a}from"./DropdownButton-QvXMWf5g.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-D5NkrVUA.js";import"./SvgIcon-DbW9RRsY.js";import"./clsx-B-dksMZM.js";import"./styled-CFQ-Ztvf.js";import"./extendSxProp-Cqpi5UuK.js";import"./composeClasses-fLhin0tj.js";import"./Box-P52OPraP.js";import"./Box-B2o-aQ44.js";import"./Container-7dGm0tRY.js";import"./styled-CPt569yI.js";import"./createStyled-Bffddmhk.js";import"./useThemeProps-B16XkqYe.js";import"./FlexBox-DgaudmOI.js";import"./Stack-BjArtnwr.js";import"./Typography-Bjj7o5JG.js";import"./Paper-B5tHWr3y.js";import"./CogIcon-BGSwLsgD.js";import"./InfoIcon-C5-JlXMO.js";import"./ExpandMoreIcon-BN4cT-yD.js";import"./ThemeSwitchRow-CfV4zxDI.js";import"./index-lCqMlpSx.js";import"./Text-B1HWYqxs.js";import"./ListItem-BfrYHW-q.js";import"./ListContext-BjCFAdrG.js";import"./FormControl-CFg6_W5y.js";import"./useFormControl-pjOXLDlB.js";import"./TransitionGroupContext-CMgFzCdF.js";import"./resolveComponentProps-Dj3a59a6.js";import"./ButtonBase-BFPoEEs2.js";import"./Toolbar-jD6vFalY.js";import"./TextField--jGjhfWz.js";import"./Modal-C75qnOpZ.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-DhKKRKi1.js";import"./utils-DZMG5O1d.js";import"./Popover-GM9dkxAx.js";import"./useControlled-BUnwEBDo.js";import"./createSvgIcon-CpJqzDT6.js";import"./FormHelperText-DTG0QA_j.js";import"./Close-amllp88t.js";import"./Popper-CifQJid9.js";import"./Chip-CgO8bUZN.js";import"./IconButton-DWTOtJ52.js";import"./FormControlLabel-3XwJheib.js";import"./MenuItem-CuIuo8np.js";import"./dividerClasses-BiY2d609.js";import"./_IconPopover-1aG3b1zb.js";import"./Chip-Ql9O3aun.js";import"./Divider-CTM8S9Dj.js";import"./Divider-CemJJ6Wh.js";import"./TreeView-CtojhVRp.js";import"./useThemeProps-BowsGwXu.js";import"./Collapse-CDHPxM_N.js";import"./useSlot-RSZxcDJ_.js";import"./AppInfoRow-B-b4XEQG.js";import"./AppSettings-euvhcHhi.js";import"./SvgIcon-ury5YQzT.js";import"./TableRow-C-dHDyK3.js";import"./TableCell-2kqeg-ZR.js";import"./LinearProgress-CkPmAm-N.js";import"./LinearProgress-DWspQSET.js";import"./Spinner-B8w9B477.js";import"./CircularProgress-Bpcy9xeq.js";import"./Dialog-BjU2rSW3.js";import"./DialogContent-b24aC058.js";import"./Button-CgVDEB-f.js";import"./MapToggleButtonPresentational-BlGzR4tE.js";import"./Remove-BvGV8H9W.js";import"./Alert-Dewj0bTT.js";import"./ToggleButton-DZeEWmii.js";import"./ToggleButton-BB7t-J4s.js";import"./ToggleButtonGroup-BiA9UuSt.js";import"./LinkButton-LA6411YK.js";import"./TextField-CmL0AHrj.js";import"./Switch-BDo_8rDv.js";import"./Switch-oYQP8P7N.js";import"./LabeledSwitch-Vf-AJisw.js";import"./RadioGroup-CajsPWEN.js";import"./FormControl-DkXLR7hU.js";import"./FormHelperText-9r7loZH4.js";import"./Tabs-NOxFJG61.js";import"./MenuItem-6sxk0toU.js";import"./AccordionDetails-CuYx0iXK.js";import"./Paper-Cl8KISr9.js";import"./ErrorFallback-BuYh8t03.js";import"./ErrorFallbackText-C7OKWQpp.js";import"./ErrorFallbackWrapper-BF42-cxX.js";import"./Brand-IOllSh90.js";import"./Edit-DNF2J48_.js";const dt={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},i={render:()=>{const[e,t]=o.useState("Click the pencil to edit");return n(a,{value:e,onSave:t,label:"test input"})}},l={render:()=>{const[e,t]=o.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return n(a,{value:e,onSave:r=>{t(r)},label:"long input text",fullWidth:!0})}},s={render:()=>{const[e,t]=o.useState("Edit me!");return n(a,{value:e,onSave:r=>{t(r)},label:"long input text",sx:{width:"250px"}})}},p={render:()=>{const[e,t]=o.useState("Edit me!");return n(a,{value:e,onSave:r=>{t(r)},label:"long input text",error:!0,errorText:"Something went wrong!"})}},m={render:()=>{const[e,t]=o.useState("");return n(a,{value:e,onSave:r=>{t(r)},label:"This is an empty field",helperText:"This is a helper text, that will show on the input field as long as there are no errorText"})}};var d,h,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ht=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,m as NoInitialValue,p as WithErrorText,ht as __namedExportsOrder,dt as default};
