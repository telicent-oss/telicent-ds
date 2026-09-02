import{j as y}from"./iframe-PEp56x0L.js";import{C as f}from"./DropdownButton-DIhkXD6k.js";import{B as x}from"./Box-B6o03S8c.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D5IxtVu8.js";import"./SvgIcon-Sjk8HnLS.js";import"./generateUtilityClass-ClfZNa_Z.js";import"./styled-DLDrBRHj.js";import"./generateUtilityClasses-DyOVJn4A.js";import"./useTheme-BSZw5MN3.js";import"./Box-BK9nt8mC.js";import"./Container-BIc8O_Mt.js";import"./styled-Bi96YKYe.js";import"./createStyled-C7aUgp1f.js";import"./useThemeProps-Cns6hruQ.js";import"./FlexBox-DO_yedUE.js";import"./Stack-DOKcr6kC.js";import"./Typography-BuaG1Q_e.js";import"./Paper-DH1tTpJY.js";import"./useThemeProps-BluO84mO.js";import"./Text-BE9OT0g0.js";import"./AdapterDayjs-Dl03QCHE.js";import"./Modal-BiN3QZLT.js";import"./utils-CjMfhMWa.js";import"./TransitionGroupContext-AlRG3TLe.js";import"./index-ChOmoK9v.js";import"./resolveComponentProps-BOHALUfl.js";import"./Popover-CbB3GNQq.js";import"./TextField-CsyMD93w.js";import"./useFormControl-CmlejeOA.js";import"./createSvgIcon-B5D28-yf.js";import"./IconButton-Bty9UGTd.js";import"./ButtonBase-DfDt7dR7.js";import"./DialogContent-DdWBBj2i.js";import"./Button-C-dOB-9O.js";import"./Chip-BzXyx1AI.js";import"./DateTimePicker-BlxDUfXp.js";import"./Divider-CPPkD8Ie.js";import"./AppInfoRow-CSs3ltLs.js";import"./Chip-xsskzt6u.js";import"./Divider-DFIJxqAs.js";import"./TreeView-Dc7Dm28S.js";import"./Alert-DH9l2_TQ.js";import"./LinearProgress-B8IpbQWX.js";import"./Spinner-C87LgWra.js";import"./Dialog-oL1MMI-D.js";import"./MapToggleButtonPresentational-BtNkUaS3.js";import"./Remove--QcwsUg6.js";import"./LinkButton-BxGp1dVi.js";import"./TextField-C_MLZHVa.js";import"./Switch-GGOdHWhI.js";import"./DatePicker--hD8iESL.js";import"./Paper-C-HgjC5-.js";import"./ErrorFallback-D4sVfazA.js";import"./ErrorFallbackText-C2TGfnqH.js";import"./ErrorFallbackWrapper-Bex9JT82.js";import"./Brand-Bq5i3QYE.js";import"./constants-5heSMDpw.js";import"./Edit-SjiPNWdK.js";const Mo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
