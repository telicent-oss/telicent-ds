import{j as y}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{C as f}from"./AuthModal-CyuVWI6U.js";import{B as x}from"./Box-DR7xjwgg.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./Text-DnbGH9ax.js";import"./Typography-DvrCv4HQ.js";import"./identifier-CCo8HfxA.js";import"./styled-DiVYluCu.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./constants-BT2aeqtE.js";import"./iframe-To5kBhqO.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-DC9e96ys.js";import"./useTheme-CEgm5wok.js";import"./GlobalStyles-BK1ltzIn.js";import"./GlobalStyles-DdQ_E3CX.js";import"./UserProfile-CSbbH8i5.js";import"./UserIcon-B0AVfc7u.js";import"./SvgIcon-DDjczThx.js";import"./index-BfyspvgH.js";import"./FlexBox-owEKTX38.js";import"./styled-BEKiHWi7.js";import"./createStyled-9i3u5Rqa.js";import"./useThemeProps-BFLDat3t.js";import"./createSvgIcon-CxivGeKF.js";import"./Popover-B3llNT0S.js";import"./utils-BfhgiYH5.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-B-rBeRIm.js";import"./IconButton-BRyaXHdy.js";import"./ButtonBase-JObl-ewV.js";import"./Menu-BkD04aCn.js";import"./index-CXtVKvFt.js";import"./Select-BIX2DfMX.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-sa9HN2xx.js";import"./useThemeProps-BTBzXMHi.js";import"./TextField-D_aQwkfm.js";import"./colorManipulator-DBPky6cX.js";import"./Button-B8lPRXAj.js";import"./Chip-DqDSBqh3.js";import"./TelicentHorizontalSVG-DP7xLAp3.js";import"./FlexGrid-M25hPc65.js";import"./Container-CFeVW3qn.js";import"./DataSetIcon-CzT3Gt8m.js";import"./MenuItem-CdOttbWs.js";import"./dividerClasses-DixuAXrT.js";import"./UIThemeProvider-Cy_6mza1.js";import"./ThemeProvider-BPzF9hu_.js";import"./IconButton-Dl7Uv_PN.js";import"./Chip-BVaSRp92.js";import"./Divider-CCH3-U8L.js";import"./Divider-DOeen-K3.js";import"./TreeView-0QEJhhhD.js";import"./UserProfileContent-BkWk_Qx8.js";import"./LinearProgress-CRSreEF6.js";import"./Button-BhZeqQDZ.js";import"./LinkButton-CsDENkR4.js";import"./TextField-InohbSRw.js";import"./Select-C1_f-aAJ.js";import"./DatePicker-ga9keWZl.js";import"./DateTimePicker-B55e7A3j.js";import"./Card-BWv60QFk.js";import"./CardActions-CCW8za6b.js";import"./Popover-Bxjayg7j.js";import"./Paper-BBwh5-3y.js";import"./ErrorFallback-fPXNZKjO.js";import"./ErrorFallbackText-BLCYy_1i.js";import"./ErrorFallbackWrapper-CSpgK55r.js";import"./MapToggleButtonPresentational-DiEvv04q.js";import"./Remove-DLpXZYtt.js";import"./Edit-BwFhg13Q.js";const Go={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
  ariaLabel="Copy URL button"
/>
\`\`\`
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooaray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successfull just pass a string to  `successMsg`"}}}},r={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},e={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
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
    ariaLabel: "Copy to clipboard button with white color",
    sx: {
      color: "fuchsia",
      backgroundColor: "darkslategrey"
    }
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,h,b;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Jo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,Jo as __namedExportsOrder,Go as default};
