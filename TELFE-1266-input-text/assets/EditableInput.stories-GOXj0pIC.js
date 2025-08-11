import{j as e,a as h,F as E}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r}from"./index-Dl6G-zuu.js";import"./Button-2o7EfnUw.js";import{I as l}from"./IconButton-6csnvzSG.js";import"./LinkButton-udFJw26p.js";import{F as m,b as T,c as k,d as V}from"./index-Nuk3PsgH.js";import"./FlexGrid-BoEfBcU9.js";import"./TelicentMark-BQOfTp7R.js";import"./Container-FF4Fdp1b.js";import{F}from"./FlexBox-DVTFmfFO.js";import{T as B}from"./TextField-Cugujejn.js";import{T as j}from"./Typography-Dhe6o_9I.js";import{B as z}from"./Box-Dhn_9KCB.js";import"./jsx-runtime-DMAvRu52.js";import"./ButtonBase-DExEX2yL.js";import"./defaultTheme-DzLjz-dB.js";import"./styled-gOU_XONt.js";import"./generateUtilityClasses-Btm8e7dB.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-B3igqjqf.js";import"./IconButton-CV1Rw-GO.js";import"./useTheme-BorXEO18.js";import"./useTheme-Bb3Mws8A.js";import"./index-BfyspvgH.js";import"./SvgIcon-ByXbI411.js";import"./Paper-BG42kFkz.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./useId-CkA8naEk.js";import"./Popover-DyPBubII.js";import"./utils-BgVWvv5k.js";import"./index-B0kOWIl9.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./Menu-BldO7eLG.js";import"./index-BbVSaS1S.js";import"./createSvgIcon-MUYTbX0p.js";const i=({value:t,onSave:n,...c})=>{const[s,p]=r.useState(!1),[u,d]=r.useState(t||""),S=()=>{p(!0)},b=()=>{n(u),p(!1)},w=()=>{d(t),p(!1)};return e(z,{display:"flex",alignItems:"center",gap:1,children:s?h(E,{children:[e(B,{value:u??"",onChange:I=>d(I.target.value),...c}),e(l,{onClick:w,size:"small",children:e(m,{icon:T})}),e(l,{onClick:b,size:"small",children:e(m,{icon:k})})]}):h(F,{justifyContent:"center",direction:"row",justifyItems:"center",children:[e(j,{children:t}),e(l,{onClick:S,size:"small",children:e(m,{icon:V,size:"sm"})})]})})};i.__docgenInfo={description:"",methods:[],displayName:"EditableInput",props:{value:{required:!0,tsType:{name:"string"},description:""},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const Ce={title:"Inputs/EditableInput",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
An input component that toggles between a static label and an editable text field.

- Click the pencil icon to enter edit mode.
- Type your new value.
- Click the floppy disk icon to save.

**Props:**
- \`value: string\` — the current text
- \`onChange: (value: string) => void\` — called when the user saves a new value
        `}}}},o={render:()=>{const[t,n]=r.useState("Click the pencil to edit");return e(i,{value:t,onSave:n,label:"test input"})}},a={render:()=>{const[t,n]=r.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return e(i,{value:t,onSave:s=>{n(s)}})}};var g,v,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Click the pencil to edit");
    return <EditableInput value={value} onSave={setValue} label="test input" />;
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,C,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableInput value={value} onSave={handleChange} />;
  }
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const ye=["Basic","LongText"];export{o as Basic,a as LongText,ye as __namedExportsOrder,Ce as default};
