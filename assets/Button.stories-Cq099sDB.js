import{a as o,j as r,F as B}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{f as H}from"./index-edE1QCkR.js";import{B as t}from"./DropdownButton-DsEOrLxW.js";import{D as n,a as L}from"./UserIcon-Bv1k9Gkr.js";import{f as J}from"./figmaDesign-CKKXRVNK.js";import"./Container-DAUnO2s0.js";import{B as K}from"./Box-C8UM6PF1.js";import"./jsx-runtime-CB_V9I5Y.js";import"./index-CTjT7uj6.js";import"./useThemeProps-mGX5p-it.js";import"./defaultTheme-Cd36Xqui.js";import"./useThemeProps-DY6NRhpk.js";import"./DefaultPropsProvider-BJrUAfpV.js";import"./useTheme-N1zbQagn.js";import"./useTheme-CXTcqjFy.js";import"./Text-DNDtww-5.js";import"./Typography-BTuSrW-Q.js";import"./styled-Co95aX7f.js";import"./generateUtilityClasses-LAuhwvbW.js";import"./AdapterDayjs-Dcv1_Ch4.js";import"./index-gbGX4Sgq.js";import"./Modal-DMwGBxWQ.js";import"./utils-CZKs3qUl.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-DEWJqUJ8.js";import"./Select-BAcvQhzR.js";import"./useFormControl-DPKvkoC5.js";import"./Paper-C84P62Dn.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-zAUpwBvY.js";import"./GlobalStyles-Bf3t3VSv.js";import"./GlobalStyles-Cv-yeoYN.js";import"./TextField-DC0Fsl0w.js";import"./createStyled-DALmTr0F.js";import"./IconButton-DNCXIZ2n.js";import"./ButtonBase-D3m3WlyT.js";import"./colorManipulator-_4WjNWDc.js";import"./DialogContent-CV9k0A3j.js";import"./Button-BnBRdIVR.js";import"./Chip-CxBAkcex.js";import"./MenuItem-BQe4uye3.js";import"./dividerClasses-l5WzAbKi.js";import"./UIThemeProvider-C1WxYNpB.js";import"./types-CMP91hxZ.js";import"./ThemeProvider-CVHsKeZ1.js";import"./Chip-CKDVrQLB.js";import"./Divider-oA2NDxbS.js";import"./Divider-B8c9urEZ.js";import"./TreeView-BEpIiRgO.js";import"./Stack-D6Q4v-dm.js";import"./styled-BFCnUgfa.js";import"./LinearProgress-DSGDjXQj.js";import"./Spinner-DhZwmjRq.js";import"./Dialog-BPI9Yj3K.js";import"./MapToggleButtonPresentational-D5YOt978.js";import"./Remove-BkPep7P_.js";import"./TextField-tnKbSM3S.js";import"./Select-3mUXH0tK.js";import"./Switch-BibpNf67.js";import"./DatePicker--dK9cNP8.js";import"./DateTimePicker-cy6yPI5j.js";import"./LinkButton-CVKymRM0.js";import"./Paper-24NI2w_o.js";import"./ErrorFallback-05kZtLFS.js";import"./ErrorFallbackText-BExZ28uU.js";import"./ErrorFallbackWrapper-76NLnkLs.js";import"./Brand-Kq-3gU1h.js";import"./constants-BOmE8RzX.js";import"./iframe-LMhFgRVo.js";import"../sb-preview/runtime.js";import"./Edit-GCVsx1H-.js";const yt={title:"Buttons/Button",component:t,parameters:{...J("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6065-28532&m=dev"),docs:{description:{component:'\nA styled button component built on top of MUI\'s `<Button>`, using our design system overrides.\n\n---\n\n### Supported Variants\n\n- `primary` - main action button\n- `secondary` - secondary action button\n- `tertiary` - tertiary action button with neutral colour\n- `base` - unstyled button base\n\n---\n\n### Supported Props\n\n- **Variants:** `primary`, `secondary`, `tertiary`, `base`\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually\n- **Full Width:** Use `fullWidth` for block-style buttons\n- **SX Overrides:** Use `sx` for small visual adjustments where needed\n\n---\n\n### Example\n\n```tsx\n<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="tertiary">Tertiary</Button>\n<Button variant="base">Base</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:H(),variant:"primary"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","base"]}},decorators:[a=>r(K,{sx:{button:{marginInline:2},a:{marginInline:2}},children:a()})]},e={args:{variant:"primary"},parameters:{docs:{description:{story:'Primary button using `variant="primary"`'}}}},i={args:{variant:"secondary"},parameters:{docs:{description:{story:'Secondary button using `variant="secondary"`'}}}},s={args:{variant:"tertiary"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},c={args:{variant:"text"},parameters:{docs:{description:{story:'Tertiary button using `variant="tertiary"`'}}}},m={args:{variant:"base"},parameters:{docs:{description:{story:'Base button using `variant="base"`'}}}},d={render:a=>o(B,{children:[r(t,{size:"large",variant:"primary",children:a.children}),r(t,{size:"medium",variant:"primary",children:a.children}),r(t,{size:"small",variant:"primary",children:a.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},p={render:()=>o(B,{children:[r(t,{variant:"primary",startIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",startIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",startIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `startIcon={<IconComponent />}` to place an icon before the button label."}}}},u={render:()=>o(B,{children:[r(t,{variant:"primary",endIcon:r(n,{}),children:"Primary Button"}),r(t,{variant:"secondary",endIcon:r(n,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",endIcon:r(n,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `endIcon={<IconComponent />}` to place an icon after the button label."}}}},l={render:()=>o(L,{direction:"column",spacing:2,children:[r(t,{variant:"primary",fullWidth:!0,children:"Primary Button"}),r(t,{variant:"secondary",fullWidth:!0,children:"Secondary Button"}),r(t,{variant:"tertiary",fullWidth:!0,children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Normally buttons will fill the container, including full width containers. These stories are surrounded by a constrained container, so `fullWidth` makes the button stretch to fill it."}}}},y={render:()=>o(B,{children:[r(t,{variant:"primary",sx:{minWidth:220},children:"Wider Primary Button"}),r(t,{variant:"secondary",sx:{borderRadius:8},children:"Rounded Secondary Button"}),r(t,{variant:"tertiary",sx:{px:4},children:"Padded Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `sx` for small visual adjustments without changing the core variant styling."}}}};var h,v,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(U=(W=c.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var w,z,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(z=m.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,j,C;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var k,E,O;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var R,M,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(M=u.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var X,N,_;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(_=(N=l.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var q,A,G;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(A=y.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const Bt=["Primary","Secondary","Tertiary","Text","Base","Sizes","StartIcon","EndIcon","FullWidth","SXOverrides"];export{m as Base,u as EndIcon,l as FullWidth,e as Primary,y as SXOverrides,i as Secondary,d as Sizes,p as StartIcon,s as Tertiary,c as Text,Bt as __namedExportsOrder,yt as default};
