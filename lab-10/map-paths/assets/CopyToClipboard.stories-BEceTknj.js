import{j as y}from"./iframe-CXB2IX9t.js";import{C as f}from"./DropdownButton-C1jDm6jv.js";import{B as x}from"./Box-bafqIvLg.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-tOiTwA8r.js";import"./SvgIcon-CwBokYLN.js";import"./generateUtilityClass-CdhvpF3G.js";import"./styled-CMEgBY1n.js";import"./generateUtilityClasses-CgJ4jqTp.js";import"./useTheme-BMYaATSr.js";import"./Box-BSqQDB3u.js";import"./Container-BUEVTMEh.js";import"./styled-DmUfiW7Q.js";import"./createStyled-Do31eGUx.js";import"./useThemeProps-jNrCv5DZ.js";import"./FlexBox-CThdpFpe.js";import"./Stack-h7isVLl6.js";import"./Typography-CAworhua.js";import"./Paper-Dmj_mB_H.js";import"./useThemeProps-DAvhqw3z.js";import"./Text-_gsQBTqi.js";import"./AdapterDayjs-CGu4mZG8.js";import"./Modal-CgpksphL.js";import"./utils-C4KBlBGM.js";import"./TransitionGroupContext-DC9oPPsH.js";import"./index-Bx8CDGnS.js";import"./resolveComponentProps-Dmvi7OpY.js";import"./Popover-Bdaq__GA.js";import"./TextField-QRxXOwy4.js";import"./useFormControl-CAw_IGSe.js";import"./createSvgIcon-DkE4ohbY.js";import"./IconButton-Izyr0r39.js";import"./ButtonBase-fOYFL5ht.js";import"./DialogContent-DEXruO2j.js";import"./Button-eVymgILY.js";import"./Chip-eAos9up9.js";import"./DateTimePicker-CtugMVBl.js";import"./Divider-DASAfeDG.js";import"./AppInfoRow-11o7PtV_.js";import"./Chip-B_xrXjF2.js";import"./Divider-D-9YKLwP.js";import"./TreeView-DC0SN0Mf.js";import"./Alert-gjH-WqLd.js";import"./LinearProgress-B1yRzRdM.js";import"./Spinner-BV433BqQ.js";import"./Dialog-BTtFGHXV.js";import"./MapToggleButtonPresentational-Da5dJlDS.js";import"./Remove-SeAzckPw.js";import"./LinkButton-CO7_5Lrn.js";import"./TextField-BqQgEhIG.js";import"./Switch-D2kUw3CV.js";import"./DatePicker-BHkSTqU8.js";import"./Paper-rsk4XmlU.js";import"./ErrorFallback-CuM3ix8m.js";import"./ErrorFallbackText-W_ZyXVu0.js";import"./ErrorFallbackWrapper-Bl7OMJyc.js";import"./Brand-BrbhTRUI.js";import"./Edit-D1Uuwsp0.js";const Lo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Mo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{e as CustomStyle,t as CustomSuccessMessage,o as Default,r as Error,Mo as __namedExportsOrder,Lo as default};
