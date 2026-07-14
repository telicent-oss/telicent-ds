import{j as i,r as y}from"./iframe-IZoSKsE3.js";import{b as D}from"./DropdownButton-B5TP08KZ.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-DfvW-z9e.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-RuE3VV1c.js";import"./createSvgIcon-D0jCcW4R.js";import"./generateUtilityClass-DxC2Wx0F.js";import"./styled-PcYrI7eH.js";import"./generateUtilityClasses-COTvziYz.js";import"./useTheme-CsPhboDS.js";import"./Box-uH6Ohr9R.js";import"./Container-DG8DPGND.js";import"./styled-xThT8ge4.js";import"./createStyled-AIvOzxUM.js";import"./useThemeProps-Fa_ce5Ni.js";import"./Stack-9NxgANXW.js";import"./Typography-CQLnp7AW.js";import"./Paper-ClTtkpZ4.js";import"./useThemeProps-DTUKyBXe.js";import"./Text-Kj3CiPWT.js";import"./AdapterDayjs-X4Nz8chh.js";import"./Modal-z7cB2q78.js";import"./utils-Df1nm0Py.js";import"./TransitionGroupContext-Q2DBTf-m.js";import"./index-DlegAnnu.js";import"./resolveComponentProps-2LdfrHoa.js";import"./TextField-C1yTht9j.js";import"./useFormControl-BUYDSUI9.js";import"./IconButton-DegQ21xD.js";import"./ButtonBase-qLroFK0e.js";import"./DialogContent-CeI2ul6W.js";import"./Button-CeFHt3lU.js";import"./Chip-D1Z91CjO.js";import"./DateTimePicker-Cp3vG90e.js";import"./Divider-BYw826Ky.js";import"./Chip-B0Z93eta.js";import"./Divider-B-3_Adf4.js";import"./TreeView-CuKNTmME.js";import"./Close-Bkeo-_v7.js";import"./LinearProgress-DReytKR0.js";import"./Spinner-BRYGcylR.js";import"./Dialog-CAOjiQ45.js";import"./MapToggleButtonPresentational-BDY0ODha.js";import"./Remove-CPvZ5wnT.js";import"./TextField-Bfy6L2oH.js";import"./Switch-DV-LHNwK.js";import"./DatePicker-jgDY5iU9.js";import"./LinkButton-DuZk3qqS.js";import"./Paper-CERtHtjI.js";import"./ErrorFallback-xEgWIGhC.js";import"./ErrorFallbackText-CmtVqweP.js";import"./ErrorFallbackWrapper-CT6MF4FT.js";import"./Brand-BVth3CVq.js";import"./constants-CIQOnJ5P.js";import"./Edit-CK78KsNY.js";const Fe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
