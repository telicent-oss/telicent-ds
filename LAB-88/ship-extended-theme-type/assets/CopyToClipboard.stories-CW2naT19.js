import{j as y}from"./iframe-BoGmtiqi.js";import{C as f}from"./DropdownButton-9Xj5t7HG.js";import{B as x}from"./Box-BLhnI6lR.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D75N07sQ.js";import"./createSvgIcon-BsGvT_Gg.js";import"./generateUtilityClass-DYiHiqeZ.js";import"./styled-B8RB16F4.js";import"./generateUtilityClasses-BfoAhINv.js";import"./useTheme-Bt6YqtiY.js";import"./Box-CbZaWvDN.js";import"./Container-BbQvdPgj.js";import"./styled-_ew7vjUr.js";import"./createStyled-BhHOUunM.js";import"./useThemeProps-EcFwFAXV.js";import"./Stack-DbUHIhyW.js";import"./Typography-Dqfx75Vr.js";import"./Paper-Ds8lE9E_.js";import"./useThemeProps-BU_zzqaP.js";import"./Text-BkhkcLQ4.js";import"./AdapterDayjs-DhXCFc3d.js";import"./Modal-YkTh51uo.js";import"./utils-EUvM7u40.js";import"./TransitionGroupContext-CCztK8Kk.js";import"./index-BTYKHUkg.js";import"./resolveComponentProps-BPxYzwMf.js";import"./TextField-DPpR00-L.js";import"./useFormControl-C2VNDp8l.js";import"./IconButton-Dn0-eezg.js";import"./ButtonBase-BSa7XpmR.js";import"./DialogContent-DO755nYy.js";import"./Button-D8B8-owY.js";import"./Chip-DKVjHm47.js";import"./DateTimePicker-C_8oxirJ.js";import"./Divider-CSlgSMAF.js";import"./Chip-DppDhca0.js";import"./Divider-CcBzd5UP.js";import"./TreeView-WVY7m-Dp.js";import"./Close-DEil8FH7.js";import"./LinearProgress-iD2FIEM-.js";import"./Spinner-Cw7U4Ywu.js";import"./Dialog-DDcXchB3.js";import"./MapToggleButtonPresentational-CYRGxPPM.js";import"./Remove-Cj_C0DEH.js";import"./TextField-CdX8-_-1.js";import"./Switch-CC_HtqMW.js";import"./DatePicker-BHvgUPK0.js";import"./LinkButton-Do56arYd.js";import"./Paper-Folpf_uw.js";import"./ErrorFallback-Lo0r634_.js";import"./ErrorFallbackText-UdARBjRi.js";import"./ErrorFallbackWrapper-C3xuKd4S.js";import"./Brand-BKGj_y_E.js";import"./constants-B6Vi70Vn.js";import"./Edit-BE6zqKXG.js";const So={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
