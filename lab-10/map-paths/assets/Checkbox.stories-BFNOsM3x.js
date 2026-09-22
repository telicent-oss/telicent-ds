import{j as c,r as y}from"./iframe-dgKlI9Md.js";import{e as D}from"./DropdownButton-BedCI7it.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-RIn1APRp.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D3M5AnEw.js";import"./SvgIcon-GThFSKIF.js";import"./generateUtilityClass-DOmT7Hwm.js";import"./styled-DOJEwqdx.js";import"./generateUtilityClasses-CNKQJTWu.js";import"./useTheme-0XXlxHDI.js";import"./Box-DGWce556.js";import"./Container-LSNj_5rd.js";import"./styled-mh7cvxL0.js";import"./createStyled-DBk8YX-w.js";import"./useThemeProps-C6fVk2nE.js";import"./FlexBox-CnoXqpQZ.js";import"./Stack-KvP8rUUb.js";import"./Typography-DBA6UbDc.js";import"./Paper-CaoeiLVt.js";import"./useThemeProps-DlSmm649.js";import"./Text-KXh24aHT.js";import"./AdapterDayjs-Das5WO4l.js";import"./Modal-CYDWNWXW.js";import"./utils-x4UbiFJu.js";import"./TransitionGroupContext-Dr25D--E.js";import"./index-D-8XNvRj.js";import"./resolveComponentProps-CbFkZYcN.js";import"./Popover-DKZg8BBZ.js";import"./TextField-fJ-QFkPY.js";import"./useFormControl-eLOqNTIp.js";import"./createSvgIcon-D_GIqSq7.js";import"./IconButton-CeqJP0J9.js";import"./ButtonBase-CjbcfLfq.js";import"./DialogContent-h7y08ROY.js";import"./Button-DP44SNZU.js";import"./Chip-CpZicjkg.js";import"./DateTimePicker-oA-pYXoq.js";import"./Divider-qdgCSuxQ.js";import"./AppInfoRow-Bku2mgp3.js";import"./Chip-CzH2_KyY.js";import"./Divider-DBb9wTD7.js";import"./TreeView-C35-BIbW.js";import"./Alert-BxUcojB6.js";import"./LinearProgress-DJNtprYa.js";import"./Spinner-Cb4VzE0-.js";import"./Dialog-C-e18Y_P.js";import"./MapToggleButtonPresentational-Dl9Gipgq.js";import"./Remove-CH3SqBB0.js";import"./LinkButton-CPlF4I6l.js";import"./TextField-BuMvxkqq.js";import"./Switch-BkEvFl_g.js";import"./DatePicker-DbIzemFK.js";import"./Paper-Bfyh5ayX.js";import"./ErrorFallback-BRUof8o9.js";import"./ErrorFallbackText-DeVniLrC.js";import"./ErrorFallbackWrapper-fNToE_as.js";import"./Brand-Bg20RPuw.js";import"./Edit-nZvjTHTg.js";const Pe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>c(I,{sx:{margin:"auto"},children:e()})},j=({...e})=>{const[v,R]=y.useState(!1);return c(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},s={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},i={render:e=>c(j,{...e}),args:{disabled:!1}};var n,m,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var u,g,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    label: "Custom Label",
    onChange: () => {}
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,x,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(q=s.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var W,L,S;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(S=(L=i.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const Ve=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,i as ExampleWithOnChange,t as WithCustomLabel,s as WithNoLabel,a as WithRequired,Ve as __namedExportsOrder,Pe as default};
