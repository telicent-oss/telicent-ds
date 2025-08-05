import{j as e,a as h,F as g}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as i}from"./index-Dl6G-zuu.js";import"./Button-CP702T-k.js";import{e as m}from"./Drawer-iGERundp.js";import"./LinkButton-u-U60Uzu.js";import{F as l,b as I,c as k,d as V}from"./UserProfile-tgHNlyY_.js";import{T as F}from"./TextField-BtWunm32.js";import{T as B}from"./Typography-D7Rc9HSx.js";import{B as _}from"./Box-Cfx8uO0s.js";import"./jsx-runtime-DMAvRu52.js";import"./ButtonBase-BKsdIIYL.js";import"./defaultTheme-BpkXhfeA.js";import"./styled-DzpWvPfW.js";import"./generateUtilityClasses-DiXVJdeX.js";import"./DefaultPropsProvider-C67vPJX1.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-BRXLRAOR.js";import"./createSvgIcon-DuRnm9w0.js";import"./SvgIcon-CGwi2XF8.js";import"./constants-BdX9_XpC.js";import"./iframe-B9yYYO_z.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-DHuFs4j8.js";import"./useTheme-D_QPa1U6.js";import"./GlobalStyles-BOcUuy4L.js";import"./GlobalStyles-CIfgeHMT.js";import"./index-CZM7sGf7.js";import"./Popover-DjMyMVBa.js";import"./utils-CzGd2JMT.js";import"./Paper-CjpJL0pm.js";import"./Select-llqeadix.js";import"./isMuiElement-DAcuSkv2.js";import"./Menu-DfDRjEgM.js";import"./useId-CkA8naEk.js";import"./TelicentHorizontalSVG-Ba1YJ692.js";import"./styled-Ck8GJYy8.js";import"./useThemeProps--JElsblH.js";import"./Container-S5gmVac-.js";import"./FlexBox-BEZBdzr_.js";import"./DataSetIcon-CPAcG_uv.js";import"./UserIcon-kmeEhtTQ.js";import"./Text-DLq4GXsM.js";import"./UIThemeProvider-D9srXGTg.js";import"./colorManipulator-B-1-M9MD.js";import"./ThemeProvider-D4yHglI3.js";import"./IconButton-DRAdqdZd.js";import"./Chip-BBluW8aP.js";import"./Divider-D_v03hYO.js";import"./TreeView-DroTfa6S.js";import"./index-BfyspvgH.js";import"./UserProfileContent-BtPWIMCF.js";import"./LinearProgress-DzU0Zg_A.js";import"./Card-DFg-qCLN.js";import"./CardActions-CRS1Zsa7.js";import"./Popover-BCuFO5oU.js";import"./Paper-DV1QHDO7.js";import"./ErrorFallback-Cb7i3evq.js";import"./ErrorFallbackText-D4-31auA.js";import"./ErrorFallbackWrapper-DPNCVGi4.js";import"./MapToggleButtonPresentational-ktAH0RyB.js";import"./List-Dh3f9sEI.js";const a=({value:t,onSave:o,...c})=>{const[p,s]=i.useState(!1),[d,u]=i.useState(t||""),w=()=>{s(!0)},y=()=>{o(d),s(!1)},E=()=>{u(t),s(!1)};return e(_,{display:"flex",alignItems:"center",gap:1,children:p?h(g,{children:[e(F,{value:d??"",onChange:T=>u(T.target.value),...c}),e(m,{onClick:E,children:e(l,{icon:I})}),e(m,{onClick:y,children:e(l,{icon:k})})]}):h(g,{children:[e(B,{children:t}),e(m,{onClick:w,children:e(l,{icon:V})})]})})};a.__docgenInfo={description:"",methods:[],displayName:"EditableInput",props:{value:{required:!0,tsType:{name:"string"},description:""},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const Ge={title:"Inputs/EditableInput",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
An input component that toggles between a static label and an editable text field.

- Click the pencil icon to enter edit mode.
- Type your new value.
- Click the floppy disk icon to save.

**Props:**
- \`value: string\` — the current text
- \`onChange: (value: string) => void\` — called when the user saves a new value
        `}}}},r={render:()=>{const[t,o]=i.useState("Click the pencil to edit");return e(a,{value:t,onSave:o,label:"test input"})}},n={render:()=>{const[t,o]=i.useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");return e(a,{value:t,onSave:p=>{o(p)}})}};var v,f,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Click the pencil to edit");
    return <EditableInput value={value} onSave={setValue} label="test input" />;
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,S,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("This is a longer paragraph of editable text that shows how the component handles more content. Edit me!");
    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    return <EditableInput value={value} onSave={handleChange} />;
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const He=["Basic","LongText"];export{r as Basic,n as LongText,He as __namedExportsOrder,Ge as default};
