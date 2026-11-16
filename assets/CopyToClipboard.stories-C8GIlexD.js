import{a as y}from"./iframe-DunpSdH6.js";import{C as f}from"./UserProfileContent-D_7QN1X2.js";import{B as x}from"./Box-B-pmLQD1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-stnAc-Tj.js";import"./clsx-B-dksMZM.js";import"./styled-DLhCII3n.js";import"./extendSxProp-DbmafzOS.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-TD2UFsiu.js";import"./TransitionGroupContext-DpYXvT-8.js";import"./MapToggleButtonPresentational-DhL_tRuE.js";import"./Remove-CypNUzA-.js";import"./createSvgIcon-DoUG9alq.js";import"./SvgIcon-DvaLc9-e.js";import"./IconButton-BxRM68Nx.js";import"./Paper-BnYpX6e-.js";import"./XIcon-B-AAlqIS.js";import"./Stack-CGlC5oSp.js";import"./styled-DlfzhkfP.js";import"./createStyled-BLV0Zz4B.js";import"./useThemeProps-BeK64rtS.js";import"./Typography-Cnm5zE5B.js";import"./Box-CCnO3-HF.js";import"./Container-COQeBzQQ.js";import"./FlexBox-DwjKj-U_.js";import"./Brand-D0GB8OW-.js";import"./IconButton-CnZQJMnz.js";import"./LinkButton-BoEmtgzU.js";import"./AppInfoRow-TLJdMOCL.js";import"./_IconPopover-kbbuypBQ.js";import"./Popover-DsC-QvdX.js";import"./utils-W3WhWsKZ.js";import"./index-MiBr_QQr.js";import"./index-DLav748F.js";import"./Modal-d3tziOSd.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-Cq-RMR5j.js";import"./useSlotProps-CVslE_Pq.js";import"./InfoIcon-C6C5JcpY.js";import"./Text-CAHfJU7X.js";import"./AppSettings-CieG7Itn.js";import"./CogIcon-DURisWGj.js";import"./Badge-DfmfDckY.js";import"./Badge-DNThIf1X.js";import"./Chip-ClFjssnv.js";import"./Chip-Cph2lDK-.js";import"./Divider-DOwJyp8h.js";import"./Divider-CZk7lu9D.js";import"./dividerClasses-DaEwxQ2U.js";import"./ThemeSwitchRow-DKnKmbOE.js";import"./Skeleton-OXXt9MRY.js";import"./Skeleton-DeprtIml.js";import"./TextField-Bmgg2D5C.js";import"./useFormControl-DJJUNb1q.js";import"./FormControl-g-yWrPYN.js";import"./ListContext-C9AaZLBf.js";import"./useControlled-D5RrLse2.js";import"./FormHelperText-BuPvD1hT.js";import"./MenuItem-B2bWzFXk.js";import"./ExpandMoreIcon-BIxTqLU3.js";import"./ListItem-BhthYCMo.js";import"./Toolbar-DNoBnjCT.js";import"./Close-Cj-9lqkJ.js";import"./Popper-DYqxq4vL.js";import"./FormControlLabel-oM-7wre-.js";import"./Edit-DCrwz_Eh.js";import"./SvgIcon-DQ2JuKIZ.js";import"./TableRow-D4o3RwxN.js";import"./TableCell-xtN6Kl0n.js";import"./TreeView-BDnoQbge.js";import"./useThemeProps-BitkL5n2.js";import"./index-CZvxb2J0.js";import"./Collapse-WWGG7p11.js";import"./Dialog-CK4_JL4u.js";import"./DialogContent-DkAI-Cl0.js";import"./Alert-CN792Xkl.js";import"./useSlot-CWMKbCxx.js";import"./LinearProgress-aosU5P48.js";import"./LinearProgress-DX42AqMp.js";import"./Spinner-BAHqvCO1.js";import"./CircularProgress-CpVFRLj9.js";import"./TextField-B0XeM5G1.js";import"./FormControl-Bz1Pa-gf.js";import"./FormHelperText-D3Z6WRSy.js";import"./LabeledSwitch-CQiKhy5B.js";import"./Switch-zPa9dcOV.js";import"./Switch-d71D0uBO.js";import"./RadioGroup-DjTHdfvI.js";import"./ToggleButton-wesw0Lhu.js";import"./ToggleButton-DGKJly8H.js";import"./ToggleButtonGroup-DhWfGsgc.js";import"./MenuItem-iCAnPddj.js";import"./Tabs-CIlDC37T.js";import"./AccordionSummary-ChOmO8Ka.js";import"./Paper-CNdqdVGK.js";import"./ErrorFallback-DcOvTajC.js";import"./ErrorFallbackText-DYZvmVRS.js";import"./ErrorFallbackWrapper-rsg5SlDs.js";const dt={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
