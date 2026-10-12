import{r as a,a as n}from"./iframe-aFe7UUBz.js";import{E as o}from"./DropdownButton-CGpi1hqS.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-_Gn5GBEU.js";import"./SvgIcon--evEnJni.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BisXqFak.js";import"./extendSxProp-Cg1_Zgz3.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./Box-D3NLLewX.js";import"./Box-C4GBjpR7.js";import"./Container-SU972UVC.js";import"./styled-pNRJu87k.js";import"./createStyled-BGui5uB2.js";import"./useThemeProps-wiEASLar.js";import"./FlexBox-CmBTY25V.js";import"./Stack-DONLWdUd.js";import"./Typography-BW_wQ-ow.js";import"./Paper-Dibq-B0l.js";import"./CogIcon-Dzw3a1eq.js";import"./InfoIcon-DtypYTQN.js";import"./ExpandMoreIcon-CXldgYGR.js";import"./ThemeSwitchRow-Dg_y3FM8.js";import"./index-BZ_yw_br.js";import"./Text-DzLxPjqb.js";import"./AdapterDayjs-KkvHR9Mv.js";import"./useThemeProps-BXD491Jy.js";import"./Modal-B6NB2nb_.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CzKtgD_a.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-COer71JX.js";import"./index-BCoUhWCm.js";import"./utils-DumdPjpW.js";import"./Popover-DAqhZQe9.js";import"./InputAdornment-CZufPfa6.js";import"./useFormControl-BWvbFyMh.js";import"./TextField-BJ5r44lN.js";import"./FormControl-Drt8KI8a.js";import"./ListContext-BI1i6AEx.js";import"./useControlled-DSueLwQ1.js";import"./createSvgIcon-B8v7KFIv.js";import"./FormHelperText-B1iyLw_g.js";import"./IconButton-B1f28KGp.js";import"./ButtonBase--L73nkrK.js";import"./DialogContent-BK3fYsXw.js";import"./Button-i5m3WpsB.js";import"./Chip-jnP50xz1.js";import"./DataGrid-DvrmVkGc.js";import"./index-hVAbpQul.js";import"./Switch-CYakBrxK.js";import"./FormControlLabel-AQIEhTjn.js";import"./Skeleton-BYYXkkHT.js";import"./MenuItem-BksAsHXH.js";import"./dividerClasses-ClH17Faz.js";import"./LinearProgress-DoDInf46.js";import"./Divider-D0LHX0qm.js";import"./CircularProgress-C8hIlNO3.js";import"./Close-EYRLp0W2.js";import"./Tabs-D7uWqjx4.js";import"./TableCell-BAKDulqq.js";import"./ToggleButton-d-GapL7d.js";import"./_IconPopover-YVipcYc4.js";import"./Chip-CUl3csw_.js";import"./Divider-Dp_aJAS1.js";import"./TreeView-CZ0g_WUA.js";import"./Collapse-_-rzgl6R.js";import"./useSlot-CmIeWFIT.js";import"./AppInfoRow-F3c1S5e4.js";import"./AppSettings-DScsrM9R.js";import"./SvgIcon-Bpd7uWoU.js";import"./TableRow-b_2L1XJo.js";import"./LinearProgress-khjbRmBd.js";import"./Spinner-CWY5xgQX.js";import"./Dialog-DRC_GMD1.js";import"./MapToggleButtonPresentational-JgXdEZxi.js";import"./Remove-BYWHJlSb.js";import"./Alert-DqW_EzS7.js";import"./ToggleButton-DfTYlbw3.js";import"./LinkButton-17csqiIs.js";import"./TextField-Cx5VJ8ov.js";import"./Switch-4P0ZX1Dh.js";import"./LabeledSwitch-CLOpL5K_.js";import"./DatePicker-BxrT-zy4.js";import"./DateTimePicker-Di_rakTc.js";import"./LocalizationProvider-BHfuR2cp.js";import"./RadioGroup-OxucSz7v.js";import"./FormControl-DEBxrS_-.js";import"./FormHelperText-4VYnSz9d.js";import"./MenuItem-CpN00EoB.js";import"./AccordionDetails-fAqhD8kD.js";import"./Paper-B-DWjYaW.js";import"./ErrorFallback-DGzzW2Jr.js";import"./ErrorFallbackText-B_Z_nAtZ.js";import"./ErrorFallbackWrapper-CBwm4dqE.js";import"./Brand-GlYAhSh3.js";import"./Edit-qB64VPbS.js";const xt={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const wt=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,m as NoInitialValue,p as WithErrorText,wt as __namedExportsOrder,xt as default};
