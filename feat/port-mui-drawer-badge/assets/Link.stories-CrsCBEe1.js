import{a as o}from"./iframe-H00w80Or.js";import{L as i}from"./LinkButton-DU5juLDL.js";import{f as m}from"./figmaDesign-CKKXRVNK.js";import{B as c}from"./Box-PGTe_iKL.js";import"./preload-helper-C1FmrZbK.js";import"./Button-C_DxOEgn.js";import"./clsx-B-dksMZM.js";import"./styled-0iMzvdEp.js";import"./extendSxProp-DjNpUFg0.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-q86Xzq01.js";import"./TransitionGroupContext-BzdPLesw.js";const D={title:"Buttons/Link",component:i,tags:["autodocs"],parameters:{...m("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6068-28559&m=dev"),docs:{description:{component:`
A button-styled link built on MUI's \`<Button>\` component, styled to match our design system guidelines for link interactions.

This component is used when a navigation or secondary action should *look* like a link but retain button semantics and behavior. 
It always renders with \`variant="text"\`, \`color="primary"\`, and ripple disabled.

**Features:**
- Subtle underline animation on hover
- Fully keyboard-accessible
- Strictly typed to avoid variant/color overrides
`}}}},e={render:()=>o(c,{children:o(i,{onClick:()=>alert("Link clicked"),children:"Learn more"})})},r={render:()=>o(c,{children:o(i,{disabled:!0,children:"Unavailable link"})})};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Box>
      <Link onClick={() => alert("Link clicked")}>Learn more</Link>
    </Box>
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Box>
      <Link disabled>Unavailable link</Link>
    </Box>
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const w=["Default","Disabled"];export{e as Default,r as Disabled,w as __namedExportsOrder,D as default};
