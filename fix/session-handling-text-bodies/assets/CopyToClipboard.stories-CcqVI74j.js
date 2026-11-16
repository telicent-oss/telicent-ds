import{a as y}from"./iframe-C_A9w9Xb.js";import{C as f}from"./UserProfileContent-CRSr_rhf.js";import{B as x}from"./Box-DB6K2VlN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BVdDZnN4.js";import"./clsx-B-dksMZM.js";import"./styled-BxBMGnZ7.js";import"./extendSxProp-DbsjyKNJ.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DghXKeJ1.js";import"./TransitionGroupContext-BJMJdx4M.js";import"./MapToggleButtonPresentational-CdT4filz.js";import"./Remove-CC1RGYYl.js";import"./createSvgIcon-i-zQ-M6d.js";import"./SvgIcon-C8_G8FNz.js";import"./IconButton-DGQcrcgI.js";import"./Paper-DSCOcLrg.js";import"./XIcon-D-mT89jA.js";import"./Stack-CcwLWQH2.js";import"./styled-DY34dW0Q.js";import"./createStyled-B7kozB3A.js";import"./useThemeProps-sj6Fs-gH.js";import"./Typography-BLZTU97p.js";import"./Box-fYkPIWZP.js";import"./Container-C4ujFY5f.js";import"./FlexBox-xFc9aoH-.js";import"./Brand-d6OKu9aw.js";import"./IconButton-DZaun261.js";import"./LinkButton-jvGGWVn2.js";import"./AppInfoRow-CShKA_AM.js";import"./_IconPopover-DZzlnGrx.js";import"./Popover-DKdEqhrZ.js";import"./utils-DHOV5Dn-.js";import"./index-i4WXsvPC.js";import"./index-BHdyBRPi.js";import"./Modal-xQORnQ13.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-r2KoCv7J.js";import"./useSlotProps-aaY8J2bg.js";import"./InfoIcon-CsN7XvfL.js";import"./Text-VJDIJLPP.js";import"./AppSettings-BpaW4aTJ.js";import"./CogIcon-Xohb8vl0.js";import"./Badge-CTGjuVUc.js";import"./Badge-BZZrZQQO.js";import"./Chip-4mXnUy-p.js";import"./Chip-umbtqylA.js";import"./Divider-DJS9w1fE.js";import"./Divider-uAMQ62Ay.js";import"./dividerClasses-BaXV3koW.js";import"./ThemeSwitchRow-QiuVBBXJ.js";import"./Skeleton-CuTvwxzQ.js";import"./Skeleton-DWpJL6zw.js";import"./TextField-CPHMgkHr.js";import"./useFormControl-2yPes8mR.js";import"./FormControl-fAwcUdMf.js";import"./ListContext-DDqsAt6U.js";import"./useControlled-3RSfgazB.js";import"./FormHelperText-C73ZFMlI.js";import"./MenuItem-BXjSr2Yp.js";import"./ExpandMoreIcon-BqYNX6oE.js";import"./ListItem-CqSEfq_v.js";import"./Toolbar-yZjFEbA8.js";import"./Close-XBuytlI5.js";import"./Popper-PPx8E8Kn.js";import"./FormControlLabel-TrbeFuul.js";import"./Edit-CwFXdWdx.js";import"./SvgIcon-BL6aEYyy.js";import"./TableRow-BzcwC7-J.js";import"./TableCell-DIcGZfcO.js";import"./TreeView-DGUcOfc2.js";import"./useThemeProps-mFM7TQzY.js";import"./index-BQ8CXDCk.js";import"./Collapse-jyqoWJz2.js";import"./Dialog-C55D5thn.js";import"./DialogContent-C9vdccJg.js";import"./Alert-DbC5Ef0h.js";import"./useSlot-DetFjtbb.js";import"./LinearProgress-CFMEE1Eh.js";import"./LinearProgress-MCxEeQKE.js";import"./Spinner-9Pq1qpOg.js";import"./CircularProgress-BFo9ue-1.js";import"./TextField-CDBDoTkX.js";import"./FormControl-DPrwx_NL.js";import"./FormHelperText-BBL7cKe3.js";import"./LabeledSwitch-iaBcHpl_.js";import"./Switch-Bx0dlzK_.js";import"./Switch-DvW86pnT.js";import"./RadioGroup-D0W8_lBw.js";import"./ToggleButton-DvpTABDR.js";import"./ToggleButton-Czzc7CD5.js";import"./ToggleButtonGroup-C2sUNclb.js";import"./MenuItem-BjrtayUA.js";import"./Tabs-CvGfBwpz.js";import"./AccordionSummary-J3dFvStq.js";import"./Paper-BUzr6iGG.js";import"./ErrorFallback-BWZMsFtf.js";import"./ErrorFallbackText-CBna-xSZ.js";import"./ErrorFallbackWrapper-CXtFrO_G.js";const dt={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
