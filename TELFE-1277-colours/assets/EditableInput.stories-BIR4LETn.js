import{j as e,a as h,F as g}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r}from"./index-Dl6G-zuu.js";import"./Button-2o7EfnUw.js";import{I as l}from"./IconButton-6csnvzSG.js";import"./LinkButton-udFJw26p.js";import{F as c,b as T,c as k,d as V}from"./index-Nuk3PsgH.js";import{T as F}from"./TextField-Cugujejn.js";import{T as B}from"./Typography-Dhe6o_9I.js";import{B as _}from"./Box-Dhn_9KCB.js";import"./jsx-runtime-DMAvRu52.js";import"./ButtonBase-DExEX2yL.js";import"./defaultTheme-DzLjz-dB.js";import"./styled-gOU_XONt.js";import"./generateUtilityClasses-Btm8e7dB.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-B3igqjqf.js";import"./IconButton-CV1Rw-GO.js";import"./useTheme-BorXEO18.js";import"./useTheme-Bb3Mws8A.js";import"./index-BfyspvgH.js";import"./useId-CkA8naEk.js";import"./Popover-DyPBubII.js";import"./utils-BgVWvv5k.js";import"./index-B0kOWIl9.js";import"./Paper-BG42kFkz.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./Menu-BldO7eLG.js";import"./index-BbVSaS1S.js";import"./createSvgIcon-MUYTbX0p.js";import"./SvgIcon-ByXbI411.js";const s=({value:t,onSave:n,...m})=>{const[i,p]=r.useState(!1),[d,u]=r.useState(t||""),w=()=>{p(!0)},y=()=>{n(d),p(!1)},E=()=>{u(t),p(!1)};return e(_,{display:"flex",alignItems:"center",gap:1,children:i?h(g,{children:[e(F,{value:d??"",onChange:I=>u(I.target.value),...m}),e(l,{onClick:E,children:e(c,{icon:T})}),e(l,{onClick:y,children:e(c,{icon:k})})]}):h(g,{children:[e(B,{children:t}),e(l,{onClick:w,children:e(c,{icon:V})})]})})};s.__docgenInfo={description:"",methods:[],displayName:"EditableInput",props:{value:{required:!0,tsType:{name:"string"},description:""},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const me={title:"Inputs/EditableInput",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
An input component that toggles between a static label and an editable text field.

- Click the pencil icon to enter edit mode.
- Type your new value.
- Click the floppy disk icon to save.

**Props:**
- \`value: string\` — the current text
- \`onChange: (value: string) => void\` — called when the user saves a new value
        `}}}},a={render:()=>{const[t,n]=r.useState("Click the pencil to edit");return e(s,{value:t,onSave:n,label:"test input"})}},o={render:()=>{const[t,n]=r.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return e(s,{value:t,onSave:i=>{n(i)}})}};var v,f,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Click the pencil to edit");
    return <EditableInput value={value} onSave={setValue} label="test input" />;
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,S,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableInput value={value} onSave={handleChange} />;
  }
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const de=["Basic","LongText"];export{a as Basic,o as LongText,de as __namedExportsOrder,me as default};
