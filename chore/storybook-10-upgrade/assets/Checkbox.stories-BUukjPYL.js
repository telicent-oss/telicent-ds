import{j as i,r as y}from"./iframe-B_xAjz_a.js";import{b as D}from"./DropdownButton-BnaLLxdm.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-HNQBJ69w.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-sXWYTtMY.js";import"./createSvgIcon-DNxDKV7W.js";import"./styled-DWxCgiIq.js";import"./generateUtilityClasses-CWLcYD5H.js";import"./useTheme-DXfWrHWZ.js";import"./Container-DZVvhBo5.js";import"./styled-Dj6VM8rS.js";import"./createStyled-YK0OyouD.js";import"./useThemeProps-B45YfUAa.js";import"./Stack-BUP2Ksyi.js";import"./Typography-ByJUc9gg.js";import"./Paper-BTmXDdaE.js";import"./useThemeProps-CIWHHPPz.js";import"./Text-Dxo92Y_P.js";import"./AdapterDayjs-q2OtrlCq.js";import"./Modal-BpjRytJz.js";import"./utils-CwDFzrhS.js";import"./TransitionGroupContext-CpQCZJFv.js";import"./index-CI4uBojl.js";import"./Select-CuWSjzQW.js";import"./useFormControl-DsU6bxZg.js";import"./TextField-CXoQdh2Y.js";import"./IconButton-BCtq5lM_.js";import"./ButtonBase-rGiwpEnq.js";import"./DialogContent-5gmVHz0w.js";import"./Button-BK_6tBa6.js";import"./Chip-CnGyAVsl.js";import"./MenuItem-DqM4z-OC.js";import"./dividerClasses-LlugbWYd.js";import"./Chip-CbHUK2Oi.js";import"./Divider-D_2gC9Rv.js";import"./Divider-CmQ1Xcb5.js";import"./TreeView-027Y335s.js";import"./LinearProgress-BGR-shXY.js";import"./Spinner-C7CK19Se.js";import"./Dialog-kf4LGKqy.js";import"./MapToggleButtonPresentational-CEsfsZc1.js";import"./Remove-C35S1kL4.js";import"./TextField-DaNwDKAN.js";import"./Select-BehY_x2i.js";import"./Switch-Bsyk4KfN.js";import"./DatePicker-Vblbv12o.js";import"./DateTimePicker-DASuNmCH.js";import"./LinkButton-BGw7Liqm.js";import"./Paper-B7oVFYM9.js";import"./ErrorFallback-CYAgcxnT.js";import"./ErrorFallbackText-DvI-57tq.js";import"./ErrorFallbackWrapper-Bz-JcYeG.js";import"./Brand-DBW4B7CT.js";import"./constants-1TT1xdyQ.js";import"./Edit-DYLHrREl.js";const Fe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>i(I,{sx:{margin:"auto"},children:e()})},j=({...e})=>{const[v,R]=y.useState(!1);return i(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},s={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},c={render:e=>i(j,{...e}),args:{disabled:!1}};var n,m,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,q,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    required: true,
    onChange: () => {}
  }
}`,...(w=(q=s.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var W,L,S;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const He=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,c as ExampleWithOnChange,t as WithCustomLabel,s as WithNoLabel,a as WithRequired,He as __namedExportsOrder,Fe as default};
