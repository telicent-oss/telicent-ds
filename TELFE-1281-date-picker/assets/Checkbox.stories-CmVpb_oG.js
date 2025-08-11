import{j as c}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{C as R}from"./Drawer-CYDy8XTp.js";import{r as j}from"./index-Dl6G-zuu.js";import{B as v}from"./Box-BpjgVFAP.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-DsapHZbt.js";import"./defaultTheme-DzLjz-dB.js";import"./SvgIcon-CUsqqB9A.js";import"./styled-Bv4hMCY2.js";import"./generateUtilityClasses-UcMdw3-3.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./constants-CO5MGBj3.js";import"./iframe-BebCwveA.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BorXEO18.js";import"./useTheme-Bb3Mws8A.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./UserProfile-g79E9POt.js";import"./Text-BfZocbeP.js";import"./Typography-0bha627S.js";import"./UserIcon-BuuqinF_.js";import"./index-BfyspvgH.js";import"./FlexBox-CfPxXzlV.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./Popover-BtZEiDAe.js";import"./utils-BgVWvv5k.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-qM_AAhp8.js";import"./IconButton-BOLdoQUj.js";import"./ButtonBase-DQ5wMQUc.js";import"./Menu-x1DlT4eR.js";import"./index-BbVSaS1S.js";import"./AdapterDayjs-DuWp5629.js";import"./useThemeProps-D7jdKLbb.js";import"./colorManipulator-BRx-aaGP.js";import"./useId-CkA8naEk.js";import"./Button-CfsaO-rc.js";import"./Chip-D8IxPV3x.js";import"./TelicentHorizontalSVG-CX-osCX9.js";import"./FlexGrid-DSPhqh6w.js";import"./Container-C_TGCsJE.js";import"./DataSetIcon-BtGpAy3k.js";import"./DateTimePicker-CV9o2ulC.js";import"./Divider-Cjysf9bk.js";import"./UIThemeProvider-CxkzzJSB.js";import"./ThemeProvider-GiwL96Kb.js";import"./Chip-DH2OifDm.js";import"./Divider-Dtsf1hGn.js";import"./TreeView-DbFX33UJ.js";import"./UserProfileContent-DwoWk9c6.js";import"./LinearProgress-Bg-Reu7H.js";import"./Button-D8ZFDHf0.js";import"./SecondaryButton-CPTMGzEe.js";import"./DatePicker-D7xV_onj.js";import"./Card-DPzkVZ34.js";import"./CardActions-ChFzG7jH.js";import"./Popover-D97xcsWK.js";import"./Paper-6XRc2JUc.js";import"./ErrorFallback-Bdi4LnTL.js";import"./ErrorFallbackText-ByFUlXy5.js";import"./ErrorFallbackWrapper-BOm5y31m.js";import"./MapToggleButtonPresentational-C_LHMPTW.js";import"./List-B22gvqhs.js";const Te={title:"Inputs/Checkbox",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>c(v,{sx:{margin:"auto"},children:e()})},O=({...e})=>{const[y,D]=j.useState(!1);return c(R,{checked:y,onChange:E=>{D(E.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},s={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},i={render:e=>c(O,{...e}),args:{disabled:!1}};var n,m,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(W=(q=s.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var L,S,w;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const Xe=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,i as ExampleWithOnChange,t as WithCustomLabel,s as WithNoLabel,a as WithRequired,Xe as __namedExportsOrder,Te as default};
