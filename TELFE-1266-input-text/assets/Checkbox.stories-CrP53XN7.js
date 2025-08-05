import{j as i}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{d as R}from"./Drawer-3LJ2T_AH.js";import{r as j}from"./index-Dl6G-zuu.js";import{B as v}from"./Box-Cfx8uO0s.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-DuRnm9w0.js";import"./defaultTheme-BpkXhfeA.js";import"./SvgIcon-CGwi2XF8.js";import"./styled-DzpWvPfW.js";import"./generateUtilityClasses-DiXVJdeX.js";import"./DefaultPropsProvider-C67vPJX1.js";import"./constants-Tqcu1Fdw.js";import"./iframe-BMn8Mk3f.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-DHuFs4j8.js";import"./useTheme-D_QPa1U6.js";import"./GlobalStyles-BOcUuy4L.js";import"./GlobalStyles-CIfgeHMT.js";import"./UserProfile-tgHNlyY_.js";import"./Text-DLq4GXsM.js";import"./Typography-D7Rc9HSx.js";import"./UserIcon-kmeEhtTQ.js";import"./index-BfyspvgH.js";import"./FlexBox-BEZBdzr_.js";import"./styled-Ck8GJYy8.js";import"./useThemeProps--JElsblH.js";import"./Popover-DjMyMVBa.js";import"./utils-CzGd2JMT.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-CjpJL0pm.js";import"./IconButton-DRAdqdZd.js";import"./ButtonBase-BKsdIIYL.js";import"./Menu-DfDRjEgM.js";import"./index-CZM7sGf7.js";import"./Select-llqeadix.js";import"./isMuiElement-DAcuSkv2.js";import"./useId-CkA8naEk.js";import"./TelicentHorizontalSVG-Ba1YJ692.js";import"./Container-S5gmVac-.js";import"./DataSetIcon-CPAcG_uv.js";import"./UIThemeProvider-DhG-EHua.js";import"./colorManipulator-B-1-M9MD.js";import"./ThemeProvider-D4yHglI3.js";import"./Chip-BBluW8aP.js";import"./Divider-D_v03hYO.js";import"./TreeView-DroTfa6S.js";import"./UserProfileContent-BtPWIMCF.js";import"./LinearProgress-DzU0Zg_A.js";import"./Button-BRXLRAOR.js";import"./Button-CP702T-k.js";import"./LinkButton-u-U60Uzu.js";import"./Card-DFg-qCLN.js";import"./CardActions-CRS1Zsa7.js";import"./Popover-BCuFO5oU.js";import"./Paper-DV1QHDO7.js";import"./ErrorFallback-Cb7i3evq.js";import"./ErrorFallbackText-D4-31auA.js";import"./ErrorFallbackWrapper-DPNCVGi4.js";import"./MapToggleButtonPresentational-ktAH0RyB.js";import"./List-Dh3f9sEI.js";const Ve={title:"Inputs/Checkbox",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>i(v,{sx:{margin:"auto"},children:e()})},O=({...e})=>{const[y,D]=j.useState(!1);return i(R,{checked:y,onChange:E=>{D(E.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},s={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},c={render:e=>i(O,{...e}),args:{disabled:!1}};var n,m,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {}
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,l,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,q,W;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    required: true,
    onChange: () => {}
  }
}`,...(W=(q=s.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var L,S,w;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const ze=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,c as ExampleWithOnChange,t as WithCustomLabel,s as WithNoLabel,a as WithRequired,ze as __namedExportsOrder,Ve as default};
