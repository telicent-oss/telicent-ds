import{j as s}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{l as W}from"./AuthModal-CcTf7jpD.js";import{r as T}from"./index-Dl6G-zuu.js";import{B as D}from"./Box-BF-qgu-5.js";import"./jsx-runtime-DMAvRu52.js";import"./Text-8Kdc4mds.js";import"./Typography-BrwPcXc_.js";import"./identifier-y0bUoTO6.js";import"./styled-0JAKTnfS.js";import"./generateUtilityClasses-Nvsm4CNa.js";import"./DefaultPropsProvider-5cPhPzqh.js";import"./constants-D6JbaO56.js";import"./iframe-DfdgjJFF.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BzMTtAHJ.js";import"./useTheme-DD-YLZ4_.js";import"./GlobalStyles-vabYxzRP.js";import"./GlobalStyles-CHovE7rY.js";import"./UserProfile-B0RVUakH.js";import"./UserIcon-B9flVcwo.js";import"./SvgIcon-CCVYAiJY.js";import"./index-BfyspvgH.js";import"./FlexBox-CPV3qV_w.js";import"./styled-BJZjZNjA.js";import"./createStyled-CQbojMn1.js";import"./useThemeProps-dlg6X6gD.js";import"./createSvgIcon-CHKs_KBR.js";import"./Popover-lQsAd3LZ.js";import"./utils-CMxZCPCo.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-DSYDI967.js";import"./IconButton-CJWQDxju.js";import"./ButtonBase-BPGrtmaq.js";import"./Menu-DOiAulci.js";import"./index-CGpTQFWu.js";import"./TextField-BXJNoCm8.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs--Bc0--O2.js";import"./useThemeProps-Dn9YwK3s.js";import"./colorManipulator-_kX1Zyzf.js";import"./Button-C78fFQkL.js";import"./Chip-Dals-zk3.js";import"./TelicentHorizontalSVG-CQqo1iNz.js";import"./FlexGrid-BXR2iRV0.js";import"./Container-Bt7wgl8Z.js";import"./DataSetIcon-DHhYydZc.js";import"./DateTimePicker-BfS6ExPs.js";import"./Divider-ByP1puSd.js";import"./UIThemeProvider-Yl8oZnWo.js";import"./ThemeProvider-bcdU8uNZ.js";import"./IconButton-B3KtzcW5.js";import"./Chip-DwEDWKOc.js";import"./Divider-D5viUhla.js";import"./TreeView-Cv9rbGZ0.js";import"./UserProfileContent-Be3-9Jzl.js";import"./LinearProgress-DXAYFx38.js";import"./Button-BUdKq2Nf.js";import"./LinkButton-D3-RYoWb.js";import"./TextField-PJfMD1VO.js";import"./DatePicker-CBr8yT-u.js";import"./Card-DEzO0riq.js";import"./CardActions-B8gFKj_f.js";import"./Popover-DMDv2fuJ.js";import"./Paper-DkOGDDl7.js";import"./ErrorFallback-BQDrKlpt.js";import"./ErrorFallbackText-D0ectygn.js";import"./ErrorFallbackWrapper-Drru2TWq.js";import"./MapToggleButtonPresentational-DDiBoo1Q.js";import"./Remove-ABIIxDNk.js";import"./Edit-ClXqq_Xi.js";const e=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Ze={title:"Inputs/Select",component:W,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"select-default",ariaLabel:"select-dropdown",options:e},decorators:t=>s(D,{sx:{margin:"auto"},children:t()})},E=({...t})=>{const[I,N]=T.useState("");return s(W,{color:"primary",label:"Select Option",value:I,onChange:P=>{N(P.target.value)},options:e,id:"selected-demo",...t})},r={args:{label:"Select an option",value:"option1",id:"select-disabled",options:e,width:300,onChange:()=>{}}},a={args:{label:"Select an option",value:"none",id:"select-disabled",options:e,width:300,onChange:()=>{},disabled:!0}},i={args:{label:"Select an option",value:"option2",id:"select-disabled",options:e,width:500,onChange:()=>{}}},n={args:{value:"option2",id:"select-disabled",options:e,onChange:()=>{}}},o={render:t=>s(E,{...t}),args:{width:250,disabled:!1}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,g,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    width: 500,
    onChange: () => {}
  }
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,f,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    onChange: () => {}
  }
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var v,C,O,y,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <RenderSelect {...args} />,
  args: {
    width: 250,
    disabled: false
  }
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source},description:{story:`This exemple is set up using useState to simulate how it would
work on the app, how the selected item is styled

Refer back to the top of the document on how to implement`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};const $e=["Default","Disabled","WithCustomWidth","WithNoLabel","ExampleWithOnChange"];export{r as Default,a as Disabled,o as ExampleWithOnChange,i as WithCustomWidth,n as WithNoLabel,$e as __namedExportsOrder,Ze as default};
