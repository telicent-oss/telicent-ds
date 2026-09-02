import{j as y}from"./iframe-pRHhOQg2.js";import{C as f}from"./DropdownButton-BhUulX2F.js";import{B as x}from"./Box-DtDcNTqo.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B_ujPWv_.js";import"./SvgIcon-BETWM0sA.js";import"./generateUtilityClass-BCADfncv.js";import"./styled-BT5czdOb.js";import"./generateUtilityClasses-FW_hjQkZ.js";import"./useTheme-Pj73We2K.js";import"./Box-BCY9iEzw.js";import"./Container-B6BSNzBA.js";import"./styled-CPqvLnSt.js";import"./createStyled-CUHy6POj.js";import"./useThemeProps-iiZ4il65.js";import"./FlexBox-CVJnzuz0.js";import"./Stack-DQDETrC8.js";import"./Typography-D0LmHXWH.js";import"./Paper-jmBz9zYy.js";import"./useThemeProps-CGsmMNPE.js";import"./Text-CyftVFXd.js";import"./AdapterDayjs-v8geY8Yz.js";import"./Modal-DBc2l9M6.js";import"./utils-BcK75nLH.js";import"./TransitionGroupContext-BUjCANtX.js";import"./index-BZTrQaHy.js";import"./resolveComponentProps-Bmj0YTdO.js";import"./Popover-D8iN4GZw.js";import"./TextField-DHBYzqm_.js";import"./useFormControl-InOv9m2U.js";import"./createSvgIcon-BDR8vdZT.js";import"./IconButton-CvVfQwzZ.js";import"./ButtonBase-V2s46bUx.js";import"./DialogContent-CTQp3qrS.js";import"./Button-CPtCkVQU.js";import"./Chip-DDvACIff.js";import"./DateTimePicker-Cn_CbG0g.js";import"./Divider-D6agCD3x.js";import"./AppInfoRow-Bh0geM1J.js";import"./Chip-gnzR_yJR.js";import"./Divider-CVsgqjKK.js";import"./TreeView-Kik_R-ES.js";import"./Alert-DecaHlaz.js";import"./LinearProgress-C4VBChXn.js";import"./Spinner-C0vudGLr.js";import"./Dialog-Bcf-NoY1.js";import"./MapToggleButtonPresentational-fmHFE_FL.js";import"./Remove-DUvkPlWX.js";import"./LinkButton-x6CuZkTL.js";import"./TextField-CBpcQn2c.js";import"./Switch-DhAT4IM_.js";import"./DatePicker-D9GXXepP.js";import"./Paper-jV6pjJ0C.js";import"./ErrorFallback-CaX2CL1g.js";import"./ErrorFallbackText-C6J48uKa.js";import"./ErrorFallbackWrapper-y78ya1pb.js";import"./Brand-DOlsYGQL.js";import"./constants-C264WvBp.js";import"./Edit-wsLz-jz3.js";const Mo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
