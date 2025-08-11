import{j as s}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{l as W}from"./Drawer-CYDy8XTp.js";import{r as T}from"./index-Dl6G-zuu.js";import{B as D}from"./Box-BpjgVFAP.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-DsapHZbt.js";import"./defaultTheme-DzLjz-dB.js";import"./SvgIcon-CUsqqB9A.js";import"./styled-Bv4hMCY2.js";import"./generateUtilityClasses-UcMdw3-3.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./constants-CO5MGBj3.js";import"./iframe-BebCwveA.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BorXEO18.js";import"./useTheme-Bb3Mws8A.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./UserProfile-g79E9POt.js";import"./Text-BfZocbeP.js";import"./Typography-0bha627S.js";import"./UserIcon-BuuqinF_.js";import"./index-BfyspvgH.js";import"./FlexBox-CfPxXzlV.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./Popover-BtZEiDAe.js";import"./utils-BgVWvv5k.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-qM_AAhp8.js";import"./IconButton-BOLdoQUj.js";import"./ButtonBase-DQ5wMQUc.js";import"./Menu-x1DlT4eR.js";import"./index-BbVSaS1S.js";import"./AdapterDayjs-DuWp5629.js";import"./useThemeProps-D7jdKLbb.js";import"./colorManipulator-BRx-aaGP.js";import"./useId-CkA8naEk.js";import"./Button-CfsaO-rc.js";import"./Chip-D8IxPV3x.js";import"./TelicentHorizontalSVG-CX-osCX9.js";import"./FlexGrid-DSPhqh6w.js";import"./Container-C_TGCsJE.js";import"./DataSetIcon-BtGpAy3k.js";import"./DateTimePicker-CV9o2ulC.js";import"./Divider-Cjysf9bk.js";import"./UIThemeProvider-CxkzzJSB.js";import"./ThemeProvider-GiwL96Kb.js";import"./Chip-DH2OifDm.js";import"./Divider-Dtsf1hGn.js";import"./TreeView-DbFX33UJ.js";import"./UserProfileContent-DwoWk9c6.js";import"./LinearProgress-Bg-Reu7H.js";import"./Button-D8ZFDHf0.js";import"./SecondaryButton-CPTMGzEe.js";import"./DatePicker-D7xV_onj.js";import"./Card-DPzkVZ34.js";import"./CardActions-ChFzG7jH.js";import"./Popover-D97xcsWK.js";import"./Paper-6XRc2JUc.js";import"./ErrorFallback-Bdi4LnTL.js";import"./ErrorFallbackText-ByFUlXy5.js";import"./ErrorFallbackWrapper-BOm5y31m.js";import"./MapToggleButtonPresentational-C_LHMPTW.js";import"./List-B22gvqhs.js";const e=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Je={title:"Inputs/Select",component:W,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"select-default",ariaLabel:"select-dropdown",options:e},decorators:t=>s(D,{sx:{margin:"auto"},children:t()})},E=({...t})=>{const[I,N]=T.useState("");return s(W,{label:"Select Option",value:I,onChange:P=>{N(P.target.value)},options:e,id:"selected-demo",...t})},r={args:{label:"Select an option",value:"option1",id:"select-disabled",options:e,width:300,onChange:()=>{}}},a={args:{label:"Select an option",value:"none",id:"select-disabled",options:e,width:300,onChange:()=>{},disabled:!0}},n={args:{label:"Select an option",value:"option2",id:"select-disabled",options:e,width:500,onChange:()=>{}}},i={args:{value:"option2",id:"select-disabled",options:e,onChange:()=>{}}},o={render:t=>s(E,{...t}),args:{width:250,disabled:!1}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option1",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {}
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
    disabled: true
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,g,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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

Refer back to the top of the document on how to implement`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};const Ke=["Default","Disabled","WithCustomWidth","WithNoLabel","ExampleWithOnChange"];export{r as Default,a as Disabled,o as ExampleWithOnChange,n as WithCustomWidth,i as WithNoLabel,Ke as __namedExportsOrder,Je as default};
