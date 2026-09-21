import{j as c,r as y}from"./iframe-sCMTah6I.js";import{e as D}from"./DropdownButton-5YfSb9Fn.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-DN1xyrcF.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-4_LEutpy.js";import"./SvgIcon-CkgeR1pA.js";import"./generateUtilityClass-BYp2rJcs.js";import"./styled-DiK4NeDs.js";import"./generateUtilityClasses-9ji0KBHh.js";import"./useTheme-Cv8UvDsx.js";import"./Box-srHswpXa.js";import"./Container-DVMysQv8.js";import"./styled-Bzi5a8Nn.js";import"./createStyled-BO5OqwSA.js";import"./useThemeProps-Cd4SWnkA.js";import"./FlexBox-CRw_PPcA.js";import"./Stack-DFUJU3IC.js";import"./Typography-C7H7tdJH.js";import"./Paper-Dj0XEFgg.js";import"./useThemeProps-CwuygNVU.js";import"./Text-9kYsGMH2.js";import"./AdapterDayjs-CjuRIhml.js";import"./Modal-VHuAw1xl.js";import"./utils-BShRNaI0.js";import"./TransitionGroupContext-CHNcdvbO.js";import"./index-1i7MGYri.js";import"./resolveComponentProps-BFmcRe6X.js";import"./Popover-DMdSQ1Gm.js";import"./TextField-CBhaYsMI.js";import"./useFormControl-OPIlrXbI.js";import"./createSvgIcon-CmrJPXWi.js";import"./IconButton-CYN9JXU4.js";import"./ButtonBase-DeG36Vwr.js";import"./DialogContent-BTIhtZgK.js";import"./Button-D80LzkP1.js";import"./Chip-hCr7175Z.js";import"./DateTimePicker-BfEgPMRC.js";import"./Divider-_tu6IKvy.js";import"./AppInfoRow-CnKYYJBk.js";import"./Chip-3WkjkahH.js";import"./Divider-BueWLHhh.js";import"./TreeView-BIfksvo4.js";import"./Alert-mijamWS4.js";import"./LinearProgress-DAPaXVKP.js";import"./Spinner-DUsSOKlD.js";import"./Dialog-DbeRkryw.js";import"./MapToggleButtonPresentational-Douysrfr.js";import"./Remove-CBCNzEQH.js";import"./LinkButton-nPoqBe3W.js";import"./TextField-D2x4JNLw.js";import"./Switch-9QJLy3Eh.js";import"./DatePicker-D-6cx-Gj.js";import"./Paper-CAqAKMmN.js";import"./ErrorFallback-BSr14lue.js";import"./ErrorFallbackText-wsO76vmK.js";import"./ErrorFallbackWrapper-D0L8TNPl.js";import"./Brand-D2huPEYW.js";import"./Edit-WLzQi74Q.js";const Pe={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
