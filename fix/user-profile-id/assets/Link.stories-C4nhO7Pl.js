import{a as o}from"./iframe-BMeccPNJ.js";import{L as i}from"./LinkButton-Dtrnv-gT.js";import{f as c}from"./figmaDesign-CKKXRVNK.js";import{B as m}from"./Box-BwQkrYug.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-Buqurtd8.js";import"./Button-B5coKyWo.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-PlbL7nuw.js";import"./extendSxProp-OZdELPHD.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-o3LjpFbz.js";import"./TransitionGroupContext-HXr4o3EP.js";const U={title:"Buttons/Link",component:i,tags:["autodocs"],parameters:{...c("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6068-28559&m=dev"),docs:{description:{component:`
A button-styled link built on MUI's \`<Button>\` component, styled to match our design system guidelines for link interactions.

This component is used when a navigation or secondary action should *look* like a link but retain button semantics and behavior. 
It always renders with \`variant="text"\`, \`color="primary"\`, and ripple disabled.

**Features:**
- Subtle underline animation on hover
- Fully keyboard-accessible
- Strictly typed to avoid variant/color overrides
`}}}},e={render:()=>o(m,{children:o(i,{onClick:()=>alert("Link clicked"),children:"Learn more"})})},r={render:()=>o(m,{children:o(i,{disabled:!0,children:"Unavailable link"})})};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Box>
      <Link onClick={() => alert("Link clicked")}>Learn more</Link>
    </Box>
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Box>
      <Link disabled>Unavailable link</Link>
    </Box>
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const S=["Default","Disabled"];export{e as Default,r as Disabled,S as __namedExportsOrder,U as default};
