import{j as y}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{C as f}from"./AuthModal-INY1J062.js";import{B as x}from"./Box-BmQrrWB5.js";import"./jsx-runtime-CB_V9I5Y.js";import"./index-CTjT7uj6.js";import"./Text-DWuU5NOi.js";import"./Typography-jxiy5gAQ.js";import"./identifier-ubkqThfq.js";import"./styled-CeNrfZN8.js";import"./generateUtilityClasses-rmcueE__.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-DKuHcIkI.js";import"./iframe-s2GvGjGy.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./useThemeProps-ErBa_dZ_.js";import"./useThemeProps-BQrQzAVn.js";import"./ButtonBase-BS_9IN6p.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-CejG0Q0C.js";import"./Select-BMyBEyBj.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-BAZTFLL2.js";import"./utils-EYY7_thZ.js";import"./Paper-CX7OniPZ.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DI4ErmOj.js";import"./AdapterDayjs-B1noBw_N.js";import"./TextField-Dd-W-Nbe.js";import"./createStyled-MF3orRa4.js";import"./IconButton-B40nmrRW.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-BA_D-pD1.js";import"./Button-D5FpgyXB.js";import"./Chip-CpBBya1C.js";import"./UserIcon-C_uMuWNI.js";import"./Container-THkL10Ux.js";import"./styled-D52li5_j.js";import"./Stack-BXkbJ8_X.js";import"./MenuItem-C70p-rzV.js";import"./dividerClasses-BqGj-Wnd.js";import"./UIThemeProvider-Y3o75pQS.js";import"./ThemeProvider-BnKwSnOu.js";import"./Chip-BmTc0fFj.js";import"./Card-AawNb1ZT.js";import"./Divider-OL1fE4_m.js";import"./TreeView-DoStf2cx.js";import"./LinearProgress-D_UfVP6h.js";import"./Spinner-BatD7ajz.js";import"./Dialog-BCXWohbq.js";import"./MapToggleButtonPresentational-C-P2Xz9W.js";import"./Remove-VTXboCXe.js";import"./TextField-xy8B6PxM.js";import"./Select-Ovpwa_Do.js";import"./Switch-CFTT8Jub.js";import"./DatePicker-x8e043oY.js";import"./DateTimePicker-B10t8APv.js";import"./LinkButton-BaH7xTw3.js";import"./Paper-CPoUKSxJ.js";import"./ErrorFallback-ysz_C47v.js";import"./ErrorFallbackText-CR-qweg6.js";import"./ErrorFallbackWrapper-D_1cbupt.js";import"./Brand-npN9D4Uu.js";import"./Edit-DJ67vPjx.js";const Do={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Io=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,Io as __namedExportsOrder,Do as default};
