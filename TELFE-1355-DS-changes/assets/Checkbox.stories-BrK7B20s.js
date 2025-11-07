import{j as m}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{e as R}from"./AuthModal-qmasD9s9.js";import{r as j}from"./index-Dl6G-zuu.js";import{B as v}from"./Box-BszdSfjy.js";import"./jsx-runtime-DMAvRu52.js";import"./Text-CBeXAxhM.js";import"./Typography-DqLej86Z.js";import"./identifier-C6mAUaLB.js";import"./styled-BErHg-7C.js";import"./generateUtilityClasses-Cuk6vP38.js";import"./DefaultPropsProvider-BOzBDHyA.js";import"./constants-DlQjT1fD.js";import"./iframe-CEcEbE6B.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-GyLrR4NU.js";import"./useTheme-Cg37eTMn.js";import"./GlobalStyles-B_QX4JcH.js";import"./GlobalStyles-D5xpOMhP.js";import"./UserProfile-C8X7C1Su.js";import"./UserIcon-BHVQbi_2.js";import"./SvgIcon-5gifbZ3Q.js";import"./index-BfyspvgH.js";import"./FlexBox-DBRDUZLj.js";import"./styled-BSjilmX5.js";import"./createStyled-BrBbf8qF.js";import"./useThemeProps-43QuDAxK.js";import"./createSvgIcon-Bol9-9si.js";import"./Modal-CRxLFwVZ.js";import"./utils-Bvq5k-kH.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./IconButton-BoPVz0e3.js";import"./ButtonBase-tX4Kf77e.js";import"./Menu-DVuMilii.js";import"./index-sTB3RqdK.js";import"./Popover-Cxp1EMNk.js";import"./Paper-ZbIfs51-.js";import"./Select-Ds1w35dI.js";import"./useId-CkA8naEk.js";import"./Popper-CM2Kr59e.js";import"./TelicentHorizontalSVG-CP1sg2bX.js";import"./FlexGrid-BkekN5zB.js";import"./Container-Cq7J-8WQ.js";import"./DataSetIcon-Cm0wHARM.js";import"./AdapterDayjs-DW1c22wX.js";import"./useThemeProps-DWcfj1ju.js";import"./TextField-BLjSgVN4.js";import"./colorManipulator-DXzzQmry.js";import"./DialogContent-D-e6ZoBQ.js";import"./Button-TraRuOe6.js";import"./Chip-0oOxBFYq.js";import"./MenuItem-D3kwU1b1.js";import"./dividerClasses-D3mH6QPz.js";import"./UIThemeProvider-NVLmHdJb.js";import"./ThemeProvider-zfew0pSd.js";import"./IconButton-C0wT6dFz.js";import"./Chip-DHPuOQSw.js";import"./Divider-Chg4b2AX.js";import"./Divider-hbCrYSvl.js";import"./TreeView-BgMRjvSk.js";import"./UserProfileContent-CK9uRPZy.js";import"./LinearProgress-Cj7B0DX4.js";import"./Dialog-YaeX8T1I.js";import"./Button-B5noVfMb.js";import"./LinkButton-BU_YGzUP.js";import"./TextField-Cyy439vr.js";import"./Select-D1STgkym.js";import"./Autocomplete-DF7gJZuW.js";import"./DatePicker-DVz3O4Jw.js";import"./DateTimePicker-DVLkLoCp.js";import"./Card-CyosORb7.js";import"./CardActions-q60J-lzQ.js";import"./Popover-BrIrK6dZ.js";import"./Paper-BKrtg6OD.js";import"./ErrorFallback-DIksr2Zc.js";import"./ErrorFallbackText-Cj3I3SFq.js";import"./ErrorFallbackWrapper-D0yAoJ_c.js";import"./MapToggleButtonPresentational-Cl915u3A.js";import"./Remove-Dh6sdo_k.js";import"./Edit-uu0JEZaV.js";const cr={title:"Inputs/Checkbox",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>m(v,{sx:{margin:"auto"},children:e()})},O=({...e})=>{const[y,D]=j.useState(!1);return m(R,{checked:y,onChange:E=>{D(E.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},i={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},s={render:e=>m(O,{...e}),args:{disabled:!1}};var c,n,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {}
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var d,l,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,q,W;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    required: true,
    onChange: () => {}
  }
}`,...(W=(q=i.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var L,S,w;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const nr=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,s as ExampleWithOnChange,t as WithCustomLabel,i as WithNoLabel,a as WithRequired,nr as __namedExportsOrder,cr as default};
