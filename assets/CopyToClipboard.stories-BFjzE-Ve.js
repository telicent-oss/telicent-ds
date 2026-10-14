import{a as y}from"./iframe-BmJaKzpA.js";import{C as f}from"./DropdownButton-QvXMWf5g.js";import{B as x}from"./Box-B2o-aQ44.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-D5NkrVUA.js";import"./SvgIcon-DbW9RRsY.js";import"./clsx-B-dksMZM.js";import"./styled-CFQ-Ztvf.js";import"./extendSxProp-Cqpi5UuK.js";import"./composeClasses-fLhin0tj.js";import"./Box-P52OPraP.js";import"./Container-7dGm0tRY.js";import"./styled-CPt569yI.js";import"./createStyled-Bffddmhk.js";import"./useThemeProps-B16XkqYe.js";import"./FlexBox-DgaudmOI.js";import"./Stack-BjArtnwr.js";import"./Typography-Bjj7o5JG.js";import"./Paper-B5tHWr3y.js";import"./CogIcon-BGSwLsgD.js";import"./InfoIcon-C5-JlXMO.js";import"./ExpandMoreIcon-BN4cT-yD.js";import"./ThemeSwitchRow-CfV4zxDI.js";import"./index-lCqMlpSx.js";import"./Text-B1HWYqxs.js";import"./ListItem-BfrYHW-q.js";import"./ListContext-BjCFAdrG.js";import"./FormControl-CFg6_W5y.js";import"./useFormControl-pjOXLDlB.js";import"./TransitionGroupContext-CMgFzCdF.js";import"./resolveComponentProps-Dj3a59a6.js";import"./ButtonBase-BFPoEEs2.js";import"./Toolbar-jD6vFalY.js";import"./TextField--jGjhfWz.js";import"./Modal-C75qnOpZ.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-DhKKRKi1.js";import"./utils-DZMG5O1d.js";import"./Popover-GM9dkxAx.js";import"./useControlled-BUnwEBDo.js";import"./createSvgIcon-CpJqzDT6.js";import"./FormHelperText-DTG0QA_j.js";import"./Close-amllp88t.js";import"./Popper-CifQJid9.js";import"./Chip-CgO8bUZN.js";import"./IconButton-DWTOtJ52.js";import"./FormControlLabel-3XwJheib.js";import"./MenuItem-CuIuo8np.js";import"./dividerClasses-BiY2d609.js";import"./_IconPopover-1aG3b1zb.js";import"./Chip-Ql9O3aun.js";import"./Divider-CTM8S9Dj.js";import"./Divider-CemJJ6Wh.js";import"./TreeView-CtojhVRp.js";import"./useThemeProps-BowsGwXu.js";import"./Collapse-CDHPxM_N.js";import"./useSlot-RSZxcDJ_.js";import"./AppInfoRow-B-b4XEQG.js";import"./AppSettings-euvhcHhi.js";import"./SvgIcon-ury5YQzT.js";import"./TableRow-C-dHDyK3.js";import"./TableCell-2kqeg-ZR.js";import"./LinearProgress-CkPmAm-N.js";import"./LinearProgress-DWspQSET.js";import"./Spinner-B8w9B477.js";import"./CircularProgress-Bpcy9xeq.js";import"./Dialog-BjU2rSW3.js";import"./DialogContent-b24aC058.js";import"./Button-CgVDEB-f.js";import"./MapToggleButtonPresentational-BlGzR4tE.js";import"./Remove-BvGV8H9W.js";import"./Alert-Dewj0bTT.js";import"./ToggleButton-DZeEWmii.js";import"./ToggleButton-BB7t-J4s.js";import"./ToggleButtonGroup-BiA9UuSt.js";import"./LinkButton-LA6411YK.js";import"./TextField-CmL0AHrj.js";import"./Switch-BDo_8rDv.js";import"./Switch-oYQP8P7N.js";import"./LabeledSwitch-Vf-AJisw.js";import"./RadioGroup-CajsPWEN.js";import"./FormControl-DkXLR7hU.js";import"./FormHelperText-9r7loZH4.js";import"./Tabs-NOxFJG61.js";import"./MenuItem-6sxk0toU.js";import"./AccordionDetails-CuYx0iXK.js";import"./Paper-Cl8KISr9.js";import"./ErrorFallback-BuYh8t03.js";import"./ErrorFallbackText-C7OKWQpp.js";import"./ErrorFallbackWrapper-BF42-cxX.js";import"./Brand-IOllSh90.js";import"./Edit-DNF2J48_.js";const at={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successful just pass a string to `successMsg`"}}}},r={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},e={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var i,s,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const pt=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,pt as __namedExportsOrder,at as default};
