import{j as o}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{L as t}from"./LinkButton-BU_YGzUP.js";import{B as c}from"./Box-BszdSfjy.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./useTheme-GyLrR4NU.js";import"./identifier-C6mAUaLB.js";import"./useTheme-Cg37eTMn.js";import"./Button-TraRuOe6.js";import"./styled-BErHg-7C.js";import"./generateUtilityClasses-Cuk6vP38.js";import"./DefaultPropsProvider-BOzBDHyA.js";import"./ButtonBase-tX4Kf77e.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";const w={title:"Buttons/Link",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
A button-styled link built on MUI's \`<Button>\` component, styled to match our design system guidelines for link interactions.

This component is used when a navigation or secondary action should *look* like a link but retain button semantics and behavior. 
It always renders with \`variant="text"\`, \`color="primary"\`, and ripple disabled.

**Features:**
- Subtle underline animation on hover
- Fully keyboard-accessible
- Strictly typed to avoid variant/color overrides
`}}}},e={render:()=>o(c,{children:o(t,{onClick:()=>alert("Link clicked"),children:"Learn more"})})},r={render:()=>o(c,{children:o(t,{disabled:!0,children:"Unavailable link"})})};var i,n,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Box>
      <Link onClick={() => alert("Link clicked")}>Learn more</Link>
    </Box>
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var s,l,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Box>
      <Link disabled>Unavailable link</Link>
    </Box>
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const U=["Default","Disabled"];export{e as Default,r as Disabled,U as __namedExportsOrder,w as default};
