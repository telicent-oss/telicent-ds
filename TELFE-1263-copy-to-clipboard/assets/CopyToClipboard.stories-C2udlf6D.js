import{j as c,a as n}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{d as j}from"./Drawer-BOMvPE6A.js";import{B as _}from"./Box-DjrL3vcN.js";import{P as N}from"./Paper-DB4yr4EO.js";import{T as R}from"./Typography-BuiWgCNN.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./createSvgIcon-sttI1-XB.js";import"./defaultTheme-Cydao2Tu.js";import"./SvgIcon-CjmMrQNX.js";import"./styled-D6pw60Bp.js";import"./generateUtilityClasses-YWFBP9tm.js";import"./DefaultPropsProvider-BHKfC5ky.js";import"./constants-DbxNDPj1.js";import"./iframe-BPyjUhme.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-BzuXlqsY.js";import"./GlobalStyles-ByhVr9LE.js";import"./useTheme-DxGOHaWi.js";import"./useTheme-BYNjlLc8.js";import"./UserProfile-DrB3dvyA.js";import"./Text-BNIHq94e.js";import"./UserIcon-q_P09GsN.js";import"./index-BfyspvgH.js";import"./FlexBox-D6GhYe9U.js";import"./styled-HsAy3ZEw.js";import"./useThemeProps-CBEhXQxo.js";import"./Popover-BFLlbOqP.js";import"./utils-xzVdhYNG.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./IconButton-DPejjeAT.js";import"./ButtonBase-BUg8pwcP.js";import"./index-1lBnjf3z.js";import"./useId-CkA8naEk.js";import"./TelicentHorizontalSVG-DuwDm98x.js";import"./FlexGrid-C2jJkX6w.js";import"./Container-BErEnX_q.js";import"./DataSetIcon-BBABdu0b.js";import"./UIThemeProvider-cFJ7Wxoq.js";import"./colorManipulator-YQmhVZwB.js";import"./ThemeProvider-CN5YWCuf.js";import"./Chip-Bx_Lu-NR.js";import"./Divider-BE0LSpy8.js";import"./TreeView-DpHiciEK.js";import"./UserProfileContent-DdYm007D.js";import"./LinearProgress-yGZEzgsa.js";import"./Button-Db1NJzza.js";import"./Button-a6vHgwhc.js";import"./SecondaryButton-RKCuUyYG.js";import"./Card-CUWN1MwO.js";import"./CardActions-wDSfmjtr.js";import"./Popover-DhgGZshX.js";import"./Paper-CYQoaktD.js";import"./ErrorFallback-VtVYyFB3.js";import"./ErrorFallbackText-e1_2MPZH.js";import"./ErrorFallbackWrapper-B2v_McFA.js";import"./MapToggleButtonPresentational-BRbZj3_b.js";import"./List-CmdUcGkz.js";const Go={title:"Inputs/CopyToClipboard",component:j,tags:["autodocs"],parameters:{docs:{description:{component:`
A versatile 'Copy to Clipboard' button component built on top of Mui's \`Button\` and FontAwesome icons. It allows users to copy text to their clipboard and provides immediate visual feedback by changing the icon from a 'copy' icon to a 'check' icon.

By default, the icon inherits the app's primary color. However, this color can easily be customized by passing a different color through the \`sx\` prop.

## The component supports the following use cases:
- **Controlled mode:** Use the \`text\` and \`title\` props to define the content that will be copied and the button's tooltip text.
- **Icon Feedback:** The button dynamically changes the icon from a copy icon to a checkmark once the content is successfully copied to the clipboard.
- **Failure State:** This include a failure state that can be done by passing \`testFailure\` as a prop. 
---

### When & How to use it
- **Copying Links or Text:** Use this button in scenarios where users need to copy text or links to their clipboard (e.g., sharing URLs, copying ids).

Example usage:

\`\`\`jsx
<CopyToClipboard 
  text="http://example.com"
  title="Copy URL"
  ariaLabel="Copy URL button"
/>
\`\`\`
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:B=>c(N,{children:c(_,{sx:{padding:1},children:B()})})},t={args:{text:"this is a default example string",title:"Copy to clipboard",ariaLabel:"Copy to clipboard button"}},r={args:{title:"Copy to clipboard",ariaLabel:"Copy to clipboard button"}},o=()=>n("div",{children:[c(j,{text:"This will fail",testFailure:!0}),n(R,{sx:{color:"secondary.contrastText"},children:[c("code",{children:"testFailure"})," flag set to force failure"]})]}),a={args:{text:"Text for clipboard via VariantSecondary",variant:"secondary",title:"Copy to clipboard",ariaLabel:"Copy to clipboard button"}},e={args:{text:"Text for clipboard via ColorInheritVariantText",color:"inherit",variant:"text",title:"Copy to clipboard",ariaLabel:"Copy to clipboard button"}},i={args:{text:"Text for clipboard via ColorPrimary",color:"primary",title:"Copy to clipboard",ariaLabel:"Copy to clipboard button"}},p={args:{text:"Text for clipboard via ColorPrimaryVariantText",color:"primary",variant:"text",title:"Copy to clipboard",ariaLabel:"Copy to clipboard button"}},s={args:{text:"Text for clipboard via WithCustomStyle",title:"Copy to clipboard with white color",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}};o.__docgenInfo={description:"",methods:[],displayName:"WithSimulatedError"};var l,m,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var b,u,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var h,x,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div>
  <CopyToClipboard text="This will fail" testFailure />
  <Typography sx={{
    color: "secondary.contrastText"
  }}><code>testFailure</code> flag set to force failure</Typography>
  </div>`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var g,f,T;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: "Text for clipboard via VariantSecondary",
    variant: "secondary",
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(T=(f=a.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var v,L,S;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: "Text for clipboard via ColorInheritVariantText",
    color: "inherit",
    variant: "text",
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(S=(L=e.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var w,V,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: "Text for clipboard via ColorPrimary",
    color: "primary",
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(k=(V=i.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var P,F,I;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: "Text for clipboard via ColorPrimaryVariantText",
    color: "primary",
    variant: "text",
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(I=(F=p.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var W,E,U;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    text: "Text for clipboard via WithCustomStyle",
    title: "Copy to clipboard with white color",
    ariaLabel: "Copy to clipboard button with white color",
    sx: {
      color: "fuchsia",
      backgroundColor: 'darkslategrey'
    }
  }
}`,...(U=(E=s.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const Jo=["Default","NoText","WithSimulatedError","VariantSecondary","ColorInheritVariantText","ColorPrimary","ColorPrimaryVariantText","WithCustomStyle"];export{e as ColorInheritVariantText,i as ColorPrimary,p as ColorPrimaryVariantText,t as Default,r as NoText,a as VariantSecondary,s as WithCustomStyle,o as WithSimulatedError,Jo as __namedExportsOrder,Go as default};
