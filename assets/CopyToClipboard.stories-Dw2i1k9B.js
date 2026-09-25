import{a as y}from"./iframe-B8lru9Ox.js";import{C as f}from"./DropdownButton-D5bjMSjg.js";import{B as x}from"./Box-D2AU3WA-.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DqrK-S_Y.js";import"./SvgIcon-BgwuaJOO.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-B7kmWUc9.js";import"./extendSxProp-DjHg015s.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-lbsOwaIT.js";import"./Box-DtmlQxFY.js";import"./Container-DOlWnnaB.js";import"./styled-LsKj47KW.js";import"./createStyled-_4klY0ey.js";import"./useThemeProps-DqCYqzYY.js";import"./FlexBox-QL3KD45m.js";import"./Stack-DQqlKiUu.js";import"./Typography-DtJW_51A.js";import"./Paper-4eMZAmsM.js";import"./CogIcon-Ch-cC12G.js";import"./InfoIcon-buuMzVkD.js";import"./ThemeSwitchRow-D81wGVaD.js";import"./index-DX_1Zw-E.js";import"./Text-Cy_FjCVa.js";import"./AdapterDayjs-B05HZLDs.js";import"./useThemeProps-DVQSamuW.js";import"./Modal-DMbdFXDI.js";import"./utils-D4kUvPaj.js";import"./TransitionGroupContext-Bg30LDe0.js";import"./index-BhBzwTqv.js";import"./resolveComponentProps-B4S3ggFk.js";import"./Popover-DGL3i7op.js";import"./TextField-Eij0i_Vp.js";import"./useFormControl-CLg-uBwy.js";import"./FormControl-DRfKH_qZ.js";import"./useControlled-D13dP5S1.js";import"./createSvgIcon-Cs4F3KcN.js";import"./FormHelperText-Bbq3OgSk.js";import"./IconButton-DUSx-Z4B.js";import"./ButtonBase-B1n-NBaA.js";import"./DialogContent-Bv7qBY9o.js";import"./Button-B6b6ie_Y.js";import"./Chip-DS6faPIl.js";import"./DateTimePicker-B2f9rqpT.js";import"./Divider-BythBDcI.js";import"./_IconPopover-BtykrXQA.js";import"./Chip-C7-LDCye.js";import"./Divider-CGpXJFUY.js";import"./TreeView-Skztq0S6.js";import"./Alert-CutSt2-9.js";import"./AppInfoRow-CnKSgvK0.js";import"./AppSettings-DhijNEqA.js";import"./TableRow-CSSGEL79.js";import"./LinearProgress-BbwxtDnN.js";import"./Spinner-DZRjnsts.js";import"./Dialog-BXhz5J8P.js";import"./MapToggleButtonPresentational-D0yGj-7g.js";import"./Remove-D_OeaEKR.js";import"./LinkButton-BR4a1XmD.js";import"./TextField-D7q2BR5w.js";import"./Switch-DP0Ivfww.js";import"./LabeledSwitch-0Oeg2Pzv.js";import"./DatePicker-BayJyfOL.js";import"./FormControl-z0pYS_Fc.js";import"./FormHelperText-BbhR6ctA.js";import"./Paper-CkTdphIQ.js";import"./ErrorFallback-BOH60sVX.js";import"./ErrorFallbackText-CjuRVe4b.js";import"./ErrorFallbackWrapper-CHBRDu9p.js";import"./Brand-BQ4MZmxe.js";import"./Edit-XXHTxPCB.js";const _o={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
