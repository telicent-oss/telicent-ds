import{j as e,a as x}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r}from"./index-Dl6G-zuu.js";import"./Button-2o7EfnUw.js";import{I as p}from"./IconButton-6csnvzSG.js";import"./LinkButton-udFJw26p.js";import{j as m}from"./jsx-runtime-DMAvRu52.js";import{c as h}from"./createSvgIcon-MUYTbX0p.js";import"./FlexGrid-BoEfBcU9.js";import"./TelicentMark-BQOfTp7R.js";import"./Container-FF4Fdp1b.js";import{F as S}from"./FlexBox-DVTFmfFO.js";import{T as P}from"./TextField-_uwvimc2.js";import{T as U}from"./Typography-Dhe6o_9I.js";import{B as L}from"./Box-Dhn_9KCB.js";import"./ButtonBase-DExEX2yL.js";import"./defaultTheme-DzLjz-dB.js";import"./styled-gOU_XONt.js";import"./generateUtilityClasses-Btm8e7dB.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-B3igqjqf.js";import"./IconButton-CV1Rw-GO.js";import"./useTheme-BorXEO18.js";import"./useTheme-Bb3Mws8A.js";import"./SvgIcon-ByXbI411.js";import"./Paper-BG42kFkz.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./useId-CkA8naEk.js";import"./Popover-ChqH2Att.js";import"./utils-BgVWvv5k.js";import"./index-B0kOWIl9.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./Menu-z0RjVFYM.js";import"./index-BbVSaS1S.js";const A=h(m.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),K=h(m.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),N=h(m.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),o=({value:t,onSave:a,error:i,errorText:n,helperText:W,...j})=>{const[M,u]=r.useState(!1),[g,v]=r.useState(t||""),B=()=>{u(!0)},_=()=>{a(g),u(!1)},q=()=>{v(t),u(!1)};return e(L,{display:"flex",alignItems:"center",gap:1,children:M?x(S,{direction:"row",alignItems:"center",gap:1,children:[e(P,{autoFocus:!0,value:g??"",onChange:H=>v(H.target.value),error:i,helperText:i?n:W,...j}),e(p,{onClick:_,size:"small",children:e(K,{sx:{color:"green",lineHeight:"inherit"}})}),e(p,{onClick:q,size:"small",children:e(N,{sx:{color:"red",lineHeight:"inherit"}})})]}):x(S,{direction:"row",alignItems:"center",gap:1,children:[e(U,{children:t}),e(p,{onClick:B,size:"small",children:e(A,{fontSize:"inherit"})})]})})};o.__docgenInfo={description:"",methods:[],displayName:"EditableTextField",props:{value:{required:!0,tsType:{name:"string"},description:""},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},errorText:{required:!1,tsType:{name:"string"},description:""}}};const Ie={title:"Inputs/Editable TextField",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},s={render:()=>{const[t,a]=r.useState("Click the pencil to edit");return e(o,{value:t,onSave:a,label:"test input"})}},l={render:()=>{const[t,a]=r.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return e(o,{value:t,onSave:n=>{a(n)},label:"long input text",fullWidth:!0})}},d={render:()=>{const[t,a]=r.useState("Edit me!");return e(o,{value:t,onSave:n=>{a(n)},label:"long input text",sx:{width:"250px"}})}},c={render:()=>{const[t,a]=r.useState("Edit me!");return e(o,{value:t,onSave:n=>{a(n)},label:"long input text",error:!0,errorText:"Something went wrong!"})}};var w,T,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Click the pencil to edit");
    return <EditableTextField value={value} onSave={setValue} label="test input" />;
  }
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var f,E,V;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="long input text" fullWidth />;
  }
}`,...(V=(E=l.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var b,y,F;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Edit me!");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="long input text" sx={{
      width: "250px"
    }} />;
  }
}`,...(F=(y=d.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var I,k,z;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Edit me!");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableTextField value={value} onSave={handleChange} label="long input text" error={true} errorText="Something went wrong!" />;
  }
}`,...(z=(k=c.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const ke=["Basic","FullWidth","CustomWidth","WithErrorText"];export{s as Basic,d as CustomWidth,l as FullWidth,c as WithErrorText,ke as __namedExportsOrder,Ie as default};
