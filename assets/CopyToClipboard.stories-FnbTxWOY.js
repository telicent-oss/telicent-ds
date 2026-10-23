import{a as y}from"./iframe-Cq2F8nnt.js";import{C as f}from"./EntityList-DaLKgoBW.js";import{B as x}from"./Box-BQK-RQwY.js";import"./preload-helper-C1FmrZbK.js";import"./FlexBox-C04F2Oi9.js";import"./Stack-C0kkN408.js";import"./styled-BFu-il5r.js";import"./extendSxProp-C_3gOtzH.js";import"./clsx-B-dksMZM.js";import"./styled-DanlI2xt.js";import"./createStyled-Ch69_NI_.js";import"./useThemeProps-P0CvXcYF.js";import"./composeClasses-fLhin0tj.js";import"./Text-CBOSUAEh.js";import"./Typography-BwTJfg_0.js";import"./ListContext-BAusblW9.js";import"./ListItem-DKE093t7.js";import"./FormControl-BUNS3ShE.js";import"./useFormControl-CV4aeut4.js";import"./TransitionGroupContext-GhvSAu4t.js";import"./resolveComponentProps-Cqm51eMl.js";import"./ButtonBase-Dgq-9fM-.js";import"./Toolbar-oXmRnOPk.js";import"./TextField-DwlpbE60.js";import"./Modal-C_ZAcMul.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-Cvu7cjI6.js";import"./index-Yf-oiQ9v.js";import"./utils-B_pcJLAo.js";import"./Popover-CXsS9GGj.js";import"./Paper-u6GRQMwm.js";import"./useControlled-B1ajGRtS.js";import"./createSvgIcon-1goxyuUk.js";import"./SvgIcon-TnW6j3SK.js";import"./FormHelperText-BmifT0EA.js";import"./Close-CBbLzOeS.js";import"./Popper-C0YrUmlc.js";import"./Badge-BZpNOhc9.js";import"./Chip-DKKqjRmN.js";import"./IconButton-C1aFxNcW.js";import"./FormControlLabel-Be4X22x1.js";import"./MenuItem-DceuxKDN.js";import"./dividerClasses-C6GToXYV.js";import"./Button-JWos0z8D.js";import"./MapToggleButtonPresentational-BFzQ5gPJ.js";import"./Remove-B3S6saWd.js";import"./ExpandLessIcon-Baa6e0mA.js";import"./Box-CAEYLSso.js";import"./Container-DqN7QDyr.js";import"./CogIcon-C7NF5K8t.js";import"./InfoIcon-DPqgxdQZ.js";import"./ExpandMoreIcon-DNBS7Ae_.js";import"./ThemeSwitchRow-9homoP8I.js";import"./index-D2fxJFUo.js";import"./IconButton-Ci8BXdvE.js";import"./Badge-_Ks2Ec9c.js";import"./Chip-1H0HG8HA.js";import"./Divider-sULGPtF-.js";import"./Divider-Bbde2_fu.js";import"./TreeView-GAhKaiG4.js";import"./useThemeProps-Dr3B81aN.js";import"./Collapse-BYeD06gr.js";import"./useSlot-CReHhYw8.js";import"./AppInfoRow-_l5cjwhy.js";import"./_IconPopover-CYGOjWq8.js";import"./AppSettings-BTMPNOva.js";import"./SvgIcon-BI9-VwwI.js";import"./TableRow-DlKh2N0Z.js";import"./TableCell-CEBLf8Yr.js";import"./Skeleton-BpIhNe2X.js";import"./Skeleton-Du6dERAP.js";import"./Edit-CXQT9gM2.js";import"./LinearProgress-G9ObWG-G.js";import"./LinearProgress-Crs6Zu4l.js";import"./Spinner-DzvFtaD2.js";import"./CircularProgress-BgI1_Xtz.js";import"./Dialog-DhKmN4qh.js";import"./DialogContent-rtf5aXKs.js";import"./Alert-CE5w6l2H.js";import"./ToggleButton-Bub8BXIU.js";import"./ToggleButton-CAEgdqR9.js";import"./ToggleButtonGroup-D-3xBYH1.js";import"./LinkButton-BtFJ8Ptt.js";import"./TextField-DLAYsvZY.js";import"./Switch-Dic_zt7r.js";import"./Switch-DvSveS_U.js";import"./LabeledSwitch-BYrzyMPQ.js";import"./RadioGroup-C-Ze-TFB.js";import"./FormControl-Doz5KOXY.js";import"./FormHelperText-BXOFl--T.js";import"./Tabs-V9ydvoHK.js";import"./MenuItem-DnUBD1eV.js";import"./AccordionDetails-gBwhydje.js";import"./Paper-DR1fCpm6.js";import"./ErrorFallback-BK4szP6K.js";import"./ErrorFallbackText-DH69geC6.js";import"./ErrorFallbackWrapper-Dy-bg1rq.js";import"./Brand-B5FmdXmX.js";const ut={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const dt=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,dt as __namedExportsOrder,ut as default};
