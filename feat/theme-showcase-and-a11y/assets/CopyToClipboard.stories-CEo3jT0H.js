import{a as y}from"./iframe-DMftWpjQ.js";import{C as f}from"./DropdownButton-DIcMJDIN.js";import{B as x}from"./Box-DxOMqWI8.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-BJ7vrGpQ.js";import"./SvgIcon-BqxlpQr2.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DgJFzeuM.js";import"./extendSxProp-BQBq8Ufo.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DlCQiAxV.js";import"./Box-CuG-yDZz.js";import"./Container-B9iKt_1L.js";import"./styled-sLWjAyfV.js";import"./createStyled-DduiQEyZ.js";import"./useThemeProps-kTH-93a7.js";import"./FlexBox-dcuaugZK.js";import"./Stack-CCJluz1e.js";import"./Typography-yZWFoSQS.js";import"./Paper-BWFX18fY.js";import"./CogIcon-D-bSAL3u.js";import"./InfoIcon-EtRiOOWZ.js";import"./ExpandMoreIcon-E4JwSxhz.js";import"./ThemeSwitchRow-D6oWULgM.js";import"./index-C_HrpW8C.js";import"./Text-NRtR4KSk.js";import"./AdapterDayjs-CTqPZcQF.js";import"./useThemeProps-DZWZj2cv.js";import"./Modal-BH1gI4XO.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CNC1Tbto.js";import"./resolveComponentProps-8hQ4M2z1.js";import"./index-DMOWeANf.js";import"./utils-Cttcw_3Z.js";import"./Popover-CY5fyPbP.js";import"./TextField-CUuc5kqU.js";import"./useFormControl-CopSLkUh.js";import"./FormControl-DbcwfQFu.js";import"./ListContext-CA6PQpRK.js";import"./useControlled-8bSxec71.js";import"./createSvgIcon-DlGgZU6C.js";import"./FormHelperText-DVBN11Sz.js";import"./IconButton-CmmWWTSS.js";import"./ButtonBase-CouDHdYV.js";import"./DialogContent-r6OHTw38.js";import"./Button-DVD7topL.js";import"./Chip-CLq4-nC7.js";import"./MenuItem-NEdMCSZh.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-pVfd0O82.js";import"./Chip-BWuEUDu-.js";import"./Divider-DzkzjkIL.js";import"./Divider-CzdWdqy1.js";import"./TreeView-eSNabOVd.js";import"./Collapse-KLUbOUMi.js";import"./useSlot-CC1_x2QG.js";import"./AppInfoRow-BKyyK1JX.js";import"./AppSettings-CCPwkfxt.js";import"./SvgIcon-BTZ06rCa.js";import"./TableRow-CakLbtRf.js";import"./LinearProgress-1ejMra1J.js";import"./Spinner-BZgXNamb.js";import"./Dialog-CJahMWl6.js";import"./MapToggleButtonPresentational-dXHsTOdZ.js";import"./Remove-DSomqL-a.js";import"./Alert-BHdKqpDS.js";import"./ToggleButton-bZ4xMERt.js";import"./LinkButton-CE07GFMt.js";import"./TextField-mqAz_1Y-.js";import"./Switch-C37Whow7.js";import"./LabeledSwitch-2C7CKTT7.js";import"./DatePicker-CrA7bCO-.js";import"./DateTimePicker-BCi3PJ85.js";import"./FormControl-DhDyFZ3h.js";import"./FormHelperText-CeI-BKIk.js";import"./MenuItem-CpKmmeDm.js";import"./AccordionDetails-CH3uaA3P.js";import"./Paper-C5E2b80z.js";import"./ErrorFallback-JrFXQBP8.js";import"./ErrorFallbackText-B03wrKQ3.js";import"./ErrorFallbackWrapper-CEShrWIW.js";import"./Brand-S5MHGTSi.js";import"./Edit-C7iGKUMY.js";const Xo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
