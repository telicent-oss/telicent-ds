import{a as y}from"./iframe-COFs_UtR.js";import{C as f}from"./DropdownButton-DdQkmJUC.js";import{B as x}from"./Box-DSZohf0j.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BFtUc4n_.js";import"./SvgIcon-Cu8kR4gr.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DXI8L4mD.js";import"./extendSxProp-BfveVk5X.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-Br9ekNhD.js";import"./Box-BEb_3Tji.js";import"./Container-D004PVc3.js";import"./styled-DsoO9eq7.js";import"./createStyled-btN_05Dm.js";import"./useThemeProps-C1YLMFu1.js";import"./FlexBox-CM3pIGUP.js";import"./Stack-Udab0hUQ.js";import"./Typography-DDyWDEsv.js";import"./Paper-B8rmAYsL.js";import"./CogIcon-DOgitz6v.js";import"./InfoIcon-x18FY27k.js";import"./ThemeSwitchRow-D9BYjnUD.js";import"./index-CLjgFykj.js";import"./Text-DRb1poC2.js";import"./AdapterDayjs-C5Ouz9-c.js";import"./useThemeProps-B3b-1bce.js";import"./Modal-D75gtkH-.js";import"./utils-CkqtT2AM.js";import"./TransitionGroupContext-DualJ8j1.js";import"./index-VPMfSmH7.js";import"./resolveComponentProps-HkkRA5J0.js";import"./Popover-B7jPgFGm.js";import"./TextField-CbdZofsN.js";import"./useFormControl-CMXAxTns.js";import"./FormControl-CYTfQVUB.js";import"./useControlled-D1cEG3pG.js";import"./createSvgIcon-C2hSwNby.js";import"./FormHelperText-pSG34NeB.js";import"./IconButton-CdDcys5a.js";import"./ButtonBase-CdL6rHd2.js";import"./DialogContent-Bg1OWUuV.js";import"./Button-zSX_KHde.js";import"./Chip-BvLE5o4D.js";import"./DateTimePicker-D_pIcGw1.js";import"./Divider-CEy0w4OC.js";import"./_IconPopover-DMMWxGzb.js";import"./Chip-A07BHzeG.js";import"./Divider-CZSVcPjF.js";import"./TreeView-m4trFAYo.js";import"./Alert-D-nOd5MK.js";import"./AppInfoRow-B60RiNSZ.js";import"./AppSettings-BOKLsdFo.js";import"./TableRow-sL2cRuc0.js";import"./LinearProgress-CXvQl4fD.js";import"./Spinner-J2JsTlyl.js";import"./Dialog-Djic2CFV.js";import"./MapToggleButtonPresentational-DeY3mUq6.js";import"./Remove-CdEeIubw.js";import"./LinkButton-CKtknzFJ.js";import"./TextField-CzTYTlCu.js";import"./Switch-5JMBQZns.js";import"./LabeledSwitch-e4hrpLv0.js";import"./DatePicker-DSnxmH6o.js";import"./FormControl-CuWG66iZ.js";import"./FormHelperText-Dzx1WlCL.js";import"./Paper-D-Oim7GD.js";import"./ErrorFallback-TQb8da9R.js";import"./ErrorFallbackText-C8RcO45_.js";import"./ErrorFallbackWrapper-D42w-3GQ.js";import"./Brand-Bs80UuC1.js";import"./Edit-BOV9wVf0.js";const _o={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,l,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const zo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,zo as __namedExportsOrder,_o as default};
