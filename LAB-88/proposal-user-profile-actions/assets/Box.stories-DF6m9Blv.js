import{a as w,j as r}from"./iframe-CXSK8Dk-.js";import{B as e}from"./Box-PoQ7y_F9.js";import"./preload-helper-C1FmrZbK.js";import"./Box-CN1tfwJW.js";import"./generateUtilityClasses-Bj4Ss80x.js";import"./generateUtilityClass-Fzt3JCAB.js";const I={title:"Layout/Box",component:e,tags:["autodocs"]},n={argTypes:{component:{control:"text",table:{defaultValue:{summary:"div"}}}},args:{children:"Box content",sx:{p:2,bgcolor:"background.paper",border:1,borderColor:"divider",borderRadius:1}},parameters:{docs:{description:{story:"The Box component is the most basic layout primitive. It renders a `<div>` by default and accepts the `sx` prop for one-off theme-aware styling. Use it as a wrapper for spacing, backgrounds, borders, or as the root of a flex/grid container."}}},render:o=>r(e,{...o})},a={parameters:{docs:{description:{story:"The `sx` prop accepts a callback that receives the DS theme, so you can read palette, spacing, and radius tokens directly."}}},render:()=>r(e,{sx:o=>({p:2,borderRadius:1,bgcolor:o.palette.background.paper,color:o.palette.text.primary,border:`1px solid ${o.palette.divider}`}),children:"Themed via sx callback"})},t={args:{variant:"outlined",sx:{p:2,borderRadius:1},children:"Outlined Box"},parameters:{docs:{description:{story:'Pass `variant="outlined"` to render a Box with a border in the theme\'s primary colour. Mirrors MUI\'s `variant="outlined"` convention on Button and Chip.'}}},render:o=>r(e,{...o})},s={parameters:{docs:{description:{story:'Box is polymorphic — pass `component` to render as any HTML element or React component while keeping the `sx` API. Element-specific HTML attributes (e.g. `href` on `"a"`, `htmlFor` on `"label"`) type-check correctly.'}}},render:()=>w(e,{component:"section",sx:{p:2,bgcolor:"background.paper",display:"flex",flexDirection:"column",gap:1},children:[r(e,{component:"h3",sx:{m:0},children:"Section heading"}),r(e,{component:"label",htmlFor:"box-poly-input",sx:{fontSize:12},children:'Label rendered via component="label" with htmlFor'}),r("input",{id:"box-poly-input",placeholder:"associated input"}),r(e,{component:"a",href:"https://example.com",sx:{color:"primary.main"},children:'Link rendered via component="a" with href'})]})},i={parameters:{docs:{description:{story:"A common use — Box as a flex container with themed children."}}},render:()=>w(e,{sx:{display:"flex",gap:2,alignItems:"center"},children:[r(e,{sx:{p:1,bgcolor:"#f77",borderRadius:1},children:"One"}),r(e,{sx:{p:1,bgcolor:"#7f7",borderRadius:1},children:"Two"}),r(e,{sx:{p:1,bgcolor:"#77f",borderRadius:1},children:"Three"})]})};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  argTypes: {
    component: {
      control: "text",
      table: {
        defaultValue: {
          summary: "div"
        }
      }
    }
  },
  args: {
    children: "Box content",
    sx: {
      p: 2,
      bgcolor: "background.paper",
      border: 1,
      borderColor: "divider",
      borderRadius: 1
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`The Box component is the most basic layout primitive. It renders a \\\`<div>\\\` by default and accepts the \\\`sx\\\` prop for one-off theme-aware styling. Use it as a wrapper for spacing, backgrounds, borders, or as the root of a flex/grid container.\`
      }
    }
  },
  render: args => <Box {...args} />
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,m,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`The \\\`sx\\\` prop accepts a callback that receives the DS theme, so you can read palette, spacing, and radius tokens directly.\`
      }
    }
  },
  render: () => <Box sx={theme => ({
    p: 2,
    borderRadius: 1,
    bgcolor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: \`1px solid \${theme.palette.divider}\`
  })}>
      Themed via sx callback
    </Box>
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,u,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "outlined",
    sx: {
      p: 2,
      borderRadius: 1
    },
    children: "Outlined Box"
  },
  parameters: {
    docs: {
      description: {
        story: \`Pass \\\`variant="outlined"\\\` to render a Box with a border in the theme's primary colour. Mirrors MUI's \\\`variant="outlined"\\\` convention on Button and Chip.\`
      }
    }
  },
  render: args => <Box {...args} />
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`Box is polymorphic — pass \\\`component\\\` to render as any HTML element or React component while keeping the \\\`sx\\\` API. Element-specific HTML attributes (e.g. \\\`href\\\` on \\\`"a"\\\`, \\\`htmlFor\\\` on \\\`"label"\\\`) type-check correctly.\`
      }
    }
  },
  render: () => <Box component="section" sx={{
    p: 2,
    bgcolor: "background.paper",
    display: "flex",
    flexDirection: "column",
    gap: 1
  }}>
      <Box component="h3" sx={{
      m: 0
    }}>
        Section heading
      </Box>
      <Box component="label" htmlFor="box-poly-input" sx={{
      fontSize: 12
    }}>
        Label rendered via component="label" with htmlFor
      </Box>
      <input id="box-poly-input" placeholder="associated input" />
      <Box component="a" href="https://example.com" sx={{
      color: "primary.main"
    }}>
        Link rendered via component="a" with href
      </Box>
    </Box>
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var B,v,k;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`A common use — Box as a flex container with themed children.\`
      }
    }
  },
  render: () => <Box sx={{
    display: "flex",
    gap: 2,
    alignItems: "center"
  }}>
      <Box sx={{
      p: 1,
      bgcolor: "#f77",
      borderRadius: 1
    }}>One</Box>
      <Box sx={{
      p: 1,
      bgcolor: "#7f7",
      borderRadius: 1
    }}>Two</Box>
      <Box sx={{
      p: 1,
      bgcolor: "#77f",
      borderRadius: 1
    }}>Three</Box>
    </Box>
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const M=["Basic","WithSxOverride","Outlined","AsSemanticElement","FlexRow"];export{s as AsSemanticElement,n as Basic,i as FlexRow,t as Outlined,a as WithSxOverride,M as __namedExportsOrder,I as default};
