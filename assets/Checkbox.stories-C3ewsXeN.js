import{j as i}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{C as R}from"./Drawer-BnDLC3z2.js";import{r as j}from"./index-Dl6G-zuu.js";import{B as v}from"./Box-DjrL3vcN.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-sttI1-XB.js";import"./defaultTheme-Cydao2Tu.js";import"./SvgIcon-CjmMrQNX.js";import"./styled-D6pw60Bp.js";import"./generateUtilityClasses-YWFBP9tm.js";import"./DefaultPropsProvider-BHKfC5ky.js";import"./constants-CBpsnz2Y.js";import"./iframe-BuhuVYtw.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-BzuXlqsY.js";import"./GlobalStyles-ByhVr9LE.js";import"./useTheme-DxGOHaWi.js";import"./useTheme-BYNjlLc8.js";import"./UserProfile-DYm3cGt9.js";import"./Text-BNIHq94e.js";import"./Typography-BuiWgCNN.js";import"./UserIcon-q_P09GsN.js";import"./index-BfyspvgH.js";import"./FlexBox-D6GhYe9U.js";import"./styled-HsAy3ZEw.js";import"./useThemeProps-CBEhXQxo.js";import"./Popover-BFLlbOqP.js";import"./utils-xzVdhYNG.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-DB4yr4EO.js";import"./IconButton-DPejjeAT.js";import"./ButtonBase-BUg8pwcP.js";import"./index-1lBnjf3z.js";import"./useId-CkA8naEk.js";import"./TelicentHorizontalSVG-DuwDm98x.js";import"./FlexGrid-C2jJkX6w.js";import"./Container-BErEnX_q.js";import"./DataSetIcon-BBABdu0b.js";import"./UIThemeProvider-cFJ7Wxoq.js";import"./colorManipulator-YQmhVZwB.js";import"./ThemeProvider-CN5YWCuf.js";import"./Chip-Bx_Lu-NR.js";import"./Divider-BE0LSpy8.js";import"./TreeView-DpHiciEK.js";import"./UserProfileContent-DdYm007D.js";import"./LinearProgress-yGZEzgsa.js";import"./Button-Db1NJzza.js";import"./Button-a6vHgwhc.js";import"./SecondaryButton-RKCuUyYG.js";import"./Card-CUWN1MwO.js";import"./CardActions-wDSfmjtr.js";import"./Popover-DhgGZshX.js";import"./Paper-CYQoaktD.js";import"./ErrorFallback-VtVYyFB3.js";import"./ErrorFallbackText-e1_2MPZH.js";import"./ErrorFallbackWrapper-B2v_McFA.js";import"./MapToggleButtonPresentational-BRbZj3_b.js";import"./List-CmdUcGkz.js";const He={title:"Inputs/Checkbox",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"checkbox-default",ariaLabel:"checkbox"},decorators:e=>i(v,{sx:{margin:"auto"},children:e()})},O=({...e})=>{const[y,D]=j.useState(!1);return i(R,{checked:y,onChange:E=>{D(E.target.checked)},id:"checkbox-demo",...e})},r={args:{checked:!0,id:"checkbox-default",onChange:()=>{}}},o={args:{checked:!1,id:"checkbox-disabled",disabled:!0,onChange:()=>{}}},t={args:{checked:!0,id:"checkbox-custom-label",label:"Custom Label",onChange:()=>{}}},a={args:{checked:!1,id:"checkbox-custom-label",label:"Required",required:!0,onChange:()=>{}}},s={args:{checked:!0,id:"checkbox-custom-label",required:!0,onChange:()=>{}}},c={render:e=>i(O,{...e}),args:{disabled:!1}};var n,m,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {}
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,l,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,q,W;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: "checkbox-custom-label",
    required: true,
    onChange: () => {}
  }
}`,...(W=(q=s.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var L,S,w;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <RenderCheckbox {...args} />,
  args: {
    disabled: false
  }
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const Me=["Default","Disabled","WithCustomLabel","WithRequired","WithNoLabel","ExampleWithOnChange"];export{r as Default,o as Disabled,c as ExampleWithOnChange,t as WithCustomLabel,s as WithNoLabel,a as WithRequired,Me as __namedExportsOrder,He as default};
