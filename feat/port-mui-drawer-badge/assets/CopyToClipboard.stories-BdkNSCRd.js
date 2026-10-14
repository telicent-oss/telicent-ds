import{a as y}from"./iframe-C-ZFHi7G.js";import{C as f}from"./DropdownButton-DBXQPZiC.js";import{B as x}from"./Box-C8RueU9X.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-CbH3sEfM.js";import"./SvgIcon-BJCkR60K.js";import"./clsx-B-dksMZM.js";import"./styled-Bk2IjbB5.js";import"./extendSxProp-dXted_0R.js";import"./composeClasses-fLhin0tj.js";import"./Box-PWf94AkS.js";import"./Container-CV6bOf61.js";import"./styled-DNl7Cs_R.js";import"./createStyled-vuo4qSuW.js";import"./useThemeProps-CDA2VJay.js";import"./FlexBox-lULQm6VU.js";import"./Stack-CmCwoFm_.js";import"./Typography-CkxFGaa5.js";import"./Paper-C6Xte-jc.js";import"./CogIcon-CmSwAq5_.js";import"./InfoIcon-DtvtTana.js";import"./ExpandMoreIcon-CEeNpfle.js";import"./ThemeSwitchRow-Dvzp5zbn.js";import"./index-rmUNOSJG.js";import"./Text-CHFW8IH8.js";import"./ListItem-CnFySCf3.js";import"./ListContext-CUNnWBoY.js";import"./FormControl-z8ekdGjB.js";import"./useFormControl-CgAT6IKY.js";import"./TransitionGroupContext-C0NcEdG2.js";import"./resolveComponentProps-Ji4pwD1h.js";import"./ButtonBase-UsKYAmFM.js";import"./Toolbar-BFoIYY9Z.js";import"./TextField-BnMSP8bO.js";import"./Modal-Bh0uOVdy.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-8MMKxgpT.js";import"./index-BiUXR6Fr.js";import"./utils-D_VBJbmQ.js";import"./Popover-CpBmz1D4.js";import"./useControlled-DIYZR1vI.js";import"./createSvgIcon-CgHhWzsp.js";import"./FormHelperText-YXdNPWNE.js";import"./Close-Da5sWuiq.js";import"./Popper-BYgvOfOT.js";import"./Badge-BRhX8-6K.js";import"./Chip-rsJ9-v4L.js";import"./IconButton-BSmPEpg3.js";import"./FormControlLabel-C_CoaMTJ.js";import"./MenuItem-CLSLkyOY.js";import"./dividerClasses-dRG9if5p.js";import"./IconButton-D4AMQVbi.js";import"./Badge-OR03eEi0.js";import"./Chip-B2wcrvAN.js";import"./Divider-O0zDh8J4.js";import"./Divider-B3REhvRn.js";import"./TreeView-CxyUEHYQ.js";import"./useThemeProps-DuHDulq9.js";import"./Collapse-Bi1bo0w0.js";import"./useSlot-CLq2sdyu.js";import"./AppInfoRow-DXVzvm-o.js";import"./_IconPopover-DOXgOPu3.js";import"./AppSettings-Dlv5aBW5.js";import"./SvgIcon-xwJ9lbKe.js";import"./TableRow-C03rPSUq.js";import"./TableCell-CB2ecjuI.js";import"./LinearProgress-BMstATZR.js";import"./LinearProgress-aqc0myF3.js";import"./Spinner-D6q0L9xa.js";import"./CircularProgress-BZGJCY_5.js";import"./Dialog-BGqZYpLW.js";import"./DialogContent-CNYTn0i-.js";import"./Button-eDvdHhIu.js";import"./MapToggleButtonPresentational-DrTKcpNc.js";import"./Remove-C6ct4kNK.js";import"./Alert-DuvNx40M.js";import"./ToggleButton-BzArV2oI.js";import"./ToggleButton-CBZbI2uz.js";import"./ToggleButtonGroup-DnQDLnGR.js";import"./LinkButton-DiWs23j2.js";import"./TextField-Dtcgs6IQ.js";import"./Switch-B9Vu7ZeK.js";import"./Switch-BYiHkx-A.js";import"./LabeledSwitch-Cjz_DPwA.js";import"./RadioGroup-D-HBNE5D.js";import"./FormControl-CgN7reua.js";import"./FormHelperText-BnLTH0UY.js";import"./Tabs-crUQBx1x.js";import"./MenuItem-MYpO4lco.js";import"./AccordionDetails-BU3W9zwP.js";import"./Paper-C2fTVCnQ.js";import"./ErrorFallback-CsyZPSJe.js";import"./ErrorFallbackText-DIe6Jt0v.js";import"./ErrorFallbackWrapper-BOMF25ch.js";import"./Brand-_mV_4qml.js";import"./Edit-wGiylSA_.js";const nt={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successful just pass a string to `successMsg`"}}}},r={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},e={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var i,s,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var a,m,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var n,l,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const lt=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,lt as __namedExportsOrder,nt as default};
