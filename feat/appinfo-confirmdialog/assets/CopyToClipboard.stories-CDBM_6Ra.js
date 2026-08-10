import{j as y}from"./iframe-BMuUneZj.js";import{C as f}from"./DropdownButton-GhplHAZP.js";import{B as x}from"./Box-CEEFXZo5.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CQYMBk4-.js";import"./SvgIcon-RPSsRH1z.js";import"./generateUtilityClass-B9h8PBia.js";import"./styled-CVhYyncn.js";import"./generateUtilityClasses-DikdMsJY.js";import"./useTheme-DRDJjHMR.js";import"./Box-BJWVeEYX.js";import"./Container-DlbpK-82.js";import"./styled-BNu8QFwr.js";import"./createStyled-Cb8Mr6dv.js";import"./useThemeProps-BNBknqIb.js";import"./FlexBox-Iozwjete.js";import"./Stack-TiSKoIHA.js";import"./Typography-w_4K0ja8.js";import"./Paper-E211ua9O.js";import"./useThemeProps-jBmUE9A9.js";import"./Text-B5-p14Rw.js";import"./AdapterDayjs-C8iCvla8.js";import"./Modal-Dy02jFWT.js";import"./utils-DfS-ADiV.js";import"./TransitionGroupContext-ejQez42S.js";import"./index-BbVjQDet.js";import"./resolveComponentProps-DLezU-r8.js";import"./Popover-CwdWMymH.js";import"./TextField-ECilJSMm.js";import"./useFormControl-EqKIaqm8.js";import"./createSvgIcon-BUAAkB8u.js";import"./IconButton-DlBfucp_.js";import"./ButtonBase-gJKL7X4c.js";import"./DialogContent-TC9gFBw7.js";import"./Button-8Li-cdwq.js";import"./Chip-7qvU_oAO.js";import"./DateTimePicker-DgHDar69.js";import"./Divider-DXhn6Ub8.js";import"./AppInfoRow-BgLW4R_q.js";import"./Chip-DLoVMQVm.js";import"./Divider-C2Xz7yk2.js";import"./TreeView-_qpTu6pI.js";import"./Alert-W7WaUGLz.js";import"./LinearProgress-DDNrYsWW.js";import"./Spinner-DUipJNcV.js";import"./Dialog-D0_pFUs6.js";import"./MapToggleButtonPresentational-CBnLn7Jp.js";import"./Remove-BQ2StRYG.js";import"./LinkButton-Bltx9Shr.js";import"./TextField-DK61R-xZ.js";import"./Switch-CSAD1dRX.js";import"./DatePicker-Cz_5sUCg.js";import"./Paper-DIhajTdq.js";import"./ErrorFallback-DQNkUk93.js";import"./ErrorFallbackText-C3uTVheG.js";import"./ErrorFallbackWrapper-C9Cmqijf.js";import"./Brand-RZcZ8N1N.js";import"./constants-DWdepPUO.js";import"./Edit-DeviR2d5.js";const Mo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
