import{j as y}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{C as f}from"./DropdownButton-DsEOrLxW.js";import{B as x}from"./Box-C8UM6PF1.js";import"./jsx-runtime-CB_V9I5Y.js";import"./index-CTjT7uj6.js";import"./UserIcon-Bv1k9Gkr.js";import"./createSvgIcon-zAUpwBvY.js";import"./defaultTheme-Cd36Xqui.js";import"./styled-Co95aX7f.js";import"./generateUtilityClasses-LAuhwvbW.js";import"./DefaultPropsProvider-BJrUAfpV.js";import"./useTheme-CXTcqjFy.js";import"./useTheme-N1zbQagn.js";import"./Container-DAUnO2s0.js";import"./styled-BFCnUgfa.js";import"./createStyled-DALmTr0F.js";import"./useThemeProps-DY6NRhpk.js";import"./Stack-D6Q4v-dm.js";import"./Typography-BTuSrW-Q.js";import"./Paper-C84P62Dn.js";import"./useThemeProps-mGX5p-it.js";import"./Text-DNDtww-5.js";import"./AdapterDayjs-Dcv1_Ch4.js";import"./index-gbGX4Sgq.js";import"./Modal-DMwGBxWQ.js";import"./utils-CZKs3qUl.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-DEWJqUJ8.js";import"./Select-BAcvQhzR.js";import"./useFormControl-DPKvkoC5.js";import"./useId-DMVUMfb1.js";import"./GlobalStyles-Bf3t3VSv.js";import"./GlobalStyles-Cv-yeoYN.js";import"./TextField-DC0Fsl0w.js";import"./IconButton-DNCXIZ2n.js";import"./ButtonBase-D3m3WlyT.js";import"./colorManipulator-_4WjNWDc.js";import"./DialogContent-CV9k0A3j.js";import"./Button-BnBRdIVR.js";import"./Chip-CxBAkcex.js";import"./MenuItem-BQe4uye3.js";import"./dividerClasses-l5WzAbKi.js";import"./UIThemeProvider-C1WxYNpB.js";import"./types-CMP91hxZ.js";import"./ThemeProvider-CVHsKeZ1.js";import"./Chip-CKDVrQLB.js";import"./Divider-oA2NDxbS.js";import"./Divider-B8c9urEZ.js";import"./TreeView-BEpIiRgO.js";import"./LinearProgress-DSGDjXQj.js";import"./Spinner-DhZwmjRq.js";import"./Dialog-BPI9Yj3K.js";import"./MapToggleButtonPresentational-D5YOt978.js";import"./Remove-BkPep7P_.js";import"./TextField-tnKbSM3S.js";import"./Select-3mUXH0tK.js";import"./Switch-BibpNf67.js";import"./DatePicker--dK9cNP8.js";import"./DateTimePicker-cy6yPI5j.js";import"./LinkButton-CVKymRM0.js";import"./Paper-24NI2w_o.js";import"./ErrorFallback-05kZtLFS.js";import"./ErrorFallbackText-BExZ28uU.js";import"./ErrorFallbackWrapper-76NLnkLs.js";import"./Brand-Kq-3gU1h.js";import"./constants-BOmE8RzX.js";import"./iframe-LMhFgRVo.js";import"../sb-preview/runtime.js";import"./Edit-GCVsx1H-.js";const Do={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
