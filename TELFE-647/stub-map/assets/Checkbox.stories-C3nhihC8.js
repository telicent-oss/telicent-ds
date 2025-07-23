import{j as i}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{C as R}from"./Drawer-ChvPPhdC.js";import{r as j}from"./index-Dl6G-zuu.js";import{B as v}from"./Box-B1z1Qd0d.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-DiFjgoLh.js";import"./DefaultPropsProvider-DokkfWXe.js";import"./SvgIcon-CwSgo-eM.js";import"./styled-Bh4j-phE.js";import"./generateUtilityClasses-BrZc1hjY.js";import"./constants-Cti-p_rp.js";import"./iframe-DjR5Pwc1.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./UserProfile-N6pr5-2m.js";import"./Text-C4zpNQRp.js";import"./Typography-DOS1jQiX.js";import"./UserIcon-Cx-r992D.js";import"./index-BfyspvgH.js";import"./useTheme-Sw6qfmru.js";import"./useTheme-c__JTuJp.js";import"./FlexBox-D2o1BZNO.js";import"./styled-ilcqLD5m.js";import"./useThemeProps-BNFryEOP.js";import"./Popover-jZh0iIOv.js";import"./utils-C-XDAD8M.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-DjaG4Kki.js";import"./IconButton-56B7AwOW.js";import"./ButtonBase-Do7AHI9h.js";import"./index-Bg6tHTX3.js";import"./useId-CkA8naEk.js";import"./TelicentHorizontalSVG-xSzC_QTu.js";import"./FlexGrid-JVYOOaHa.js";import"./Container-bU783VGj.js";import"./DataSetIcon-DGj6m1BG.js";import"./UIThemeProvider-K1iMkQi9.js";import"./colorManipulator-Cuc7me6V.js";import"./ThemeProvider-mIQjSFi-.js";import"./Chip-pzoqvFR6.js";import"./Divider-BQZg7t2N.js";import"./TreeView-gav8i2Kk.js";import"./UserProfileContent-DHz0GTL-.js";import"./LinearProgress-tobgb8oL.js";import"./Button-w9tbBUtr.js";import"./Button-D7yzuVoT.js";import"./SecondaryButton-BcPTyAr_.js";import"./Card-CACrcWJQ.js";import"./CardActions-ChQ-9HT4.js";import"./Popover-DEe1UNyj.js";import"./Paper-BMhFNqQN.js";import"./ErrorFallback-D0Q64ifN.js";import"./ErrorFallbackText-C1J-oAKu.js";import"./ErrorFallbackWrapper-D-KZ366e.js";import"./MapToggleButtonPresentational-CBr8W7gO.js";import"./List-B5LeInEP.js";const Ae={title:"Inputs/Checkbox",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>i(v,{sx:{margin:"auto"},children:e()})},O=({...e})=>{const[y,D]=j.useState(!1);return i(R,{checked:y,onChange:E=>{D(E.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},s={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},c={render:e=>i(O,{...e}),args:{disabled:!1}};var n,m,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {}
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,l,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const Fe=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,c as ExampleWithOnChange,t as WithCustomLabel,s as WithNoLabel,a as WithRequired,Fe as __namedExportsOrder,Ae as default};
