import{r as o,a as n}from"./iframe-DoV3QjMy.js";import{E as a}from"./DropdownButton-BhbMAESU.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-wPSuN2L4.js";import"./SvgIcon-LfRk_hx7.js";import"./clsx-B-dksMZM.js";import"./styled-CPIBH1-1.js";import"./extendSxProp-fXUqE6Bn.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-R2nn2wZz.js";import"./Box-BOj_am_D.js";import"./Box-i9wHmHIK.js";import"./Container-BCAp1nsC.js";import"./styled-B-12PeFE.js";import"./createStyled-eXdYsONq.js";import"./useThemeProps-TdGp5_1L.js";import"./FlexBox-DBCcJIxQ.js";import"./Stack-BdMqYFWr.js";import"./Typography-C5M9lYVd.js";import"./Paper-D8EuXHEg.js";import"./CogIcon-BrM3bM08.js";import"./InfoIcon-CiYXzfUV.js";import"./ExpandMoreIcon-B2nIi4ex.js";import"./ThemeSwitchRow-FSCnqxc5.js";import"./index-CQhMpfvr.js";import"./Text-5OLsLL-X.js";import"./AdapterDayjs-BKhrlOSN.js";import"./useThemeProps-BOXpzJ5n.js";import"./Modal-DOjyMiRU.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-D3Q5HB-K.js";import"./resolveComponentProps-Y7s_nXSn.js";import"./index-DW2iM9tp.js";import"./utils-wGaMTb_1.js";import"./Popover-DGWDneoN.js";import"./TextField-CBauxFJv.js";import"./useFormControl-BBJmWV5Z.js";import"./FormControl-NT9TewQW.js";import"./ListContext-DSsdSFYa.js";import"./useControlled-D4ltESLF.js";import"./createSvgIcon-BXWXI27a.js";import"./FormHelperText-DH_PsvUH.js";import"./IconButton-Do8WBZlm.js";import"./ButtonBase-B3vut5uf.js";import"./DialogContent-Cxk4mq_R.js";import"./Button-Q5m5wgGr.js";import"./Chip-ChxBfEd0.js";import"./MenuItem-Bi0nOKmr.js";import"./dividerClasses-DWbaFYr4.js";import"./_IconPopover-3JecEz2K.js";import"./Chip-DJ5vTtwO.js";import"./Divider-DRlkiuEy.js";import"./Divider-B_fO4zSk.js";import"./TreeView-BoweCL_Q.js";import"./Collapse-CsdAK5Wv.js";import"./useSlot-BdGIBGt4.js";import"./AppInfoRow-LLJ-5Iyu.js";import"./AppSettings-BRMLiFkJ.js";import"./SvgIcon-DWBoWjNh.js";import"./TableRow-CeRToYDZ.js";import"./LinearProgress-B2ekBvrP.js";import"./Spinner-CSc35F_z.js";import"./Dialog-ypZzlQrl.js";import"./MapToggleButtonPresentational-DTPSB-td.js";import"./Remove-DZnC4XqL.js";import"./Alert-DNKQv9Xy.js";import"./ToggleButton-CcNjzFiL.js";import"./ToggleButtonGroup-CBnYeWXB.js";import"./LinkButton-RAsf-V-S.js";import"./TextField-nss9Ddfr.js";import"./Switch-Dv-Mdd5-.js";import"./LabeledSwitch-CGdobyKV.js";import"./DatePicker-D3z9p8TY.js";import"./DateTimePicker-C5tnYF0t.js";import"./FormControl-Dx2UVhU_.js";import"./FormHelperText-DzTrQ05w.js";import"./MenuItem-98KVhiDY.js";import"./AccordionDetails-nJFr__g1.js";import"./Paper-Ci4OLb79.js";import"./ErrorFallback-ChSIl1-_.js";import"./ErrorFallbackText-DVL8h8i-.js";import"./ErrorFallbackWrapper-CrN-k4Ys.js";import"./Brand-CDQ5BSnl.js";import"./Edit-CXAUVhGa.js";const at={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ot=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,m as NoInitialValue,p as WithErrorText,ot as __namedExportsOrder,at as default};
