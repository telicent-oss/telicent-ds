import{r as n,j as o}from"./iframe-woqfefPC.js";import{E as r}from"./DropdownButton-B1bD1lNa.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CZrO7rOz.js";import"./SvgIcon-Bo1XjP9O.js";import"./generateUtilityClass-BJXokMoA.js";import"./styled-DxPBiXUf.js";import"./generateUtilityClasses-BfMa5HrZ.js";import"./useTheme-DjCAOCMf.js";import"./Box-B199DmZe.js";import"./Box-CdBdZvPi.js";import"./Container-DlcQbp9d.js";import"./styled-CUr9clCY.js";import"./createStyled-IyuL39l2.js";import"./useThemeProps-C7rvhRGK.js";import"./FlexBox-CFiAFxVr.js";import"./Stack-CkaIEl_P.js";import"./Typography-DpKxRL_6.js";import"./Paper-Cel9I3vj.js";import"./useThemeProps-DiI4sMJp.js";import"./Text-CVdTrgex.js";import"./AdapterDayjs-SYc6eaHj.js";import"./Modal-CaqrQysV.js";import"./utils-BHr5gcCM.js";import"./TransitionGroupContext-DpyE4Xc2.js";import"./index-Cc2aF9ce.js";import"./resolveComponentProps-BPbh-zwX.js";import"./Popover-FzkS9WOq.js";import"./TextField-C8YEFGvP.js";import"./useFormControl-CdUfgNyJ.js";import"./createSvgIcon-DMQw-rzj.js";import"./IconButton-CZXr5bFM.js";import"./ButtonBase-CZ3-eO2f.js";import"./DialogContent-D9t3JHo2.js";import"./Button-BYXN4taO.js";import"./Chip-CN1uKpCE.js";import"./DateTimePicker-BCq-mAD2.js";import"./Divider-CDzzakYn.js";import"./AppInfoRow-FQf-Uxyu.js";import"./Chip-Ye1FV8gr.js";import"./Divider-B-R56vz7.js";import"./TreeView-CnSgD92Q.js";import"./Alert-5oooyx2V.js";import"./LinearProgress-BghVVCAF.js";import"./Spinner-C544qo6r.js";import"./Dialog-Ck4mEIjf.js";import"./MapToggleButtonPresentational-DigQzjPw.js";import"./Remove-BFnkFzrU.js";import"./LinkButton-B1YmsP7j.js";import"./TextField-DBB085ZE.js";import"./Switch-CUBS3sDF.js";import"./DatePicker-C25_Cre5.js";import"./Paper-BJBTp4DB.js";import"./ErrorFallback-FTfU9tJD.js";import"./ErrorFallbackText-BxvBPsFK.js";import"./ErrorFallbackWrapper-WIZsIluo.js";import"./Brand-DchGyFNu.js";import"./constants-5mjpbbvY.js";import"./Edit-DCb6sKCZ.js";const Pe={title:"Inputs/Editable TextField",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},i={render:()=>{const[e,t]=n.useState("Click the pencil to edit");return o(r,{value:e,onSave:t,label:"test input"})}},l={render:()=>{const[e,t]=n.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return o(r,{value:e,onSave:a=>{t(a)},label:"long input text",fullWidth:!0})}},s={render:()=>{const[e,t]=n.useState("Edit me!");return o(r,{value:e,onSave:a=>{t(a)},label:"long input text",sx:{width:"250px"}})}},p={render:()=>{const[e,t]=n.useState("Edit me!");return o(r,{value:e,onSave:a=>{t(a)},label:"long input text",error:!0,errorText:"Something went wrong!"})}},u={render:()=>{const[e,t]=n.useState("");return o(r,{value:e,onSave:a=>{t(a)},label:"This is an empty field",helperText:"This is a helper text, that will show on the input field as long as there are no errorText"})}};var m,h,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(C=(b=p.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var E,f,y;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="This is an empty field" helperText="This is a helper text, that will show on the input field as long as there are no errorText" />;
  }
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ue=["Basic","FullWidth","CustomWidth","WithErrorText","NoInitialValue"];export{i as Basic,s as CustomWidth,l as FullWidth,u as NoInitialValue,p as WithErrorText,Ue as __namedExportsOrder,Pe as default};
