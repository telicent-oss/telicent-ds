import{j as e,h as R,k as I}from"./iframe-Crov0WQz.js";import{E as l}from"./ErrorFallbackWrapper-CV687E_O.js";import{E as c}from"./ErrorFallbackText-C98aj5QV.js";import{B as j}from"./Box-BG0wW1Gw.js";import"./preload-helper-C1FmrZbK.js";import"./Typography-B9r5TGn1.js";import"./styled-Iiak7Ogq.js";import"./generateUtilityClasses-YSREvbxX.js";const N={title:"Utils/ErrorFallback/ErrorFallbackWrapper",component:l,tags:["autodocs"],args:{},decorators:[r=>e(j,{sx:{bgcolor:"background.paper",p:2,border:1,borderColor:"grey.300",borderRadius:1},children:r()})]},a={args:{children:e(c,{})},render:r=>e(l,{...r})},o={args:{children:e(c,{message:"Unable to fetch user profile."})},render:r=>e(l,{...r}),parameters:{docs:{description:{story:"Pass `message` to ErrorFallbackText to override the default interpolation. Here it displays: “Unable to fetch user profile.”"}}}},s={args:{height:150,children:e(c,{name:"DashboardWidget"})},render:r=>e(l,{...r}),parameters:{docs:{description:{story:"Set `height` on ErrorFallbackWrapper to alter vertical centering. This example uses a 150px tall container."}}}},n={args:{height:200,sx:r=>({width:"100%",backgroundColor:r.palette.background.paper,border:1,borderColor:r.palette.error.main,borderRadius:2,p:1}),children:e(c,{name:"Chart"})},render:r=>{const M=R({palette:{background:{paper:"thistle"},error:{main:"#f44336"},grey:{100:"#f5f5f5"}}});return e(I,{theme:M,children:e(l,{...r})})},parameters:{docs:{description:{story:"- with custom theme"}}}},t={args:{children:null},render:()=>e(c,{message:"Inline load failure."}),parameters:{docs:{description:{story:"Use ErrorFallbackText alone when centering is handled externally (e.g., within a grid cell). Pass `message` or `name` as needed."}}}};var i,p,d,m,h;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <ErrorFallbackText />
  },
  render: (args: ErrorFallbackWrapperProps) => <ErrorFallbackWrapper {...args} />
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:'Default:\n- Uses ErrorFallbackWrapper with default `height = 256`.\n- Renders `<ErrorFallbackText name="MyComponent" />` inside.',...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.description}}};var g,u,b,k,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(E=s.parameters)==null?void 0:E.docs)==null?void 0:y.source},description:{story:"CustomHeight:\n- Overrides `height` prop on ErrorFallbackWrapper (150px vs default 256px).",...(T=(F=s.parameters)==null?void 0:F.docs)==null?void 0:T.description}}};var W,C,w,P,v;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(w=(C=n.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:"StyledWrapper:\n- Locally wraps ErrorFallbackWrapper in a MUI ThemeProvider that defines\n  `background.paper` and `error.main` tokens so the background renders.",...(v=(P=n.parameters)==null?void 0:P.docs)==null?void 0:v.description}}};var O,S,U,D,H;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(S=t.parameters)==null?void 0:S.docs)==null?void 0:U.source},description:{story:`TextOnly:
- Demonstrates using ErrorFallbackText on its own (no wrapper).
- Useful when centering or container is handled externally.`,...(H=(D=t.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};const Q=["Default","CustomMessage","CustomHeight","StyledWrapper","TextOnly"];export{s as CustomHeight,o as CustomMessage,a as Default,n as StyledWrapper,t as TextOnly,Q as __namedExportsOrder,N as default};
