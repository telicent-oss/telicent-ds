import{j as y}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{C as f}from"./Drawer-CRuusAKu.js";import{B as x}from"./Box-Dhn_9KCB.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./constants-DbmtQiXe.js";import"./iframe-CLOAFG66.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BorXEO18.js";import"./defaultTheme-DzLjz-dB.js";import"./useTheme-Bb3Mws8A.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./UserProfile-B-204ua-.js";import"./Text-BVIdl1Jw.js";import"./Typography-Dhe6o_9I.js";import"./styled-gOU_XONt.js";import"./generateUtilityClasses-Btm8e7dB.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./UserIcon-DpDI8rF2.js";import"./SvgIcon-ByXbI411.js";import"./index-BfyspvgH.js";import"./FlexBox-DVTFmfFO.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./createSvgIcon-MUYTbX0p.js";import"./Popover-ChqH2Att.js";import"./utils-BgVWvv5k.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-BG42kFkz.js";import"./IconButton-CV1Rw-GO.js";import"./ButtonBase-DExEX2yL.js";import"./Menu-z0RjVFYM.js";import"./index-BbVSaS1S.js";import"./TextField-_uwvimc2.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-LX5PD6Iu.js";import"./useThemeProps-D7jdKLbb.js";import"./colorManipulator-BRx-aaGP.js";import"./Button-B3igqjqf.js";import"./Chip-CpI9GRDB.js";import"./TelicentHorizontalSVG-Dyh3ua9T.js";import"./FlexGrid-BoEfBcU9.js";import"./Container-FF4Fdp1b.js";import"./DataSetIcon-BPiH7weE.js";import"./DateTimePicker-DBMjeEsM.js";import"./Divider-rhjpeBHv.js";import"./UIThemeProvider-BS_sxDlI.js";import"./ThemeProvider-GiwL96Kb.js";import"./IconButton-6csnvzSG.js";import"./Chip-tBdBanDh.js";import"./Divider-CByba2Al.js";import"./TreeView-DJkxzt72.js";import"./UserProfileContent-CQNj73V_.js";import"./LinearProgress-BvlhFhje.js";import"./Button-2o7EfnUw.js";import"./LinkButton-udFJw26p.js";import"./TextField-Bjo93FIX.js";import"./DatePicker-D-OuTvCY.js";import"./Card-B74XhqI-.js";import"./CardActions-BsipVerF.js";import"./Popover-CqIy5M7D.js";import"./Paper-BsJ-nzzS.js";import"./ErrorFallback-Db8jP4lY.js";import"./ErrorFallbackText-B2VVr9Qi.js";import"./ErrorFallbackWrapper-CwjhO7ym.js";import"./MapToggleButtonPresentational-DCqTgYa9.js";import"./Remove-M8FIgJpc.js";import"./Edit-DTNJPwPG.js";const _o={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const zo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,zo as __namedExportsOrder,_o as default};
