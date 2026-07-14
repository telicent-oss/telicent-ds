import{j as y}from"./iframe-BfEsncEF.js";import{C as f}from"./DropdownButton-99vgIkCV.js";import{B as x}from"./Box-CtVv9OHw.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DAdv8Ixp.js";import"./createSvgIcon-C6teTnyS.js";import"./generateUtilityClass-DLTO8EZ0.js";import"./styled-CKEjpOwx.js";import"./generateUtilityClasses-CgDs_uOe.js";import"./useTheme-BD06mfPU.js";import"./Box-ChCTlzLQ.js";import"./Container-DHCExKqq.js";import"./styled-D7FRfLSG.js";import"./createStyled-KEG0ma0P.js";import"./useThemeProps-D2PMoY2V.js";import"./Stack-DB3Y16n1.js";import"./Typography-Cur-qBxx.js";import"./Paper-CmIu2cj4.js";import"./useThemeProps-j1RL-BpF.js";import"./Text-BMw1ybWa.js";import"./AdapterDayjs-D6qtZrEv.js";import"./Modal-BoRvpCnD.js";import"./utils-D9P5YpBK.js";import"./TransitionGroupContext-BiIjqEy8.js";import"./index-CuxFIe6q.js";import"./resolveComponentProps-2Wttismo.js";import"./TextField-BV7Va00E.js";import"./useFormControl-3m3RTCoN.js";import"./IconButton-scd69Lv3.js";import"./ButtonBase-CyDfjua2.js";import"./DialogContent-orjmG92r.js";import"./Button-jK3vDH7L.js";import"./Chip-C3EaWfE-.js";import"./DateTimePicker-C-sZiwTj.js";import"./Divider-BDyVO8zM.js";import"./Chip-wEw5ZNvW.js";import"./Divider-Berqrx4H.js";import"./TreeView-D2h7huiz.js";import"./Close-1c413Acz.js";import"./LinearProgress-4SIHWNA8.js";import"./Spinner-p-63cFPN.js";import"./Dialog-BfMJ9NKL.js";import"./MapToggleButtonPresentational-Bgmt2_LX.js";import"./Remove-DoXNBLDf.js";import"./TextField-M5Osf9JN.js";import"./Switch-C_gUrCjS.js";import"./DatePicker-D3jVMaej.js";import"./LinkButton-DybG3JjG.js";import"./Paper-VpNf2qxV.js";import"./ErrorFallback-Dn6So0DV.js";import"./ErrorFallbackText-DoD_00IC.js";import"./ErrorFallbackWrapper-DKy8QON8.js";import"./Brand-B8b8xuEA.js";import"./constants-C1bu_m5W.js";import"./Edit-CfOidwdt.js";const So={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const ko=["Default","CustomSuccessMessage","CustomStyle","Error"];export{e as CustomStyle,t as CustomSuccessMessage,o as Default,r as Error,ko as __namedExportsOrder,So as default};
