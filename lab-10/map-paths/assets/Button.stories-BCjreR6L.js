import{j as n,a as C,F as E}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{f as j}from"./index-edE1QCkR.js";import{B as t}from"./Button-BQmmc_Hj.js";import{D as P}from"./DataSetIcon-eLJEtM34.js";import{f as A}from"./figmaDesign-CKKXRVNK.js";import{B as M}from"./Box-CRiiUqfG.js";import"./jsx-runtime-CB_V9I5Y.js";import"./index-CTjT7uj6.js";import"./ButtonBase-C9YLNer7.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./TransitionGroupContext-Bu81adgJ.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./Button-BsbypDuV.js";import"./SvgIcon-nu1RSFLJ.js";import"./useTheme-CZEWbKR4.js";const nr={title:"Buttons/Button",component:t,parameters:{...A("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6065-28532&m=dev"),docs:{description:{component:'\nA styled button component built on top of MUI’s `<Button>`, using our design system overrides. It supports standard variants (contained, outlined, text) as well as a custom `style="base"` variant.\n\n---\n\n### Supported Props\n\n- **Variants:** `contained`, `outlined`, `text`\n- **Styles:** Our `style="base"` prop render a base button with no styles at all.\n- **Sizes:** `small`, `medium`, `large`\n- **Icons:** Use `startIcon` or `endIcon` to enhance buttons visually.\n- **Disable Elevation:** Optional `disableElevation` removes box-shadow.\n- **Full Width:** Use `fullWidth` for block-style buttons.\n\n---\n\n### Example\n\n```tsx\n<Button variant="contained" color="primary">\n  Text\n</Button>\n```\n        '}}},tags:["autodocs"],args:{children:"Button",onClick:j(),color:"primary",variant:"contained"},argTypes:{color:{control:"select",options:["primary","secondary","error","info","success","warning"]},variant:{control:"select",options:["contained","outlined","text"]}},decorators:r=>n(M,{sx:{button:{marginInline:2},a:{marginInline:2}},children:r()})},e={args:{color:"primary",variant:"contained"},parameters:{docs:{description:{story:"To match Primary style in the design use `color=primary ` and `variant=contained`"}}}},o={args:{color:"primary",variant:"outlined"},parameters:{docs:{description:{story:"To match Secondary style in the design use `color=primary ` and `variant=outlined`"}}}},a={render:r=>C(E,{children:[n(t,{variant:"text",children:r.children}),n(t,{variant:"text",disabled:!0,children:r.children})]})},s={render:r=>C(E,{children:[n(t,{size:"large",variant:"contained",children:r.children}),n(t,{size:"medium",variant:"contained",children:r.children}),n(t,{size:"small",variant:"contained",children:r.children})]}),parameters:{docs:{description:{story:"For larger or smaller buttons, use the `size` prop."}}}},i={args:{color:"primary",variant:"contained",startIcon:n(P,{})},parameters:{docs:{description:{story:"Use `startIcon={<IconComponent />}` to place an icon before the button label"}}}},c={args:{color:"primary",variant:"contained",endIcon:n(P,{})},parameters:{docs:{description:{story:"Use `endIcon={<IconComponent />}` to place it after the label"}}}},d={args:{fullWidth:!0,variant:"contained"},parameters:{docs:{description:{story:"Normally buttons will fill the container - including full width containers. All of these stories are surrounded by a <Box />, which constrains width. You can use `fullWidth` to push the box out."}}}};var l,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,v,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <>
      <Button variant="text">{args.children}</Button>
      <Button variant="text" disabled>
        {args.children}
      </Button>
    </>
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,I,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(I=s.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var B,S,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,U,T;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(U=c.parameters)==null?void 0:U.docs)==null?void 0:T.source}}};var D,F,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const tr=["Primary","Secondary","Text","Sizes","StartIcon","EndIcon","FullWidth"];export{c as EndIcon,d as FullWidth,e as Primary,o as Secondary,s as Sizes,i as StartIcon,a as Text,tr as __namedExportsOrder,nr as default};
