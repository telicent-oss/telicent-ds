import{a as o}from"./iframe-Bm3hXUOR.js";import{L as i}from"./LinkButton-BXoA6ppQ.js";import{f as m}from"./figmaDesign-CKKXRVNK.js";import{B as c}from"./Box-CexaEQmQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CBrDpZ-p.js";import"./clsx-B-dksMZM.js";import"./styled-DyULGS0b.js";import"./extendSxProp-BuZx_F0_.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B90bUUd9.js";import"./TransitionGroupContext-TroGB69i.js";const D={title:"Buttons/Link",component:i,tags:["autodocs"],parameters:{...m("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6068-28559&m=dev"),docs:{description:{component:`
A button-styled link built on MUI's \`<Button>\` component, styled to match our design system guidelines for link interactions.

This component is used when a navigation or secondary action should *look* like a link but retain button semantics and behavior. 
It always renders with \`variant="text"\`, \`color="primary"\`, and ripple disabled.

**Features:**
- Subtle underline animation on hover
- Fully keyboard-accessible
- Strictly typed to avoid variant/color overrides
`}}}},e={render:()=>o(c,{children:o(i,{onClick:()=>alert("Link clicked"),children:"Learn more"})})},r={render:()=>o(c,{children:o(i,{disabled:!0,children:"Unavailable link"})})},w=["Default","Disabled"];var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Box>
      <Link onClick={() => alert("Link clicked")}>Learn more</Link>
    </Box>
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Box>
      <Link disabled>Unavailable link</Link>
    </Box>
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};export{e as Default,r as Disabled,w as __namedExportsOrder,D as default};
