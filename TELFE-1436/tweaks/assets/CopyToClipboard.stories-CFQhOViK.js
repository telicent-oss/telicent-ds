import{j as y}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{C as f}from"./AuthModal-BYXp2Cdr.js";import{B as x}from"./Box-DR7xjwgg.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./Text-DnbGH9ax.js";import"./Typography-DvrCv4HQ.js";import"./identifier-CCo8HfxA.js";import"./styled-DiVYluCu.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./constants-De-maI9s.js";import"./iframe-C59e0U_G.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-DC9e96ys.js";import"./useTheme-CEgm5wok.js";import"./GlobalStyles-BK1ltzIn.js";import"./GlobalStyles-DdQ_E3CX.js";import"./UserProfile-CJ8B_wRU.js";import"./UserIcon-B0AVfc7u.js";import"./SvgIcon-DDjczThx.js";import"./index-BfyspvgH.js";import"./FlexBox-owEKTX38.js";import"./styled-BEKiHWi7.js";import"./createStyled-9i3u5Rqa.js";import"./useThemeProps-BFLDat3t.js";import"./createSvgIcon-CxivGeKF.js";import"./Modal-DtyJzhmg.js";import"./utils-DW2zNrrJ.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./IconButton-CL6GPvoG.js";import"./ButtonBase-C0n3d_CB.js";import"./Menu-B2LdKtBH.js";import"./index-CXtVKvFt.js";import"./Popover-CwNlqRg9.js";import"./Paper-B-rBeRIm.js";import"./Select-BWOF8ct1.js";import"./useFormControl-CQLCXd-P.js";import"./useId-CkA8naEk.js";import"./Popper-C9fmU3s3.js";import"./TelicentHorizontalSVG-DP7xLAp3.js";import"./FlexGrid-M25hPc65.js";import"./Container-CFeVW3qn.js";import"./DataSetIcon-CzT3Gt8m.js";import"./AdapterDayjs-BO6djNq3.js";import"./useThemeProps-BTBzXMHi.js";import"./TextField-BdKvhqgF.js";import"./FormHelperText-D2-CeYt9.js";import"./colorManipulator-DBPky6cX.js";import"./DialogContent-B9KKlp61.js";import"./Button-DPeHgJ80.js";import"./Chip-B7XAvyWn.js";import"./MenuItem-B5gRYKaL.js";import"./dividerClasses-DixuAXrT.js";import"./UIThemeProvider-DFoAygjS.js";import"./ThemeProvider-BPzF9hu_.js";import"./IconButton-CSCqGkQ5.js";import"./Chip-Jqcc-fVu.js";import"./Divider-HWnn5fVZ.js";import"./Divider-DOeen-K3.js";import"./TreeView-CbQcwoD4.js";import"./UserProfileContent-BkWk_Qx8.js";import"./LinearProgress-CRSreEF6.js";import"./Dialog-BWqAUvqf.js";import"./Button-CI14C0BZ.js";import"./LinkButton-CJcpdsZt.js";import"./TextField-zYoo9ptH.js";import"./Select-Csl_i8IC.js";import"./Autocomplete-B3gZsuks.js";import"./DatePicker-C1Aua9kQ.js";import"./DateTimePicker-BvPbOfvM.js";import"./Card-BWv60QFk.js";import"./CardActions-CCW8za6b.js";import"./Popover-BljOTz_3.js";import"./Paper-BBwh5-3y.js";import"./ErrorFallback-fPXNZKjO.js";import"./ErrorFallbackText-BLCYy_1i.js";import"./ErrorFallbackWrapper-CSpgK55r.js";import"./MapToggleButtonPresentational-DY66EemL.js";import"./Remove-DLpXZYtt.js";import"./Edit-BwFhg13Q.js";const Xo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooaray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successfull just pass a string to  `successMsg`"}}}},r={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},e={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: "Hooray!",
    successMsg: "Hooaray!!"
  },
  parameters: {
    docs: {
      description: {
        story: "You can customise the tooltip to display a different message when the copy to clipboard is successfull just pass a string to  \`successMsg\`"
      }
    }
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var n,l,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Zo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,Zo as __namedExportsOrder,Xo as default};
