import{j as c,a as n}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{d as j}from"./Drawer-fSlyXZfG.js";import{B as _}from"./Box-BpjgVFAP.js";import{P as N}from"./Paper-qM_AAhp8.js";import{T as R}from"./Typography-0bha627S.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./createSvgIcon-DsapHZbt.js";import"./defaultTheme-DzLjz-dB.js";import"./SvgIcon-CUsqqB9A.js";import"./styled-Bv4hMCY2.js";import"./generateUtilityClasses-UcMdw3-3.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./constants-Bs2sAYxE.js";import"./iframe-CcCDOfsx.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BorXEO18.js";import"./useTheme-Bb3Mws8A.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./UserProfile-5_MUN0Y9.js";import"./Text-BfZocbeP.js";import"./UserIcon-BuuqinF_.js";import"./index-BfyspvgH.js";import"./FlexBox-CfPxXzlV.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./Popover-BtZEiDAe.js";import"./utils-BgVWvv5k.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./IconButton-BOLdoQUj.js";import"./ButtonBase-DQ5wMQUc.js";import"./Menu-x1DlT4eR.js";import"./index-BbVSaS1S.js";import"./AdapterDayjs-DuWp5629.js";import"./useThemeProps-D7jdKLbb.js";import"./colorManipulator-BRx-aaGP.js";import"./useId-CkA8naEk.js";import"./Button-CfsaO-rc.js";import"./Chip-D8IxPV3x.js";import"./TelicentHorizontalSVG-CX-osCX9.js";import"./FlexGrid-DSPhqh6w.js";import"./Container-C_TGCsJE.js";import"./DataSetIcon-BtGpAy3k.js";import"./DateTimePicker-CV9o2ulC.js";import"./Divider-Cjysf9bk.js";import"./UIThemeProvider-CxkzzJSB.js";import"./ThemeProvider-GiwL96Kb.js";import"./Chip-DH2OifDm.js";import"./Divider-Dtsf1hGn.js";import"./TreeView-DbFX33UJ.js";import"./UserProfileContent-DwoWk9c6.js";import"./LinearProgress-Bg-Reu7H.js";import"./Button-D8ZFDHf0.js";import"./SecondaryButton-CPTMGzEe.js";import"./DatePicker-D7xV_onj.js";import"./Card-DPzkVZ34.js";import"./CardActions-ChFzG7jH.js";import"./Popover-D97xcsWK.js";import"./Paper-6XRc2JUc.js";import"./ErrorFallback-Bdi4LnTL.js";import"./ErrorFallbackText-ByFUlXy5.js";import"./ErrorFallbackWrapper-BOm5y31m.js";import"./MapToggleButtonPresentational-C_LHMPTW.js";import"./List-B22gvqhs.js";const tt={title:"Inputs/CopyToClipboard",component:j,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(U=(E=s.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const rt=["Default","NoText","WithSimulatedError","VariantSecondary","ColorInheritVariantText","ColorPrimary","ColorPrimaryVariantText","WithCustomStyle"];export{e as ColorInheritVariantText,i as ColorPrimary,p as ColorPrimaryVariantText,t as Default,r as NoText,a as VariantSecondary,s as WithCustomStyle,o as WithSimulatedError,rt as __namedExportsOrder,tt as default};
