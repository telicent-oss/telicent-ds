import{j as i,r as y}from"./iframe-ulHXhjOW.js";import{b as D}from"./DropdownButton-D4ndyRTJ.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-1efcaeVM.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B-d1IQYh.js";import"./createSvgIcon-uTqWg2nN.js";import"./styled-Czze2UzD.js";import"./generateUtilityClasses-CSjJ64ks.js";import"./useTheme-DrTNJuY8.js";import"./Container-e_1t6Vkj.js";import"./styled-B4vmi4YW.js";import"./createStyled-ZgfepH37.js";import"./useThemeProps-BpUXXMW6.js";import"./Stack-Cyq5pepP.js";import"./Typography-Dn5MRyem.js";import"./Paper-Ce5gTSZ1.js";import"./useThemeProps-4ujKhl13.js";import"./Text-BoiTDCRr.js";import"./AdapterDayjs-CZeE3p0P.js";import"./Modal-Cg5uim4K.js";import"./utils-Cprl2CzU.js";import"./TransitionGroupContext-qSVm1uFm.js";import"./index-YuMLfXhi.js";import"./Select-DJoERUQP.js";import"./useFormControl-DawOst1E.js";import"./TextField-DVVVIXqb.js";import"./IconButton-t9DwqyqP.js";import"./ButtonBase-B2PuhISu.js";import"./DialogContent-MOZRP09j.js";import"./Button-DqB_Kw8t.js";import"./Chip-msXb_G5D.js";import"./MenuItem-BxHmYRBI.js";import"./dividerClasses-BYFYoYAG.js";import"./Chip-n1uZIzP0.js";import"./Divider-C0lF_NPc.js";import"./Divider-JeDgfplA.js";import"./TreeView-Djo6uz5s.js";import"./LinearProgress-BE1QBgJT.js";import"./Spinner-wBjktabM.js";import"./Dialog-BN-VRNR9.js";import"./MapToggleButtonPresentational-CtiuSv3Q.js";import"./Remove-CeLDCN2O.js";import"./TextField-CgXZ8iCV.js";import"./Select-FuqWOM9m.js";import"./Switch-BGnmX7CN.js";import"./DatePicker-C7pca_1x.js";import"./DateTimePicker-Buoun9gu.js";import"./LinkButton-CaaZOAyU.js";import"./Paper-CRQ_Ffgy.js";import"./ErrorFallback-CM5zR9AD.js";import"./ErrorFallbackText-CWsckLjw.js";import"./ErrorFallbackWrapper-yYMeo0wW.js";import"./Brand-CleGoPe-.js";import"./constants-BPnf2WSg.js";import"./Edit-DOoALeDD.js";const Fe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
