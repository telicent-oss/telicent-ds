import{b as a,a as r,F as B}from"./iframe-Qc_S7xDc.js";import{f as G}from"./figmaDesign-CKKXRVNK.js";import{D as n}from"./XIcon-FwcEWS-P.js";import"./Box-DtX81eGL.js";import"./Container-C-AxOArc.js";import{F as H}from"./FlexBox-DBS92b2G.js";import{B as t}from"./UserProfileContent-BtTtKEHB.js";import{B as K}from"./Box-CxkKEmSS.js";import"./preload-helper-Dp1pzeXC.js";import"./SvgIcon-CVLqOmKr.js";import"./clsx-B-dksMZM.js";import"./styled-CgcIX_5n.js";import"./extendSxProp-BDprp3VL.js";import"./composeClasses-fLhin0tj.js";import"./Stack-DoNqUwFA.js";import"./styled-BB7A3pcn.js";import"./createStyled-CUdeGtFR.js";import"./useThemeProps-BxFBB-sR.js";import"./Typography-Cu-yy0Da.js";import"./Paper-C70JDaiv.js";import"./Button-Dj7cUP7O.js";import"./ButtonBase-BGM1JOzh.js";import"./TransitionGroupContext-CPUMsqsi.js";import"./MapToggleButtonPresentational-BTwyEcFF.js";import"./Remove-BPrAu3rF.js";import"./createSvgIcon-vUDj1WZO.js";import"./IconButton-BfhPabTn.js";import"./Brand-CXuO_7Nj.js";import"./IconButton-CRgr_6IA.js";import"./LinkButton-PZL0MtA6.js";import"./AppInfoRow-L9Ct41uR.js";import"./_IconPopover-CVwwBihx.js";import"./Popover-C5IN9cMT.js";import"./utils-ckqgl2AC.js";import"./index-xdr6vpDP.js";import"./index-DFgxXqr5.js";import"./Modal-KUCWN-hc.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C8vHIN9n.js";import"./useSlotProps-fAUM90Vx.js";import"./InfoIcon-WP7T-PZz.js";import"./Text-B8g7NM2g.js";import"./AppSettings-DLGgVhD4.js";import"./CogIcon-QfRJwl7x.js";import"./Badge-DH4M2IdE.js";import"./Badge-if7a42J8.js";import"./Chip-DtxHEqsM.js";import"./Chip-uL9TB9Pu.js";import"./Divider-CTYdoKka.js";import"./Divider-D8fiawbv.js";import"./dividerClasses-yonhPajF.js";import"./ThemeSwitchRow-B00tKUjH.js";import"./Skeleton-BJSorI16.js";import"./Skeleton-Dkff_NGZ.js";import"./TextField-xzu_DPyE.js";import"./useFormControl-xNPWxtva.js";import"./FormControl-X_hisCzp.js";import"./ListContext-BHAyDyBX.js";import"./useControlled-Cpi-ico-.js";import"./FormHelperText-DwzhRR8K.js";import"./MenuItem-TKTN96be.js";import"./ExpandMoreIcon-CcvmRhY8.js";import"./ListItem-C8W6Ik8d.js";import"./Toolbar-DSDblHdz.js";import"./Close-CIhAeHGU.js";import"./Popper-BT4vA2xI.js";import"./FormControlLabel-DLxcqeM9.js";import"./Edit-BvmZceNx.js";import"./SvgIcon-BrScsTXV.js";import"./TableRow-DHvRRQH1.js";import"./TableCell-_uNta8pa.js";import"./TreeView-BfiblcHE.js";import"./useThemeProps-Df8lhP5o.js";import"./index-C7V_D8MZ.js";import"./Collapse-CYu1yO86.js";import"./Dialog-DQAHdxrq.js";import"./DialogContent-DxaHQn4a.js";import"./Alert-C-ywUKjz.js";import"./useSlot-Cj9015tv.js";import"./LinearProgress-YzlvXZ7B.js";import"./LinearProgress-Cx-vdS0c.js";import"./Spinner-CFkE0pqS.js";import"./CircularProgress-Cu2BM2_M.js";import"./TextField-CMKqH5KV.js";import"./FormControl-BQbHDIJ4.js";import"./FormHelperText-Ca1ptZ2c.js";import"./LabeledSwitch-Z3aJeObb.js";import"./Switch-DDlhBOlC.js";import"./Switch-CLg_WwE6.js";import"./RadioGroup-Bf07373r.js";import"./ToggleButton-ClkVXijM.js";import"./ToggleButton-DMCkzxLU.js";import"./ToggleButtonGroup-B1_EfocB.js";import"./MenuItem-CFb7InxQ.js";import"./Tabs-C5IpzZMr.js";import"./AccordionSummary-Bp6-l77_.js";import"./Paper-CUW1p5Tc.js";import"./ErrorFallback-CETo05fh.js";import"./ErrorFallbackText-CMA-asQU.js";import"./ErrorFallbackWrapper-iwCi0O44.js";const{fn:Y}=__STORYBOOK_MODULE_TEST__,Nt={title:"Buttons/Button",component:t,parameters:{...G("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6065-28532&m=dev"),docs:{description:{component:'\nA styled button component built on top of MUI\'s `<Button>`, using our design system overrides.\n\n---\n\n### Supported Variants\n\n- `primary` - main action button\n- `secondary` - secondary action button\n- `tertiary` - tertiary action button with neutral colour\n- `base` - unstyled button base\n\n---\n\n### Supported Props\n\n- **Variants:** `primary`, `secondary`, `tertiary`, `base`\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually\n- **Full Width:** Use `fullWidth` for block-style buttons\n- **SX Overrides:** Use `sx` for small visual adjustments where needed\n\n---\n\n### Example\n\n```tsx\n<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="tertiary">Tertiary</Button>\n<Button variant="base">Base</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:Y(),variant:"primary"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","base"]}},decorators:[o=>r(K,{sx:{button:{marginInline:2},a:{marginInline:2}},children:o()})]},e={args:{variant:"primary"},parameters:{docs:{description:{story:'Primary button using `variant="primary"`'}}}},i={args:{variant:"secondary"},parameters:{docs:{description:{story:'Secondary button using `variant="secondary"`'}}}},s={args:{variant:"tertiary"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},c={args:{variant:"text"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},m={args:{variant:"base"},parameters:{docs:{description:{story:'Base button using `variant="base"`'}}}},p={render:o=>a(B,{children:[r(t,{size:"large",variant:"primary",children:o.children}),r(t,{size:"medium",variant:"primary",children:o.children}),r(t,{size:"small",variant:"primary",children:o.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},d={render:()=>a(B,{children:[r(t,{variant:"primary",startIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",startIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",startIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `startIcon={<IconComponent />}` to place an icon before the button label."}}}},u={render:()=>a(B,{children:[r(t,{variant:"primary",endIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",endIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",endIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `endIcon={<IconComponent />}` to place an icon after the button label."}}}},l={render:()=>a(H,{direction:"column",spacing:2,children:[r(t,{variant:"primary",fullWidth:!0,children:"Primary Button"}),r(t,{variant:"secondary",fullWidth:!0,children:"Secondary Button"}),r(t,{variant:"tertiary",fullWidth:!0,children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Normally buttons will fill the container, including full width containers. These stories are surrounded by a constrained container, so `fullWidth` makes the button stretch to fill it."}}}},y={render:()=>a(B,{children:[r(t,{variant:"primary",sx:{minWidth:220},children:"Wider Primary Button"}),r(t,{variant:"secondary",sx:{borderRadius:8},children:"Rounded Secondary Button"}),r(t,{variant:"tertiary",sx:{px:4},children:"Padded Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `sx` for small visual adjustments without changing the core variant styling."}}}},qt=["Primary","Secondary","Tertiary","Text","Base","Sizes","StartIcon","EndIcon","FullWidth","SXOverrides"];var h,v,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
