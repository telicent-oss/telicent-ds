import{j as o}from"./iframe-DMZf_z8l.js";import{L as i}from"./LinkButton-DrQBi47P.js";import{f as c}from"./figmaDesign-CKKXRVNK.js";import{B as m}from"./Box-XIzbJh1C.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-R582sJ1x.js";import"./Button-Czj-gC98.js";import"./generateUtilityClass-CywfVb3a.js";import"./styled-BhjXjSTi.js";import"./generateUtilityClasses-E8kj8mkK.js";import"./ButtonBase-CaB-e0eH.js";import"./useTimeout-Dp-kS1kI.js";import"./TransitionGroupContext-DfY19jQi.js";import"./useForkRef-grDcQant.js";import"./useIsFocusVisible-DqWR0OJa.js";import"./useEventCallback-DqnP5vMh.js";const I={title:"Buttons/Link",component:i,tags:["autodocs"],parameters:{...c("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6068-28559&m=dev"),docs:{description:{component:`
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
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const C=["Default","Disabled"];export{e as Default,r as Disabled,C as __namedExportsOrder,I as default};
