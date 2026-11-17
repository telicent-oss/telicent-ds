import{a as y}from"./iframe-DgB5DOOK.js";import{C as f}from"./UserProfileContent-DWmBNlHz.js";import{B as x}from"./Box-BKgVgTA7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-yhUhh5rC.js";import"./clsx-B-dksMZM.js";import"./styled-C2IgeKa1.js";import"./extendSxProp-BWF_iEjT.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-37dGzeCY.js";import"./TransitionGroupContext-DZPXUZjI.js";import"./MapToggleButtonPresentational-BH1dZTqP.js";import"./Remove-DU6di_qq.js";import"./createSvgIcon-buxlCkbb.js";import"./SvgIcon-B7PwMVYn.js";import"./IconButton-D20y2IYX.js";import"./Paper-CfxavN5N.js";import"./XIcon-VEg9iy4g.js";import"./Stack-DSlyJ0-P.js";import"./styled-CSa8JTl7.js";import"./createStyled-Cr_yrpzs.js";import"./useThemeProps-Cv6lQb1Z.js";import"./Typography-BF7sK5Ae.js";import"./Box-lNHAZIk0.js";import"./Container-C0Xc2FRN.js";import"./FlexBox-rNRJ5qOl.js";import"./Brand-CNlSU-fT.js";import"./IconButton-Cj-3dO6Q.js";import"./LinkButton-K1pKYT9-.js";import"./AppInfoRow-CeJwZqED.js";import"./_IconPopover-ujUl4F4j.js";import"./Popover-H8c48_my.js";import"./utils-C3Jk0TUt.js";import"./index-DQlIAx8_.js";import"./index-HokJ49V1.js";import"./Modal-CTU41rng.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CE999ugD.js";import"./useSlotProps-Jx-sIlO7.js";import"./InfoIcon-D991cygI.js";import"./Text-D7_q6jLQ.js";import"./AppSettings-BNO02vyz.js";import"./CogIcon--qSeQQYv.js";import"./Badge-jcWGJ-ob.js";import"./Badge-SkVSrEOx.js";import"./Chip-BfLzWb3z.js";import"./Chip-BbjdBAAm.js";import"./Divider-BM3QVx1-.js";import"./Divider-B1R26w1K.js";import"./dividerClasses-DLOnW1Qs.js";import"./ThemeSwitchRow-DfVigJG0.js";import"./Skeleton-DalovIMe.js";import"./Skeleton-dAzTvYwV.js";import"./TextField-CWkT05Xq.js";import"./useFormControl-C1QvXYzQ.js";import"./FormControl-C7ixcWY7.js";import"./ListContext-D16S_6sV.js";import"./useControlled-BxoUib7D.js";import"./FormHelperText-B_G7GOx3.js";import"./MenuItem-BpR-NCbk.js";import"./ExpandMoreIcon-GTPNzf5m.js";import"./ListItem-DgR4_kwz.js";import"./Toolbar-D-_K5ffV.js";import"./Close-RAdmLMOk.js";import"./Popper-4C-oHIR9.js";import"./FormControlLabel-BEFCwgAZ.js";import"./Edit-6-OjV0-m.js";import"./SvgIcon-CZ0P8_U4.js";import"./TableRow-BhnodZ9D.js";import"./TableCell-B5sas6rL.js";import"./TreeView-CzefoKm9.js";import"./useThemeProps-B2nAv7Dy.js";import"./index-DW9QV88U.js";import"./Collapse-DbztTgdD.js";import"./Dialog-BRVCmQfd.js";import"./DialogContent-CKLJHH2b.js";import"./Alert-B3-1Er1S.js";import"./useSlot-V0kD_uWO.js";import"./LinearProgress-CauuDUEI.js";import"./LinearProgress-DHQnu2TY.js";import"./Spinner-DNEUjWM6.js";import"./CircularProgress-vEt8I-xb.js";import"./TextField-By1fm5Ld.js";import"./FormControl-CG1fKJho.js";import"./FormHelperText-Cx6ksy42.js";import"./LabeledSwitch-0HSP2kfR.js";import"./Switch-DA9rneG8.js";import"./Switch-DhiRFrM7.js";import"./RadioGroup-BaCjTbVF.js";import"./ToggleButton-B4UHGI52.js";import"./ToggleButton-Bs18IMrD.js";import"./ToggleButtonGroup-D0tbUhZv.js";import"./MenuItem-BIurvtuG.js";import"./Tabs-DQ5Yd--o.js";import"./AccordionSummary-BjeUD95x.js";import"./Paper-Bd2hcL_j.js";import"./ErrorFallback-CRTMDqB9.js";import"./ErrorFallbackText-11peTATx.js";import"./ErrorFallbackWrapper-Bwlh2Dtv.js";const dt={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"copy-to-clipboard-default",ariaLabel:"copy uri"},decorators:g=>y(x,{sx:{margin:"auto"},children:g()})},o={args:{text:"this is a default example string",ariaLabel:"Copy to clipboard button"}},t={args:{text:"Hooray!",successMsg:"Hooray!!"},parameters:{docs:{description:{story:"You can customise the tooltip to display a different message when the copy to clipboard is successful just pass a string to `successMsg`"}}}},r={args:{text:"Text for clipboard via WithCustomStyle",ariaLabel:"Copy to clipboard button with white color",sx:{color:"fuchsia",backgroundColor:"darkslategrey"}}},e={args:{testFailure:!0,text:"This will fail"},parameters:{docs:{description:{story:"You can see below how the tooltip would render in case of an error."}}}},ht=["Default","CustomSuccessMessage","CustomStyle","Error"];var i,s,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: "this is a default example string",
    ariaLabel: "Copy to clipboard button"
  }
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var a,m,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};export{r as CustomStyle,t as CustomSuccessMessage,o as Default,e as Error,ht as __namedExportsOrder,dt as default};
