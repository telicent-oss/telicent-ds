import{j as m}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{e as R}from"./AuthModal-DQzmx7OJ.js";import{r as j}from"./index-CTjT7uj6.js";import{B as v}from"./Box-CRiiUqfG.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-D7i5Vapy.js";import"./Typography-NY1t2oJS.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-lG5csJb9.js";import"./iframe-1MnXVmy2.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./UserProfile-D6O7wNKl.js";import"./UserIcon-o6gncd3f.js";import"./SvgIcon-nu1RSFLJ.js";import"./index-BRV0Se7Z.js";import"./FlexBox-wqE_3hOo.js";import"./styled-D52li5_j.js";import"./createStyled-MF3orRa4.js";import"./useThemeProps-BQrQzAVn.js";import"./createSvgIcon-BGbWkX_4.js";import"./Modal-nppWUrX9.js";import"./utils-BbBxhV03.js";import"./TransitionGroupContext-C2di2VJK.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./IconButton-D-oHTsme.js";import"./ButtonBase-DH2zkY_f.js";import"./Menu-Cib9lkAX.js";import"./index-CejG0Q0C.js";import"./Popover-hHU0kX9Y.js";import"./Paper-DurtPqdU.js";import"./Select-CQe_2BDr.js";import"./useId-DMVUMfb1.js";import"./Popper-DKho5otB.js";import"./TelicentHorizontalSVG-Cczi-KYX.js";import"./FlexGrid-WlHVYxOe.js";import"./Container-CeTulhJU.js";import"./DataSetIcon-eLJEtM34.js";import"./AdapterDayjs-D_A3CBKl.js";import"./useThemeProps-BCPloJZh.js";import"./TextField-jmY6cT1k.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-DaEQE3W9.js";import"./Button-DwUhO5A1.js";import"./Chip-BVb47-Yv.js";import"./MenuItem-DDCSmGiz.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-CVgpJ9Or.js";import"./ThemeProvider-BnKwSnOu.js";import"./IconButton-Dha20OVG.js";import"./Chip-CaEkyDbp.js";import"./Divider-BNrRnzv6.js";import"./Divider-ALDgEm0R.js";import"./TreeView-BWiTPIDd.js";import"./UserProfileContent-D7SfyGJp.js";import"./LinearProgress-BKbPPN-u.js";import"./Dialog-LbicNw92.js";import"./Button-BBT7kpDa.js";import"./LinkButton-Cp_YKl9b.js";import"./TextField-Cl8VKv-k.js";import"./Select-DtgCaZa6.js";import"./Autocomplete-C-kTU09I.js";import"./DatePicker-DZxYbCmI.js";import"./DateTimePicker-BArbA-5v.js";import"./Card-BBAZs1GG.js";import"./CardActions-ahQ16fz_.js";import"./Popover-DfYJjWq1.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./MapToggleButtonPresentational-D_BfGPGk.js";import"./Remove-CFsi-mnJ.js";import"./Edit-gSW16YTz.js";const cr={title:"Inputs/Checkbox",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>m(v,{sx:{margin:"auto"},children:e()})},O=({...e})=>{const[y,D]=j.useState(!1);return m(R,{checked:y,onChange:E=>{D(E.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},i={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},s={render:e=>m(O,{...e}),args:{disabled:!1}};var c,n,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const nr=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,s as ExampleWithOnChange,t as WithCustomLabel,i as WithNoLabel,a as WithRequired,nr as __namedExportsOrder,cr as default};
