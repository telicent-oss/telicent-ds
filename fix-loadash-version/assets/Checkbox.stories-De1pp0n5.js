import{j as c}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{i as D}from"./AuthModal-INY1J062.js";import{r as y}from"./index-CTjT7uj6.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-BmQrrWB5.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-DWuU5NOi.js";import"./Typography-jxiy5gAQ.js";import"./identifier-ubkqThfq.js";import"./styled-CeNrfZN8.js";import"./generateUtilityClasses-rmcueE__.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-DKuHcIkI.js";import"./iframe-s2GvGjGy.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./useThemeProps-ErBa_dZ_.js";import"./useThemeProps-BQrQzAVn.js";import"./ButtonBase-BS_9IN6p.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-CejG0Q0C.js";import"./Select-BMyBEyBj.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-BAZTFLL2.js";import"./utils-EYY7_thZ.js";import"./Paper-CX7OniPZ.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DI4ErmOj.js";import"./AdapterDayjs-B1noBw_N.js";import"./TextField-Dd-W-Nbe.js";import"./createStyled-MF3orRa4.js";import"./IconButton-B40nmrRW.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-BA_D-pD1.js";import"./Button-D5FpgyXB.js";import"./Chip-CpBBya1C.js";import"./UserIcon-C_uMuWNI.js";import"./Container-THkL10Ux.js";import"./styled-D52li5_j.js";import"./Stack-BXkbJ8_X.js";import"./MenuItem-C70p-rzV.js";import"./dividerClasses-BqGj-Wnd.js";import"./UIThemeProvider-Y3o75pQS.js";import"./ThemeProvider-BnKwSnOu.js";import"./Chip-BmTc0fFj.js";import"./Card-AawNb1ZT.js";import"./Divider-OL1fE4_m.js";import"./TreeView-DoStf2cx.js";import"./LinearProgress-D_UfVP6h.js";import"./Spinner-BatD7ajz.js";import"./Dialog-BCXWohbq.js";import"./MapToggleButtonPresentational-C-P2Xz9W.js";import"./Remove-VTXboCXe.js";import"./TextField-xy8B6PxM.js";import"./Select-Ovpwa_Do.js";import"./Switch-CFTT8Jub.js";import"./DatePicker-x8e043oY.js";import"./DateTimePicker-B10t8APv.js";import"./LinkButton-BaH7xTw3.js";import"./Paper-CPoUKSxJ.js";import"./ErrorFallback-ysz_C47v.js";import"./ErrorFallbackText-CR-qweg6.js";import"./ErrorFallbackWrapper-D_1cbupt.js";import"./Brand-npN9D4Uu.js";import"./Edit-DJ67vPjx.js";const Ze={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>c(I,{sx:{margin:"auto"},children:e()})},j=({...e})=>{const[v,R]=y.useState(!1);return c(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},i={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},s={render:e=>c(j,{...e}),args:{disabled:!1}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var u,g,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    label: "Custom Label",
    onChange: () => {}
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,x,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: false,
    id: "checkbox-custom-label",
    label: "Required",
    required: true,
    onChange: () => {}
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,q,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    required: true,
    onChange: () => {}
  }
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var W,L,S;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const $e=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,s as ExampleWithOnChange,t as WithCustomLabel,i as WithNoLabel,a as WithRequired,$e as __namedExportsOrder,Ze as default};
