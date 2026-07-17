import{j as y}from"./iframe-DjLxm7SD.js";import{C as f}from"./DropdownButton-OdITcuya.js";import{B as x}from"./Box-PIDL4Fit.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DFS2VSDc.js";import"./createSvgIcon-MIeX2BRI.js";import"./generateUtilityClass-BLqluGhu.js";import"./styled-C0jSE3AP.js";import"./generateUtilityClasses-BO81MJJG.js";import"./useTheme-DvVKUnCu.js";import"./Box--iJ_3JNa.js";import"./Container-DRKYHsiA.js";import"./styled-atsIZHYt.js";import"./createStyled-Cc_yoAqX.js";import"./useThemeProps-Fnp1xWzD.js";import"./Stack-CCnHELyK.js";import"./Typography-CofTJ_Fs.js";import"./Paper-Bw5HsGYD.js";import"./useThemeProps-Ewpml6lw.js";import"./Text-CVnCU36g.js";import"./AdapterDayjs-B1X-CvWP.js";import"./Modal-B7a9aff8.js";import"./utils-wz01l5qZ.js";import"./TransitionGroupContext-BU8BL2dP.js";import"./index-DrRIbANR.js";import"./resolveComponentProps-DFK19icQ.js";import"./TextField-OPZ9edjq.js";import"./useFormControl-UyDYT27V.js";import"./IconButton-DVwg49gr.js";import"./ButtonBase-CgGGn6Da.js";import"./DialogContent-CBR7V6gG.js";import"./Button-CS4wg-vH.js";import"./Chip-BpvzB-8r.js";import"./DateTimePicker-D4Hp4gX_.js";import"./Divider-C6mIQ5zR.js";import"./Chip-B8CDxprS.js";import"./Divider-DVlBE3P8.js";import"./TreeView-Co0t44VC.js";import"./Close-C1rysX-W.js";import"./LinearProgress-DeQbd7E0.js";import"./Spinner-BkQfXhtb.js";import"./Dialog-YQhBvj2B.js";import"./MapToggleButtonPresentational-3lb-UE9s.js";import"./Remove-CTK2Ub1o.js";import"./TextField-6mReXCWm.js";import"./Switch-CDyuDDTr.js";import"./DatePicker-aPQ8noSa.js";import"./LinkButton-D9oXM2qx.js";import"./Paper-ChmMIXfx.js";import"./ErrorFallback-ClFzMA-d.js";import"./ErrorFallbackText-vqUAjIHx.js";import"./ErrorFallbackWrapper-Dc3fOI5x.js";import"./Brand-Dvnzdq7_.js";import"./constants-629LYWu7.js";import"./Edit-DojDoZiY.js";const So={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
