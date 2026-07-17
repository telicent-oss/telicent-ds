import{j as i,r as y}from"./iframe-CakKu3tO.js";import{b as D}from"./DropdownButton-DzEacR5L.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-Dqg2QVrM.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BV3RYnBk.js";import"./createSvgIcon-DzFzUuJj.js";import"./generateUtilityClass-6Xw7P5Pk.js";import"./styled-D0i_6XAq.js";import"./generateUtilityClasses-CTZdcpcX.js";import"./useTheme-CU3Z1LPN.js";import"./Box-CScMK_tz.js";import"./Container-qAOf7brY.js";import"./styled-Bc9giz0S.js";import"./createStyled-_kKMVs_z.js";import"./useThemeProps-CaBBmZ9W.js";import"./Stack-Bp4TNhTS.js";import"./Typography-VZwDLLsu.js";import"./Paper-DBfB9cOM.js";import"./useThemeProps-B0dC3yxA.js";import"./Text-BpfdXhwS.js";import"./AdapterDayjs-FG7X0hAC.js";import"./Modal-B3Wl13vZ.js";import"./utils-CGnDQcez.js";import"./TransitionGroupContext-B9U98U0r.js";import"./index-Chjky9EM.js";import"./resolveComponentProps-iQz6eQKL.js";import"./TextField-Dz5pbBA4.js";import"./useFormControl-BnXqfYXF.js";import"./IconButton-by7O0-70.js";import"./ButtonBase-DXatlffU.js";import"./DialogContent-CqiwXf8a.js";import"./Button-4KrkEQt7.js";import"./Chip-DLnMpScH.js";import"./DateTimePicker-CeMgnArL.js";import"./Divider-DBfCyhXV.js";import"./Chip-B3Sx6Jvd.js";import"./Divider-B5Ng5m_3.js";import"./TreeView-_VwDVBrL.js";import"./Close-fI8KD5QN.js";import"./LinearProgress-K4-hTmuI.js";import"./Spinner-CQ5Mmb5a.js";import"./Dialog-hPYI290l.js";import"./MapToggleButtonPresentational-DlZ_MTdF.js";import"./Remove-C87szEH0.js";import"./TextField-X3bvylQP.js";import"./Switch-CvCjsl_j.js";import"./DatePicker-CvxthTcJ.js";import"./LinkButton-Cv90u6o7.js";import"./Paper-0914DYk_.js";import"./ErrorFallback-D2fuzadK.js";import"./ErrorFallbackText-_e0eHtFb.js";import"./ErrorFallbackWrapper-C92QdUtP.js";import"./Brand-oBbv0poP.js";import"./constants-kG9JxYl2.js";import"./Edit-CmkU-7Bg.js";const Fe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
