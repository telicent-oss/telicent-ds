import{j as o}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{L as t}from"./LinkButton-D3-RYoWb.js";import{B as c}from"./Box-BF-qgu-5.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./useTheme-BzMTtAHJ.js";import"./identifier-y0bUoTO6.js";import"./useTheme-DD-YLZ4_.js";import"./Button-C78fFQkL.js";import"./styled-0JAKTnfS.js";import"./generateUtilityClasses-Nvsm4CNa.js";import"./DefaultPropsProvider-5cPhPzqh.js";import"./ButtonBase-BPGrtmaq.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";const w={title:"Buttons/Link",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
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
