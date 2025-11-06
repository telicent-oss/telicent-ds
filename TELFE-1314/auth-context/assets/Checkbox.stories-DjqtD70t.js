import{j as c}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{e as R}from"./AuthModal-Km65F7Mg.js";import{r as j}from"./index-Dl6G-zuu.js";import{B as v}from"./Box-DR7xjwgg.js";import"./jsx-runtime-DMAvRu52.js";import"./Text-DnbGH9ax.js";import"./Typography-DvrCv4HQ.js";import"./identifier-CCo8HfxA.js";import"./styled-DiVYluCu.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./constants-BPMK-7xK.js";import"./iframe-C8rlz24g.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-DC9e96ys.js";import"./useTheme-CEgm5wok.js";import"./GlobalStyles-BK1ltzIn.js";import"./GlobalStyles-DdQ_E3CX.js";import"./UserProfile-CSbbH8i5.js";import"./UserIcon-B0AVfc7u.js";import"./SvgIcon-DDjczThx.js";import"./index-BfyspvgH.js";import"./FlexBox-owEKTX38.js";import"./styled-BEKiHWi7.js";import"./createStyled-9i3u5Rqa.js";import"./useThemeProps-BFLDat3t.js";import"./createSvgIcon-CxivGeKF.js";import"./Popover-B3llNT0S.js";import"./utils-BfhgiYH5.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-B-rBeRIm.js";import"./IconButton-BRyaXHdy.js";import"./ButtonBase-JObl-ewV.js";import"./Menu-BkD04aCn.js";import"./index-CXtVKvFt.js";import"./Select-BIX2DfMX.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-sa9HN2xx.js";import"./useThemeProps-BTBzXMHi.js";import"./TextField-D_aQwkfm.js";import"./colorManipulator-DBPky6cX.js";import"./Button-B8lPRXAj.js";import"./Chip-DqDSBqh3.js";import"./TelicentHorizontalSVG-DP7xLAp3.js";import"./FlexGrid-M25hPc65.js";import"./Container-CFeVW3qn.js";import"./DataSetIcon-CzT3Gt8m.js";import"./MenuItem-CdOttbWs.js";import"./dividerClasses-DixuAXrT.js";import"./UIThemeProvider-Cy_6mza1.js";import"./ThemeProvider-BPzF9hu_.js";import"./IconButton-Dl7Uv_PN.js";import"./Chip-BVaSRp92.js";import"./Divider-CCH3-U8L.js";import"./Divider-DOeen-K3.js";import"./TreeView-0QEJhhhD.js";import"./UserProfileContent-BkWk_Qx8.js";import"./LinearProgress-CRSreEF6.js";import"./Button-BhZeqQDZ.js";import"./LinkButton-CsDENkR4.js";import"./TextField-InohbSRw.js";import"./Select-C1_f-aAJ.js";import"./DatePicker-ga9keWZl.js";import"./DateTimePicker-B55e7A3j.js";import"./Card-BWv60QFk.js";import"./CardActions-CCW8za6b.js";import"./Popover-Bxjayg7j.js";import"./Paper-BBwh5-3y.js";import"./ErrorFallback-fPXNZKjO.js";import"./ErrorFallbackText-BLCYy_1i.js";import"./ErrorFallbackWrapper-CSpgK55r.js";import"./MapToggleButtonPresentational-DiEvv04q.js";import"./Remove-DLpXZYtt.js";import"./Edit-BwFhg13Q.js";const tr={title:"Inputs/Checkbox",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>c(v,{sx:{margin:"auto"},children:e()})},O=({...e})=>{const[y,D]=j.useState(!1);return c(R,{checked:y,onChange:E=>{D(E.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},i={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},s={render:e=>c(O,{...e}),args:{disabled:!1}};var m,n,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const ar=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,s as ExampleWithOnChange,t as WithCustomLabel,i as WithNoLabel,a as WithRequired,ar as __namedExportsOrder,tr as default};
