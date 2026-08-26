import{j as y}from"./iframe-CA_6RkqO.js";import{C as f}from"./DropdownButton-BZtDtOal.js";import{B as x}from"./Box-DRdQdhLP.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DTk_4ZHb.js";import"./SvgIcon-BWAhgByR.js";import"./generateUtilityClass-CfDRvlGw.js";import"./styled-CVefpKE-.js";import"./generateUtilityClasses-C47siXwS.js";import"./useTheme-Dm6Z4O55.js";import"./Box-BW6pEvIo.js";import"./Container-ljR5Mlot.js";import"./styled-BZqq2mi8.js";import"./createStyled-D4eWRD3H.js";import"./useThemeProps-Cd3wv7Xx.js";import"./FlexBox-CNxWriJY.js";import"./Stack-BF2ZTufs.js";import"./Typography-89Tvlrsc.js";import"./Paper-Ec3Q2dVy.js";import"./useThemeProps-Ciz7WQ9r.js";import"./Text-kbO6tKSd.js";import"./AdapterDayjs-D37bSqFv.js";import"./Modal-ClU2RWPM.js";import"./utils-CUE5wzp2.js";import"./TransitionGroupContext-B7OUtgPI.js";import"./index-CZHtQLZq.js";import"./resolveComponentProps-Dn_frYuF.js";import"./Popover-BEGXH3NQ.js";import"./TextField-vpmRkwtN.js";import"./useFormControl-B5eiIyWN.js";import"./createSvgIcon-BmwhwAqn.js";import"./IconButton-DtNtarBg.js";import"./ButtonBase-D6Bx6lP1.js";import"./DialogContent-Bjk6fQxi.js";import"./Button-CtzIpja4.js";import"./Chip-CUcMHjoK.js";import"./DateTimePicker-BFqbfcrX.js";import"./Divider-C7dFHnGB.js";import"./AppInfoRow-CEbLv7hl.js";import"./Chip-Bn4GruJi.js";import"./Divider-Ch-VEHlJ.js";import"./TreeView-B6I62OZ2.js";import"./Alert-fjB33Bay.js";import"./LinearProgress-uTJnSXzv.js";import"./Spinner-CCLxETt1.js";import"./Dialog-CxPCMfoF.js";import"./MapToggleButtonPresentational-5Q31WZ7z.js";import"./Remove-DmcGi_Wa.js";import"./LinkButton-vlyktWjA.js";import"./TextField-X3HuGAf0.js";import"./Switch-M79zMsH0.js";import"./DatePicker-C_Oow28J.js";import"./Paper-BuyoLuFc.js";import"./ErrorFallback-LaiW1HKw.js";import"./ErrorFallbackText-Ck2XCFF1.js";import"./ErrorFallbackWrapper-BumR9vBV.js";import"./Brand-D_DOo81n.js";import"./constants-CcDpWV1i.js";import"./Edit-M3NLeTM0.js";const Mo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
