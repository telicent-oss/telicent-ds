import{j as g}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{C as f}from"./AuthModal-CcTf7jpD.js";import{B as C}from"./Box-BF-qgu-5.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./Text-8Kdc4mds.js";import"./Typography-BrwPcXc_.js";import"./identifier-y0bUoTO6.js";import"./styled-0JAKTnfS.js";import"./generateUtilityClasses-Nvsm4CNa.js";import"./DefaultPropsProvider-5cPhPzqh.js";import"./constants-D6JbaO56.js";import"./iframe-DfdgjJFF.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BzMTtAHJ.js";import"./useTheme-DD-YLZ4_.js";import"./GlobalStyles-vabYxzRP.js";import"./GlobalStyles-CHovE7rY.js";import"./UserProfile-B0RVUakH.js";import"./UserIcon-B9flVcwo.js";import"./SvgIcon-CCVYAiJY.js";import"./index-BfyspvgH.js";import"./FlexBox-CPV3qV_w.js";import"./styled-BJZjZNjA.js";import"./createStyled-CQbojMn1.js";import"./useThemeProps-dlg6X6gD.js";import"./createSvgIcon-CHKs_KBR.js";import"./Popover-lQsAd3LZ.js";import"./utils-CMxZCPCo.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-DSYDI967.js";import"./IconButton-CJWQDxju.js";import"./ButtonBase-BPGrtmaq.js";import"./Menu-DOiAulci.js";import"./index-CGpTQFWu.js";import"./TextField-BXJNoCm8.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs--Bc0--O2.js";import"./useThemeProps-Dn9YwK3s.js";import"./colorManipulator-_kX1Zyzf.js";import"./Button-C78fFQkL.js";import"./Chip-Dals-zk3.js";import"./TelicentHorizontalSVG-CQqo1iNz.js";import"./FlexGrid-BXR2iRV0.js";import"./Container-Bt7wgl8Z.js";import"./DataSetIcon-DHhYydZc.js";import"./DateTimePicker-BfS6ExPs.js";import"./Divider-ByP1puSd.js";import"./UIThemeProvider-Yl8oZnWo.js";import"./ThemeProvider-bcdU8uNZ.js";import"./IconButton-B3KtzcW5.js";import"./Chip-DwEDWKOc.js";import"./Divider-D5viUhla.js";import"./TreeView-Cv9rbGZ0.js";import"./UserProfileContent-Be3-9Jzl.js";import"./LinearProgress-DXAYFx38.js";import"./Button-BUdKq2Nf.js";import"./LinkButton-D3-RYoWb.js";import"./TextField-PJfMD1VO.js";import"./DatePicker-CBr8yT-u.js";import"./Card-DEzO0riq.js";import"./CardActions-B8gFKj_f.js";import"./Popover-DMDv2fuJ.js";import"./Paper-DkOGDDl7.js";import"./ErrorFallback-BQDrKlpt.js";import"./ErrorFallbackText-D0ectygn.js";import"./ErrorFallbackWrapper-Drru2TWq.js";import"./MapToggleButtonPresentational-DDiBoo1Q.js";import"./Remove-ABIIxDNk.js";import"./Edit-ClXqq_Xi.js";const _o={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:b=>g(C,{sx:{margin:"auto"},children:b()})},o={args:{text:"this is a default example string",title:"Copy to clipboard",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooaray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successfull just pass a string to  `successMsg`"}}}},r={args:{text:"Text for clipboard via WithCustomStyle",title:"Copy to clipboard with white color",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},e={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var i,s,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(h=e.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const zo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,zo as __namedExportsOrder,_o as default};
