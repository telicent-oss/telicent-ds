import{j as y}from"./iframe-dgKlI9Md.js";import{C as f}from"./DropdownButton-BedCI7it.js";import{B as x}from"./Box-RIn1APRp.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D3M5AnEw.js";import"./SvgIcon-GThFSKIF.js";import"./generateUtilityClass-DOmT7Hwm.js";import"./styled-DOJEwqdx.js";import"./generateUtilityClasses-CNKQJTWu.js";import"./useTheme-0XXlxHDI.js";import"./Box-DGWce556.js";import"./Container-LSNj_5rd.js";import"./styled-mh7cvxL0.js";import"./createStyled-DBk8YX-w.js";import"./useThemeProps-C6fVk2nE.js";import"./FlexBox-CnoXqpQZ.js";import"./Stack-KvP8rUUb.js";import"./Typography-DBA6UbDc.js";import"./Paper-CaoeiLVt.js";import"./useThemeProps-DlSmm649.js";import"./Text-KXh24aHT.js";import"./AdapterDayjs-Das5WO4l.js";import"./Modal-CYDWNWXW.js";import"./utils-x4UbiFJu.js";import"./TransitionGroupContext-Dr25D--E.js";import"./index-D-8XNvRj.js";import"./resolveComponentProps-CbFkZYcN.js";import"./Popover-DKZg8BBZ.js";import"./TextField-fJ-QFkPY.js";import"./useFormControl-eLOqNTIp.js";import"./createSvgIcon-D_GIqSq7.js";import"./IconButton-CeqJP0J9.js";import"./ButtonBase-CjbcfLfq.js";import"./DialogContent-h7y08ROY.js";import"./Button-DP44SNZU.js";import"./Chip-CpZicjkg.js";import"./DateTimePicker-oA-pYXoq.js";import"./Divider-qdgCSuxQ.js";import"./AppInfoRow-Bku2mgp3.js";import"./Chip-CzH2_KyY.js";import"./Divider-DBb9wTD7.js";import"./TreeView-C35-BIbW.js";import"./Alert-BxUcojB6.js";import"./LinearProgress-DJNtprYa.js";import"./Spinner-Cb4VzE0-.js";import"./Dialog-C-e18Y_P.js";import"./MapToggleButtonPresentational-Dl9Gipgq.js";import"./Remove-CH3SqBB0.js";import"./LinkButton-CPlF4I6l.js";import"./TextField-BuMvxkqq.js";import"./Switch-BkEvFl_g.js";import"./DatePicker-DbIzemFK.js";import"./Paper-Bfyh5ayX.js";import"./ErrorFallback-BRUof8o9.js";import"./ErrorFallbackText-DeVniLrC.js";import"./ErrorFallbackWrapper-fNToE_as.js";import"./Brand-Bg20RPuw.js";import"./Edit-nZvjTHTg.js";const Lo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
