import{j as m}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{f as D}from"./AuthModal-D65iIcNH.js";import{r as y}from"./index-CTjT7uj6.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as I}from"./Box-CRiiUqfG.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-D7i5Vapy.js";import"./Typography-NY1t2oJS.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-P3GksnoQ.js";import"./iframe-IWLKcGdC.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./UserProfile-DRQRR7_X.js";import"./UserIcon-o6gncd3f.js";import"./SvgIcon-nu1RSFLJ.js";import"./index-BRV0Se7Z.js";import"./Stack-C-VLTEnn.js";import"./styled-D52li5_j.js";import"./createStyled-MF3orRa4.js";import"./useThemeProps-BQrQzAVn.js";import"./createSvgIcon-BGbWkX_4.js";import"./Modal-GSj0T9Pb.js";import"./utils-BfJHuSOI.js";import"./TransitionGroupContext-Bu81adgJ.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./IconButton-oAA5JCuL.js";import"./ButtonBase-C9YLNer7.js";import"./Menu-Dz_6jnqr.js";import"./index-CejG0Q0C.js";import"./Popover-DlmTLUyz.js";import"./Paper-DurtPqdU.js";import"./useFormControl-DPKvkoC5.js";import"./useId-DMVUMfb1.js";import"./AdapterDayjs-BEaMQcLJ.js";import"./useThemeProps-BCPloJZh.js";import"./TextField-Dp-4Je7P.js";import"./Select-DjoBVcxs.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-BX05r4Wn.js";import"./Button-BsbypDuV.js";import"./Chip-DrHiCwPe.js";import"./TelicentHorizontalSVG-Ci5Nh0DA.js";import"./FlexGrid-WlHVYxOe.js";import"./Container-CeTulhJU.js";import"./FlexBox-CEMdxTrl.js";import"./DataSetIcon-eLJEtM34.js";import"./MenuItem-B8oYDPYK.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-Dfoz0doH.js";import"./ThemeProvider-BnKwSnOu.js";import"./IconButton-CSRnY2wZ.js";import"./Chip-BYDdnwPY.js";import"./Divider-BNrRnzv6.js";import"./Divider-ALDgEm0R.js";import"./TreeView-BaiGyGfQ.js";import"./UserProfileContent-89WrbRP9.js";import"./LinearProgress-BKbPPN-u.js";import"./Spinner-w6IMOYm1.js";import"./Dialog-DBzAiknu.js";import"./Button-BQmmc_Hj.js";import"./LinkButton-DOLgHIfS.js";import"./TextField-Bn0OGEgO.js";import"./Select-CNwEk6pf.js";import"./Switch-hsriPZgu.js";import"./DatePicker-AtFJHvOV.js";import"./DateTimePicker-Pe_mHrSx.js";import"./Card-BBAZs1GG.js";import"./CardActions-ahQ16fz_.js";import"./Popover-BqkrEGud.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./Brand-CDA26Tjd.js";import"./MapToggleButtonPresentational-X7PiIpGo.js";import"./Remove-CFsi-mnJ.js";import"./Edit-gSW16YTz.js";const hr={title:"Inputs/Checkbox",component:D,tags:["autodocs"],parameters:{...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6164-17320&m=dev"),docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>m(I,{sx:{margin:"auto"},children:e()})},j=({...e})=>{const[v,R]=y.useState(!1);return m(D,{checked:v,onChange:U=>{R(U.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},i={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},s={render:e=>m(j,{...e}),args:{disabled:!1}};var c,n,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,q,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    required: true,
    onChange: () => {}
  }
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var W,L,S;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const ur=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,s as ExampleWithOnChange,t as WithCustomLabel,i as WithNoLabel,a as WithRequired,ur as __namedExportsOrder,hr as default};
