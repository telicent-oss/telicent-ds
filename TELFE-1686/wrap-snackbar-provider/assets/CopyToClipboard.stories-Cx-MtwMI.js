import{j as y}from"./iframe-BXY8qhtT.js";import{C as f}from"./DropdownButton-CMCln0pB.js";import{B as x}from"./Box-DmdH8_CM.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Bz3heM6b.js";import"./SvgIcon-Ny0aRQHI.js";import"./generateUtilityClass-wYVai49J.js";import"./styled-H7Fdw8PF.js";import"./generateUtilityClasses-BA7K2SXw.js";import"./useTheme-jpEbcY17.js";import"./Box-BKFfSYU7.js";import"./Container-u3BuaPcs.js";import"./styled-bWS-fPzl.js";import"./createStyled-C5U3_gNR.js";import"./useThemeProps-lfivHL7Q.js";import"./FlexBox-H-sCRMiR.js";import"./Stack-mn3XG4cs.js";import"./Typography-D_A1aX7c.js";import"./Paper-Dxa9EUvO.js";import"./useThemeProps-DH9W_0R3.js";import"./Text-BYojZcvc.js";import"./AdapterDayjs-5XgIQcgH.js";import"./Modal-ipxBrzNN.js";import"./utils-CE69r2C4.js";import"./TransitionGroupContext-CryLiEHc.js";import"./index-WLUfl6fz.js";import"./resolveComponentProps-mqZrAnvV.js";import"./Popover-BVxxj8q6.js";import"./TextField-BpDVwlCN.js";import"./useFormControl-E--nQZxq.js";import"./createSvgIcon-DjsA-uZ8.js";import"./IconButton-B-B6ziHV.js";import"./ButtonBase-BadIhpsX.js";import"./DialogContent-CyDUkUFC.js";import"./Button-BGy2rwjE.js";import"./Chip-B3_yOCCL.js";import"./DateTimePicker-B7sYKJNb.js";import"./Divider-B2-WeumM.js";import"./AppInfoRow-ZAGiEJOr.js";import"./Chip-C5kaT8Lc.js";import"./Divider-BZWBYD5d.js";import"./TreeView-lJGuyWyx.js";import"./Alert-CbPLOKCy.js";import"./LinearProgress-BRbnBQfK.js";import"./Spinner-DiRwWvdE.js";import"./Dialog-Djinkl1M.js";import"./MapToggleButtonPresentational-BPCec7gk.js";import"./Remove-FN9daPXK.js";import"./LinkButton-CCn1fa7f.js";import"./TextField-BiPbqIQb.js";import"./Switch-CbYpuBJM.js";import"./DatePicker-B42bozBr.js";import"./Paper-BJ8D2bs1.js";import"./ErrorFallback-CXf1lrVR.js";import"./ErrorFallbackText-BbxsiRdP.js";import"./ErrorFallbackWrapper-F_6HkMfr.js";import"./Brand-BHfEveUR.js";import"./constants-BgFE9pGk.js";import"./Edit-0n8mwjN-.js";const Mo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
