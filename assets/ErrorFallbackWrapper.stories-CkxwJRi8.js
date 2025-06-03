import{j as e,e as R}from"./DefaultPropsProvider-BSWuto10.js";import{E as i}from"./ErrorFallbackWrapper-Dp8Qdhpd.js";import{E as l}from"./ErrorFallbackText-BHFGb7nB.js";import{B as I}from"./Box-DgiOPB4O.js";import{T as j}from"./ThemeProvider-D44tmZDD.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./Typography-Ccepgalm.js";import"./styled-BrIIThlA.js";import"./generateUtilityClasses-D9eTBXKL.js";import"./useTheme-DqUUtKyf.js";import"./index-BqeinIc9.js";const Y={title:"Utils/ErrorFallback/ErrorFallbackWrapper",component:i,tags:["autodocs"],args:{},decorators:[r=>e(I,{sx:{bgcolor:"background.paper",p:2,border:1,borderColor:"grey.300",borderRadius:1},children:r()})]},a={args:{children:e(l,{})},render:r=>e(i,{...r})},o={args:{children:e(l,{message:"Unable to fetch user profile."})},render:r=>e(i,{...r}),parameters:{docs:{description:{story:"Pass `message` to ErrorFallbackText to override the default interpolation. Here it displays: “Unable to fetch user profile.”"}}}},s={args:{height:150,children:e(l,{name:"DashboardWidget"})},render:r=>e(i,{...r}),parameters:{docs:{description:{story:"Set `height` on ErrorFallbackWrapper to alter vertical centering. This example uses a 150px tall container."}}}},t={args:{height:200,sx:r=>({width:"100%",backgroundColor:r.palette.background.paper,border:1,borderColor:r.palette.error.main,borderRadius:2,p:1}),children:e(l,{name:"Chart"})},render:r=>{const M=R({palette:{background:{paper:"thistle"},error:{main:"#f44336"},grey:{100:"#f5f5f5"}}});return e(j,{theme:M,children:e(i,{...r})})},parameters:{docs:{description:{story:"- with custom theme"}}}},n={args:{children:null},render:()=>e(l,{message:"Inline load failure."}),parameters:{docs:{description:{story:"Use ErrorFallbackText alone when centering is handled externally (e.g., within a grid cell). Pass `message` or `name` as needed."}}}};var p,c,d,m,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <ErrorFallbackText />
  },
  render: (args: ErrorFallbackWrapperProps) => <ErrorFallbackWrapper {...args} />
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:'Default:\n- Uses ErrorFallbackWrapper with default `height = 256`.\n- Renders `<ErrorFallbackText name="MyComponent" />` inside.',...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.description}}};var g,u,b,k,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <ErrorFallbackText message="Unable to fetch user profile." />
  },
  render: (args: ErrorFallbackWrapperProps) => <ErrorFallbackWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Pass \`message\` to ErrorFallbackText to override the default interpolation. Here it displays: “Unable to fetch user profile.”"
      }
    }
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source},description:{story:"CustomMessage:\n- Pass `message` to ErrorFallbackText for custom error text.",...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.description}}};var x,E,y,F,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    height: 150,
    children: <ErrorFallbackText name="DashboardWidget" />
  },
  render: (args: ErrorFallbackWrapperProps) => <ErrorFallbackWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Set \`height\` on ErrorFallbackWrapper to alter vertical centering. This example uses a 150px tall container."
      }
    }
  }
}`,...(y=(E=s.parameters)==null?void 0:E.docs)==null?void 0:y.source},description:{story:"CustomHeight:\n- Overrides `height` prop on ErrorFallbackWrapper (150px vs default 256px).",...(T=(F=s.parameters)==null?void 0:F.docs)==null?void 0:T.description}}};var W,C,w,P,v;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    height: 200,
    sx: (theme: any) => ({
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      border: 1,
      borderColor: theme.palette.error.main,
      borderRadius: 2,
      p: 1
    }),
    children: <ErrorFallbackText name="Chart" />
  },
  render: (args: ErrorFallbackWrapperProps) => {
    const themeOptions: ThemeOptions = {
      palette: {
        background: {
          paper: "thistle"
        },
        error: {
          main: "#f44336"
        },
        grey: {
          100: "#f5f5f5"
        }
      }
    };
    const customTheme = createTheme(themeOptions);
    return <ThemeProvider theme={customTheme}>
        <ErrorFallbackWrapper {...args} />
      </ThemeProvider>;
  },
  parameters: {
    docs: {
      description: {
        story: "- with custom theme"
      }
    }
  }
}`,...(w=(C=t.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:"StyledWrapper:\n- Locally wraps ErrorFallbackWrapper in a MUI ThemeProvider that defines\n  `background.paper` and `error.main` tokens so the background renders.",...(v=(P=t.parameters)==null?void 0:P.docs)==null?void 0:v.description}}};var O,S,U,D,H;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <ErrorFallbackText message="Inline load failure." />,
  parameters: {
    docs: {
      description: {
        story: "Use ErrorFallbackText alone when centering is handled externally (e.g., within a grid cell). Pass \`message\` or \`name\` as needed."
      }
    }
  }
}`,...(U=(S=n.parameters)==null?void 0:S.docs)==null?void 0:U.source},description:{story:`TextOnly:
- Demonstrates using ErrorFallbackText on its own (no wrapper).
- Useful when centering or container is handled externally.`,...(H=(D=n.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};const Z=["Default","CustomMessage","CustomHeight","StyledWrapper","TextOnly"];export{s as CustomHeight,o as CustomMessage,a as Default,t as StyledWrapper,n as TextOnly,Z as __namedExportsOrder,Y as default};
