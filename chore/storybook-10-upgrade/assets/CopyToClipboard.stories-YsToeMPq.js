import{j as y}from"./iframe-B_xAjz_a.js";import{C as f}from"./DropdownButton-BnaLLxdm.js";import{B as x}from"./Box-HNQBJ69w.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-sXWYTtMY.js";import"./createSvgIcon-DNxDKV7W.js";import"./styled-DWxCgiIq.js";import"./generateUtilityClasses-CWLcYD5H.js";import"./useTheme-DXfWrHWZ.js";import"./Container-DZVvhBo5.js";import"./styled-Dj6VM8rS.js";import"./createStyled-YK0OyouD.js";import"./useThemeProps-B45YfUAa.js";import"./Stack-BUP2Ksyi.js";import"./Typography-ByJUc9gg.js";import"./Paper-BTmXDdaE.js";import"./useThemeProps-CIWHHPPz.js";import"./Text-Dxo92Y_P.js";import"./AdapterDayjs-q2OtrlCq.js";import"./Modal-BpjRytJz.js";import"./utils-CwDFzrhS.js";import"./TransitionGroupContext-CpQCZJFv.js";import"./index-CI4uBojl.js";import"./Select-CuWSjzQW.js";import"./useFormControl-DsU6bxZg.js";import"./TextField-CXoQdh2Y.js";import"./IconButton-BCtq5lM_.js";import"./ButtonBase-rGiwpEnq.js";import"./DialogContent-5gmVHz0w.js";import"./Button-BK_6tBa6.js";import"./Chip-CnGyAVsl.js";import"./MenuItem-DqM4z-OC.js";import"./dividerClasses-LlugbWYd.js";import"./Chip-CbHUK2Oi.js";import"./Divider-D_2gC9Rv.js";import"./Divider-CmQ1Xcb5.js";import"./TreeView-027Y335s.js";import"./LinearProgress-BGR-shXY.js";import"./Spinner-C7CK19Se.js";import"./Dialog-kf4LGKqy.js";import"./MapToggleButtonPresentational-CEsfsZc1.js";import"./Remove-C35S1kL4.js";import"./TextField-DaNwDKAN.js";import"./Select-BehY_x2i.js";import"./Switch-Bsyk4KfN.js";import"./DatePicker-Vblbv12o.js";import"./DateTimePicker-DASuNmCH.js";import"./LinkButton-BGw7Liqm.js";import"./Paper-B7oVFYM9.js";import"./ErrorFallback-CYAgcxnT.js";import"./ErrorFallbackText-DvI-57tq.js";import"./ErrorFallbackWrapper-Bz-JcYeG.js";import"./Brand-DBW4B7CT.js";import"./constants-1TT1xdyQ.js";import"./Edit-DYLHrREl.js";const So={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooaray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successfull just pass a string to  `successMsg`"}}}},e={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},r={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
