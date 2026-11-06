import{a as y}from"./iframe-CWOAzfBe.js";import{C as f}from"./UserProfileContent-PP1H7xMQ.js";import{B as x}from"./Box-Be9RsHl4.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-TjLPzi1x.js";import"./clsx-B-dksMZM.js";import"./styled-yqtTQwkH.js";import"./extendSxProp-CSX3D6uH.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B2y4Re2S.js";import"./TransitionGroupContext-DeA-sbXP.js";import"./MapToggleButtonPresentational-CEHdazAY.js";import"./Remove-C8RIYb0h.js";import"./createSvgIcon-BHb-OUfU.js";import"./SvgIcon-ClJFXd34.js";import"./IconButton-DgurzXTO.js";import"./Paper-7wOgw64N.js";import"./XIcon-dAr9ghTX.js";import"./Stack-BSuJYMST.js";import"./styled-BPbJu004.js";import"./createStyled-DnaBivQ6.js";import"./useThemeProps-DwBSHX6c.js";import"./Typography-D-Cq-N2y.js";import"./Box-BeooBb3v.js";import"./Container-F3J-sHJz.js";import"./FlexBox-pZJaha5u.js";import"./Brand-CKv8y3LC.js";import"./IconButton-2rYQRxsd.js";import"./LinkButton-XU4sXk5X.js";import"./AppInfoRow-CS9nkuxJ.js";import"./_IconPopover-7sZ10jAV.js";import"./Popover-vUzglvRh.js";import"./utils-Bhl493yy.js";import"./index-DWVJrjyq.js";import"./index-DjnTYE3b.js";import"./Modal-DpeBRA_s.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-DyVW6uNc.js";import"./useSlotProps-DYSwu3K9.js";import"./InfoIcon-Dm5ciMv4.js";import"./Text-C2R7pbPC.js";import"./AppSettings-CAogJme_.js";import"./CogIcon-DoUxEvuA.js";import"./Badge-D_pdYXXr.js";import"./Badge-B8UvVhKt.js";import"./Chip-BqgzveIY.js";import"./Chip-Cmk_bJZP.js";import"./Divider-pNwF1iHD.js";import"./Divider-CFFp1ukz.js";import"./dividerClasses-CvuSSyUr.js";import"./ThemeSwitchRow-BIg4pT4X.js";import"./Skeleton-D5xdqxBS.js";import"./Skeleton-D4kMWV6G.js";import"./TextField-BCQeTXpB.js";import"./useFormControl-Du95Ze_o.js";import"./FormControl-psQBgE76.js";import"./ListContext-D0cTsJmH.js";import"./useControlled-CQQMs9uM.js";import"./FormHelperText-Bpw2KcDZ.js";import"./MenuItem-D6VvEmRc.js";import"./ExpandMoreIcon-CD2Z_dgw.js";import"./ListItem-BPZeYGxz.js";import"./Toolbar-CToRG8p1.js";import"./Close-BxICseQ8.js";import"./Popper-CrLTcQdC.js";import"./FormControlLabel-a66K3OEG.js";import"./Edit-BGN1rUEo.js";import"./SvgIcon-Dte4xqyw.js";import"./TableRow-CJHAGSMA.js";import"./TableCell-BcaiVUkP.js";import"./TreeView-Bwkbpo83.js";import"./useThemeProps-Ce3qTZG0.js";import"./index-Db069xsF.js";import"./Collapse-CuLQ9H5N.js";import"./Dialog-DcXNP11i.js";import"./DialogContent-B_RMQklx.js";import"./Alert-D1RRFPA_.js";import"./useSlot-BCKzb_k_.js";import"./LinearProgress-DYdo5kC4.js";import"./LinearProgress-BwQMcTrR.js";import"./Spinner-BUwM6wcC.js";import"./CircularProgress-hkecqCAX.js";import"./TextField-BvQJwsnk.js";import"./FormControl-C6XdQTGq.js";import"./FormHelperText-Cpr8FSPI.js";import"./LabeledSwitch-CZe5HyJI.js";import"./Switch-Bgf3cuRU.js";import"./Switch-C9fMxVpv.js";import"./RadioGroup-BjERn-tn.js";import"./ToggleButton-DaGu9yPS.js";import"./ToggleButton--S7xR4zz.js";import"./ToggleButtonGroup-s374tJhr.js";import"./MenuItem-CpoRDk7B.js";import"./Tabs-BsDialm7.js";import"./AccordionSummary-FJf2LPtG.js";import"./Paper-CcJbfhLV.js";import"./ErrorFallback-r5W_n7Xq.js";import"./ErrorFallbackText-B8i4qwXi.js";import"./ErrorFallbackWrapper-TPpQ5mRs.js";const dt={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
