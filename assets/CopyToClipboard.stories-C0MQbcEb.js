import{j as y}from"./iframe-CzCkUhLB.js";import{C as f}from"./DropdownButton-pqytKPlf.js";import{B as x}from"./Box-BGVnL9Ww.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D2XJ4u-D.js";import"./createSvgIcon-C5AbB3qG.js";import"./generateUtilityClass-BJmbtkIz.js";import"./styled-BAICCbW2.js";import"./generateUtilityClasses-DcHQ8wPZ.js";import"./useTheme-D8VtF-T3.js";import"./Box-ChoQNki_.js";import"./Container-CevBIhIW.js";import"./styled-BxT8txyJ.js";import"./createStyled-CnaTqEJw.js";import"./useThemeProps-BolcGYv-.js";import"./Stack-BQ9Nq0wB.js";import"./Typography-C4jf0x9_.js";import"./Paper-BitHaSdO.js";import"./useThemeProps-DU8Uvr2K.js";import"./Text-CrtF-KKD.js";import"./AdapterDayjs-BpTj0bJ_.js";import"./Modal-DIeDBBDO.js";import"./utils-DKTt1Dtk.js";import"./TransitionGroupContext-DMmZE5A7.js";import"./index-DsxJ_3S5.js";import"./resolveComponentProps-Cbl6fkow.js";import"./TextField-D7nA1rxz.js";import"./useFormControl-DtEaYh3d.js";import"./IconButton-DxOsamAP.js";import"./ButtonBase-C1jEsrEk.js";import"./DialogContent-ChmWl_kd.js";import"./Button-nVc9Q04c.js";import"./Chip-Bpfp1uo7.js";import"./DateTimePicker-CvUf-KCh.js";import"./Divider-Dhatnav_.js";import"./Chip-CiH2_6GH.js";import"./Divider-CY_WcVt5.js";import"./TreeView-DImXIC-1.js";import"./Close-ufy7FO6S.js";import"./LinearProgress-Bi56K1d1.js";import"./Spinner-DnNrdg_H.js";import"./Dialog-D71AnQMa.js";import"./MapToggleButtonPresentational-CKn0zbRc.js";import"./Remove-D-VYR3BE.js";import"./TextField-DWYxHpkX.js";import"./Switch-DeHO8LDM.js";import"./DatePicker-D79epJYE.js";import"./LinkButton-BEZRiMwC.js";import"./Paper-WtLvzPxM.js";import"./ErrorFallback-Biy0HDIH.js";import"./ErrorFallbackText-BbEDFHSR.js";import"./ErrorFallbackWrapper-BH2ujPyJ.js";import"./Brand-rCLVFpN1.js";import"./constants-SYLv77sP.js";import"./Edit-CNP1jkFH.js";const So={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
