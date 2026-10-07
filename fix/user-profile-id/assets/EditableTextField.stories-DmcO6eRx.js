import{r as o,a as n}from"./iframe-BMeccPNJ.js";import{E as a}from"./DropdownButton-CJcvDogh.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-B6HusTMu.js";import"./SvgIcon-Cm2TYdXM.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-PlbL7nuw.js";import"./extendSxProp-OZdELPHD.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-Buqurtd8.js";import"./Box-ChrdOdVs.js";import"./Box-BwQkrYug.js";import"./Container-CAzy0WzY.js";import"./styled-BEeg3fTD.js";import"./createStyled-Dcm0u-cs.js";import"./useThemeProps-C_eKUugk.js";import"./FlexBox-Bzg5xbu0.js";import"./Stack-BdG4YkNk.js";import"./Typography-Caf0sNeW.js";import"./Paper-Bfmpijtg.js";import"./CogIcon-X3PjyXPP.js";import"./InfoIcon-C43YUatg.js";import"./ExpandMoreIcon-CMplMLVo.js";import"./ThemeSwitchRow-Nkm5fIMW.js";import"./index-CN2QR1mZ.js";import"./Text-Cra0cu9R.js";import"./AdapterDayjs-px4ygSzx.js";import"./useThemeProps-XBwwIBHe.js";import"./Modal-PM6MIqry.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-HXr4o3EP.js";import"./resolveComponentProps-BszGJrBF.js";import"./index-DkyQgcjU.js";import"./utils-LzjE0vGE.js";import"./Popover-rQlvehgO.js";import"./TextField-vO5ouNTu.js";import"./useFormControl-DbNJ1HNF.js";import"./FormControl-C0VKj7ef.js";import"./ListContext-B5Su0ZnG.js";import"./useControlled-DdlDfNFx.js";import"./createSvgIcon-DqqCMwW-.js";import"./FormHelperText-CIvqbQfR.js";import"./IconButton-0rcJlT-l.js";import"./ButtonBase-o3LjpFbz.js";import"./DialogContent-DpwGlWTc.js";import"./Button-B5coKyWo.js";import"./Chip-3WEw9hIt.js";import"./MenuItem-BX1rIrqX.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-C3iVtoCa.js";import"./Chip-CK-xlIC7.js";import"./Divider-BN9JaA-W.js";import"./Divider-E-THRAyD.js";import"./TreeView-D-bHLFUm.js";import"./Collapse-klM-UQl4.js";import"./useSlot-rqk_l7yw.js";import"./AppInfoRow-BhcGHzv5.js";import"./AppSettings-Bog0XP8u.js";import"./SvgIcon-DBit6dcs.js";import"./TableRow-CT5-15pp.js";import"./LinearProgress-CICCh1kG.js";import"./Spinner-B2M52evq.js";import"./Dialog-BO3Bf7M6.js";import"./MapToggleButtonPresentational-DW-EnjXE.js";import"./Remove-MscLCauy.js";import"./Alert-CP3Y9oZL.js";import"./ToggleButton-m5lt3mYS.js";import"./LinkButton-Dtrnv-gT.js";import"./TextField-Bp2kLT4M.js";import"./Switch-D1a_Aegr.js";import"./LabeledSwitch-BoR8fQ6y.js";import"./DatePicker-TOMHDLiw.js";import"./DateTimePicker-D_BgxS3t.js";import"./FormControl-djpzVMG5.js";import"./FormHelperText-BWjSDbV-.js";import"./MenuItem-Be8lFLDg.js";import"./AccordionDetails-CLRP6GtA.js";import"./Paper-BldQVT4i.js";import"./ErrorFallback-_-KBymsS.js";import"./ErrorFallbackText-BX7d4Mxw.js";import"./ErrorFallbackWrapper-CQ7_lFb3.js";import"./Brand-C4lqvhvY.js";import"./Edit-DiVFn-cA.js";const at={title:"Inputs/Editable TextField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
