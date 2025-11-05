import{j as y}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{C as f}from"./AuthModal-BweaQfgy.js";import{B as x}from"./Box-BszdSfjy.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./Text-CBeXAxhM.js";import"./Typography-DqLej86Z.js";import"./identifier-C6mAUaLB.js";import"./styled-BErHg-7C.js";import"./generateUtilityClasses-Cuk6vP38.js";import"./DefaultPropsProvider-BOzBDHyA.js";import"./constants-DPuUStYg.js";import"./iframe-CcBApFa3.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-GyLrR4NU.js";import"./useTheme-Cg37eTMn.js";import"./GlobalStyles-B_QX4JcH.js";import"./GlobalStyles-D5xpOMhP.js";import"./UserProfile-U6PPuJfm.js";import"./UserIcon-BHVQbi_2.js";import"./SvgIcon-5gifbZ3Q.js";import"./index-BfyspvgH.js";import"./FlexBox-DBRDUZLj.js";import"./styled-BSjilmX5.js";import"./createStyled-BrBbf8qF.js";import"./useThemeProps-43QuDAxK.js";import"./createSvgIcon-Bol9-9si.js";import"./Popover-BpYca5tE.js";import"./utils-C-b4tsXR.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-ZbIfs51-.js";import"./IconButton-IqfnTl6g.js";import"./ButtonBase-C9t-hGNZ.js";import"./Menu-DHuUg7uu.js";import"./index-sTB3RqdK.js";import"./Select-DA9H3h4n.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-BOB3in7k.js";import"./useThemeProps-DWcfj1ju.js";import"./TextField-BTRe_bET.js";import"./colorManipulator-DXzzQmry.js";import"./Button-hINpI61k.js";import"./Chip-CDjOKJwQ.js";import"./TelicentHorizontalSVG-CP1sg2bX.js";import"./FlexGrid-BkekN5zB.js";import"./Container-Cq7J-8WQ.js";import"./DataSetIcon-Cm0wHARM.js";import"./MenuItem-CjZ2Ihro.js";import"./dividerClasses-D3mH6QPz.js";import"./UIThemeProvider-BJ1tYuEB.js";import"./ThemeProvider-zfew0pSd.js";import"./IconButton-bilmwfAO.js";import"./Chip-CNh8tqAF.js";import"./Divider-znOFDjy9.js";import"./Divider-hbCrYSvl.js";import"./TreeView-ChH5rGnF.js";import"./UserProfileContent-CK9uRPZy.js";import"./LinearProgress-Cj7B0DX4.js";import"./Button-BBG5pOsy.js";import"./LinkButton-BgGLg8K5.js";import"./TextField--TK6VeQv.js";import"./Select-DoDVo-ql.js";import"./DatePicker-BHNHf78D.js";import"./DateTimePicker-B-4oNDUL.js";import"./Card-CyosORb7.js";import"./CardActions-q60J-lzQ.js";import"./Popover-Bg0J4ozL.js";import"./Paper-BKrtg6OD.js";import"./ErrorFallback-DIksr2Zc.js";import"./ErrorFallbackText-Cj3I3SFq.js";import"./ErrorFallbackWrapper-D0yAoJ_c.js";import"./MapToggleButtonPresentational-CshO1-3B.js";import"./Remove-Dh6sdo_k.js";import"./Edit-uu0JEZaV.js";const Go={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Jo=["Default","CustomSuccessMessage","CustomStyle","Error"];export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,Jo as __namedExportsOrder,Go as default};
