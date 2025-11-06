import{j as c}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{e as R}from"./Drawer-BqBAYfez.js";import{r as j}from"./index-Dl6G-zuu.js";import{B as v}from"./Box-D_PqCh9-.js";import"./jsx-runtime-DMAvRu52.js";import"./constants-D-SosAqN.js";import"./iframe-CwS3KD07.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-KUAcGPiB.js";import"./defaultTheme-BO-GVTvG.js";import"./useTheme-Pepcoth9.js";import"./GlobalStyles-Dgqu9ZBa.js";import"./GlobalStyles-DUEYx911.js";import"./UserProfile-BxAQRKdr.js";import"./Text-BFNiasyU.js";import"./Typography-Cuh1ru_h.js";import"./styled-CxLuQ4yi.js";import"./generateUtilityClasses-BrkKsHLY.js";import"./DefaultPropsProvider-CqwcgZRv.js";import"./UserIcon-BXQcnugD.js";import"./SvgIcon-CLvgKtsF.js";import"./index-BfyspvgH.js";import"./FlexBox-CtZjnzR4.js";import"./styled-DQdJekOl.js";import"./createStyled-a9EbIl6L.js";import"./useThemeProps-cJESbEea.js";import"./createSvgIcon-DtNep-FY.js";import"./Popover-BWwK9c_C.js";import"./utils-C8sSVwFJ.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-CYPvuqVC.js";import"./IconButton-aZDif4_A.js";import"./ButtonBase-COX4AZc7.js";import"./Menu-6SEWvgOm.js";import"./index-CfJV9iyf.js";import"./Select-B3yJvOVt.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-Dxz3ssCX.js";import"./useThemeProps-7HV0XwLr.js";import"./colorManipulator-BzIEvLd4.js";import"./TextField-BXF1k-T7.js";import"./Button-BVpYsrGj.js";import"./Chip-CGb5QCI3.js";import"./TelicentHorizontalSVG-DlSq0ZBw.js";import"./FlexGrid-CT_1tX54.js";import"./Container-0fCyAqte.js";import"./DataSetIcon-XV4rPdps.js";import"./MenuItem-B-D4s_cu.js";import"./dividerClasses-Bf8NGDkJ.js";import"./UIThemeProvider-Bf8bDzz-.js";import"./ThemeProvider-CXSeX4Uf.js";import"./IconButton-s5-t7JwX.js";import"./Chip-CZtKK3pl.js";import"./Divider-BInkGxYa.js";import"./Divider-nQy9ALGk.js";import"./TreeView-CLm9yUm1.js";import"./UserProfileContent-Dj2MBbg7.js";import"./LinearProgress-CwQNtVoX.js";import"./Button-KcRgJ0xu.js";import"./LinkButton-CCP5S-HK.js";import"./TextField-um4XWDOw.js";import"./Select-BKxTornM.js";import"./DatePicker-BaeNpiHF.js";import"./DateTimePicker-Bc91_Vqm.js";import"./Card-FwEEuDZt.js";import"./CardActions-hlVg_9Nm.js";import"./Popover-C7MCebY1.js";import"./Paper-DqTy2_Xb.js";import"./ErrorFallback-R5oVL8pn.js";import"./ErrorFallbackText-BLmhXvDQ.js";import"./ErrorFallbackWrapper-Cv-_dl0b.js";import"./MapToggleButtonPresentational-bPqb6oXs.js";import"./Remove-D5fK3_9H.js";import"./Edit-DuWAK1JC.js";const tr={title:"Inputs/Checkbox",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
