import{j as y}from"./iframe-DBgioWeW.js";import{C as f}from"./DropdownButton-BabsKrW9.js";import{B as x}from"./Box-BcBTuFed.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BZNRAdYq.js";import"./SvgIcon-TllpJj-5.js";import"./generateUtilityClass-CLTaAhKf.js";import"./styled-BFNF5QCQ.js";import"./generateUtilityClasses-Biy-3Iuq.js";import"./useTheme-C1yOJVtG.js";import"./Box-BMRHnFd3.js";import"./Container-CCihsyAb.js";import"./styled-Ciq6By-E.js";import"./createStyled-1Z_SCf_6.js";import"./useThemeProps-DD_wnCUH.js";import"./FlexBox-WvRGoRmd.js";import"./Stack-49KLdOgs.js";import"./Typography-0sG5OmeS.js";import"./Paper-ReDLUWfy.js";import"./useThemeProps-CMLYgd7W.js";import"./Text-BgUfptMq.js";import"./AdapterDayjs-a3XxtfRM.js";import"./Modal-CpjZt_2L.js";import"./utils-BFDACMv_.js";import"./TransitionGroupContext-B_89mR0Z.js";import"./index-CZMS6Q7o.js";import"./resolveComponentProps-BcqjDzNz.js";import"./Popover-MaL5oiYC.js";import"./TextField-DG8mdDgF.js";import"./useFormControl-B5a28znY.js";import"./createSvgIcon-pQhiwPMe.js";import"./IconButton-CV8_PS-T.js";import"./ButtonBase-CdfKuLiZ.js";import"./DialogContent-hHcY6KWM.js";import"./Button-DAGEP08y.js";import"./Chip-CaiYGmRd.js";import"./DateTimePicker-C2SjaMhl.js";import"./Divider-BtQ4DxGj.js";import"./AppInfoRow-Dzw9MtOg.js";import"./Chip-CFF8wAV8.js";import"./Divider-mG2cL4cg.js";import"./TreeView-Bk0Y2Vpn.js";import"./Alert-Dbl8MlCd.js";import"./LinearProgress-CgkIvIK9.js";import"./Spinner-CWMexREX.js";import"./Dialog-S6JnYG3y.js";import"./MapToggleButtonPresentational-CWWsP1Bq.js";import"./Remove-BC-lmLjV.js";import"./LinkButton-B5-1f7yZ.js";import"./TextField-Bgagizd7.js";import"./Switch-PbDUnJEB.js";import"./DatePicker-BF5iZhcx.js";import"./Paper-7C0C2edj.js";import"./ErrorFallback-CKRDg2e3.js";import"./ErrorFallbackText-DWxCPdpF.js";import"./ErrorFallbackWrapper-DYW1qU0r.js";import"./Brand-Bx9Nu_uI.js";import"./constants--Gti5moB.js";import"./Edit-BOpYoOgP.js";const Mo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
