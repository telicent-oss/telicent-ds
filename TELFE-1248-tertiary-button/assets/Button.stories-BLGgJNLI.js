import{a,j as r,F as l}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{f as A}from"./index-edE1QCkR.js";import{f as t}from"./AuthModal-CiXo8-p4.js";import{D as o,a as O}from"./UserIcon-Bq9kLVr7.js";import{f as N}from"./figmaDesign-CKKXRVNK.js";import"./Container-CeTulhJU.js";import{B as Y}from"./Box-CRiiUqfG.js";import"./jsx-runtime-CB_V9I5Y.js";import"./index-CTjT7uj6.js";import"./Text-D7i5Vapy.js";import"./Typography-NY1t2oJS.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-BU7JDVYl.js";import"./iframe-DShMpYox.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./useThemeProps-ErBa_dZ_.js";import"./useThemeProps-BQrQzAVn.js";import"./ButtonBase-DOQIfnJh.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-CejG0Q0C.js";import"./Select-CG_yOqSO.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-BitlNMhn.js";import"./utils-EYY7_thZ.js";import"./Paper-DurtPqdU.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DTZC2Bgq.js";import"./AdapterDayjs-CwUPgnLa.js";import"./TextField-DHonYTvf.js";import"./createStyled-MF3orRa4.js";import"./IconButton-Cs2d6H_u.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-B0Ct5bDE.js";import"./Button-CDw32Au9.js";import"./Chip-DNdTa_iC.js";import"./MenuItem-DqUkfAKy.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-Y3o75pQS.js";import"./ThemeProvider-BnKwSnOu.js";import"./Chip-BPJ67Xo5.js";import"./Card-BQnMpQJj.js";import"./Divider-ALDgEm0R.js";import"./TreeView-DWvM_rah.js";import"./Stack-C-VLTEnn.js";import"./styled-D52li5_j.js";import"./LinearProgress-BKbPPN-u.js";import"./Spinner-w6IMOYm1.js";import"./Dialog-C58kaBQ6.js";import"./MapToggleButtonPresentational-C6NzNk9h.js";import"./Remove-sI1URbM_.js";import"./TextField-h5PPgqP5.js";import"./Select-R6uhQZb-.js";import"./Switch-Cq_EkAlM.js";import"./DatePicker-CfVtjRA2.js";import"./DateTimePicker-CAFr88VV.js";import"./LinkButton-nuz8b2FC.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./Brand-CDA26Tjd.js";import"./Edit-C29vdGC_.js";const it={title:"Buttons/Button",component:t,parameters:{...N("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6065-28532&m=dev"),docs:{description:{component:'\nA styled button component built on top of MUI\'s `<Button>`, using our design system overrides.\n\n---\n\n### Supported Variants\n\n**Standard MUI Variants:**\n- `contained`, `outlined`, `text` - standard MUI variants, work with `color` prop\n\n**Custom Design System Variants:**\n- `primary` - main action button (contained + primary color)\n- `secondary` - secondary action button (contained + secondary color)\n- `tertiary` - tertiary action button with neutral grey (outlined + custom tertiary color)\n\n---\n\n### Supported Props\n\n- **Variants:** `contained`, `outlined`, `text`, `primary`, `secondary`, `tertiary`\n- **Colors:** `primary`, `secondary`, `error`, `info`, `success`, `warning` (for standard MUI variants)\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually\n- **Style:** Use `style="base"` to render an unstyled button\n- **Full Width:** Use `fullWidth` for block-style buttons\n\n---\n\n### Example\n\n```tsx\n// Standard MUI\n<Button variant="contained" color="primary">Text</Button>\n\n// Custom variants\n<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="tertiary">Tertiary</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:A(),color:"primary",variant:"contained"},argTypes:{color:{control:"select",options:["primary","secondary","error","info","success","warning"]},variant:{control:"select",options:["contained","outlined","text"]}},decorators:n=>r(Y,{sx:{button:{marginInline:2},a:{marginInline:2}},children:n()})},e={args:{variant:"primary"},parameters:{docs:{description:{story:'Primary button using custom variant `variant="primary"`'}}}},i={args:{variant:"secondary"},parameters:{docs:{description:{story:'Secondary button using custom variant `variant="secondary"`'}}}},s={args:{variant:"tertiary"},parameters:{docs:{description:{story:'Tertiary button using custom variant `variant="tertiary"` - uses neutral grey color'}}}},c={render:n=>a(l,{children:[r(t,{variant:"contained",color:"primary",children:"Contained Primary"}),r(t,{variant:"outlined",color:"primary",children:"Outlined Primary"}),r(t,{variant:"text",color:"primary",children:"Text Primary"})]}),parameters:{docs:{description:{story:"Standard MUI variants (contained, outlined, text) with color prop"}}}},m={render:n=>a(l,{children:[r(t,{size:"large",variant:"primary",children:n.children}),r(t,{size:"medium",variant:"primary",children:n.children}),r(t,{size:"small",variant:"primary",children:n.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},d={render:n=>a(l,{children:[r(t,{variant:"primary",startIcon:r(o,{}),children:"Primary Button"}),r(t,{variant:"secondary",startIcon:r(o,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",startIcon:r(o,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `startIcon={<IconComponent />}` to place an icon before the button label"}}}},p={render:n=>a(l,{children:[r(t,{variant:"primary",endIcon:r(o,{}),children:"Primary Button"}),r(t,{variant:"secondary",endIcon:r(o,{}),children:"Secondary Button"}),r(t,{variant:"tertiary",endIcon:r(o,{}),children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Use `endIcon={<IconComponent />}` to place an icon after the button label"}}}},u={render:n=>a(O,{direction:"column",spacing:2,children:[r(t,{variant:"primary",fullWidth:!0,children:"Primary Button"}),r(t,{variant:"secondary",fullWidth:!0,children:"Secondary Button"}),r(t,{variant:"tertiary",fullWidth:!0,children:"Tertiary Button"})]}),parameters:{docs:{description:{story:"Normally buttons will fill the container - including full width containers. All of these stories are surrounded by a <Box />, which constrains width. You can use `fullWidth` to push the box out."}}}};var y,h,B;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button using custom variant \`variant="primary"\`'
      }
    }
  }
}`,...(B=(h=e.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var v,g,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button using custom variant \`variant="secondary"\`'
      }
    }
  }
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var S,f,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "tertiary"
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button using custom variant \`variant="tertiary"\` - uses neutral grey color'
      }
    }
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,P,U;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <>
      <Button variant="contained" color="primary">
        Contained Primary
      </Button>
      <Button variant="outlined" color="primary">
        Outlined Primary
      </Button>
      <Button variant="text" color="primary">
        Text Primary
      </Button>
    </>,
  parameters: {
    docs: {
      description: {
        story: "Standard MUI variants (contained, outlined, text) with color prop"
      }
    }
  }
}`,...(U=(P=c.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var w,T,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var W,z,C;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <>
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
        story: "Use \`startIcon={<IconComponent />}\` to place an icon before the button label"
      }
    }
  }
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var F,M,V;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <>
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
        story: "Use \`endIcon={<IconComponent />}\` to place an icon after the button label"
      }
    }
  }
}`,...(V=(M=p.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var E,j,k;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <FlexBox direction="column" spacing={2}>
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
        story: \`Normally buttons will fill the container - including full width containers. All of these stories are surrounded by a <Box />, which constrains width. You can use \\\`fullWidth\\\` to push the box out.\`
      }
    }
  }
}`,...(k=(j=u.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const st=["Primary","Secondary","Tertiary","StandardMUIVariants","Sizes","StartIcon","EndIcon","FullWidth"];export{p as EndIcon,u as FullWidth,e as Primary,i as Secondary,m as Sizes,c as StandardMUIVariants,d as StartIcon,s as Tertiary,st as __namedExportsOrder,it as default};
