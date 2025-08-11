import{j as g}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{C as f}from"./Drawer-DS8WtU1o.js";import{B as C}from"./Box-BpjgVFAP.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./createSvgIcon-DsapHZbt.js";import"./defaultTheme-DzLjz-dB.js";import"./SvgIcon-CUsqqB9A.js";import"./styled-Bv4hMCY2.js";import"./generateUtilityClasses-UcMdw3-3.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./constants-16LmD8ze.js";import"./iframe-CeEebSGu.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BorXEO18.js";import"./useTheme-Bb3Mws8A.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./UserProfile-5_MUN0Y9.js";import"./Text-BfZocbeP.js";import"./Typography-0bha627S.js";import"./UserIcon-BuuqinF_.js";import"./index-BfyspvgH.js";import"./FlexBox-CfPxXzlV.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./Popover-BtZEiDAe.js";import"./utils-BgVWvv5k.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-qM_AAhp8.js";import"./IconButton-BOLdoQUj.js";import"./ButtonBase-DQ5wMQUc.js";import"./Menu-x1DlT4eR.js";import"./index-BbVSaS1S.js";import"./AdapterDayjs-DuWp5629.js";import"./useThemeProps-D7jdKLbb.js";import"./colorManipulator-BRx-aaGP.js";import"./useId-CkA8naEk.js";import"./Button-CfsaO-rc.js";import"./Chip-D8IxPV3x.js";import"./TelicentHorizontalSVG-CX-osCX9.js";import"./FlexGrid-DSPhqh6w.js";import"./Container-C_TGCsJE.js";import"./DataSetIcon-BtGpAy3k.js";import"./DateTimePicker-CV9o2ulC.js";import"./Divider-Cjysf9bk.js";import"./UIThemeProvider-eITWVdCb.js";import"./ThemeProvider-GiwL96Kb.js";import"./IconButton-BSofoRAS.js";import"./Chip-DH2OifDm.js";import"./Divider-Dtsf1hGn.js";import"./TreeView-DbFX33UJ.js";import"./UserProfileContent-DwoWk9c6.js";import"./LinearProgress-Bg-Reu7H.js";import"./DatePicker-D7xV_onj.js";import"./Button-JMfe4tu6.js";import"./LinkButton-DTS_r2S1.js";import"./Card-DPzkVZ34.js";import"./CardActions-ChFzG7jH.js";import"./Popover-D97xcsWK.js";import"./Paper-6XRc2JUc.js";import"./ErrorFallback-Bdi4LnTL.js";import"./ErrorFallbackText-ByFUlXy5.js";import"./ErrorFallbackWrapper-BOm5y31m.js";import"./MapToggleButtonPresentational-CQ7ND9Lk.js";import"./List-B22gvqhs.js";const Ao={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
A versatile 'Copy to Clipboard' button component built on top of Mui's \`Button\` and FontAwesome icons. It allows users to copy text to their clipboard and provides immediate visual feedback by changing the icon from a 'copy' icon to a 'check' icon.

By default, the icon inherits the app's primary color. However, this color can easily be customized by passing a different color through the \`sx\` prop.

## The component supports the following use cases:
- **Controlled mode:** Use the \`text\` props to define the content that will be copied to the clipboard.
- **Icon Feedback:** The button dynamically changes the icon from a copy icon to a checkmark once the content is successfully copied to the clipboard.
- **Failure State:** This include a failure state that can be done by passing \`testFailure\` as a prop. 
- **Custom Success Message:** use \`successMsg\` prop to define a custom messsage that will be displayed on the tooltip on success.

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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:b=>g(C,{sx:{margin:"auto"},children:b()})},o={args:{text:"this is a default example string",title:"Copy to clipboard",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooaray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successfull just pass a string to  `successMsg`"}}}},r={args:{text:"Text for clipboard via WithCustomStyle",title:"Copy to clipboard with white color",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},e={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: "Hooray!",
    successMsg: "Hooaray!!"
  },
  parameters: {
    docs: {
      description: {
        story: "You can customise the tooltip to display a different message when the copy to clipboard is successfull just pass a string to  \`successMsg\`"
      }
    }
  }
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,l,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: "Text for clipboard via WithCustomStyle",
    title: "Copy to clipboard with white color",
    ariaLabel: "Copy to clipboard button with white color",
    sx: {
      color: "fuchsia",
      backgroundColor: "darkslategrey"
    }
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,h,y;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    testFailure: true,
    text: "This will fail"
  },
  parameters: {
    docs: {
      description: {
        story: "You can see below how the tooltip would render in case of an error."
      }
    }
  }
}`,...(y=(h=e.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const Do=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,Do as __namedExportsOrder,Ao as default};
