import{j as c}from"./DefaultPropsProvider-D0TKvr2r.js";import{C as W}from"./FeatureMap-BMRvlzJS.js";import{r as y}from"./index-BBkUAzwr.js";import{B as L}from"./Box-CeeIJm_P.js";import"./jsx-runtime-BwZVo4Wn.js";import"./iframe-DcXjTpg3.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-Br0Hzk8i.js";import"./colorManipulator-CMgB7LGh.js";import"./useTheme-Dxx0vh99.js";import"./ThemeProvider-A6jUefSh.js";import"./index-DQBVfwdU.js";import"./UserProfile-CtzeDZHV.js";import"./Text-UfnIhWrZ.js";import"./Typography-CYbZWU4W.js";import"./styled-C_kIfZUr.js";import"./generateUtilityClasses-BJi7wJCo.js";import"./UserIcon-CjSGJTuU.js";import"./SvgIcon-DhTOb2oP.js";import"./index-_4_hgnnR.js";import"./useTheme-CEroDfaK.js";import"./FlexBox-DGOTTOBh.js";import"./styled-DYuO2v9q.js";import"./useThemeProps-PRgA7wjr.js";import"./createSvgIcon-vyKw-wJg.js";import"./Popover-Bh0RZbgT.js";import"./utils-rL4B1Bvl.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Paper-CMbjB9GA.js";import"./ButtonBase-BBhFMBvz.js";import"./TreeView-DaBv5O9j.js";import"./Divider-D5n9DrrQ.js";import"./FlexGrid-DdKVSySu.js";import"./Container-DJkxIbTb.js";import"./DataSetIcon-DRNY1TGD.js";import"./Chip-CAB14pnD.js";import"./UserProfileContent-ykWcPCsh.js";import"./LinearProgress-lWF5JMRG.js";import"./Button-DsRoEJUk.js";import"./Button-Da6qIdfX.js";import"./Card-66pTiq-p.js";import"./CardActions-CwcmbZpP.js";import"./Popover-BmuZ8Ngm.js";import"./ErrorFallback-6MQAUkRQ.js";import"./ErrorFallbackText-BFmQh512.js";import"./ErrorFallbackWrapper-Dmy6f-WG.js";const we={title:"Inputs/Checkbox",component:W,tags:["autodocs"],parameters:{docs:{description:{component:`
A simple checkbox component built on Mui's \`<Checkbox>\` with our design-system theming and overrides. It supports the following use cases:

- **Controlled mode:** Pass \`checked\` and \`onChange\` to fully control the checkbox's state.
- **Uncontrolled mode:** Use the \`defaultChecked\` prop for the initial value and let the checkbox manage its own state.

---

### When & How to use it
- **Forms:** Use it in any form where you need to allow the user to select multiple or binary options (e.g., terms of service, preferences).

\`\`\`jsx
<Checkbox 
  checked={checkedValue} 
  id="checkbox-demo" 
  required={true}
  onChange={handleChange} 
/>
\`\`\`
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>c(L,{sx:{margin:"auto"},children:e()})},D=({...e})=>{const[w,R]=y.useState(!1);return c(W,{checked:w,onChange:S=>{R(S.target.checked)},id:"checkbox-demo",...e})},o={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},r={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},s={render:e=>c(D,{...e}),args:{disabled:!1}};var n,i,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {}
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,p,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "checkbox-disabled",
    disabled: true,
    onChange: () => {}
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var h,u,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    label: "Custom Label",
    onChange: () => {}
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,k,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "checkbox-custom-label",
    label: "Required",
    required: true,
    onChange: () => {}
  }
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var C,f,q;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(q=(f=s.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};const Re=["Default","Disabled","WithCustomLabel","WithRequired","ExampleWithOnChange"];export{o as Default,r as Disabled,s as ExampleWithOnChange,t as WithCustomLabel,a as WithRequired,Re as __namedExportsOrder,we as default};
