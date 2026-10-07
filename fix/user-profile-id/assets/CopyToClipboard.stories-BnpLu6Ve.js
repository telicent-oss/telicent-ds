import{a as y}from"./iframe-DuvuyOYT.js";import{C as f}from"./DropdownButton-Cgp0ynRQ.js";import{B as x}from"./Box-CdEzcdGG.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-lDlqNob7.js";import"./SvgIcon-3Tw63ijk.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-Cho-jsTU.js";import"./extendSxProp-JkKasx3H.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DvEY6SKk.js";import"./Box-B0L08xCP.js";import"./Container-UrugBBKw.js";import"./styled-DgGNM0V5.js";import"./createStyled-BKTeOdVL.js";import"./useThemeProps-BobYEJQ-.js";import"./FlexBox-TPzjGHTu.js";import"./Stack-BvZMuuuV.js";import"./Typography-DktY0xgL.js";import"./Paper-DUkfPqTN.js";import"./CogIcon-C7ffmALX.js";import"./InfoIcon-1q2hApFd.js";import"./ExpandMoreIcon-Bk88I7pG.js";import"./ThemeSwitchRow-CSFvN-ub.js";import"./index-CI6Kqv0h.js";import"./Text-L7vd9pUz.js";import"./AdapterDayjs-2T0rZWQj.js";import"./useThemeProps--eCMneWE.js";import"./Modal-ztgM1uVX.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-hN8qFaVQ.js";import"./resolveComponentProps-3edEfYXu.js";import"./index-Bas_o1qY.js";import"./utils-B4ukibcw.js";import"./Popover-BOr5Tnx-.js";import"./TextField-CUB3zYB0.js";import"./useFormControl-B7qRo7M3.js";import"./FormControl-B_bhgqKA.js";import"./ListContext-DBsT2SYb.js";import"./useControlled-ebES1RRU.js";import"./createSvgIcon-D8oPFoN7.js";import"./FormHelperText-DHwUp4cY.js";import"./IconButton-rZ6cns_p.js";import"./ButtonBase-B-XK-vT0.js";import"./DialogContent-D43DrM7u.js";import"./Button-BnMbhCon.js";import"./Chip-DXBg8N5K.js";import"./MenuItem-DqsdRt18.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-Ck2hZc1U.js";import"./Chip-C-mRw_Vp.js";import"./Divider-BcYVCAXY.js";import"./Divider-D68Fa2cD.js";import"./TreeView-DqxVlk-o.js";import"./Collapse-BraLEtjm.js";import"./useSlot-C-CG0yuW.js";import"./AppInfoRow-D2P6hF0a.js";import"./AppSettings-BOXvpGNS.js";import"./SvgIcon-Bc8kLn_o.js";import"./TableRow-gyTKCCh4.js";import"./LinearProgress-dxBLqzdG.js";import"./Spinner-Ed6-sLfr.js";import"./Dialog-DoKSgzIK.js";import"./MapToggleButtonPresentational-DoCeO59m.js";import"./Remove-IX44AOl9.js";import"./Alert-BZ_em7ms.js";import"./ToggleButton-DXPBOEid.js";import"./LinkButton-C6Iwaywt.js";import"./TextField-BbDqVZmX.js";import"./Switch-DAw3yXht.js";import"./LabeledSwitch-D25ybaX8.js";import"./DatePicker-Br58-B3a.js";import"./DateTimePicker-BgSSeO5r.js";import"./FormControl-DiFEjGcX.js";import"./FormHelperText-DzVT_Kzu.js";import"./MenuItem-Db2sbs9g.js";import"./AccordionDetails---llt0mU.js";import"./Paper-D2SNeHbc.js";import"./ErrorFallback-C6Uj6zhy.js";import"./ErrorFallbackText-CoG67Tay.js";import"./ErrorFallbackWrapper-kKw7iFhr.js";import"./Brand-Bj9k9vyT.js";import"./Edit-DPnzdP9f.js";const Xo={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
