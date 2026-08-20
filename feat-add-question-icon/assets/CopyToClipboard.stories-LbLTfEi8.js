import{j as y}from"./iframe-lbVyLo9M.js";import{C as f}from"./DropdownButton-DodwJLhq.js";import{B as x}from"./Box-DlYuhDE8.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BYJvLZx1.js";import"./SvgIcon-BhjTKujD.js";import"./generateUtilityClass-mLX-m29y.js";import"./styled-thNUQRPl.js";import"./generateUtilityClasses-DGf4tbvL.js";import"./useTheme-CLkEv95-.js";import"./Box-C83oWY3G.js";import"./Container-DLPgUEUh.js";import"./styled-DCbo4I3z.js";import"./createStyled-lowEfwXB.js";import"./useThemeProps-At40PQ24.js";import"./FlexBox-NMVzPqDV.js";import"./Stack-CcM8nxhu.js";import"./Typography-7qJHmYWv.js";import"./Paper-D-csFAd3.js";import"./useThemeProps-CR3q6hIr.js";import"./Text-GZhHB46q.js";import"./AdapterDayjs-Bh746Glk.js";import"./Modal-DR8JHd-z.js";import"./utils-CtBn2Om0.js";import"./TransitionGroupContext-CHRtULwj.js";import"./index-DAZgcoYU.js";import"./resolveComponentProps-Dc14A0Xg.js";import"./Popover-BdniOjWh.js";import"./TextField-VYpRKwSw.js";import"./useFormControl-CZxL2IaN.js";import"./createSvgIcon-V9v0b-rh.js";import"./IconButton-D9SltU1Q.js";import"./ButtonBase-CvSf6vSn.js";import"./DialogContent-CfoP2HP5.js";import"./Button-Bf8_SP8e.js";import"./Chip-CPeHQbdq.js";import"./DateTimePicker-DtUwUzaw.js";import"./Divider-DHhQsNL_.js";import"./AppInfoRow-COyx2En4.js";import"./Chip-Cs6bMZDw.js";import"./Divider-BOL12Syp.js";import"./TreeView-DEjBOrW7.js";import"./Alert-C83Wtki0.js";import"./LinearProgress-D1WH3K-w.js";import"./Spinner-CX2KmoCf.js";import"./Dialog-BJNkPgfD.js";import"./MapToggleButtonPresentational-BtIuW8W8.js";import"./Remove-qUnvA5Qg.js";import"./LinkButton-XIf9yczH.js";import"./TextField-Z8WmXcEs.js";import"./Switch-vGqTkiql.js";import"./DatePicker-NdtGOenD.js";import"./Paper-BJ_QnuCU.js";import"./ErrorFallback-DSQ6d8ue.js";import"./ErrorFallbackText-CXIKZcAb.js";import"./ErrorFallbackWrapper-DbmuJJ7f.js";import"./Brand-BVn3cdyI.js";import"./constants-BK6Qtb1C.js";import"./Edit-DcejEQXi.js";const Mo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
