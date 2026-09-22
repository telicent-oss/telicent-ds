import{j as y}from"./iframe-DOLuw-8z.js";import{C as f}from"./DropdownButton-BR3B1G6x.js";import{B as x}from"./Box-Bwed_2XS.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D-CtbMck.js";import"./SvgIcon-BjWn1_cp.js";import"./generateUtilityClass-D23RcBiy.js";import"./styled-5Shyaefz.js";import"./generateUtilityClasses-ChqHqDQv.js";import"./useTheme-BSZkNvEx.js";import"./Box-BFt0Svhz.js";import"./Container-DA4_3B6s.js";import"./styled-CU1aRKTP.js";import"./createStyled-DWYFW-gl.js";import"./useThemeProps-CShRTLgw.js";import"./FlexBox-dhqGSpWS.js";import"./Stack-D5u4BrRv.js";import"./Typography-Z1XTMoOJ.js";import"./Paper-BriXG56v.js";import"./useThemeProps-CUodZPbj.js";import"./Text-v6BCoAFn.js";import"./AdapterDayjs-C99Dz3b5.js";import"./Modal-D90df1Mz.js";import"./utils-CUrWUUX2.js";import"./TransitionGroupContext-CvOe7o6x.js";import"./index-F34Reg20.js";import"./resolveComponentProps-Da1Gp387.js";import"./Popover-DWnhc3gj.js";import"./TextField-CSSUqK2u.js";import"./useFormControl-DJ_bputt.js";import"./createSvgIcon-Dp3o3x_9.js";import"./IconButton-B7uU5-A6.js";import"./ButtonBase-DQ4h9g4Z.js";import"./DialogContent-MnGvk2PE.js";import"./Button-77T-pKpm.js";import"./Chip-Bo6kFT4m.js";import"./DateTimePicker-4y9zAVnR.js";import"./Divider-BIsEpysU.js";import"./AppInfoRow-Cc31NytU.js";import"./Chip-CbE023TT.js";import"./Divider-DLErqQ6C.js";import"./TreeView-BvSVb2QI.js";import"./Alert-DOAPXxCG.js";import"./LinearProgress-BhUeYgYm.js";import"./Spinner-B2RojS2c.js";import"./Dialog-Bx2dNClF.js";import"./MapToggleButtonPresentational-CkgwP2H7.js";import"./Remove-e2Ul6uKz.js";import"./LinkButton-qsDBDeKr.js";import"./TextField-Z8zl28V9.js";import"./Switch-CdY-5xOk.js";import"./DatePicker-FXWZ1w0I.js";import"./Paper-B6G87zKQ.js";import"./ErrorFallback-bABA0cST.js";import"./ErrorFallbackText-CRXi0n9L.js";import"./ErrorFallbackWrapper-BV65zCgM.js";import"./Brand-fYK7bDws.js";import"./Edit-yjB0ncsI.js";const Lo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Mo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{e as CustomStyle,t as CustomSuccessMessage,o as Default,r as Error,Mo as __namedExportsOrder,Lo as default};
