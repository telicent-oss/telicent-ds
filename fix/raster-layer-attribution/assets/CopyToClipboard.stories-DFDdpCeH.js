import{a as y}from"./iframe-TzH9HoJB.js";import{C as f}from"./UserProfileContent-DLDByR5F.js";import{B as x}from"./Box-DS3YN1ZG.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-OwbOqTSh.js";import"./clsx-B-dksMZM.js";import"./styled-Fi-PJMA2.js";import"./extendSxProp-BcuL-Nvl.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B0uhPIY5.js";import"./TransitionGroupContext-9gZwZNUS.js";import"./MapToggleButtonPresentational-DFyons0C.js";import"./Remove-DAQRFvaE.js";import"./createSvgIcon-CUXDMF07.js";import"./SvgIcon-HYlfJc8_.js";import"./IconButton-PY87z89E.js";import"./Paper-YFzx4ddw.js";import"./XIcon-DGixMYxC.js";import"./Stack-VXbRlDW3.js";import"./styled-Detq6LXO.js";import"./createStyled-DpILs1eO.js";import"./useThemeProps-C-ryN40T.js";import"./Typography-zeuNrRSn.js";import"./Box-Bo6gauv7.js";import"./Container-8Zbg9EiI.js";import"./FlexBox-DRW8tIce.js";import"./Brand-BlQ8b-ry.js";import"./IconButton-Mzh_sPPf.js";import"./LinkButton-Du-kxWOQ.js";import"./AppInfoRow-BV_aa5lk.js";import"./_IconPopover-hWyolf0i.js";import"./Popover-DX_paYG2.js";import"./utils-DAXs4UmQ.js";import"./index-C5JqvuCX.js";import"./index-CoaIpLkh.js";import"./Modal-DHYwyE7o.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BSzFeukN.js";import"./useSlotProps-CB65AuIn.js";import"./InfoIcon-CuaXepFp.js";import"./Text-Wjw9mAbu.js";import"./AppSettings-BzU83vRR.js";import"./CogIcon-K9_cAB5b.js";import"./Badge-682oFqE8.js";import"./Badge-BFQfTkfR.js";import"./Chip-CTmkkGRh.js";import"./Chip-rF6T4rUT.js";import"./Divider-DBOrLmFb.js";import"./Divider-nCna6h_E.js";import"./dividerClasses-yHkBJDJd.js";import"./ThemeSwitchRow-CoAtHhZA.js";import"./Skeleton-YZOMWl5n.js";import"./Skeleton-2TdWFO3K.js";import"./TextField-3lnVRzgq.js";import"./useFormControl-B5BL4Dkn.js";import"./FormControl-CCq8g0Qj.js";import"./ListContext-C1CE2G2k.js";import"./useControlled-DLY0GURg.js";import"./FormHelperText-8S5YkPy6.js";import"./MenuItem-CHk81Hva.js";import"./ExpandMoreIcon-CpVvmAB8.js";import"./ListItem-CLOQjQZa.js";import"./Toolbar--ZbXsggf.js";import"./Close-DpJbrle0.js";import"./Popper-DAbEjCJA.js";import"./FormControlLabel-C0_yDqIQ.js";import"./Edit-qL9wNaAs.js";import"./SvgIcon-ak9zVNAx.js";import"./TableRow-5QaVWAOF.js";import"./TableCell-B3sIJQHc.js";import"./TreeView-Sl1KgHox.js";import"./useThemeProps-CTGgwm9-.js";import"./index-D3hKYTw4.js";import"./Collapse-D2Q2PYDS.js";import"./Dialog-Yb-veoJ6.js";import"./DialogContent-9AxQB7IK.js";import"./Alert-BhRCq8N3.js";import"./useSlot-CNLXZk78.js";import"./LinearProgress-W8XZFG7o.js";import"./LinearProgress-M-9cHjHE.js";import"./Spinner-kZ2y9DVo.js";import"./CircularProgress-HVwFS8ym.js";import"./TextField-jO_QGFZE.js";import"./FormControl-DsF2nchf.js";import"./FormHelperText-C1B-jnvM.js";import"./LabeledSwitch-B_k81Zfn.js";import"./Switch-BRrjrBxW.js";import"./Switch-LinUY1Bf.js";import"./RadioGroup-BQTXXTjr.js";import"./ToggleButton-Db5rHd7I.js";import"./ToggleButton-BYiCWuVK.js";import"./ToggleButtonGroup-CiG3xB0s.js";import"./MenuItem-C17Q6CqC.js";import"./Tabs-C87aF2xa.js";import"./AccordionSummary-DLRaYHNg.js";import"./Paper-DmuX9rfV.js";import"./ErrorFallback-BBjYL2F9.js";import"./ErrorFallbackText-CgArZ3nG.js";import"./ErrorFallbackWrapper-BvE4laRa.js";const dt={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successful just pass a string to `successMsg`"}}}},r={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},e={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}},ht=["Default","CustomSuccessMessage","CustomStyle","Error"];var i,s,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,ht as __namedExportsOrder,dt as default};
