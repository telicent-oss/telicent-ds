import{j as s}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{l as W}from"./Drawer-ChvPPhdC.js";import{r as T}from"./index-Dl6G-zuu.js";import{B as D}from"./Box-B1z1Qd0d.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-DiFjgoLh.js";import"./DefaultPropsProvider-DokkfWXe.js";import"./SvgIcon-CwSgo-eM.js";import"./styled-Bh4j-phE.js";import"./generateUtilityClasses-BrZc1hjY.js";import"./constants-Cti-p_rp.js";import"./iframe-DjR5Pwc1.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./UserProfile-N6pr5-2m.js";import"./Text-C4zpNQRp.js";import"./Typography-DOS1jQiX.js";import"./UserIcon-Cx-r992D.js";import"./index-BfyspvgH.js";import"./useTheme-Sw6qfmru.js";import"./useTheme-c__JTuJp.js";import"./FlexBox-D2o1BZNO.js";import"./styled-ilcqLD5m.js";import"./useThemeProps-BNFryEOP.js";import"./Popover-jZh0iIOv.js";import"./utils-C-XDAD8M.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-DjaG4Kki.js";import"./IconButton-56B7AwOW.js";import"./ButtonBase-Do7AHI9h.js";import"./index-Bg6tHTX3.js";import"./useId-CkA8naEk.js";import"./TelicentHorizontalSVG-xSzC_QTu.js";import"./FlexGrid-JVYOOaHa.js";import"./Container-bU783VGj.js";import"./DataSetIcon-DGj6m1BG.js";import"./UIThemeProvider-K1iMkQi9.js";import"./colorManipulator-Cuc7me6V.js";import"./ThemeProvider-mIQjSFi-.js";import"./Chip-pzoqvFR6.js";import"./Divider-BQZg7t2N.js";import"./TreeView-gav8i2Kk.js";import"./UserProfileContent-DHz0GTL-.js";import"./LinearProgress-tobgb8oL.js";import"./Button-w9tbBUtr.js";import"./Button-D7yzuVoT.js";import"./SecondaryButton-BcPTyAr_.js";import"./Card-CACrcWJQ.js";import"./CardActions-ChQ-9HT4.js";import"./Popover-DEe1UNyj.js";import"./Paper-BMhFNqQN.js";import"./ErrorFallback-D0Q64ifN.js";import"./ErrorFallbackText-C1J-oAKu.js";import"./ErrorFallbackWrapper-D-KZ366e.js";import"./MapToggleButtonPresentational-CBr8W7gO.js";import"./List-B5LeInEP.js";const e=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Fe={title:"Inputs/Select",component:W,tags:["autodocs"],parameters:{docs:{description:{component:`
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

Refer back to the top of the document on how to implement`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};const Me=["Default","Disabled","WithCustomWidth","WithNoLabel","ExampleWithOnChange"];export{a as Default,n as Disabled,o as ExampleWithOnChange,r as WithCustomWidth,i as WithNoLabel,Me as __namedExportsOrder,Fe as default};
