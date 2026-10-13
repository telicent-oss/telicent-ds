import{a as y}from"./iframe-BRZEQbLf.js";import{C as f}from"./DropdownButton-N7mOiPnB.js";import{B as x}from"./Box-C-Jkwpue.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-CRw7mH6i.js";import"./SvgIcon-Cw9EbMaS.js";import"./clsx-B-dksMZM.js";import"./styled-B4tr5Gpt.js";import"./extendSxProp-DVGYUDL2.js";import"./composeClasses-fLhin0tj.js";import"./Box-Ssrk9oiz.js";import"./Container-F_s21ndw.js";import"./styled-D3McFGwu.js";import"./createStyled-C9tzuBR8.js";import"./useThemeProps-CoXr1FEd.js";import"./FlexBox-tS4lfUQV.js";import"./Stack-B7JViYfU.js";import"./Typography-zyOAXgEh.js";import"./Paper-e6uvZaws.js";import"./CogIcon-CYAkKwBZ.js";import"./InfoIcon-gVxMZ7aF.js";import"./ExpandMoreIcon-CodnJQ1t.js";import"./ThemeSwitchRow-BHEJY-8w.js";import"./index-COkuDLt1.js";import"./Text-DMBl0hvr.js";import"./AdapterDayjs-CiGj10BE.js";import"./useThemeProps-D0DlkUpD.js";import"./Modal-B2KfxTDw.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-BvGHbgO8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CbHM54-A.js";import"./index-BDWDU8-z.js";import"./utils-Cyajf9FY.js";import"./Popover-D2KkDtRr.js";import"./InputAdornment-BfwQk9eb.js";import"./useFormControl-Co9F6LxC.js";import"./TextField-Bebx8VFJ.js";import"./FormControl-C-aOZzhL.js";import"./ListContext-I50NLL-h.js";import"./useControlled-D1dqjRMI.js";import"./createSvgIcon-oad7o5IJ.js";import"./FormHelperText-BQ_DNaGt.js";import"./IconButton-DVslTQgr.js";import"./ButtonBase-HJ4mmBfm.js";import"./DialogContent-CFFTpGiD.js";import"./Button-CUHSn2HN.js";import"./Chip-BprlDat8.js";import"./DataGrid-CtLBQ2rA.js";import"./index-CFm5lWVH.js";import"./Switch-DLYnFPqF.js";import"./FormControlLabel-RsIdwsU5.js";import"./Skeleton-rphQfOFS.js";import"./MenuItem--HWde8Qw.js";import"./dividerClasses-CUMrjw2R.js";import"./LinearProgress-B8OYi-3g.js";import"./Divider-C9VN5X_l.js";import"./CircularProgress-D9PR8cnY.js";import"./Close-DWL9XO9n.js";import"./Tabs-3USXMiN9.js";import"./TableCell-Dtrs0rAS.js";import"./ToggleButton-DYW4-3w7.js";import"./_IconPopover-CjPnZK6_.js";import"./Chip-DEZNB5qQ.js";import"./Divider-DfQyPts_.js";import"./TreeView-BNZRdyEt.js";import"./Collapse-DspQfHEJ.js";import"./useSlot-Da5iOCrs.js";import"./AppInfoRow-ClgwB6er.js";import"./AppSettings-thUazhA0.js";import"./SvgIcon-CCghYlx6.js";import"./TableRow-BNDJvZVS.js";import"./LinearProgress-CUlx6isd.js";import"./Spinner-IqwRn4dW.js";import"./Dialog-DSKAGJMO.js";import"./MapToggleButtonPresentational-BS9z7Dku.js";import"./Remove-CWBxjnqT.js";import"./Alert-Df9Ot4b9.js";import"./ToggleButton-CFbnS39h.js";import"./ToggleButtonGroup-B4rhHnrt.js";import"./LinkButton-DQmtcsO3.js";import"./TextField-Dmzeh5Vn.js";import"./Switch-BQ28hVZN.js";import"./LabeledSwitch-Qta80UJb.js";import"./DatePicker-kXhjc28H.js";import"./DateTimePicker-KkImEtet.js";import"./LocalizationProvider-I81jBPQe.js";import"./RadioGroup-CVVu-mNd.js";import"./FormControl-Bh6ylgh2.js";import"./FormHelperText-eEO_7Hve.js";import"./MenuItem-CELqUZNo.js";import"./AccordionDetails-BU2K71MQ.js";import"./Paper-B8J14Eb1.js";import"./ErrorFallback-DNF8piMD.js";import"./ErrorFallbackText-DFl1Netk.js";import"./ErrorFallbackWrapper-C5T8ZSzH.js";import"./Brand-DmInPiXq.js";import"./Edit-rGVb-MEj.js";const lt={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const ut=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,ut as __namedExportsOrder,lt as default};
