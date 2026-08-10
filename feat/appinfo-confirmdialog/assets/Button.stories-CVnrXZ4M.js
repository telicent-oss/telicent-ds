import{a as e,j as r,F as B}from"./iframe-BMuUneZj.js";import{B as t}from"./DropdownButton-GhplHAZP.js";import{D as n}from"./UserIcon-CQYMBk4-.js";import{f as G}from"./figmaDesign-CKKXRVNK.js";import"./Box-BJWVeEYX.js";import"./Container-DlbpK-82.js";import{F as H}from"./FlexBox-Iozwjete.js";import{B as K}from"./Box-CEEFXZo5.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-jBmUE9A9.js";import"./useThemeProps-BNBknqIb.js";import"./useTheme-DRDJjHMR.js";import"./Text-B5-p14Rw.js";import"./Typography-w_4K0ja8.js";import"./generateUtilityClass-B9h8PBia.js";import"./styled-CVhYyncn.js";import"./generateUtilityClasses-DikdMsJY.js";import"./AdapterDayjs-C8iCvla8.js";import"./Modal-Dy02jFWT.js";import"./utils-DfS-ADiV.js";import"./TransitionGroupContext-ejQez42S.js";import"./index-BbVjQDet.js";import"./resolveComponentProps-DLezU-r8.js";import"./Popover-CwdWMymH.js";import"./Paper-E211ua9O.js";import"./TextField-ECilJSMm.js";import"./useFormControl-EqKIaqm8.js";import"./createSvgIcon-BUAAkB8u.js";import"./SvgIcon-RPSsRH1z.js";import"./createStyled-Cb8Mr6dv.js";import"./IconButton-DlBfucp_.js";import"./ButtonBase-gJKL7X4c.js";import"./DialogContent-TC9gFBw7.js";import"./Button-8Li-cdwq.js";import"./Chip-7qvU_oAO.js";import"./DateTimePicker-DgHDar69.js";import"./Divider-DXhn6Ub8.js";import"./AppInfoRow-BgLW4R_q.js";import"./Chip-DLoVMQVm.js";import"./Divider-C2Xz7yk2.js";import"./TreeView-_qpTu6pI.js";import"./Stack-TiSKoIHA.js";import"./styled-BNu8QFwr.js";import"./Alert-W7WaUGLz.js";import"./LinearProgress-DDNrYsWW.js";import"./Spinner-DUipJNcV.js";import"./Dialog-D0_pFUs6.js";import"./MapToggleButtonPresentational-CBnLn7Jp.js";import"./Remove-BQ2StRYG.js";import"./LinkButton-Bltx9Shr.js";import"./TextField-DK61R-xZ.js";import"./Switch-CSAD1dRX.js";import"./DatePicker-Cz_5sUCg.js";import"./Paper-DIhajTdq.js";import"./ErrorFallback-DQNkUk93.js";import"./ErrorFallbackText-C3uTVheG.js";import"./ErrorFallbackWrapper-C9Cmqijf.js";import"./Brand-RZcZ8N1N.js";import"./constants-DWdepPUO.js";import"./Edit-DeviR2d5.js";const{fn:Y}=__STORYBOOK_MODULE_TEST__,nt={title:"Buttons/Button",component:t,parameters:{...G("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6065-28532&m=dev"),docs:{description:{component:'\nA styled button component built on top of MUI\'s `<Button>`, using our design system overrides.\n\n---\n\n### Supported Variants\n\n- `primary` - main action button\n- `secondary` - secondary action button\n- `tertiary` - tertiary action button with neutral colour\n- `base` - unstyled button base\n\n---\n\n### Supported Props\n\n- **Variants:** `primary`, `secondary`, `tertiary`, `base`\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually\n- **Full Width:** Use `fullWidth` for block-style buttons\n- **SX Overrides:** Use `sx` for small visual adjustments where needed\n\n---\n\n### Example\n\n```tsx\n<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="tertiary">Tertiary</Button>\n<Button variant="base">Base</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:Y(),variant:"primary"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","base"]}},decorators:[a=>r(K,{sx:{button:{marginInline:2},a:{marginInline:2}},children:a()})]},o={args:{variant:"primary"},parameters:{docs:{description:{story:'Primary button using `variant="primary"`'}}}},i={args:{variant:"secondary"},parameters:{docs:{description:{story:'Secondary button using `variant="secondary"`'}}}},s={args:{variant:"tertiary"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},c={args:{variant:"text"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},d={args:{variant:"base"},parameters:{docs:{description:{story:'Base button using `variant="base"`'}}}},m={render:a=>e(B,{children:[r(t,{size:"large",variant:"primary",children:a.children}),r(t,{size:"medium",variant:"primary",children:a.children}),r(t,{size:"small",variant:"primary",children:a.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},p={render:()=>e(B,{children:[r(t,{variant:"primary",startIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",startIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",startIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `startIcon={<IconComponent />}` to place an icon before the button label."}}}},u={render:()=>e(B,{children:[r(t,{variant:"primary",endIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",endIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",endIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `endIcon={<IconComponent />}` to place an icon after the button label."}}}},l={render:()=>e(H,{direction:"column",spacing:2,children:[r(t,{variant:"primary",fullWidth:!0,children:"Primary Button"}),r(t,{variant:"secondary",fullWidth:!0,children:"Secondary Button"}),r(t,{variant:"tertiary",fullWidth:!0,children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Normally buttons will fill the container, including full width containers. These stories are surrounded by a constrained container, so `fullWidth` makes the button stretch to fill it."}}}},y={render:()=>e(B,{children:[r(t,{variant:"primary",sx:{minWidth:220},children:"Wider Primary Button"}),r(t,{variant:"secondary",sx:{borderRadius:8},children:"Rounded Secondary Button"}),r(t,{variant:"tertiary",sx:{px:4},children:"Padded Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `sx` for small visual adjustments without changing the core variant styling."}}}};var h,v,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,S,I;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(U=(W=c.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var D,F,w;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(w=(F=d.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var z,O,_;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(O=m.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var j,C,E;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(C=p.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,k,M;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(q=y.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const at=["Primary","Secondary","Tertiary","Text","Base","Sizes","StartIcon","EndIcon","FullWidth","SXOverrides"];export{d as Base,u as EndIcon,l as FullWidth,o as Primary,y as SXOverrides,i as Secondary,m as Sizes,p as StartIcon,s as Tertiary,c as Text,at as __namedExportsOrder,nt as default};
