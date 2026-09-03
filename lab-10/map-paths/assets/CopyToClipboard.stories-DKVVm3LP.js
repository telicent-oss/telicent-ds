import{j as y}from"./iframe-Dy9lMmzB.js";import{C as f}from"./DropdownButton-BrGu84Gz.js";import{B as x}from"./Box-Co6pvyno.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-lIlQD_Ok.js";import"./SvgIcon-CqTEOtHz.js";import"./generateUtilityClass-eiI2zB0n.js";import"./styled-RSvMl9gw.js";import"./generateUtilityClasses-IR8AtaB2.js";import"./useTheme-BclnZfmM.js";import"./Box-D8L85hdW.js";import"./Container-DjBIKTWZ.js";import"./styled-DtITPUZJ.js";import"./createStyled-CMAzb2jS.js";import"./useThemeProps-lwM53F9r.js";import"./FlexBox-BSJBSHE3.js";import"./Stack-B4iL1Uda.js";import"./Typography-C9bsTXqt.js";import"./Paper-5Ojvp1ys.js";import"./useThemeProps-DmFPjoYm.js";import"./Text-BrRsEWjj.js";import"./AdapterDayjs-WZ0psJGR.js";import"./Modal-C4MvL2kI.js";import"./utils-BCqmFNg9.js";import"./TransitionGroupContext-UWO09eUM.js";import"./index-BsTKollK.js";import"./resolveComponentProps-BFMJSbl6.js";import"./Popover-DpPjroTM.js";import"./TextField-DeGygbLG.js";import"./useFormControl-Kb5Mq5P1.js";import"./createSvgIcon-B4cQQdeP.js";import"./IconButton-Cd6JmYd-.js";import"./ButtonBase-CtbPWmI1.js";import"./DialogContent-oaarGkmL.js";import"./Button-hEWvcwcz.js";import"./Chip-DcZ2ybHw.js";import"./DateTimePicker-TVNrZLsO.js";import"./Divider-BWvL84cf.js";import"./AppInfoRow-jj_TJA14.js";import"./Chip-CWm1ngwI.js";import"./Divider-CMTuK0oO.js";import"./TreeView-4GWeRKjj.js";import"./Alert-_fTylV9w.js";import"./LinearProgress-Jc3Fbfut.js";import"./Spinner-COSQ6Iia.js";import"./Dialog-BKq2jPEt.js";import"./MapToggleButtonPresentational-SuPgJWl8.js";import"./Remove-CXwcUTwz.js";import"./LinkButton-DtvFkHE6.js";import"./TextField-CH00GQAj.js";import"./Switch-YLPmESjX.js";import"./DatePicker-51MqrHAP.js";import"./Paper-ByN9AWpV.js";import"./ErrorFallback-D7lBO-St.js";import"./ErrorFallbackText-DxFvtQm8.js";import"./ErrorFallbackWrapper-BbmC-MtB.js";import"./Brand-Lfzxnjkd.js";import"./constants-B7WX-ceA.js";import"./Edit-V_Um_zMs.js";const Mo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successful just pass a string to `successMsg`"}}}},e={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},r={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,l,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: "Text for clipboard via WithCustomStyle",
    ariaLabel: "Copy to clipboard button with white color",
    sx: {
      color: "fuchsia",
      backgroundColor: "darkslategrey"
    }
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,h,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const vo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{e as CustomStyle,t as CustomSuccessMessage,o as Default,r as Error,vo as __namedExportsOrder,Mo as default};
