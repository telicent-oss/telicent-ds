import{j as a}from"./DefaultPropsProvider-D0TKvr2r.js";import{e as O}from"./FeatureMap-Cwftaik7.js";import{r as I}from"./index-BBkUAzwr.js";import{B as N}from"./Box-CeeIJm_P.js";import"./jsx-runtime-BwZVo4Wn.js";import"./iframe-C8Nf4UcJ.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-2118hI7G.js";import"./colorManipulator-CMgB7LGh.js";import"./useTheme-Dxx0vh99.js";import"./ThemeProvider-A6jUefSh.js";import"./index-DQBVfwdU.js";import"./UserProfile-CtzeDZHV.js";import"./Text-UfnIhWrZ.js";import"./Typography-CYbZWU4W.js";import"./styled-C_kIfZUr.js";import"./generateUtilityClasses-BJi7wJCo.js";import"./UserIcon-CjSGJTuU.js";import"./SvgIcon-DhTOb2oP.js";import"./index-_4_hgnnR.js";import"./useTheme-CEroDfaK.js";import"./FlexBox-DGOTTOBh.js";import"./styled-DYuO2v9q.js";import"./useThemeProps-PRgA7wjr.js";import"./createSvgIcon-vyKw-wJg.js";import"./Popover-Bh0RZbgT.js";import"./utils-rL4B1Bvl.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Paper-CMbjB9GA.js";import"./ButtonBase-BBhFMBvz.js";import"./TreeView-DaBv5O9j.js";import"./Divider-D5n9DrrQ.js";import"./FlexGrid-DdKVSySu.js";import"./Container-DJkxIbTb.js";import"./DataSetIcon-DRNY1TGD.js";import"./Chip-CAB14pnD.js";import"./UserProfileContent-ykWcPCsh.js";import"./LinearProgress-lWF5JMRG.js";import"./Button-DsRoEJUk.js";import"./Button-Da6qIdfX.js";import"./Card-66pTiq-p.js";import"./CardActions-CwcmbZpP.js";import"./Popover-BmuZ8Ngm.js";import"./ErrorFallback-6MQAUkRQ.js";import"./ErrorFallbackText-BFmQh512.js";import"./ErrorFallbackWrapper-Dmy6f-WG.js";const t=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],ve={title:"Inputs/Select",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
A simple select dropdown component for selecting an option from a list.

> Note: You can easily customize the select dropdown by using the provided props.

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
`}},id:"select-default",ariaLabel:"select-dropdown",options:t},decorators:e=>a(N,{sx:{margin:"auto"},children:e()})},T=({...e})=>{const[v,x]=I.useState("");return a(O,{label:"Select Option",value:v,onChange:W=>{x(W.target.value)},options:t,id:"selected-demo",...e})},r={args:{label:"Select an option",value:"option1",id:"select-disabled",options:t,width:300,onChange:()=>{}}},n={args:{label:"Select an option",value:"none",id:"select-disabled",options:t,width:300,onChange:()=>{},disabled:!0}},i={args:{label:"Select an option",value:"option2",id:"select-disabled",options:t,width:500,onChange:()=>{}}},o={render:e=>a(T,{...e}),args:{width:250,disabled:!1}};var s,p,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option1",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {}
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,m,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
    disabled: true
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,h,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    width: 500,
    onChange: () => {}
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,S,w,f,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <RenderSelect {...args} />,
  args: {
    width: 250,
    disabled: false
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:`This exemple is set up using useState to simulate how it would
work on the app, how the selected item is styled

Refer back to the top of the document on how to implement`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.description}}};const xe=["Default","Disabled","WithCustomWidth","ExampleWithOnChange"];export{r as Default,n as Disabled,o as ExampleWithOnChange,i as WithCustomWidth,xe as __namedExportsOrder,ve as default};
