import{j as y}from"./iframe-lqtTyPDV.js";import{C as f}from"./DropdownButton-BiQZTsSN.js";import{B as x}from"./Box-D9fQMR-m.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CCWXRARu.js";import"./createSvgIcon-pD-T4X64.js";import"./generateUtilityClass-Nor538iS.js";import"./styled-BNSlxa3g.js";import"./generateUtilityClasses-Dcld8p7_.js";import"./useTheme-BKtc1luz.js";import"./Box-VVrcLiMQ.js";import"./Container-CXWOjLTi.js";import"./styled-PDD6VUwM.js";import"./createStyled-DEZqOrhE.js";import"./useThemeProps-ByihHSEs.js";import"./Stack-CRGQbSIw.js";import"./Typography-JvRod9_h.js";import"./Paper-CAMM_sGP.js";import"./useThemeProps-bXg8jihE.js";import"./Text-qBJvQAbh.js";import"./AdapterDayjs-BxMPdu73.js";import"./Modal-C2iMaJrT.js";import"./utils-CDZsqiOr.js";import"./TransitionGroupContext-CP4QTGTc.js";import"./index-Ct7m0A3p.js";import"./resolveComponentProps-D9ysefdV.js";import"./TextField-DU50OXKL.js";import"./useFormControl-BaHyTPGQ.js";import"./IconButton-CFe2D2CK.js";import"./ButtonBase-CG2-1ya1.js";import"./DialogContent-DminlgLj.js";import"./Button-ecopQR6Q.js";import"./Chip-b0N7Bs90.js";import"./DateTimePicker-DkGfB0lr.js";import"./Divider-Sgzys822.js";import"./Chip-B0KPLxd0.js";import"./Divider-CizCOsrH.js";import"./TreeView-Cx3DBEy0.js";import"./Close-B_FscGLy.js";import"./LinearProgress-D91QGpmj.js";import"./Spinner-CoTb4xM3.js";import"./Dialog-B0EJL6jv.js";import"./MapToggleButtonPresentational-BoxmLCzM.js";import"./Remove-BP8dJaea.js";import"./TextField-BiRVulas.js";import"./Switch-UYcRIQvQ.js";import"./DatePicker-Hg41mnHR.js";import"./LinkButton-B5iGNGjh.js";import"./Paper-Cg-Z_8b0.js";import"./ErrorFallback-b5W5Az-f.js";import"./ErrorFallbackText-C_HPDrVM.js";import"./ErrorFallbackWrapper-zYtUSZTF.js";import"./Brand-D_RHUJn0.js";import"./constants-DHZNsyg3.js";import"./Edit-B-6C9sjP.js";const So={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
