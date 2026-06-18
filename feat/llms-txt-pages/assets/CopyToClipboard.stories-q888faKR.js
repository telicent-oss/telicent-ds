import{j as y}from"./emotion-react-jsx-runtime.browser.esm-OTCsP_zj.js";import{C as f}from"./DropdownButton-DkBQA_Ub.js";import{B as x}from"./Box-BVltnmec.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-7LYIoTbn.js";import"./UserIcon-Cn55tEQ2.js";import"./createSvgIcon-DU2rVRio.js";import"./defaultTheme-ACnAOKMv.js";import"./styled-Dr6LHSty.js";import"./generateUtilityClasses-CBlNI-gU.js";import"./DefaultPropsProvider-BINl2W1D.js";import"./useTheme-BCfSMqPY.js";import"./useTheme-DmgbyzQG.js";import"./Container-Cpr-ywPw.js";import"./styled-xzbhM0n_.js";import"./createStyled-CsLhtPiI.js";import"./useThemeProps-DhNaUrQ2.js";import"./Stack-_9FQNGpJ.js";import"./Typography-CSCiAqzj.js";import"./Paper-3rHlC0dZ.js";import"./useThemeProps-k0ivW4aO.js";import"./Text-D0lNsqSI.js";import"./AdapterDayjs-Cl81F8SA.js";import"./index-B4OJPA8G.js";import"./Modal-JNcevMIf.js";import"./utils-CXYPeQrV.js";import"./TransitionGroupContext-itkx9jux.js";import"./useEnhancedEffect-oYjd7u20.js";import"./index-DONRZHi-.js";import"./Select-BfRenVFP.js";import"./useFormControl-lkbi0or6.js";import"./useId-Cf3J66lm.js";import"./GlobalStyles-B130YdEm.js";import"./GlobalStyles-Canp8JzW.js";import"./TextField-BklvXUyq.js";import"./IconButton-K5H0oyhF.js";import"./ButtonBase-D1U61Dnt.js";import"./colorManipulator-4CHxWgpo.js";import"./DialogContent-CX0jwU1P.js";import"./Button-6gIpOcku.js";import"./Chip-D4rXNsqT.js";import"./MenuItem-bua5XKnv.js";import"./dividerClasses-Cw9q1-aC.js";import"./UIThemeProvider-4LUh-fR0.js";import"./types-CMP91hxZ.js";import"./ThemeProvider-BUQO26gH.js";import"./Chip-BwAmCpCJ.js";import"./Divider-wVQl8Tit.js";import"./Divider-A3I7BnBV.js";import"./TreeView-CTXybiJL.js";import"./LinearProgress-Bb8hrd7I.js";import"./Spinner-BOxs5Djo.js";import"./Dialog-vILqERHu.js";import"./MapToggleButtonPresentational-86Mslv2I.js";import"./Remove-B14EzRR3.js";import"./TextField-jr6Bp6UA.js";import"./Select-CyedWs7E.js";import"./Switch-CckCM0FO.js";import"./DatePicker-DcCgiJ2j.js";import"./DateTimePicker-Dp4MmL11.js";import"./LinkButton-D9Uz2SFG.js";import"./Paper-CmfYDRfa.js";import"./ErrorFallback-Box0VFpD.js";import"./ErrorFallbackText-BxC3bExW.js";import"./ErrorFallbackWrapper-Dv-Jy562.js";import"./Brand-DN1iXAq-.js";import"./constants-B8FJ2UoY.js";import"./iframe-DzXySzRc.js";import"../sb-preview/runtime.js";import"./Edit-DKn8TmSo.js";const Do={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successful just pass a string to `successMsg`"}}}},r={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},e={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,l,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: "Text for clipboard via WithCustomStyle",
    ariaLabel: "Copy to clipboard button with white color",
    sx: {
      color: "fuchsia",
      backgroundColor: "darkslategrey"
    }
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,h,b;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Io=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,Io as __namedExportsOrder,Do as default};
