import{j as n,a as A,F as O}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{f as N}from"./index-edE1QCkR.js";import{B as e}from"./Button-AYzSydkb.js";import{D as k}from"./DataSetIcon-CzT3Gt8m.js";import{B as Y}from"./Box-DR7xjwgg.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./FormHelperText-jGmUqac9.js";import"./identifier-CCo8HfxA.js";import"./styled-DiVYluCu.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./ButtonBase-C0n3d_CB.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-DPeHgJ80.js";import"./SvgIcon-DDjczThx.js";import"./useTheme-CEgm5wok.js";const or={title:"Buttons/Button",component:e,parameters:{docs:{description:{component:'\nA styled button component built on top of MUI’s `<Button>`, using our design system overrides. It supports standard variants (contained, outlined, text) as well as a custom `style="base"` variant.\n\n---\n\n### Supported Props\n\n- **Variants:** `contained`, `outlined`, `text`\n- **Styles:** Our `style="base"` prop render a base button with no styles at all.\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually.\n- **Disable Elevation:** Optional `disableElevation` removes box-shadow.\n- **Full Width:** Use `fullWidth` for block-style buttons.\n\n---\n\n### Example\n\n```tsx\n<Button variant="contained" color="primary">\n  Text\n</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:N(),color:"primary",variant:"contained"},argTypes:{color:{control:"select",options:["primary","secondary","error","info","success","warning"]},variant:{control:"select",options:["contained","outlined","text"]}},decorators:r=>n(Y,{sx:{button:{marginInline:2},a:{marginInline:2}},children:r()})},t={args:{color:"primary",variant:"contained"},parameters:{docs:{description:{story:"To match Primary style in the design use `color=primary ` and `variant=contained`"}}}},o={args:{color:"primary",variant:"contained",error:!0,errorText:"There is a problem"},parameters:{docs:{description:{story:"Error"}}}},a={args:{color:"primary",variant:"outlined"},parameters:{docs:{description:{story:"To match Secondary style in the design use `color=primary ` and `variant=outlined`"}}}},s={render:r=>A(O,{children:[n(e,{variant:"text",children:r.children}),n(e,{variant:"text",disabled:!0,children:r.children})]})},i={render:r=>A(O,{children:[n(e,{size:"large",variant:"contained",children:r.children}),n(e,{size:"medium",variant:"contained",children:r.children}),n(e,{size:"small",variant:"contained",children:r.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},c={args:{color:"primary",variant:"contained",startIcon:n(k,{})},parameters:{docs:{description:{story:"Use `startIcon={<IconComponent />}` to place an icon before the button label"}}}},d={args:{color:"primary",variant:"contained",endIcon:n(k,{})},parameters:{docs:{description:{story:"Use `endIcon={<IconComponent />}` to place it after the label"}}}},l={args:{fullWidth:!0,variant:"contained"},parameters:{docs:{description:{story:"Normally buttons will fill the container - including full width containers. All of these stories are surrounded by a <Box />, which constrains width. You can use `fullWidth` to push the box out."}}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "contained"
  },
  parameters: {
    docs: {
      description: {
        story: "To match Primary style in the design use \`color=primary \` and \`variant=contained\`"
      }
    }
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,y,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "contained",
    error: true,
    errorText: "There is a problem"
  },
  parameters: {
    docs: {
      description: {
        story: "Error"
      }
    }
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,b,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "outlined"
  },
  parameters: {
    docs: {
      description: {
        story: "To match Secondary style in the design use \`color=primary \` and \`variant=outlined\`"
      }
    }
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var I,x,B;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <>
      <Button variant="text">{args.children}</Button>
      <Button variant="text" disabled>
        {args.children}
      </Button>
    </>
}`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var S,w,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <>
      <Button size="large" variant="contained">
        {args.children}
      </Button>
      <Button size="medium" variant="contained">
        {args.children}
      </Button>
      <Button size="small" variant="contained">
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
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var z,E,W;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "contained",
    startIcon: <DataSetIcon />
  },
  parameters: {
    docs: {
      description: {
        story: "Use \`startIcon={<IconComponent />}\` to place an icon before the button label"
      }
    }
  }
}`,...(W=(E=c.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var F,U,C;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    color: "primary",
    variant: "contained",
    endIcon: <DataSetIcon />
  },
  parameters: {
    docs: {
      description: {
        story: "Use \`endIcon={<IconComponent />}\` to place it after the label"
      }
    }
  }
}`,...(C=(U=d.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var D,P,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    variant: "contained"
  },
  parameters: {
    docs: {
      description: {
        story: \`Normally buttons will fill the container - including full width containers. All of these stories are surrounded by a <Box />, which constrains width. You can use \\\`fullWidth\\\` to push the box out.\`
      }
    }
  }
}`,...(j=(P=l.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const ar=["Primary","Error","Secondary","Text","Sizes","StartIcon","EndIcon","FullWidth"];export{d as EndIcon,o as Error,l as FullWidth,t as Primary,a as Secondary,i as Sizes,c as StartIcon,s as Text,ar as __namedExportsOrder,or as default};
