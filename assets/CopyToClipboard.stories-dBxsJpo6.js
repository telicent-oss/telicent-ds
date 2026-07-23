import{j as y}from"./iframe-D9lU07Zf.js";import{C as f}from"./DropdownButton-DzsOMP1u.js";import{B as x}from"./Box-CSybQHSa.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-r0zPa3RZ.js";import"./createSvgIcon-DFI5qBHU.js";import"./generateUtilityClass-D7q2yxGy.js";import"./styled-DoKDlkZ_.js";import"./generateUtilityClasses-DlijklOR.js";import"./useTheme-SybXv74r.js";import"./Box-BJrD4UE_.js";import"./Container-BcSzuyYl.js";import"./styled-DiYYYjn2.js";import"./createStyled-BPBpdXBm.js";import"./useThemeProps-BAvRSqZ0.js";import"./Stack-BnA3evNe.js";import"./Typography-C6RHNrrz.js";import"./Paper-Cej6lYK6.js";import"./useThemeProps-BVMIZTQV.js";import"./Text-HEEd4Tr4.js";import"./AdapterDayjs-BjHxbXQG.js";import"./Modal-8YIgZsH9.js";import"./utils-CoFbKNqr.js";import"./TransitionGroupContext-jFit0_oH.js";import"./index-BBdfoeT5.js";import"./resolveComponentProps-E2VM1uz1.js";import"./TextField-CJ0-8TEN.js";import"./useFormControl-TA3T3Av9.js";import"./IconButton-tmuZo6L6.js";import"./ButtonBase-DSNICrLd.js";import"./DialogContent-BS32uX7_.js";import"./Button-DhyX7BiZ.js";import"./Chip-DoVi98mw.js";import"./DateTimePicker-CMScypHs.js";import"./Divider-AwwvZxp0.js";import"./Chip-luU8AZ1L.js";import"./Divider-BrsXIlBD.js";import"./TreeView-CJsNe1p9.js";import"./Close-C_etf32Q.js";import"./LinearProgress-Bxn_kvK2.js";import"./Spinner-DfGKdH87.js";import"./Dialog-Cw8kg19x.js";import"./MapToggleButtonPresentational-BbUeRSZp.js";import"./Remove-Be9W_CKm.js";import"./TextField-DFYGxZvh.js";import"./Switch-CoEGI3zX.js";import"./DatePicker-KE2OE2TB.js";import"./LinkButton-XbvtPO8L.js";import"./Paper-BwpRoinM.js";import"./ErrorFallback-BXGLlVLh.js";import"./ErrorFallbackText-C1gmEt6Z.js";import"./ErrorFallbackWrapper-DnVofVwB.js";import"./Brand-CKNi3Y53.js";import"./constants-mTaQgHmf.js";import"./Edit-CFpkLirJ.js";const So={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
