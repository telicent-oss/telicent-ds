import{j as i,r as y}from"./iframe-BqqKlwwa.js";import{b as D}from"./DropdownButton-DzB6ahkn.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-fJZ8R9-A.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CPduY34a.js";import"./createSvgIcon-1vjhxYae.js";import"./generateUtilityClass-C21e_TMF.js";import"./styled-DYH3NNtb.js";import"./generateUtilityClasses-CXTZVc4r.js";import"./useTheme-D5fnxfrf.js";import"./Box-CMGXnnyg.js";import"./Container-CjnffXXv.js";import"./styled-BKL9P30Y.js";import"./createStyled-2Pi8n9Bx.js";import"./useThemeProps-BE43dwe9.js";import"./Stack-DGYvNFnp.js";import"./Typography-r9WARuqd.js";import"./Paper-CJpWpN4s.js";import"./useThemeProps-BeWtcQiU.js";import"./Text-D367fKUk.js";import"./AdapterDayjs-DvkxE42H.js";import"./Modal-CFi7NpCZ.js";import"./utils-ClVsDaXg.js";import"./TransitionGroupContext-DiVglu5Y.js";import"./index-CRMvLHot.js";import"./resolveComponentProps-Cd0rbuoE.js";import"./TextField-CSaMK6Rk.js";import"./useFormControl-CJ-AiNnx.js";import"./IconButton-C0yfI_AJ.js";import"./ButtonBase-Bplzc8va.js";import"./DialogContent-CtGptt-v.js";import"./Button--P2V-vbf.js";import"./Chip-Bg9GS4ad.js";import"./DateTimePicker-Bg2Aumfy.js";import"./Divider-C9Y0zhSY.js";import"./Chip-DP6OEXjS.js";import"./Divider-DtsR-NFR.js";import"./TreeView-g4w2Ic2N.js";import"./Close-KcKFZADQ.js";import"./LinearProgress-BcbpGby2.js";import"./Spinner-C3y-_tnf.js";import"./Dialog-CU2Sdzg4.js";import"./MapToggleButtonPresentational-BhuzwcFT.js";import"./Remove-CJtGZM1W.js";import"./TextField-DcCagKfQ.js";import"./Switch-BFbXwE48.js";import"./DatePicker-D6WVRr1T.js";import"./LinkButton-5F2XfMGt.js";import"./Paper-8WAvk_Qw.js";import"./ErrorFallback-AR6ag1S9.js";import"./ErrorFallbackText-CFF1RAi1.js";import"./ErrorFallbackWrapper-D5foAbpi.js";import"./Brand-Dl2vMMPH.js";import"./constants-mvoOnkOS.js";import"./Edit-oZ_9Z-0E.js";const Fe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
