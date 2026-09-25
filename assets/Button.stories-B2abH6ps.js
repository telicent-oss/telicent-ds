import{b as o,a as r,F as B}from"./iframe-B8lru9Ox.js";import{B as t}from"./DropdownButton-D5bjMSjg.js";import{D as n}from"./UserIcon-DqrK-S_Y.js";import{f as G}from"./figmaDesign-CKKXRVNK.js";import"./Box-DtmlQxFY.js";import"./Container-DOlWnnaB.js";import{F as H}from"./FlexBox-QL3KD45m.js";import{B as K}from"./Box-D2AU3WA-.js";import"./preload-helper-C1FmrZbK.js";import"./CogIcon-Ch-cC12G.js";import"./SvgIcon-BgwuaJOO.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-B7kmWUc9.js";import"./extendSxProp-DjHg015s.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./InfoIcon-buuMzVkD.js";import"./ThemeSwitchRow-D81wGVaD.js";import"./index-DX_1Zw-E.js";import"./useTheme-lbsOwaIT.js";import"./Text-Cy_FjCVa.js";import"./Typography-DtJW_51A.js";import"./AdapterDayjs-B05HZLDs.js";import"./useThemeProps-DVQSamuW.js";import"./useThemeProps-DqCYqzYY.js";import"./Modal-DMbdFXDI.js";import"./utils-D4kUvPaj.js";import"./TransitionGroupContext-Bg30LDe0.js";import"./index-BhBzwTqv.js";import"./resolveComponentProps-B4S3ggFk.js";import"./Popover-DGL3i7op.js";import"./Paper-4eMZAmsM.js";import"./TextField-Eij0i_Vp.js";import"./useFormControl-CLg-uBwy.js";import"./FormControl-DRfKH_qZ.js";import"./useControlled-D13dP5S1.js";import"./createSvgIcon-Cs4F3KcN.js";import"./FormHelperText-Bbq3OgSk.js";import"./createStyled-_4klY0ey.js";import"./IconButton-DUSx-Z4B.js";import"./ButtonBase-B1n-NBaA.js";import"./DialogContent-Bv7qBY9o.js";import"./Button-B6b6ie_Y.js";import"./Chip-DS6faPIl.js";import"./DateTimePicker-B2f9rqpT.js";import"./Divider-BythBDcI.js";import"./_IconPopover-BtykrXQA.js";import"./Chip-C7-LDCye.js";import"./Divider-CGpXJFUY.js";import"./TreeView-Skztq0S6.js";import"./Stack-DQqlKiUu.js";import"./styled-LsKj47KW.js";import"./Alert-CutSt2-9.js";import"./AppInfoRow-CnKSgvK0.js";import"./AppSettings-DhijNEqA.js";import"./TableRow-CSSGEL79.js";import"./LinearProgress-BbwxtDnN.js";import"./Spinner-DZRjnsts.js";import"./Dialog-BXhz5J8P.js";import"./MapToggleButtonPresentational-D0yGj-7g.js";import"./Remove-D_OeaEKR.js";import"./LinkButton-BR4a1XmD.js";import"./TextField-D7q2BR5w.js";import"./Switch-DP0Ivfww.js";import"./LabeledSwitch-0Oeg2Pzv.js";import"./DatePicker-BayJyfOL.js";import"./FormControl-z0pYS_Fc.js";import"./FormHelperText-BbhR6ctA.js";import"./Paper-CkTdphIQ.js";import"./ErrorFallback-BOH60sVX.js";import"./ErrorFallbackText-CjuRVe4b.js";import"./ErrorFallbackWrapper-CHBRDu9p.js";import"./Brand-BQ4MZmxe.js";import"./Edit-XXHTxPCB.js";const{fn:Y}=__STORYBOOK_MODULE_TEST__,ht={title:"Buttons/Button",component:t,parameters:{...G("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6065-28532&m=dev"),docs:{description:{component:'\nA styled button component built on top of MUI\'s `<Button>`, using our design system overrides.\n\n---\n\n### Supported Variants\n\n- `primary` - main action button\n- `secondary` - secondary action button\n- `tertiary` - tertiary action button with neutral colour\n- `base` - unstyled button base\n\n---\n\n### Supported Props\n\n- **Variants:** `primary`, `secondary`, `tertiary`, `base`\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually\n- **Full Width:** Use `fullWidth` for block-style buttons\n- **SX Overrides:** Use `sx` for small visual adjustments where needed\n\n---\n\n### Example\n\n```tsx\n<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="tertiary">Tertiary</Button>\n<Button variant="base">Base</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:Y(),variant:"primary"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","base"]}},decorators:[a=>r(K,{sx:{button:{marginInline:2},a:{marginInline:2}},children:a()})]},e={args:{variant:"primary"},parameters:{docs:{description:{story:'Primary button using `variant="primary"`'}}}},i={args:{variant:"secondary"},parameters:{docs:{description:{story:'Secondary button using `variant="secondary"`'}}}},s={args:{variant:"tertiary"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},c={args:{variant:"text"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},m={args:{variant:"base"},parameters:{docs:{description:{story:'Base button using `variant="base"`'}}}},d={render:a=>o(B,{children:[r(t,{size:"large",variant:"primary",children:a.children}),r(t,{size:"medium",variant:"primary",children:a.children}),r(t,{size:"small",variant:"primary",children:a.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},p={render:()=>o(B,{children:[r(t,{variant:"primary",startIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",startIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",startIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `startIcon={<IconComponent />}` to place an icon before the button label."}}}},u={render:()=>o(B,{children:[r(t,{variant:"primary",endIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",endIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",endIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `endIcon={<IconComponent />}` to place an icon after the button label."}}}},l={render:()=>o(H,{direction:"column",spacing:2,children:[r(t,{variant:"primary",fullWidth:!0,children:"Primary Button"}),r(t,{variant:"secondary",fullWidth:!0,children:"Secondary Button"}),r(t,{variant:"tertiary",fullWidth:!0,children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Normally buttons will fill the container, including full width containers. These stories are surrounded by a constrained container, so `fullWidth` makes the button stretch to fill it."}}}},y={render:()=>o(B,{children:[r(t,{variant:"primary",sx:{minWidth:220},children:"Wider Primary Button"}),r(t,{variant:"secondary",sx:{borderRadius:8},children:"Rounded Secondary Button"}),r(t,{variant:"tertiary",sx:{px:4},children:"Padded Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `sx` for small visual adjustments without changing the core variant styling."}}}};var h,v,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(F=m.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var z,O,_;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var C,E,j;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(E=p.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var R,k,M;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(q=y.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const vt=["Primary","Secondary","Tertiary","Text","Base","Sizes","StartIcon","EndIcon","FullWidth","SXOverrides"];export{m as Base,u as EndIcon,l as FullWidth,e as Primary,y as SXOverrides,i as Secondary,d as Sizes,p as StartIcon,s as Tertiary,c as Text,vt as __namedExportsOrder,ht as default};
