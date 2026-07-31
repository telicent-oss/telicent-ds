import{j as i,r as y}from"./iframe-DoslK4-Y.js";import{b as D}from"./DropdownButton-CpLqd6lJ.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-D2_lAdOb.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DnXd5C1m.js";import"./createSvgIcon-kyaEsooS.js";import"./generateUtilityClass-JvD44KlO.js";import"./styled-B63D9YfN.js";import"./generateUtilityClasses-DKrtj2o0.js";import"./useTheme-DzicPpM7.js";import"./Box-DAPH_7_v.js";import"./Container-PDo0r7TO.js";import"./styled-BvUWTwGk.js";import"./createStyled-C2aqfojm.js";import"./useThemeProps-DNll4FD1.js";import"./Stack-UL0xvK-j.js";import"./Typography-D2p4r1VP.js";import"./Paper-1pU2OFLe.js";import"./useThemeProps-BNlVDt2d.js";import"./Text-Cij1s-38.js";import"./AdapterDayjs-UbNq20Y4.js";import"./Modal-rS1eOuqw.js";import"./utils-Dvm8JGhi.js";import"./TransitionGroupContext-C-tiKQba.js";import"./index-CkH7vSdv.js";import"./resolveComponentProps-COOebCVT.js";import"./TextField-C2yuJQKq.js";import"./useFormControl-DRekPhCN.js";import"./IconButton-poqVLHkM.js";import"./ButtonBase-C5TrPrFI.js";import"./DialogContent-DhrHlbA4.js";import"./Button-C-Z1g5oZ.js";import"./Chip-D3gK25ET.js";import"./DateTimePicker-BXudKtkl.js";import"./Divider-JBjBhjWn.js";import"./Chip-DNg9fUiC.js";import"./Divider-DPs7zMxh.js";import"./TreeView-y43LHmco.js";import"./Close-MejyRCXq.js";import"./LinearProgress-zmCoNGUe.js";import"./Spinner-DokMSZNQ.js";import"./Dialog-Zk72S_-8.js";import"./MapToggleButtonPresentational-Dqn1nl-c.js";import"./Remove-BlL-kZFd.js";import"./TextField-BX9-cCN-.js";import"./Switch-DAnjy2Z2.js";import"./DatePicker-yxE24Q2d.js";import"./LinkButton-OGrJf87H.js";import"./Paper-CuXqVMKU.js";import"./ErrorFallback-BxLGSuCI.js";import"./ErrorFallbackText-DMYJZIcj.js";import"./ErrorFallbackWrapper-CoUUqruh.js";import"./Brand-BHjzrKzK.js";import"./constants-4rCzzNn2.js";import"./Edit-BUNMs3rM.js";const Fe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
