import{j as s}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{l as W}from"./Drawer-CLbxZv9v.js";import{r as T}from"./index-Dl6G-zuu.js";import{B as D}from"./Box-DjrL3vcN.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-sttI1-XB.js";import"./defaultTheme-Cydao2Tu.js";import"./SvgIcon-CjmMrQNX.js";import"./styled-D6pw60Bp.js";import"./generateUtilityClasses-YWFBP9tm.js";import"./DefaultPropsProvider-BHKfC5ky.js";import"./constants-DrrfMz_2.js";import"./iframe-W_FkGmT4.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-BzuXlqsY.js";import"./GlobalStyles-ByhVr9LE.js";import"./useTheme-DxGOHaWi.js";import"./useTheme-BYNjlLc8.js";import"./UserProfile-DrB3dvyA.js";import"./Text-BNIHq94e.js";import"./Typography-BuiWgCNN.js";import"./UserIcon-q_P09GsN.js";import"./index-BfyspvgH.js";import"./FlexBox-D6GhYe9U.js";import"./styled-HsAy3ZEw.js";import"./useThemeProps-CBEhXQxo.js";import"./Popover-BFLlbOqP.js";import"./utils-xzVdhYNG.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-DB4yr4EO.js";import"./IconButton-DPejjeAT.js";import"./ButtonBase-BUg8pwcP.js";import"./index-1lBnjf3z.js";import"./useId-CkA8naEk.js";import"./TelicentHorizontalSVG-DuwDm98x.js";import"./FlexGrid-C2jJkX6w.js";import"./Container-BErEnX_q.js";import"./DataSetIcon-BBABdu0b.js";import"./UIThemeProvider-BDvoFzpa.js";import"./colorManipulator-YQmhVZwB.js";import"./ThemeProvider-CN5YWCuf.js";import"./IconButton-B954TVTE.js";import"./Chip-Bx_Lu-NR.js";import"./Divider-BE0LSpy8.js";import"./TreeView-DpHiciEK.js";import"./UserProfileContent-DdYm007D.js";import"./LinearProgress-yGZEzgsa.js";import"./Button-C1gE5xKs.js";import"./Button-a6vHgwhc.js";import"./LinkButton-B-URIbsY.js";import"./Card-CUWN1MwO.js";import"./CardActions-wDSfmjtr.js";import"./Popover-DhgGZshX.js";import"./Paper-CYQoaktD.js";import"./ErrorFallback-VtVYyFB3.js";import"./ErrorFallbackText-e1_2MPZH.js";import"./ErrorFallbackWrapper-B2v_McFA.js";import"./MapToggleButtonPresentational-DyF2Ew1L.js";import"./List-CmdUcGkz.js";const e=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],_e={title:"Inputs/Select",component:W,tags:["autodocs"],parameters:{docs:{description:{component:`
A lightweight dropdown component built on Mui's \`<Select>\` with our design-system theming and overrides. It supports both controlled **and** uncontrolled modes: 

- **Controlled mode:** Pass \`value\` and  \`onChange\` to fully drive the selected value from the parent state.
- **Uncontrolled mode:** Pass \`defaultValue\` and \`onChange\` but omit \`value\` to let the component manage its own state after mount.

---

### When & How to use it 
 - **Forms & Filters:** use it in any place you need the user to choose one value from a short list (status picker, category filter, settings panel).

 - **No Internal State:** it has no internal state, you'll need to pass \`value\` and \`onChange\`.

 - **Label is optional:** only renders the label if you pass the \`label\` prop. You can choose to omit the prop for a cleaner label-free form.
 
 - **Min Width:** It has a min width by default that can be customized by using the \`width\` prop.


\`\`\`jsx
<Select 
  label="Select an option"
  value={selectedValue}
  id="select-demo"
  options={options}
  width={300}
  onChange={handleChange}
  disabled={false}
/>
\`\`\`
`}},id:"select-default",ariaLabel:"select-dropdown",options:e},decorators:t=>s(D,{sx:{margin:"auto"},children:t()})},E=({...t})=>{const[I,N]=T.useState("");return s(W,{label:"Select Option",value:I,onChange:P=>{N(P.target.value)},options:e,id:"selected-demo",...t})},a={args:{label:"Select an option",value:"option1",id:"select-disabled",options:e,width:300,onChange:()=>{}}},n={args:{label:"Select an option",value:"none",id:"select-disabled",options:e,width:300,onChange:()=>{},disabled:!0}},r={args:{label:"Select an option",value:"option2",id:"select-disabled",options:e,width:500,onChange:()=>{}}},i={args:{value:"option2",id:"select-disabled",options:e,onChange:()=>{}}},o={render:t=>s(E,{...t}),args:{width:250,disabled:!1}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option1",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {}
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
    disabled: true
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,g,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    width: 500,
    onChange: () => {}
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,f,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    onChange: () => {}
  }
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var v,C,O,y,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <RenderSelect {...args} />,
  args: {
    width: 250,
    disabled: false
  }
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source},description:{story:`This exemple is set up using useState to simulate how it would
work on the app, how the selected item is styled

Refer back to the top of the document on how to implement`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};const ze=["Default","Disabled","WithCustomWidth","WithNoLabel","ExampleWithOnChange"];export{a as Default,n as Disabled,o as ExampleWithOnChange,r as WithCustomWidth,i as WithNoLabel,ze as __namedExportsOrder,_e as default};
