import{j as g}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{C as f}from"./Drawer-CiWu6lyv.js";import{B as C}from"./Box-DjrL3vcN.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./createSvgIcon-sttI1-XB.js";import"./defaultTheme-Cydao2Tu.js";import"./SvgIcon-CjmMrQNX.js";import"./styled-D6pw60Bp.js";import"./generateUtilityClasses-YWFBP9tm.js";import"./DefaultPropsProvider-BHKfC5ky.js";import"./constants-B3nwwHMU.js";import"./iframe-D08kZCNR.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-BzuXlqsY.js";import"./GlobalStyles-ByhVr9LE.js";import"./useTheme-DxGOHaWi.js";import"./useTheme-BYNjlLc8.js";import"./UserProfile-DrB3dvyA.js";import"./Text-BNIHq94e.js";import"./Typography-BuiWgCNN.js";import"./UserIcon-q_P09GsN.js";import"./index-BfyspvgH.js";import"./FlexBox-D6GhYe9U.js";import"./styled-HsAy3ZEw.js";import"./useThemeProps-CBEhXQxo.js";import"./Popover-BFLlbOqP.js";import"./utils-xzVdhYNG.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-DB4yr4EO.js";import"./IconButton-DPejjeAT.js";import"./ButtonBase-BUg8pwcP.js";import"./index-1lBnjf3z.js";import"./useId-CkA8naEk.js";import"./TelicentHorizontalSVG-DuwDm98x.js";import"./FlexGrid-C2jJkX6w.js";import"./Container-BErEnX_q.js";import"./DataSetIcon-BBABdu0b.js";import"./UIThemeProvider-BDvoFzpa.js";import"./colorManipulator-YQmhVZwB.js";import"./ThemeProvider-CN5YWCuf.js";import"./IconButton-B954TVTE.js";import"./Chip-Bx_Lu-NR.js";import"./Divider-BE0LSpy8.js";import"./TreeView-DpHiciEK.js";import"./UserProfileContent-DdYm007D.js";import"./LinearProgress-yGZEzgsa.js";import"./Button-C1gE5xKs.js";import"./Button-a6vHgwhc.js";import"./LinkButton-B-URIbsY.js";import"./Card-CUWN1MwO.js";import"./CardActions-wDSfmjtr.js";import"./Popover-DhgGZshX.js";import"./Paper-CYQoaktD.js";import"./ErrorFallback-VtVYyFB3.js";import"./ErrorFallbackText-e1_2MPZH.js";import"./ErrorFallbackWrapper-B2v_McFA.js";import"./MapToggleButtonPresentational-DyF2Ew1L.js";import"./List-CmdUcGkz.js";const Fo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:b=>g(C,{sx:{margin:"auto"},children:b()})},o={args:{text:"this is a default example string",title:"Copy to clipboard",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooaray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successfull just pass a string to  `successMsg`"}}}},e={args:{text:"Text for clipboard via WithCustomStyle",title:"Copy to clipboard with white color",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},r={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,l,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: "Text for clipboard via WithCustomStyle",
    title: "Copy to clipboard with white color",
    ariaLabel: "Copy to clipboard button with white color",
    sx: {
      color: "fuchsia",
      backgroundColor: "darkslategrey"
    }
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,h,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const Ho=["Default","CustomSuccessMessage","CustomStyle","Error"];export{e as CustomStyle,t as CustomSuccessMessage,o as Default,r as Error,Ho as __namedExportsOrder,Fo as default};
