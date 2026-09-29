import{a as y}from"./iframe-pSdNPpsj.js";import{C as f}from"./DropdownButton-PfYIilVr.js";import{B as x}from"./Box-BoiUcmPE.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-8kjnvaru.js";import"./SvgIcon-BonYN8Aw.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BV2hxUmf.js";import"./extendSxProp-DB41LN08.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DVtKZHc7.js";import"./Box-CBjBaWaN.js";import"./Container-2KzmGqL8.js";import"./styled-DydIvW0v.js";import"./createStyled-BCHR6s5i.js";import"./useThemeProps-CYWg9EgA.js";import"./FlexBox-hv-hpSGA.js";import"./Stack-Bs31Dqc4.js";import"./Typography-xJSRyULv.js";import"./Paper-CaOTbWnl.js";import"./CogIcon-BfeV780C.js";import"./InfoIcon-CvY1jMPl.js";import"./ExpandMoreIcon-k57z5o9e.js";import"./ThemeSwitchRow-BPScvN64.js";import"./index-DpDMCIG9.js";import"./Text-C8xYhcTn.js";import"./AdapterDayjs-Dder9SCv.js";import"./useThemeProps-xIwPk4zG.js";import"./Modal-Bours3kv.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-DQVEqSZG.js";import"./resolveComponentProps-DPCNAT4d.js";import"./index-CxGjzryR.js";import"./utils-BwusbXFX.js";import"./Popover-BBnSYe1Z.js";import"./TextField-nhnGPtzx.js";import"./useFormControl-CUuOM4EU.js";import"./FormControl-BvmTFN4D.js";import"./ListContext-vhA9Ec2W.js";import"./useControlled-CTRf4Kyy.js";import"./createSvgIcon-DQJUL0l4.js";import"./FormHelperText-C4G4-bY5.js";import"./IconButton-sbMpLibE.js";import"./ButtonBase-12w3s8A9.js";import"./DialogContent-6bzIhVp6.js";import"./Button-C4RV-peR.js";import"./Chip-BlG_pkiR.js";import"./MenuItem-CaHZacD4.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-Dbgx90FC.js";import"./Chip-CoSGGU0m.js";import"./Divider-BiRkEI1F.js";import"./Divider-C_qV4GnK.js";import"./TreeView-B43DTxN_.js";import"./Collapse-DCgMY-AU.js";import"./useSlot-D8cXYJ0o.js";import"./AppInfoRow-CmmXVQhw.js";import"./AppSettings-DiAaHAeX.js";import"./SvgIcon-Dk67ihyJ.js";import"./TableRow-BbcetRBz.js";import"./LinearProgress-4g4fQEVB.js";import"./Spinner-BhDP1jI-.js";import"./Dialog-HQr-WHjL.js";import"./MapToggleButtonPresentational-B3hG9Xgp.js";import"./Remove-C7Qh0rfw.js";import"./Alert-D6vFGcfN.js";import"./ToggleButton-DYJg3xc1.js";import"./LinkButton-CCaJDHCZ.js";import"./TextField-D6oyfCHl.js";import"./Switch-PrjoLUoj.js";import"./LabeledSwitch-BdwUyAoI.js";import"./DatePicker-BkGr75tM.js";import"./DateTimePicker-CPfgqStp.js";import"./FormControl-DGv8wv7P.js";import"./FormHelperText-c9msRWby.js";import"./MenuItem-Rg5Kc0O5.js";import"./AccordionDetails-xCw9eoCi.js";import"./Paper-DVNzQMfL.js";import"./ErrorFallback-aVzTS4kp.js";import"./ErrorFallbackText-C0CAwCyb.js";import"./ErrorFallbackWrapper-GQ-Y6ktD.js";import"./Brand-Bitp_hZv.js";import"./Edit-BGaDb461.js";const Xo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successful just pass a string to `successMsg`"}}}},r={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},e={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Zo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,Zo as __namedExportsOrder,Xo as default};
