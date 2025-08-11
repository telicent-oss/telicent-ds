import{j as t,a as d,F as l}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{f as C}from"./index-ZIyp8o0e.js";import{B as r}from"./Button-C1gE5xKs.js";import{D as u}from"./DataSetIcon-BBABdu0b.js";import{B as D}from"./Box-DjrL3vcN.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./ButtonBase-BUg8pwcP.js";import"./defaultTheme-Cydao2Tu.js";import"./styled-D6pw60Bp.js";import"./generateUtilityClasses-YWFBP9tm.js";import"./DefaultPropsProvider-BHKfC5ky.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-a6vHgwhc.js";import"./SvgIcon-CjmMrQNX.js";import"./useTheme-DxGOHaWi.js";const Q={title:"Buttons/Button",component:r,parameters:{docs:{description:{component:'\nA styled button component built on top of MUI’s `<Button>`, using our design system overrides. It supports standard variants (contained, outlined, text) as well as a custom `style="base"` variant.\n\n---\n\n### Supported Props\n\n- **Variants:** `contained`, `outlined`, `text`\n- **Styles:** Our `style="base"` prop render a base button with no styles at all.\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually.\n- **Disable Elevation:** Optional `disableElevation` removes box-shadow.\n- **Full Width:** Use `fullWidth` for block-style buttons.\n\n---\n\n### Example\n\n```tsx\n<Button variant="contained" color="primary">\n  Text\n</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:C(),color:"primary",variant:"contained"},argTypes:{color:{control:"select",options:["primary","secondary","error","info","success","warning"]},variant:{control:"select",options:["contained","outlined","text"]}},decorators:n=>t(D,{sx:{button:{marginInline:2},a:{marginInline:2}},children:n()})},e={args:{color:"primary",variant:"contained"},parameters:{docs:{description:{story:"To match Primary style in the design use `color=primary ` and `variant=contained`"}}}},o={args:{color:"primary",variant:"outlined"},parameters:{docs:{description:{story:"To match Secondary style in the design use `color=primary ` and `variant=outlined`"}}}},a={render:n=>d(l,{children:[t(r,{variant:"text",children:n.children}),t(r,{variant:"text",disabled:!0,children:n.children})]})},s={render:n=>d(l,{children:[t(r,{size:"large",variant:"contained",children:n.children}),t(r,{size:"medium",variant:"contained",children:n.children}),t(r,{size:"small",variant:"contained",children:n.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},i={render:n=>d(l,{children:[t(r,{startIcon:t(u,{}),color:"primary",variant:"contained",children:n.children}),t(r,{endIcon:t(u,{}),color:"primary",variant:"contained",children:n.children})]}),parameters:{docs:{description:{story:"\nYou can enhance the visual clarity and usability of your buttons by adding icons using the `startIcon` or `endIcon` props.\n\n- Use `startIcon={<IconComponent />}` to place an icon before the button label.\n- Use `endIcon={<IconComponent />}` to place it after the label.\n\nThis is especially useful for actions that benefit from recognizable visual cues, such as downloads, data updates, or navigation."}}}},c={args:{fullWidth:!0,variant:"contained"},parameters:{docs:{description:{story:"Normally buttons will fill the container - including full width containers. All of these stories are surrounded by a <Box />, which constrains width. You can use `fullWidth` to push the box out."}}}};var p,m,h;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var y,g,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,f,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <>
      <Button variant="text">{args.children}</Button>
      <Button variant="text" disabled>
        {args.children}
      </Button>
    </>
}`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var B,x,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var w,z,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <>
      <Button startIcon={<DataSetIcon />} color="primary" variant="contained">
        {args.children}
      </Button>
      <Button endIcon={<DataSetIcon />} color="primary" variant="contained">
        {args.children}
      </Button>
    </>,
  parameters: {
    docs: {
      description: {
        story: \`
You can enhance the visual clarity and usability of your buttons by adding icons using the \\\`startIcon\\\` or \\\`endIcon\\\` props.

- Use \\\`startIcon={<IconComponent />}\\\` to place an icon before the button label.
- Use \\\`endIcon={<IconComponent />}\\\` to place it after the label.

This is especially useful for actions that benefit from recognizable visual cues, such as downloads, data updates, or navigation.\`
      }
    }
  }
}`,...(T=(z=i.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var W,F,U;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=(F=c.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};const R=["Primary","Secondary","Text","Sizes","WithIcons","FullWidth"];export{c as FullWidth,e as Primary,o as Secondary,s as Sizes,a as Text,i as WithIcons,R as __namedExportsOrder,Q as default};
