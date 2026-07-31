import{j as y}from"./iframe-CEWiRzw6.js";import{C as f}from"./DropdownButton-D5zAe562.js";import{B as x}from"./Box-B9TS0c-T.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-72JnTjY2.js";import"./createSvgIcon-BAc5XkB5.js";import"./styled-BMacbev-.js";import"./generateUtilityClasses-Cw_0ODav.js";import"./useTheme-BvI3wAVy.js";import"./Container-DTFPg4no.js";import"./styled-BBOfX3DR.js";import"./createStyled-BmFIYWCc.js";import"./useThemeProps-BfTjzlrr.js";import"./Stack-eaccBTma.js";import"./Typography-Ct9CX6dI.js";import"./Paper-Dpz_fFsE.js";import"./useThemeProps-BifiOOpz.js";import"./Text-Dp4zv4uS.js";import"./AdapterDayjs-DKU0gh2u.js";import"./Modal-BQhHhnX1.js";import"./utils-l9xoT8cx.js";import"./TransitionGroupContext-BMjDgQGH.js";import"./index-BV2l58Ww.js";import"./TextField-yl0ILouP.js";import"./useFormControl-CEp6dWZX.js";import"./IconButton-DX3o1mfc.js";import"./ButtonBase-DBR6Y10-.js";import"./DialogContent-BO2JCZn7.js";import"./Button-C95QZql4.js";import"./Chip-BIzlRnt1.js";import"./DateTimePicker-CLBYXH6l.js";import"./Divider-C3q8yTWy.js";import"./Chip-lJpclgZf.js";import"./Divider-CGtdrDdv.js";import"./TreeView-C7kXjfir.js";import"./LinearProgress-C909keVa.js";import"./Spinner-D6JI1MNv.js";import"./Dialog-D5TmvNsl.js";import"./MapToggleButtonPresentational-DcEVZk3p.js";import"./Remove-DEwthPW7.js";import"./TextField-BT8Xt3Sl.js";import"./Switch-28k243sq.js";import"./DatePicker-GkMLM4rl.js";import"./LinkButton-BQLavjxu.js";import"./Paper-DLWLBnlh.js";import"./ErrorFallback-CGk6Dun0.js";import"./ErrorFallbackText-DHFTb4mH.js";import"./ErrorFallbackWrapper-CTHNPdE-.js";import"./Brand-DHhfrOsC.js";import"./constants-DWn7Y7Mg.js";import"./Edit-BiEqD8O-.js";const fo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successful just pass a string to `successMsg`"}}}},e={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},r={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const xo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{e as CustomStyle,t as CustomSuccessMessage,o as Default,r as Error,xo as __namedExportsOrder,fo as default};
