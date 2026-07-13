import{j as i,r as y}from"./iframe-CAVshkuv.js";import{b as D}from"./DropdownButton-9w3rAX6T.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-C4yeY-00.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DJgOmEVN.js";import"./createSvgIcon-B3EaAiNw.js";import"./generateUtilityClass-jc-dHuJ-.js";import"./styled-CEs6WI9Z.js";import"./generateUtilityClasses-PgfeV1Wq.js";import"./useTheme-ATZows8q.js";import"./Box-DLtVExO8.js";import"./Container-COrfX9qv.js";import"./styled-DmB_YMuy.js";import"./createStyled-BEuIMvDB.js";import"./useThemeProps-C0hUlt40.js";import"./Stack-aumhO8Vb.js";import"./Typography-B1Np1v7N.js";import"./Paper-BY4MSiKk.js";import"./useThemeProps-KzD3lSay.js";import"./Text-zn7-gcNn.js";import"./AdapterDayjs-DLp8STlk.js";import"./Modal-q8qVtJkQ.js";import"./utils-CL8D0dFT.js";import"./TransitionGroupContext-mvKX0Qc4.js";import"./index-Bfg7eB2H.js";import"./resolveComponentProps-CK8UMYC2.js";import"./TextField-D-S9QRzG.js";import"./useFormControl-CbU4OzAW.js";import"./IconButton-BeeGNNdb.js";import"./ButtonBase-L_tow8ks.js";import"./DialogContent-DShAFksA.js";import"./Button-CdHIDFCs.js";import"./Chip-DGUVdb4L.js";import"./DateTimePicker-C-jQ5Uw8.js";import"./Divider-BzwQ7r6O.js";import"./Chip-CD6y_O1F.js";import"./Divider-DI0qbv1g.js";import"./TreeView-G_WzO7bU.js";import"./Close-ZjhlHLtp.js";import"./LinearProgress-AOvTTCYa.js";import"./Spinner-aO3iJras.js";import"./Dialog-BzvgW_1y.js";import"./MapToggleButtonPresentational-Dh_eY9kA.js";import"./Remove-CPj-DoGK.js";import"./TextField-De73yqc1.js";import"./Switch-B0vd6s4C.js";import"./DatePicker-Opun4efj.js";import"./LinkButton-UDbAGZRZ.js";import"./Paper-QK8zw_qk.js";import"./ErrorFallback-BRmu4a9D.js";import"./ErrorFallbackText-C8zJKlqc.js";import"./ErrorFallbackWrapper-Dzt70zLO.js";import"./Brand-BuFxs41G.js";import"./constants-Bdme3Adm.js";import"./Edit-BJwA-2_m.js";const Fe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
