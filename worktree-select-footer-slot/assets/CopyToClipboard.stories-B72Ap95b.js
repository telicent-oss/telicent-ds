import{j as y}from"./iframe-Crov0WQz.js";import{C as f}from"./DropdownButton-CLtoK2nQ.js";import{B as x}from"./Box-BG0wW1Gw.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BpACv-KD.js";import"./createSvgIcon-YDz-o7-b.js";import"./styled-Iiak7Ogq.js";import"./generateUtilityClasses-YSREvbxX.js";import"./useTheme-B_goZ4qo.js";import"./Container-B68-6-yw.js";import"./styled-CNP8R88q.js";import"./createStyled-BLdT8Qb_.js";import"./useThemeProps-ZmDRkbFp.js";import"./Stack-Bfojjyxu.js";import"./Typography-B9r5TGn1.js";import"./Paper-Dqj2J0bD.js";import"./useThemeProps-BHR99ymZ.js";import"./Text-D0Fnpi2n.js";import"./AdapterDayjs-5PvZCLYQ.js";import"./Modal-Ckwnu49q.js";import"./utils-DmCjym0s.js";import"./TransitionGroupContext-D_iDfzVR.js";import"./index-DKz44-9c.js";import"./TextField-DoWg8ST_.js";import"./useFormControl-nQOCEbZr.js";import"./IconButton-CkgmJ1wq.js";import"./ButtonBase-D84oecVH.js";import"./DialogContent-Bogzx-91.js";import"./Button-CacSTNVY.js";import"./Chip-CTEj_6SL.js";import"./DateTimePicker-CZdkDgZx.js";import"./Divider-B4WphmzU.js";import"./Chip-C1hb46nu.js";import"./Divider-DjIAefNA.js";import"./TreeView-BhCu4_vt.js";import"./LinearProgress-xJR7lhkP.js";import"./Spinner-BFZivWxB.js";import"./Dialog-DoAt61AO.js";import"./MapToggleButtonPresentational-C7M7o9lk.js";import"./Remove-Dh7kVVq0.js";import"./TextField-08-w4XG5.js";import"./Switch-B39EAJit.js";import"./DatePicker-PvBZCpyj.js";import"./LinkButton-CKRF2-uU.js";import"./Paper-DuUVMjJy.js";import"./ErrorFallback-DVSKIMBt.js";import"./ErrorFallbackText-C98aj5QV.js";import"./ErrorFallbackWrapper-CV687E_O.js";import"./Brand-DTDlbVRJ.js";import"./constants-BsbrBYOu.js";import"./Edit-DYqlQ0Co.js";const fo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
