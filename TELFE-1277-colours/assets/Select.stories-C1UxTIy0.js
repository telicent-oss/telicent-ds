import{j as s}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{m as W}from"./Drawer-iGERundp.js";import{r as T}from"./index-Dl6G-zuu.js";import{B as D}from"./Box-Cfx8uO0s.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-DuRnm9w0.js";import"./defaultTheme-BpkXhfeA.js";import"./SvgIcon-CGwi2XF8.js";import"./styled-DzpWvPfW.js";import"./generateUtilityClasses-DiXVJdeX.js";import"./DefaultPropsProvider-C67vPJX1.js";import"./constants-BdX9_XpC.js";import"./iframe-B9yYYO_z.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-DHuFs4j8.js";import"./useTheme-D_QPa1U6.js";import"./GlobalStyles-BOcUuy4L.js";import"./GlobalStyles-CIfgeHMT.js";import"./UserProfile-tgHNlyY_.js";import"./Text-DLq4GXsM.js";import"./Typography-D7Rc9HSx.js";import"./UserIcon-kmeEhtTQ.js";import"./index-BfyspvgH.js";import"./FlexBox-BEZBdzr_.js";import"./styled-Ck8GJYy8.js";import"./useThemeProps--JElsblH.js";import"./Popover-DjMyMVBa.js";import"./utils-CzGd2JMT.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-CjpJL0pm.js";import"./IconButton-DRAdqdZd.js";import"./ButtonBase-BKsdIIYL.js";import"./Menu-DfDRjEgM.js";import"./index-CZM7sGf7.js";import"./Select-llqeadix.js";import"./isMuiElement-DAcuSkv2.js";import"./useId-CkA8naEk.js";import"./TelicentHorizontalSVG-Ba1YJ692.js";import"./Container-S5gmVac-.js";import"./DataSetIcon-CPAcG_uv.js";import"./UIThemeProvider-D9srXGTg.js";import"./colorManipulator-B-1-M9MD.js";import"./ThemeProvider-D4yHglI3.js";import"./Chip-BBluW8aP.js";import"./Divider-D_v03hYO.js";import"./TreeView-DroTfa6S.js";import"./UserProfileContent-BtPWIMCF.js";import"./LinearProgress-DzU0Zg_A.js";import"./Button-BRXLRAOR.js";import"./Button-CP702T-k.js";import"./LinkButton-u-U60Uzu.js";import"./Card-DFg-qCLN.js";import"./CardActions-CRS1Zsa7.js";import"./Popover-BCuFO5oU.js";import"./Paper-DV1QHDO7.js";import"./ErrorFallback-Cb7i3evq.js";import"./ErrorFallbackText-D4-31auA.js";import"./ErrorFallbackWrapper-DPNCVGi4.js";import"./MapToggleButtonPresentational-ktAH0RyB.js";import"./List-Dh3f9sEI.js";const e=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Ae={title:"Inputs/Select",component:W,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"select-default",ariaLabel:"select-dropdown",options:e},decorators:t=>s(D,{sx:{margin:"auto"},children:t()})},E=({...t})=>{const[I,N]=T.useState("");return s(W,{color:"primary",label:"Select Option",value:I,onChange:P=>{N(P.target.value)},options:e,id:"selected-demo",...t})},a={args:{label:"Select an option",value:"option1",id:"select-disabled",options:e,width:300,onChange:()=>{}}},r={args:{label:"Select an option",value:"none",id:"select-disabled",options:e,width:300,onChange:()=>{},disabled:!0}},n={args:{label:"Select an option",value:"option2",id:"select-disabled",options:e,width:500,onChange:()=>{}}},i={args:{value:"option2",id:"select-disabled",options:e,onChange:()=>{}}},o={render:t=>s(E,{...t}),args:{width:250,disabled:!1}};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option1",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {}
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
    disabled: true
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,g,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    width: 500,
    onChange: () => {}
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,f,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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

Refer back to the top of the document on how to implement`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};const He=["Default","Disabled","WithCustomWidth","WithNoLabel","ExampleWithOnChange"];export{a as Default,r as Disabled,o as ExampleWithOnChange,n as WithCustomWidth,i as WithNoLabel,He as __namedExportsOrder,Ae as default};
