import{j as c}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{e as R}from"./AuthModal-Dxmm3PUd.js";import{r as j}from"./index-Dl6G-zuu.js";import{B as v}from"./Box-BszdSfjy.js";import"./jsx-runtime-DMAvRu52.js";import"./Text-CBeXAxhM.js";import"./Typography-DqLej86Z.js";import"./identifier-C6mAUaLB.js";import"./styled-BErHg-7C.js";import"./generateUtilityClasses-Cuk6vP38.js";import"./DefaultPropsProvider-BOzBDHyA.js";import"./constants-YT2gossY.js";import"./iframe-7W-pLHgR.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-GyLrR4NU.js";import"./useTheme-Cg37eTMn.js";import"./GlobalStyles-B_QX4JcH.js";import"./GlobalStyles-D5xpOMhP.js";import"./UserProfile-U6PPuJfm.js";import"./UserIcon-BHVQbi_2.js";import"./SvgIcon-5gifbZ3Q.js";import"./index-BfyspvgH.js";import"./FlexBox-DBRDUZLj.js";import"./styled-BSjilmX5.js";import"./createStyled-BrBbf8qF.js";import"./useThemeProps-43QuDAxK.js";import"./createSvgIcon-Bol9-9si.js";import"./Popover-BpYca5tE.js";import"./utils-C-b4tsXR.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-ZbIfs51-.js";import"./IconButton-IqfnTl6g.js";import"./ButtonBase-C9t-hGNZ.js";import"./Menu-DHuUg7uu.js";import"./index-sTB3RqdK.js";import"./Select-DA9H3h4n.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-BOB3in7k.js";import"./useThemeProps-DWcfj1ju.js";import"./TextField-BTRe_bET.js";import"./colorManipulator-DXzzQmry.js";import"./Button-hINpI61k.js";import"./Chip-CDjOKJwQ.js";import"./TelicentHorizontalSVG-CP1sg2bX.js";import"./FlexGrid-BkekN5zB.js";import"./Container-Cq7J-8WQ.js";import"./DataSetIcon-Cm0wHARM.js";import"./MenuItem-CjZ2Ihro.js";import"./dividerClasses-D3mH6QPz.js";import"./UIThemeProvider-BJ1tYuEB.js";import"./ThemeProvider-zfew0pSd.js";import"./IconButton-bilmwfAO.js";import"./Chip-CNh8tqAF.js";import"./Divider-znOFDjy9.js";import"./Divider-hbCrYSvl.js";import"./TreeView-ChH5rGnF.js";import"./UserProfileContent-CK9uRPZy.js";import"./LinearProgress-Cj7B0DX4.js";import"./Button-BBG5pOsy.js";import"./LinkButton-BgGLg8K5.js";import"./TextField--TK6VeQv.js";import"./Select-DoDVo-ql.js";import"./DatePicker-BHNHf78D.js";import"./DateTimePicker-B-4oNDUL.js";import"./Card-CyosORb7.js";import"./CardActions-q60J-lzQ.js";import"./Popover-Bg0J4ozL.js";import"./Paper-BKrtg6OD.js";import"./ErrorFallback-DIksr2Zc.js";import"./ErrorFallbackText-Cj3I3SFq.js";import"./ErrorFallbackWrapper-D0yAoJ_c.js";import"./MapToggleButtonPresentational-CshO1-3B.js";import"./Remove-Dh6sdo_k.js";import"./Edit-uu0JEZaV.js";const tr={title:"Inputs/Checkbox",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>c(v,{sx:{margin:"auto"},children:e()})},O=({...e})=>{const[y,D]=j.useState(!1);return c(R,{checked:y,onChange:E=>{D(E.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},i={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},s={render:e=>c(O,{...e}),args:{disabled:!1}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {}
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var d,l,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "checkbox-disabled",
    disabled: true,
    onChange: () => {}
  }
}`,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var u,b,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    label: "Custom Label",
    onChange: () => {}
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var k,x,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "checkbox-custom-label",
    label: "Required",
    required: true,
    onChange: () => {}
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,q,W;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    required: true,
    onChange: () => {}
  }
}`,...(W=(q=i.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var L,S,w;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const ar=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,s as ExampleWithOnChange,t as WithCustomLabel,i as WithNoLabel,a as WithRequired,ar as __namedExportsOrder,tr as default};
