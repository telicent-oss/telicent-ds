import{j as i}from"./DefaultPropsProvider-D0TKvr2r.js";import{e as W}from"./FeatureMap-BUR8wD31.js";import{r as T}from"./index-BBkUAzwr.js";import{B as D}from"./Box-CeeIJm_P.js";import"./jsx-runtime-BwZVo4Wn.js";import"./iframe-Brlm5aHq.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-CgZ2qZ68.js";import"./colorManipulator-CMgB7LGh.js";import"./useTheme-Dxx0vh99.js";import"./ThemeProvider-A6jUefSh.js";import"./index-DQBVfwdU.js";import"./UserProfile-CtzeDZHV.js";import"./Text-UfnIhWrZ.js";import"./Typography-CYbZWU4W.js";import"./styled-C_kIfZUr.js";import"./generateUtilityClasses-BJi7wJCo.js";import"./UserIcon-CjSGJTuU.js";import"./SvgIcon-DhTOb2oP.js";import"./index-_4_hgnnR.js";import"./useTheme-CEroDfaK.js";import"./FlexBox-DGOTTOBh.js";import"./styled-DYuO2v9q.js";import"./useThemeProps-PRgA7wjr.js";import"./createSvgIcon-vyKw-wJg.js";import"./Popover-Bh0RZbgT.js";import"./utils-rL4B1Bvl.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Paper-CMbjB9GA.js";import"./ButtonBase-BBhFMBvz.js";import"./TreeView-DaBv5O9j.js";import"./Divider-D5n9DrrQ.js";import"./FlexGrid-DdKVSySu.js";import"./Container-DJkxIbTb.js";import"./DataSetIcon-DRNY1TGD.js";import"./Chip-CAB14pnD.js";import"./UserProfileContent-ykWcPCsh.js";import"./LinearProgress-lWF5JMRG.js";import"./Button-DsRoEJUk.js";import"./Button-Da6qIdfX.js";import"./Card-66pTiq-p.js";import"./CardActions-CwcmbZpP.js";import"./Popover-BmuZ8Ngm.js";import"./ErrorFallback-6MQAUkRQ.js";import"./ErrorFallbackText-BFmQh512.js";import"./ErrorFallbackWrapper-Dmy6f-WG.js";const e=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],Ie={title:"Inputs/Select",component:W,tags:["autodocs"],parameters:{docs:{description:{component:`
A lightweight dropdown selct component built on Mui's \`<Select>\` with our design-system theming and overrides. It supports both controlled **and** uncontrolled modes: 

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
`}},id:"select-default",ariaLabel:"select-dropdown",options:e},decorators:t=>i(D,{sx:{margin:"auto"},children:t()})},E=({...t})=>{const[I,N]=T.useState("");return i(W,{label:"Select Option",value:I,onChange:P=>{N(P.target.value)},options:e,id:"selected-demo",...t})},a={args:{label:"Select an option",value:"option1",id:"select-disabled",options:e,width:300,onChange:()=>{}}},n={args:{label:"Select an option",value:"none",id:"select-disabled",options:e,width:300,onChange:()=>{},disabled:!0}},r={args:{label:"Select an option",value:"option2",id:"select-disabled",options:e,width:500,onChange:()=>{}}},s={args:{value:"option2",id:"select-disabled",options:e,onChange:()=>{}}},o={render:t=>i(E,{...t}),args:{width:250,disabled:!1}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,f,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    onChange: () => {}
  }
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var v,C,O,y,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <RenderSelect {...args} />,
  args: {
    width: 250,
    disabled: false
  }
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source},description:{story:`This exemple is set up using useState to simulate how it would
work on the app, how the selected item is styled

Refer back to the top of the document on how to implement`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};const Ne=["Default","Disabled","WithCustomWidth","WithNoLabel","ExampleWithOnChange"];export{a as Default,n as Disabled,o as ExampleWithOnChange,r as WithCustomWidth,s as WithNoLabel,Ne as __namedExportsOrder,Ie as default};
