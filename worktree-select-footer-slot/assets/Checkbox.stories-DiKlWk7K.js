import{j as i,r as y}from"./iframe-Crov0WQz.js";import{b as D}from"./DropdownButton-CLtoK2nQ.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-BG0wW1Gw.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BpACv-KD.js";import"./createSvgIcon-YDz-o7-b.js";import"./styled-Iiak7Ogq.js";import"./generateUtilityClasses-YSREvbxX.js";import"./useTheme-B_goZ4qo.js";import"./Container-B68-6-yw.js";import"./styled-CNP8R88q.js";import"./createStyled-BLdT8Qb_.js";import"./useThemeProps-ZmDRkbFp.js";import"./Stack-Bfojjyxu.js";import"./Typography-B9r5TGn1.js";import"./Paper-Dqj2J0bD.js";import"./useThemeProps-BHR99ymZ.js";import"./Text-D0Fnpi2n.js";import"./AdapterDayjs-5PvZCLYQ.js";import"./Modal-Ckwnu49q.js";import"./utils-DmCjym0s.js";import"./TransitionGroupContext-D_iDfzVR.js";import"./index-DKz44-9c.js";import"./TextField-DoWg8ST_.js";import"./useFormControl-nQOCEbZr.js";import"./IconButton-CkgmJ1wq.js";import"./ButtonBase-D84oecVH.js";import"./DialogContent-Bogzx-91.js";import"./Button-CacSTNVY.js";import"./Chip-CTEj_6SL.js";import"./DateTimePicker-CZdkDgZx.js";import"./Divider-B4WphmzU.js";import"./Chip-C1hb46nu.js";import"./Divider-DjIAefNA.js";import"./TreeView-BhCu4_vt.js";import"./LinearProgress-xJR7lhkP.js";import"./Spinner-BFZivWxB.js";import"./Dialog-DoAt61AO.js";import"./MapToggleButtonPresentational-C7M7o9lk.js";import"./Remove-Dh7kVVq0.js";import"./TextField-08-w4XG5.js";import"./Switch-B39EAJit.js";import"./DatePicker-PvBZCpyj.js";import"./LinkButton-CKRF2-uU.js";import"./Paper-DuUVMjJy.js";import"./ErrorFallback-DVSKIMBt.js";import"./ErrorFallbackText-C98aj5QV.js";import"./ErrorFallbackWrapper-CV687E_O.js";import"./Brand-DTDlbVRJ.js";import"./constants-BsbrBYOu.js";import"./Edit-DYqlQ0Co.js";const je={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const Me=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,c as ExampleWithOnChange,t as WithCustomLabel,s as WithNoLabel,a as WithRequired,Me as __namedExportsOrder,je as default};
