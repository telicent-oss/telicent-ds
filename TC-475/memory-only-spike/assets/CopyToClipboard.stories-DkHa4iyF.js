import{a as y}from"./iframe-RnQnoQX8.js";import{C as f}from"./UserProfileContent-CMKr3g_m.js";import{B as x}from"./Box-Bw31xyk6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cv-t7gt4.js";import"./clsx-B-dksMZM.js";import"./styled-CHUqJEZN.js";import"./extendSxProp-CBh2QTe4.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DI6HdjXk.js";import"./TransitionGroupContext-CBVDQk4P.js";import"./MapToggleButtonPresentational-Da4cOXhB.js";import"./Remove-7Y2EcPpw.js";import"./createSvgIcon-DEQxKW2j.js";import"./SvgIcon-BvuMPYna.js";import"./IconButton--ocr3Hbq.js";import"./Paper-_jcYEZaX.js";import"./XIcon-CCibX9oC.js";import"./Stack-CrylB_Fp.js";import"./styled-eZ5xdzZ3.js";import"./createStyled-CPPTetpG.js";import"./useThemeProps-CmFLLsEv.js";import"./Typography-DBvs_soa.js";import"./Box-W8ovBlmy.js";import"./Container-BwVzxpaS.js";import"./FlexBox-DsO7ubDs.js";import"./Brand-D9g93ilS.js";import"./IconButton-B6c5afDL.js";import"./LinkButton-BUW8XXKD.js";import"./AppInfoRow-BeFe7p8y.js";import"./_IconPopover-CobC4KUZ.js";import"./Popover-MwJ0-EW_.js";import"./utils-bvnqZ63E.js";import"./index-DRTkc6c-.js";import"./index-BNYStkyE.js";import"./Modal-v8QLfI2w.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-FxkCCCo6.js";import"./useSlotProps-DgvSFONu.js";import"./InfoIcon-D6Exs_Xw.js";import"./Text-ByuSSYGz.js";import"./AppSettings-D5gbX9uT.js";import"./CogIcon-CIdE7un1.js";import"./Badge-DKp5H5jh.js";import"./Badge-Dkt0jcpj.js";import"./Chip-XC4RVids.js";import"./Chip-Dl-4X4p2.js";import"./Divider-dOkWtiDQ.js";import"./Divider-D4m18Epw.js";import"./dividerClasses-CbcYRHVe.js";import"./ThemeSwitchRow-CTIMiD2z.js";import"./Skeleton-DCTvNfgq.js";import"./Skeleton-C0XYBYTl.js";import"./TextField-C1cT5Aao.js";import"./useFormControl-BDkUgp4y.js";import"./FormControl-DuXM5IYN.js";import"./ListContext-BvKyAyz9.js";import"./useControlled-BiJlVKlY.js";import"./FormHelperText-Cnr2UHSD.js";import"./MenuItem-BAkMVuqq.js";import"./ExpandMoreIcon-BSEHq4MR.js";import"./ListItem-CZpNJal7.js";import"./Toolbar-BU64nVx5.js";import"./Close-B1WU-_xu.js";import"./Popper-DO2lmnhT.js";import"./FormControlLabel-vRc02SQa.js";import"./Edit-WtWCEqSy.js";import"./SvgIcon-C0tF2EOt.js";import"./TableRow-BLgmD9P-.js";import"./TableCell-Cmmt5y6X.js";import"./TreeView-BqpNoiiq.js";import"./useThemeProps-Gx6XDnDx.js";import"./index-BAXa6WLZ.js";import"./Collapse-DT_Z5Ga5.js";import"./Dialog-hrhG2Ut0.js";import"./DialogContent-D2_KaIGY.js";import"./Alert-C_oszVvC.js";import"./useSlot-DqjjmsZB.js";import"./LinearProgress-CyEm_RB3.js";import"./LinearProgress-BAZ9C-Px.js";import"./Spinner-sBOybquN.js";import"./CircularProgress-ChGQDyoU.js";import"./TextField-DraT1S6N.js";import"./FormControl-DbhJZSNC.js";import"./FormHelperText-Ce917Gi3.js";import"./LabeledSwitch-Cd6X1CbS.js";import"./Switch-BQR1ScOG.js";import"./Switch-khoc8YVO.js";import"./RadioGroup-CSCckcNR.js";import"./ToggleButton-id5d8vke.js";import"./ToggleButton-BHbbn58Z.js";import"./ToggleButtonGroup-CIB7dpuM.js";import"./MenuItem-CLiTILFp.js";import"./Tabs-SnAko9mR.js";import"./AccordionSummary-D36Wvqua.js";import"./Paper-xZIfXiq-.js";import"./ErrorFallback-3sgzHsBs.js";import"./ErrorFallbackText-_T9Q39fP.js";import"./ErrorFallbackWrapper-rfGejkDn.js";const dt={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
