import{j as i,r as y}from"./iframe-DE4o_xuf.js";import{b as D}from"./DropdownButton-TZ8NqmLi.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-Bd_zZ9oM.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BBsynfLU.js";import"./createSvgIcon-DtXO-Uv_.js";import"./generateUtilityClass-DHTzyDY3.js";import"./styled-CGCPQysn.js";import"./generateUtilityClasses-DcHmrLgo.js";import"./useTheme-BzESzBxP.js";import"./Box-CXnvlXpg.js";import"./Container-CDYT1mRl.js";import"./styled-D-cxiqNK.js";import"./createStyled-BO30qbE7.js";import"./useThemeProps-o8Jugz6q.js";import"./Stack-Be4qbLTD.js";import"./Typography-Qj6Vzb5q.js";import"./Paper-CMgwwm5d.js";import"./useThemeProps-Ce-tiBQL.js";import"./Text-MlQGavPh.js";import"./AdapterDayjs-Bzej26a6.js";import"./Modal-UPQCKQyn.js";import"./utils-BL9EoQhp.js";import"./TransitionGroupContext-BzaUJiqI.js";import"./index-gBXGiVxM.js";import"./resolveComponentProps-DmD3T0IR.js";import"./TextField-CmaU-KBj.js";import"./useFormControl-CdjRoiJh.js";import"./IconButton-C6qkeN3E.js";import"./ButtonBase-CvPzqTPI.js";import"./DialogContent-BYVOVBvJ.js";import"./Button-CcspgIL3.js";import"./Chip-R4S1Xx1_.js";import"./DateTimePicker-BlH7Vx01.js";import"./Divider-CmASGeLX.js";import"./Chip-CMEv-3Ns.js";import"./Divider-DucMFgjg.js";import"./TreeView-971-ZmyF.js";import"./Close-Y3be_ga9.js";import"./LinearProgress-CPlFnB1B.js";import"./Spinner-D3FQHiVx.js";import"./Dialog-DlYa8EPP.js";import"./MapToggleButtonPresentational-O_uOzVPo.js";import"./Remove-kIiRQGnZ.js";import"./TextField-uvS4wcSl.js";import"./Switch-C0X6GqCf.js";import"./DatePicker-dmDL6v2V.js";import"./LinkButton-CHAlghlC.js";import"./Paper-DTmbpqUX.js";import"./ErrorFallback-DTTBcvO-.js";import"./ErrorFallbackText-DzH3d24h.js";import"./ErrorFallbackWrapper-B_0KWZTa.js";import"./Brand-Bsip24mJ.js";import"./constants-BOf8-UPq.js";import"./Edit-RumvcRpQ.js";const Fe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
