import{b as a,a as r,F as B}from"./iframe-Cq2F8nnt.js";import{B as t}from"./EntityList-DaLKgoBW.js";import{D as n}from"./ExpandLessIcon-Baa6e0mA.js";import{f as G}from"./figmaDesign-CKKXRVNK.js";import"./Box-CAEYLSso.js";import"./Container-DqN7QDyr.js";import{F as H}from"./FlexBox-C04F2Oi9.js";import{B as K}from"./Box-BQK-RQwY.js";import"./preload-helper-C1FmrZbK.js";import"./Text-CBOSUAEh.js";import"./Typography-BwTJfg_0.js";import"./clsx-B-dksMZM.js";import"./styled-BFu-il5r.js";import"./extendSxProp-C_3gOtzH.js";import"./composeClasses-fLhin0tj.js";import"./ListContext-BAusblW9.js";import"./ListItem-DKE093t7.js";import"./FormControl-BUNS3ShE.js";import"./useFormControl-CV4aeut4.js";import"./TransitionGroupContext-GhvSAu4t.js";import"./resolveComponentProps-Cqm51eMl.js";import"./ButtonBase-Dgq-9fM-.js";import"./Toolbar-oXmRnOPk.js";import"./TextField-DwlpbE60.js";import"./Modal-C_ZAcMul.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-Cvu7cjI6.js";import"./index-Yf-oiQ9v.js";import"./utils-B_pcJLAo.js";import"./Popover-CXsS9GGj.js";import"./Paper-u6GRQMwm.js";import"./useControlled-B1ajGRtS.js";import"./createSvgIcon-1goxyuUk.js";import"./SvgIcon-TnW6j3SK.js";import"./FormHelperText-BmifT0EA.js";import"./Close-CBbLzOeS.js";import"./Popper-C0YrUmlc.js";import"./Badge-BZpNOhc9.js";import"./Chip-DKKqjRmN.js";import"./IconButton-C1aFxNcW.js";import"./FormControlLabel-Be4X22x1.js";import"./Stack-C0kkN408.js";import"./styled-DanlI2xt.js";import"./createStyled-Ch69_NI_.js";import"./useThemeProps-P0CvXcYF.js";import"./MenuItem-DceuxKDN.js";import"./dividerClasses-C6GToXYV.js";import"./Button-JWos0z8D.js";import"./MapToggleButtonPresentational-BFzQ5gPJ.js";import"./Remove-B3S6saWd.js";import"./CogIcon-C7NF5K8t.js";import"./InfoIcon-DPqgxdQZ.js";import"./ExpandMoreIcon-DNBS7Ae_.js";import"./ThemeSwitchRow-9homoP8I.js";import"./index-D2fxJFUo.js";import"./IconButton-Ci8BXdvE.js";import"./Badge-_Ks2Ec9c.js";import"./Chip-1H0HG8HA.js";import"./Divider-sULGPtF-.js";import"./Divider-Bbde2_fu.js";import"./TreeView-GAhKaiG4.js";import"./useThemeProps-Dr3B81aN.js";import"./Collapse-BYeD06gr.js";import"./useSlot-CReHhYw8.js";import"./AppInfoRow-_l5cjwhy.js";import"./_IconPopover-CYGOjWq8.js";import"./AppSettings-BTMPNOva.js";import"./SvgIcon-BI9-VwwI.js";import"./TableRow-DlKh2N0Z.js";import"./TableCell-CEBLf8Yr.js";import"./Skeleton-BpIhNe2X.js";import"./Skeleton-Du6dERAP.js";import"./Edit-CXQT9gM2.js";import"./LinearProgress-G9ObWG-G.js";import"./LinearProgress-Crs6Zu4l.js";import"./Spinner-DzvFtaD2.js";import"./CircularProgress-BgI1_Xtz.js";import"./Dialog-DhKmN4qh.js";import"./DialogContent-rtf5aXKs.js";import"./Alert-CE5w6l2H.js";import"./ToggleButton-Bub8BXIU.js";import"./ToggleButton-CAEgdqR9.js";import"./ToggleButtonGroup-D-3xBYH1.js";import"./LinkButton-BtFJ8Ptt.js";import"./TextField-DLAYsvZY.js";import"./Switch-Dic_zt7r.js";import"./Switch-DvSveS_U.js";import"./LabeledSwitch-BYrzyMPQ.js";import"./RadioGroup-C-Ze-TFB.js";import"./FormControl-Doz5KOXY.js";import"./FormHelperText-BXOFl--T.js";import"./Tabs-V9ydvoHK.js";import"./MenuItem-DnUBD1eV.js";import"./AccordionDetails-gBwhydje.js";import"./Paper-DR1fCpm6.js";import"./ErrorFallback-BK4szP6K.js";import"./ErrorFallbackText-DH69geC6.js";import"./ErrorFallbackWrapper-Dy-bg1rq.js";import"./Brand-B5FmdXmX.js";const{fn:Y}=__STORYBOOK_MODULE_TEST__,Lt={title:"Buttons/Button",component:t,parameters:{...G("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6065-28532&m=dev"),docs:{description:{component:'\nA styled button component built on top of MUI\'s `<Button>`, using our design system overrides.\n\n---\n\n### Supported Variants\n\n- `primary` - main action button\n- `secondary` - secondary action button\n- `tertiary` - tertiary action button with neutral colour\n- `base` - unstyled button base\n\n---\n\n### Supported Props\n\n- **Variants:** `primary`, `secondary`, `tertiary`, `base`\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually\n- **Full Width:** Use `fullWidth` for block-style buttons\n- **SX Overrides:** Use `sx` for small visual adjustments where needed\n\n---\n\n### Example\n\n```tsx\n<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="tertiary">Tertiary</Button>\n<Button variant="base">Base</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:Y(),variant:"primary"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","base"]}},decorators:[o=>r(K,{sx:{button:{marginInline:2},a:{marginInline:2}},children:o()})]},e={args:{variant:"primary"},parameters:{docs:{description:{story:'Primary button using `variant="primary"`'}}}},i={args:{variant:"secondary"},parameters:{docs:{description:{story:'Secondary button using `variant="secondary"`'}}}},s={args:{variant:"tertiary"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},c={args:{variant:"text"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},m={args:{variant:"base"},parameters:{docs:{description:{story:'Base button using `variant="base"`'}}}},p={render:o=>a(B,{children:[r(t,{size:"large",variant:"primary",children:o.children}),r(t,{size:"medium",variant:"primary",children:o.children}),r(t,{size:"small",variant:"primary",children:o.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},d={render:()=>a(B,{children:[r(t,{variant:"primary",startIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",startIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",startIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `startIcon={<IconComponent />}` to place an icon before the button label."}}}},u={render:()=>a(B,{children:[r(t,{variant:"primary",endIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",endIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",endIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `endIcon={<IconComponent />}` to place an icon after the button label."}}}},l={render:()=>a(H,{direction:"column",spacing:2,children:[r(t,{variant:"primary",fullWidth:!0,children:"Primary Button"}),r(t,{variant:"secondary",fullWidth:!0,children:"Secondary Button"}),r(t,{variant:"tertiary",fullWidth:!0,children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Normally buttons will fill the container, including full width containers. These stories are surrounded by a constrained container, so `fullWidth` makes the button stretch to fill it."}}}},y={render:()=>a(B,{children:[r(t,{variant:"primary",sx:{minWidth:220},children:"Wider Primary Button"}),r(t,{variant:"secondary",sx:{borderRadius:8},children:"Rounded Secondary Button"}),r(t,{variant:"tertiary",sx:{px:4},children:"Padded Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `sx` for small visual adjustments without changing the core variant styling."}}}};var h,v,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button using \`variant="primary"\`'
      }
    }
  }
}`,...(g=(v=e.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,S,I;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button using \`variant="secondary"\`'
      }
    }
  }
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var f,x,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "tertiary"
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button using \`variant="tertiary"\`'
      }
    }
  }
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var P,W,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "text"
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button using \`variant="tertiary"\`'
      }
    }
  }
}`,...(U=(W=c.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var D,F,w;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "base"
  },
  parameters: {
    docs: {
      description: {
        story: 'Base button using \`variant="base"\`'
      }
    }
  }
}`,...(w=(F=m.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var z,O,_;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <>
      <Button size="large" variant="primary">
        {args.children}
      </Button>
      <Button size="medium" variant="primary">
        {args.children}
      </Button>
      <Button size="small" variant="primary">
        {args.children}
      </Button>
    </>,
  parameters: {
    docs: {
      description: {
        story: "For larger or smaller buttons, use the \`size\` prop."
      }
    }
  }
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var C,E,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <>
      <Button variant="primary" startIcon={<DataSetIcon />}>
        Primary Button
      </Button>
      <Button variant="secondary" startIcon={<DataSetIcon />}>
        Secondary Button
      </Button>
      <Button variant="tertiary" startIcon={<DataSetIcon />}>
        Tertiary Button
      </Button>
    </>,
  parameters: {
    docs: {
      description: {
        story: "Use \`startIcon={<IconComponent />}\` to place an icon before the button label."
      }
    }
  }
}`,...(j=(E=d.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var R,k,M;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <>
      <Button variant="primary" endIcon={<DataSetIcon />}>
        Primary Button
      </Button>
      <Button variant="secondary" endIcon={<DataSetIcon />}>
        Secondary Button
      </Button>
      <Button variant="tertiary" endIcon={<DataSetIcon />}>
        Tertiary Button
      </Button>
    </>,
  parameters: {
    docs: {
      description: {
        story: "Use \`endIcon={<IconComponent />}\` to place an icon after the button label."
      }
    }
  }
}`,...(M=(k=u.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var V,X,L;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <FlexBox direction="column" spacing={2}>
      <Button variant="primary" fullWidth>
        Primary Button
      </Button>
      <Button variant="secondary" fullWidth>
        Secondary Button
      </Button>
      <Button variant="tertiary" fullWidth>
        Tertiary Button
      </Button>
    </FlexBox>,
  parameters: {
    docs: {
      description: {
        story: "Normally buttons will fill the container, including full width containers. These stories are surrounded by a constrained container, so \`fullWidth\` makes the button stretch to fill it."
      }
    }
  }
}`,...(L=(X=l.parameters)==null?void 0:X.docs)==null?void 0:L.source}}};var N,q,A;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <>
      <Button variant="primary" sx={{
      minWidth: 220
    }}>
        Wider Primary Button
      </Button>
      <Button variant="secondary" sx={{
      borderRadius: 8
    }}>
        Rounded Secondary Button
      </Button>
      <Button variant="tertiary" sx={{
      px: 4
    }}>
        Padded Tertiary Button
      </Button>
    </>,
  parameters: {
    docs: {
      description: {
        story: "Use \`sx\` for small visual adjustments without changing the core variant styling."
      }
    }
  }
}`,...(A=(q=y.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const Nt=["Primary","Secondary","Tertiary","Text","Base","Sizes","StartIcon","EndIcon","FullWidth","SXOverrides"];export{m as Base,u as EndIcon,l as FullWidth,e as Primary,y as SXOverrides,i as Secondary,p as Sizes,d as StartIcon,s as Tertiary,c as Text,Nt as __namedExportsOrder,Lt as default};
