import{j as y}from"./iframe-COAWb0t1.js";import{C as f}from"./DropdownButton-Vpz5ANha.js";import{B as x}from"./Box-D8Tcr7GZ.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-7ajEmXVT.js";import"./createSvgIcon-DrpJhUIt.js";import"./generateUtilityClass-Cu0h0UK6.js";import"./styled-BwRmoPFQ.js";import"./generateUtilityClasses-C5WQCcWA.js";import"./useTheme-CNaznUgl.js";import"./Box-DCFIHxCT.js";import"./Container-r-acF5nk.js";import"./styled-BUAiwXGA.js";import"./createStyled-C7KAEifV.js";import"./useThemeProps-CqGuhErK.js";import"./Stack-ybP7OB7f.js";import"./Typography-rxz2-vrR.js";import"./Paper-mwKQc_Lr.js";import"./useThemeProps-BdnIs0e2.js";import"./Text-DFy_CB-X.js";import"./AdapterDayjs-Bhl9N9Cw.js";import"./Modal-DdTPb72x.js";import"./utils-DHa3ZdZl.js";import"./TransitionGroupContext-DLKhgV5R.js";import"./index-DvCbfciI.js";import"./resolveComponentProps-BLxc7nk0.js";import"./TextField-BvMOatl_.js";import"./useFormControl-DQ8tyOBm.js";import"./IconButton-CCcPFMgK.js";import"./ButtonBase-Djdar6tU.js";import"./DialogContent-D5gHw-su.js";import"./Button-DdObXY2o.js";import"./Chip-DZQXXGC9.js";import"./DateTimePicker-J4wSZb31.js";import"./Divider-CWXbwJhU.js";import"./Chip-CFRNYI56.js";import"./Divider-D-8UFSs5.js";import"./TreeView-DvKDilPN.js";import"./Close-CSu-E4xw.js";import"./LinearProgress-D6xAADWG.js";import"./Spinner-B1314fCC.js";import"./Dialog-D0Y5W3XX.js";import"./MapToggleButtonPresentational-zYeQBpIS.js";import"./Remove-CtS7gXV9.js";import"./TextField-CTYTdDqu.js";import"./Switch-C1EnJSQy.js";import"./DatePicker-Jx01V1aW.js";import"./LinkButton-B6YMfa2-.js";import"./Paper-Eeqwzp5S.js";import"./ErrorFallback-BY0PXNFd.js";import"./ErrorFallbackText-CR44PIbE.js";import"./ErrorFallbackWrapper-Cf9R1LA3.js";import"./Brand-Bh-wC9I-.js";import"./constants-DwIYQs1H.js";import"./Edit-IxgIwfJY.js";const So={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successful just pass a string to `successMsg`"}}}},e={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},r={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: "Hooray!",
    successMsg: "Hooray!!"
  },
  parameters: {
    docs: {
      description: {
        story: "You can customise the tooltip to display a different message when the copy to clipboard is successful just pass a string to \`successMsg\`"
      }
    }
  }
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,l,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: "Text for clipboard via WithCustomStyle",
    ariaLabel: "Copy to clipboard button with white color",
    sx: {
      color: "fuchsia",
      backgroundColor: "darkslategrey"
    }
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,h,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const ko=["Default","CustomSuccessMessage","CustomStyle","Error"];export{e as CustomStyle,t as CustomSuccessMessage,o as Default,r as Error,ko as __namedExportsOrder,So as default};
