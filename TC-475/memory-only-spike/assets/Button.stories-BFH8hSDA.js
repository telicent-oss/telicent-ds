import{b as a,a as r,F as B}from"./iframe-RnQnoQX8.js";import{f as G}from"./figmaDesign-CKKXRVNK.js";import{D as n}from"./XIcon-CCibX9oC.js";import"./Box-W8ovBlmy.js";import"./Container-BwVzxpaS.js";import{F as H}from"./FlexBox-DsO7ubDs.js";import{B as t}from"./UserProfileContent-CMKr3g_m.js";import{B as K}from"./Box-Bw31xyk6.js";import"./preload-helper-Dp1pzeXC.js";import"./SvgIcon-BvuMPYna.js";import"./clsx-B-dksMZM.js";import"./styled-CHUqJEZN.js";import"./extendSxProp-CBh2QTe4.js";import"./composeClasses-fLhin0tj.js";import"./Stack-CrylB_Fp.js";import"./styled-eZ5xdzZ3.js";import"./createStyled-CPPTetpG.js";import"./useThemeProps-CmFLLsEv.js";import"./Typography-DBvs_soa.js";import"./Paper-_jcYEZaX.js";import"./Button-Cv-t7gt4.js";import"./ButtonBase-DI6HdjXk.js";import"./TransitionGroupContext-CBVDQk4P.js";import"./MapToggleButtonPresentational-Da4cOXhB.js";import"./Remove-7Y2EcPpw.js";import"./createSvgIcon-DEQxKW2j.js";import"./IconButton--ocr3Hbq.js";import"./Brand-D9g93ilS.js";import"./IconButton-B6c5afDL.js";import"./LinkButton-BUW8XXKD.js";import"./AppInfoRow-BeFe7p8y.js";import"./_IconPopover-CobC4KUZ.js";import"./Popover-MwJ0-EW_.js";import"./utils-bvnqZ63E.js";import"./index-DRTkc6c-.js";import"./index-BNYStkyE.js";import"./Modal-v8QLfI2w.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-FxkCCCo6.js";import"./useSlotProps-DgvSFONu.js";import"./InfoIcon-D6Exs_Xw.js";import"./Text-ByuSSYGz.js";import"./AppSettings-D5gbX9uT.js";import"./CogIcon-CIdE7un1.js";import"./Badge-DKp5H5jh.js";import"./Badge-Dkt0jcpj.js";import"./Chip-XC4RVids.js";import"./Chip-Dl-4X4p2.js";import"./Divider-dOkWtiDQ.js";import"./Divider-D4m18Epw.js";import"./dividerClasses-CbcYRHVe.js";import"./ThemeSwitchRow-CTIMiD2z.js";import"./Skeleton-DCTvNfgq.js";import"./Skeleton-C0XYBYTl.js";import"./TextField-C1cT5Aao.js";import"./useFormControl-BDkUgp4y.js";import"./FormControl-DuXM5IYN.js";import"./ListContext-BvKyAyz9.js";import"./useControlled-BiJlVKlY.js";import"./FormHelperText-Cnr2UHSD.js";import"./MenuItem-BAkMVuqq.js";import"./ExpandMoreIcon-BSEHq4MR.js";import"./ListItem-CZpNJal7.js";import"./Toolbar-BU64nVx5.js";import"./Close-B1WU-_xu.js";import"./Popper-DO2lmnhT.js";import"./FormControlLabel-vRc02SQa.js";import"./Edit-WtWCEqSy.js";import"./SvgIcon-C0tF2EOt.js";import"./TableRow-BLgmD9P-.js";import"./TableCell-Cmmt5y6X.js";import"./TreeView-BqpNoiiq.js";import"./useThemeProps-Gx6XDnDx.js";import"./index-BAXa6WLZ.js";import"./Collapse-DT_Z5Ga5.js";import"./Dialog-hrhG2Ut0.js";import"./DialogContent-D2_KaIGY.js";import"./Alert-C_oszVvC.js";import"./useSlot-DqjjmsZB.js";import"./LinearProgress-CyEm_RB3.js";import"./LinearProgress-BAZ9C-Px.js";import"./Spinner-sBOybquN.js";import"./CircularProgress-ChGQDyoU.js";import"./TextField-DraT1S6N.js";import"./FormControl-DbhJZSNC.js";import"./FormHelperText-Ce917Gi3.js";import"./LabeledSwitch-Cd6X1CbS.js";import"./Switch-BQR1ScOG.js";import"./Switch-khoc8YVO.js";import"./RadioGroup-CSCckcNR.js";import"./ToggleButton-id5d8vke.js";import"./ToggleButton-BHbbn58Z.js";import"./ToggleButtonGroup-CIB7dpuM.js";import"./MenuItem-CLiTILFp.js";import"./Tabs-SnAko9mR.js";import"./AccordionSummary-D36Wvqua.js";import"./Paper-xZIfXiq-.js";import"./ErrorFallback-3sgzHsBs.js";import"./ErrorFallbackText-_T9Q39fP.js";import"./ErrorFallbackWrapper-rfGejkDn.js";const{fn:Y}=__STORYBOOK_MODULE_TEST__,Nt={title:"Buttons/Button",component:t,parameters:{...G("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6065-28532&m=dev"),docs:{description:{component:'\nA styled button component built on top of MUI\'s `<Button>`, using our design system overrides.\n\n---\n\n### Supported Variants\n\n- `primary` - main action button\n- `secondary` - secondary action button\n- `tertiary` - tertiary action button with neutral colour\n- `base` - unstyled button base\n\n---\n\n### Supported Props\n\n- **Variants:** `primary`, `secondary`, `tertiary`, `base`\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually\n- **Full Width:** Use `fullWidth` for block-style buttons\n- **SX Overrides:** Use `sx` for small visual adjustments where needed\n\n---\n\n### Example\n\n```tsx\n<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="tertiary">Tertiary</Button>\n<Button variant="base">Base</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:Y(),variant:"primary"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","base"]}},decorators:[o=>r(K,{sx:{button:{marginInline:2},a:{marginInline:2}},children:o()})]},e={args:{variant:"primary"},parameters:{docs:{description:{story:'Primary button using `variant="primary"`'}}}},i={args:{variant:"secondary"},parameters:{docs:{description:{story:'Secondary button using `variant="secondary"`'}}}},s={args:{variant:"tertiary"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},c={args:{variant:"text"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},m={args:{variant:"base"},parameters:{docs:{description:{story:'Base button using `variant="base"`'}}}},p={render:o=>a(B,{children:[r(t,{size:"large",variant:"primary",children:o.children}),r(t,{size:"medium",variant:"primary",children:o.children}),r(t,{size:"small",variant:"primary",children:o.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},d={render:()=>a(B,{children:[r(t,{variant:"primary",startIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",startIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",startIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `startIcon={<IconComponent />}` to place an icon before the button label."}}}},u={render:()=>a(B,{children:[r(t,{variant:"primary",endIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",endIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",endIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `endIcon={<IconComponent />}` to place an icon after the button label."}}}},l={render:()=>a(H,{direction:"column",spacing:2,children:[r(t,{variant:"primary",fullWidth:!0,children:"Primary Button"}),r(t,{variant:"secondary",fullWidth:!0,children:"Secondary Button"}),r(t,{variant:"tertiary",fullWidth:!0,children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Normally buttons will fill the container, including full width containers. These stories are surrounded by a constrained container, so `fullWidth` makes the button stretch to fill it."}}}},y={render:()=>a(B,{children:[r(t,{variant:"primary",sx:{minWidth:220},children:"Wider Primary Button"}),r(t,{variant:"secondary",sx:{borderRadius:8},children:"Rounded Secondary Button"}),r(t,{variant:"tertiary",sx:{px:4},children:"Padded Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `sx` for small visual adjustments without changing the core variant styling."}}}},qt=["Primary","Secondary","Tertiary","Text","Base","Sizes","StartIcon","EndIcon","FullWidth","SXOverrides"];var h,v,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
