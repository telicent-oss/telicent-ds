import{a as e,j as r,F as B}from"./iframe-BfEsncEF.js";import{B as t}from"./DropdownButton-99vgIkCV.js";import{D as n,a as G}from"./UserIcon-DAdv8Ixp.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import"./Box-ChCTlzLQ.js";import"./Container-DHCExKqq.js";import{B as K}from"./Box-CtVv9OHw.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-j1RL-BpF.js";import"./useThemeProps-D2PMoY2V.js";import"./useTheme-BD06mfPU.js";import"./Text-BMw1ybWa.js";import"./Typography-Cur-qBxx.js";import"./generateUtilityClass-DLTO8EZ0.js";import"./styled-CKEjpOwx.js";import"./generateUtilityClasses-CgDs_uOe.js";import"./AdapterDayjs-D6qtZrEv.js";import"./Modal-BoRvpCnD.js";import"./utils-D9P5YpBK.js";import"./TransitionGroupContext-BiIjqEy8.js";import"./index-CuxFIe6q.js";import"./resolveComponentProps-2Wttismo.js";import"./TextField-BV7Va00E.js";import"./useFormControl-3m3RTCoN.js";import"./Paper-CmIu2cj4.js";import"./createSvgIcon-C6teTnyS.js";import"./createStyled-KEG0ma0P.js";import"./IconButton-scd69Lv3.js";import"./ButtonBase-CyDfjua2.js";import"./DialogContent-orjmG92r.js";import"./Button-jK3vDH7L.js";import"./Chip-C3EaWfE-.js";import"./DateTimePicker-C-sZiwTj.js";import"./Divider-BDyVO8zM.js";import"./Chip-wEw5ZNvW.js";import"./Divider-Berqrx4H.js";import"./TreeView-D2h7huiz.js";import"./Stack-DB3Y16n1.js";import"./styled-D7FRfLSG.js";import"./Close-1c413Acz.js";import"./LinearProgress-4SIHWNA8.js";import"./Spinner-p-63cFPN.js";import"./Dialog-BfMJ9NKL.js";import"./MapToggleButtonPresentational-Bgmt2_LX.js";import"./Remove-DoXNBLDf.js";import"./TextField-M5Osf9JN.js";import"./Switch-C_gUrCjS.js";import"./DatePicker-D3jVMaej.js";import"./LinkButton-DybG3JjG.js";import"./Paper-VpNf2qxV.js";import"./ErrorFallback-Dn6So0DV.js";import"./ErrorFallbackText-DoD_00IC.js";import"./ErrorFallbackWrapper-DKy8QON8.js";import"./Brand-B8b8xuEA.js";import"./constants-C1bu_m5W.js";import"./Edit-CfOidwdt.js";const{fn:Y}=__STORYBOOK_MODULE_TEST__,Zr={title:"Buttons/Button",component:t,parameters:{...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6065-28532&m=dev"),docs:{description:{component:'\nA styled button component built on top of MUI\'s `<Button>`, using our design system overrides.\n\n---\n\n### Supported Variants\n\n- `primary` - main action button\n- `secondary` - secondary action button\n- `tertiary` - tertiary action button with neutral colour\n- `base` - unstyled button base\n\n---\n\n### Supported Props\n\n- **Variants:** `primary`, `secondary`, `tertiary`, `base`\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually\n- **Full Width:** Use `fullWidth` for block-style buttons\n- **SX Overrides:** Use `sx` for small visual adjustments where needed\n\n---\n\n### Example\n\n```tsx\n<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="tertiary">Tertiary</Button>\n<Button variant="base">Base</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:Y(),variant:"primary"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","base"]}},decorators:[a=>r(K,{sx:{button:{marginInline:2},a:{marginInline:2}},children:a()})]},o={args:{variant:"primary"},parameters:{docs:{description:{story:'Primary button using `variant="primary"`'}}}},i={args:{variant:"secondary"},parameters:{docs:{description:{story:'Secondary button using `variant="secondary"`'}}}},s={args:{variant:"tertiary"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},c={args:{variant:"text"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},d={args:{variant:"base"},parameters:{docs:{description:{story:'Base button using `variant="base"`'}}}},m={render:a=>e(B,{children:[r(t,{size:"large",variant:"primary",children:a.children}),r(t,{size:"medium",variant:"primary",children:a.children}),r(t,{size:"small",variant:"primary",children:a.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},p={render:()=>e(B,{children:[r(t,{variant:"primary",startIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",startIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",startIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `startIcon={<IconComponent />}` to place an icon before the button label."}}}},u={render:()=>e(B,{children:[r(t,{variant:"primary",endIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",endIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",endIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `endIcon={<IconComponent />}` to place an icon after the button label."}}}},l={render:()=>e(G,{direction:"column",spacing:2,children:[r(t,{variant:"primary",fullWidth:!0,children:"Primary Button"}),r(t,{variant:"secondary",fullWidth:!0,children:"Secondary Button"}),r(t,{variant:"tertiary",fullWidth:!0,children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Normally buttons will fill the container, including full width containers. These stories are surrounded by a constrained container, so `fullWidth` makes the button stretch to fill it."}}}},y={render:()=>e(B,{children:[r(t,{variant:"primary",sx:{minWidth:220},children:"Wider Primary Button"}),r(t,{variant:"secondary",sx:{borderRadius:8},children:"Rounded Secondary Button"}),r(t,{variant:"tertiary",sx:{px:4},children:"Padded Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `sx` for small visual adjustments without changing the core variant styling."}}}};var h,v,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(U=(W=c.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var D,w,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var F,O,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(q=y.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const $r=["Primary","Secondary","Tertiary","Text","Base","Sizes","StartIcon","EndIcon","FullWidth","SXOverrides"];export{d as Base,u as EndIcon,l as FullWidth,o as Primary,y as SXOverrides,i as Secondary,m as Sizes,p as StartIcon,s as Tertiary,c as Text,$r as __namedExportsOrder,Zr as default};
