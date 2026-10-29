import{a as y}from"./iframe-C1kADl7K.js";import{C as f}from"./EntityList-DD__byuN.js";import{B as x}from"./Box-BdLyxJDN.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-0Zk8Z1wf.js";import"./Stack-VS7yGLX2.js";import"./styled-B_lTjOn2.js";import"./extendSxProp-A80SNn2E.js";import"./clsx-B-dksMZM.js";import"./styled-Dqs76Ca-.js";import"./createStyled-Cjai_X-W.js";import"./useThemeProps-Ceyy6DTc.js";import"./composeClasses-fLhin0tj.js";import"./Text-HgubeblD.js";import"./Typography-B2gj4f-z.js";import"./ListContext-CpKQvUa4.js";import"./ListItem-zqYHDaok.js";import"./FormControl-FAVJKkDC.js";import"./useFormControl-DZcbumU_.js";import"./TransitionGroupContext-DqUd00ju.js";import"./resolveComponentProps-CH300SQ3.js";import"./ButtonBase-NZH3pNGk.js";import"./Toolbar-BXcFouCQ.js";import"./TextField-LvDA3ZY0.js";import"./Modal-ZwwWAhia.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-Ddp69iyh.js";import"./index-7_0JHsY4.js";import"./index-CSdfPHX6.js";import"./utils-DhhX_lJH.js";import"./Popover-BhjfhAkg.js";import"./Paper-DQDiDue-.js";import"./useControlled-CMijF2lP.js";import"./createSvgIcon-vxqAnrWb.js";import"./SvgIcon-Dgf8Yk0z.js";import"./FormHelperText-Ctz0a05h.js";import"./Close-DlnbITpg.js";import"./Popper-BIvXmWfM.js";import"./Badge-DVEzrCrb.js";import"./Chip-Cday2RBB.js";import"./IconButton-D9H-eKUV.js";import"./FormControlLabel-DE2FMvJ1.js";import"./MenuItem-An3zk10d.js";import"./dividerClasses-B_31kY5s.js";import"./Button-CRAaBK8B.js";import"./MapToggleButtonPresentational-FOs4i9Kd.js";import"./Remove-Bj49Kl6q.js";import"./ExpandLessIcon-BAbK8V4h.js";import"./Box-LsPv36hu.js";import"./Container-BJFXwx0J.js";import"./CogIcon-BR-e7jH6.js";import"./InfoIcon-CR0eptQ5.js";import"./ExpandMoreIcon-Ca-rTBJg.js";import"./ThemeSwitchRow-DggDMvDb.js";import"./index-BeWUlcg2.js";import"./IconButton-D5lK2i8o.js";import"./Badge-CFK-UBwA.js";import"./Chip-Dl8h3Hwb.js";import"./Divider-f5jacwQy.js";import"./Divider-CijklUH2.js";import"./TreeView-BNkh8rg4.js";import"./useThemeProps-V4VNHFY4.js";import"./Collapse-D-lGiZGf.js";import"./useSlot-DWlSKb9c.js";import"./AppInfoRow-C2KGKin4.js";import"./_IconPopover-BigTk8_r.js";import"./AppSettings-Ce1ekPQV.js";import"./SvgIcon-DjNXdhgA.js";import"./TableRow-Cp9U1s9E.js";import"./TableCell-YjjddMcy.js";import"./Skeleton-Dd-aKLDg.js";import"./Skeleton-Cw8vu2zv.js";import"./Edit-B0xnlOWG.js";import"./LinearProgress-D7LbuYfT.js";import"./LinearProgress-Cc3KIWRO.js";import"./Spinner-oxy8AqCs.js";import"./CircularProgress-CPCux3_H.js";import"./Dialog-CJUISWAB.js";import"./DialogContent-Dmn_sdtG.js";import"./Alert-B6r98CIF.js";import"./ToggleButton-CltJGPg5.js";import"./ToggleButton-D0NaummI.js";import"./ToggleButtonGroup-CjMZ_ebh.js";import"./LinkButton-DYifi3rJ.js";import"./TextField-Ls5lKTbc.js";import"./Switch-vKlz1c9P.js";import"./Switch-Bxq9Tkvu.js";import"./LabeledSwitch-DORL5yab.js";import"./RadioGroup-BMjLAN0C.js";import"./FormControl-Ckwgi1a3.js";import"./FormHelperText-CyMEtxqf.js";import"./Tabs-a25RXXRz.js";import"./MenuItem-YUdwQe2h.js";import"./AccordionDetails-C7SPSNj5.js";import"./Paper-Dv5b5qFz.js";import"./ErrorFallback-2Hmi_7YV.js";import"./ErrorFallbackText-Bksmpx64.js";import"./ErrorFallbackWrapper-dwx0rRDf.js";import"./Brand-DxKKSwRE.js";const dt={title:"Buttons/CopyToClipboard",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
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
