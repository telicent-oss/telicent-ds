import{b as a,a as r,F as B}from"./iframe-BZHB3Un-.js";import{f as G}from"./figmaDesign-CKKXRVNK.js";import{D as n}from"./XIcon-CMSbyjlB.js";import"./Box-DiPYbFt5.js";import"./Container-DmrKR_aT.js";import{F as H}from"./FlexBox-tGhr2yqn.js";import{B as t}from"./UserProfileContent-DAd2yYLO.js";import{B as K}from"./Box-CTxcfl9f.js";import"./preload-helper-Dp1pzeXC.js";import"./SvgIcon-DX0QMT8j.js";import"./clsx-B-dksMZM.js";import"./styled-DFCsjTlG.js";import"./extendSxProp-CzgBeSy5.js";import"./composeClasses-fLhin0tj.js";import"./Stack-DxNHW9Oc.js";import"./styled-cmwt6iFF.js";import"./createStyled-DxnKb23n.js";import"./useThemeProps-D_zUfiSC.js";import"./Typography-z5FfRvY3.js";import"./Paper-DUpmP5HH.js";import"./Button-D-ZFpLGt.js";import"./ButtonBase-CSj4P6pw.js";import"./TransitionGroupContext-CMC_19_q.js";import"./MapToggleButtonPresentational-Cp4hYjou.js";import"./Remove-B95LyZ4A.js";import"./createSvgIcon-Di0onuak.js";import"./IconButton-7ww1QELc.js";import"./Brand-MqwDsCPU.js";import"./IconButton-CM4zelNT.js";import"./LinkButton-D_rBBBP1.js";import"./AppInfoRow-DrjnbaOW.js";import"./_IconPopover-CbWDY7xq.js";import"./Popover-BjbYehdE.js";import"./utils-cH3ejkVE.js";import"./index-B0Xunt1t.js";import"./index-B5k6Jcma.js";import"./Modal-NAHaE5zp.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BrqKpcQI.js";import"./useSlotProps-CPJK55gG.js";import"./InfoIcon-CWbtE50h.js";import"./Text-3mwzoKOr.js";import"./AppSettings-Cnd9oPXt.js";import"./CogIcon-B4CvVzjS.js";import"./Badge-CnTk467N.js";import"./Badge-C_HtVrdi.js";import"./Chip-B5Qnfnmc.js";import"./Chip-wc17TB0W.js";import"./Divider-DzclfdEu.js";import"./Divider-CWRJhMbi.js";import"./dividerClasses-jWT-D4rl.js";import"./ThemeSwitchRow-DyN5Xd5p.js";import"./Skeleton-DwMrttJW.js";import"./Skeleton-B-oRqWrL.js";import"./TextField-PID_gPrg.js";import"./useFormControl-DJsbcvO2.js";import"./FormControl-BGctbngO.js";import"./ListContext-DbBECZus.js";import"./useControlled-CHatxUO2.js";import"./FormHelperText-t48YGxt5.js";import"./MenuItem-C9dMsQON.js";import"./ExpandMoreIcon-BY91CUws.js";import"./ListItem-Bl45hr75.js";import"./Toolbar-D0C-FHY9.js";import"./Close-N_DdzxXD.js";import"./Popper-Pcs9Nhir.js";import"./FormControlLabel-j7Gb_XUM.js";import"./Edit-Ba53KRFr.js";import"./SvgIcon-QkI8KwIQ.js";import"./TableRow-B32Y4JfJ.js";import"./TableCell-CBeb-3yx.js";import"./TreeView-CewVhRNn.js";import"./useThemeProps-ceYpTy6o.js";import"./index-VU7a6TPT.js";import"./Collapse-DZqhyoUz.js";import"./Dialog-Cs7wfcZs.js";import"./DialogContent-DPJEn1dC.js";import"./Alert-Dez6eiMf.js";import"./useSlot-BDNWXL-n.js";import"./LinearProgress-EmU5nnew.js";import"./LinearProgress-BihuoFKl.js";import"./Spinner-D5Jd85BR.js";import"./CircularProgress-DNevguKX.js";import"./TextField-DY3kfjm3.js";import"./FormControl-BG0iQYvU.js";import"./FormHelperText-DGuryOxw.js";import"./LabeledSwitch-CjU-tu_0.js";import"./Switch-CWWkTEfH.js";import"./Switch-CP1MaWVZ.js";import"./RadioGroup-DHwZAtU9.js";import"./ToggleButton-DNWc6yfH.js";import"./ToggleButton-BXdPjjSE.js";import"./ToggleButtonGroup-DMSjue0t.js";import"./MenuItem-BxQ5rQ8Q.js";import"./Tabs-BwMTEiRO.js";import"./AccordionSummary-CsGp2Z5d.js";import"./Paper-DAPKePBK.js";import"./ErrorFallback-BzU2Dhgy.js";import"./ErrorFallbackText-DZhyfm5F.js";import"./ErrorFallbackWrapper-CkvBZjx3.js";const{fn:Y}=__STORYBOOK_MODULE_TEST__,Nt={title:"Buttons/Button",component:t,parameters:{...G("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6065-28532&m=dev"),docs:{description:{component:'\nA styled button component built on top of MUI\'s `<Button>`, using our design system overrides.\n\n---\n\n### Supported Variants\n\n- `primary` - main action button\n- `secondary` - secondary action button\n- `tertiary` - tertiary action button with neutral colour\n- `base` - unstyled button base\n\n---\n\n### Supported Props\n\n- **Variants:** `primary`, `secondary`, `tertiary`, `base`\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually\n- **Full Width:** Use `fullWidth` for block-style buttons\n- **SX Overrides:** Use `sx` for small visual adjustments where needed\n\n---\n\n### Example\n\n```tsx\n<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="tertiary">Tertiary</Button>\n<Button variant="base">Base</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:Y(),variant:"primary"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","base"]}},decorators:[o=>r(K,{sx:{button:{marginInline:2},a:{marginInline:2}},children:o()})]},e={args:{variant:"primary"},parameters:{docs:{description:{story:'Primary button using `variant="primary"`'}}}},i={args:{variant:"secondary"},parameters:{docs:{description:{story:'Secondary button using `variant="secondary"`'}}}},s={args:{variant:"tertiary"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},c={args:{variant:"text"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},m={args:{variant:"base"},parameters:{docs:{description:{story:'Base button using `variant="base"`'}}}},p={render:o=>a(B,{children:[r(t,{size:"large",variant:"primary",children:o.children}),r(t,{size:"medium",variant:"primary",children:o.children}),r(t,{size:"small",variant:"primary",children:o.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},d={render:()=>a(B,{children:[r(t,{variant:"primary",startIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",startIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",startIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `startIcon={<IconComponent />}` to place an icon before the button label."}}}},u={render:()=>a(B,{children:[r(t,{variant:"primary",endIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",endIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",endIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `endIcon={<IconComponent />}` to place an icon after the button label."}}}},l={render:()=>a(H,{direction:"column",spacing:2,children:[r(t,{variant:"primary",fullWidth:!0,children:"Primary Button"}),r(t,{variant:"secondary",fullWidth:!0,children:"Secondary Button"}),r(t,{variant:"tertiary",fullWidth:!0,children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Normally buttons will fill the container, including full width containers. These stories are surrounded by a constrained container, so `fullWidth` makes the button stretch to fill it."}}}},y={render:()=>a(B,{children:[r(t,{variant:"primary",sx:{minWidth:220},children:"Wider Primary Button"}),r(t,{variant:"secondary",sx:{borderRadius:8},children:"Rounded Secondary Button"}),r(t,{variant:"tertiary",sx:{px:4},children:"Padded Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `sx` for small visual adjustments without changing the core variant styling."}}}},qt=["Primary","Secondary","Tertiary","Text","Base","Sizes","StartIcon","EndIcon","FullWidth","SXOverrides"];var h,v,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(A=(q=y.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};export{m as Base,u as EndIcon,l as FullWidth,e as Primary,y as SXOverrides,i as Secondary,p as Sizes,d as StartIcon,s as Tertiary,c as Text,qt as __namedExportsOrder,Nt as default};
