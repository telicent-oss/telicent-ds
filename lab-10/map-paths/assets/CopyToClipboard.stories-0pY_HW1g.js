import{j as y}from"./iframe-B-bQ8-2T.js";import{C as f}from"./DropdownButton-DpvAnkHg.js";import{B as x}from"./Box-Cb51q2aG.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-C9Zr7okE.js";import"./SvgIcon-UN5gLgZI.js";import"./generateUtilityClass-CG5sjlGK.js";import"./styled-DOmm5J5B.js";import"./generateUtilityClasses-CA_BUpCf.js";import"./useTheme-B1KTYiIC.js";import"./Box-DUbUks71.js";import"./Container-BrNvvhUm.js";import"./styled-XA2qTXOU.js";import"./createStyled-F7qmmNU6.js";import"./useThemeProps-BqcDYrbJ.js";import"./FlexBox-BGamYhMG.js";import"./Stack-NkQdXg6W.js";import"./Typography-ichFhS_t.js";import"./Paper-UD-fH5lO.js";import"./useThemeProps-D43hB7uA.js";import"./Text-C2SnKuds.js";import"./AdapterDayjs-Bi2Myd6S.js";import"./Modal-BinRocgF.js";import"./utils-Cwu4GIe3.js";import"./TransitionGroupContext-D6yDpsO9.js";import"./index-CI_ZfTAb.js";import"./resolveComponentProps-DFyBBYGP.js";import"./Popover-7r96UTT2.js";import"./TextField-COG7v3AR.js";import"./useFormControl-C2Wl_Rfv.js";import"./createSvgIcon-yZopMPvq.js";import"./IconButton-CzJgcxFx.js";import"./ButtonBase-jFTlO58q.js";import"./DialogContent-MA-T71Pz.js";import"./Button-CpFdI90F.js";import"./Chip-Bxe4KEdd.js";import"./DateTimePicker-BRht8fYt.js";import"./Divider-OvS7Rpu4.js";import"./AppInfoRow-8RG6mUcJ.js";import"./Chip-d5Jlpmkz.js";import"./Divider-CwRXz9WH.js";import"./TreeView-C7jsPmrW.js";import"./Alert-qseOYOaL.js";import"./LinearProgress-zOhaivJ7.js";import"./Spinner-L5B8MxAA.js";import"./Dialog-CtpvfQA2.js";import"./MapToggleButtonPresentational-B6oRN28T.js";import"./Remove-DO2en3Z5.js";import"./LinkButton-k11oZu-9.js";import"./TextField-Di8tiFVP.js";import"./Switch-xgHe0pBA.js";import"./DatePicker-DKq07de7.js";import"./Paper-Br8iEvDm.js";import"./ErrorFallback-DJBh-Sr1.js";import"./ErrorFallbackText-DRx9AnrW.js";import"./ErrorFallbackWrapper-DH7xG75e.js";import"./Brand-CPR-mKV1.js";import"./constants-CdgyqUfC.js";import"./Edit-B7KGH8V2.js";const Mo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successful just pass a string to `successMsg`"}}}},e={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},r={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const vo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{e as CustomStyle,t as CustomSuccessMessage,o as Default,r as Error,vo as __namedExportsOrder,Mo as default};
