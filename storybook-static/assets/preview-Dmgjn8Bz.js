import{j as c}from"./jsx-runtime-CexXSJP5.js";import{T as S}from"./ThemeProvider-DrVC_a45.js";import{z as w}from"./index-DXqQCM1T.js";import{a as o}from"./colorManipulator-BpQThoK9.js";import{t as l,o as x}from"./createTheme-BI2OWDpv.js";import{_ as u}from"./extends-BFqQA52f.js";import{r as O}from"./index-BP8_t0zE.js";import{u as T}from"./DefaultPropsProvider-D6MvNwoC.js";import{G as A}from"./GlobalStyles-BPqgQW9T.js";import"./useThemeWithoutDefault-C3kYH7vc.js";import"./index-BjJ5k6rE.js";import"./useTheme-BOvJgVym.js";const D=(t,e)=>u({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!t.vars&&{colorScheme:t.palette.mode}),R=t=>u({color:(t.vars||t).palette.text.primary},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),C=(t,e=!1)=>{var a;const f={};e&&t.colorSchemes&&Object.entries(t.colorSchemes).forEach(([k,F])=>{var v;f[t.getColorSchemeSelector(k).replace(/\s*&/,"")]={colorScheme:(v=F.palette)==null?void 0:v.mode}});let d=u({html:D(t,e),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:u({margin:0},R(t),{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},f);const y=(a=t.components)==null||(a=a.MuiCssBaseline)==null?void 0:a.styleOverrides;return y&&(d=[d,y]),d};function M(t){const e=T({props:t,name:"MuiCssBaseline"}),{children:a,enableColorScheme:f=!1}=e;return c.jsxs(O.Fragment,{children:[c.jsx(A,{styles:d=>C(d,f)}),a]})}const E=""+new URL("space-grotesk-regular-CrKuzqyc.woff2",import.meta.url).href,I=""+new URL("space-grotesk-medium-DtUIId4r.woff2",import.meta.url).href,B=""+new URL("figtree-regular-DJehXiwO.woff2",import.meta.url).href,G=""+new URL("figtree-medium-DTnpyN7E.woff2",import.meta.url).href,P=""+new URL("figtree-bold-BoIU7eQ0.woff2",import.meta.url).href,n={heading:"Space Grotesk, Helvetica, Arial, sans-serif",body:"Figtree, Helvetica, Arial, sans-serif"},_={fontFamily:n.body,h1:{fontFamily:n.heading},h2:{fontFamily:n.heading},h3:{fontFamily:n.heading},h4:{fontFamily:n.heading,fontWeight:500,fontSize:"2rem"},h5:{fontFamily:n.heading},h6:{fontFamily:n.heading},button:{textTransform:"none"},body1:{fontWeight:500},subtitle1:{fontWeight:700}},$={MuiCssBaseline:{styleOverrides:`
    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Space Grotesk'), url(${E}) format('woff2');
    }

    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Space Grotesk'), url(${I}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Figtree'), url(${B}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Figtree'), url(${G}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      src: local('Figtree'), url(${P}) format('woff2');
    }
    `}},m={50:"#F8F8F8",100:"#EBEDFA",200:"#8D99E2",400:"#5969D5",500:"#2F44CA",600:"#2636A2"},i="#F56AAA",p={50:o(i,.1),100:o(i,.2),200:o(i,.3),400:o(i,.5),500:i,600:o(i,.7)},s="#F2A64B",g={50:o(s,.1),100:o(s,.2),200:o(s,.3),400:o(s,.5),500:s,600:o(s,.7)};w.enum(["light","DataNavy","DocumentPink","GraphOrange"]);const h=l.white,r={DataNavy:{...m,main:m[500],light:m[400],dark:m[600],contrastText:l.white},light:{main:h,light:o(h,.5),dark:o(h,.9),contrastText:l.black},DocumentPink:{...p,main:p[500],light:p[400],dark:p[600],contrastText:l.black},GraphOrange:{...g,main:g[500],light:g[400],dark:g[600],contrastText:l.black}},W=t=>({mode:"light",primary:{main:r[t].main,light:r[t].light,dark:r[t].dark,contrastText:r[t].contrastText},secondary:{main:"#F9F9F9"},warning:void 0,info:void 0,success:void 0,background:{default:"#F8F9F9"}}),U={MuiAvatar:{variants:[{props:{variant:"circular-outlined"},style:({theme:t})=>{const e=t.palette.primary.main===l.white?t.palette.primary.contrastText:t.palette.primary.main;return{backgroundColor:"transparent",border:`2px solid ${e}`,color:e}}}]}},z=t=>({MuiButton:{styleOverrides:{root:({theme:e})=>({paddingInline:e.spacing(2)}),outlinedInherit:({theme:e})=>({border:"1px solid #CFD8DC",boxShadow:e.shadows[2]}),outlinedPrimary:({theme:e})=>({border:`1px solid ${e.palette.primary.main}`,backgroundColor:e.palette.secondary.main,":hover":{backgroundColor:t==="light"||t==="dark"?"inherit":`${r[t][100]}`}}),startIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}},endIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}}}},MuiIconButton:{styleOverrides:{root:{borderRadius:4}}}}),j=t=>({MuiCard:{variants:[{props:{variant:"outlined"},style:{borderWidth:1,borderStyle:"solid",borderColor:t==="light"?"inherit":o(r[t][200],.4)}}],styleOverrides:{root:({theme:e})=>({borderRadius:e.spacing(1)})}},MuiCardContent:{styleOverrides:{root:({theme:e})=>({padding:e.spacing(3),":last-child":{padding:e.spacing(3)}})}},MuiCardActions:{styleOverrides:{root:{padding:0,flexDirection:"row-reverse",width:"100%"}}}}),N=t=>({...U,...z(t),...j(t),MuiAppBar:{styleOverrides:{root:{height:70}}},MuiCssBaseline:{...$.MuiCssBaseline}}),L=t=>({mode:"dark",primary:{main:r[t].main,light:r[t].light,dark:r[t].dark,contrastText:r[t].contrastText},secondary:{main:"#222222"},warning:void 0,info:void 0,success:void 0,background:{default:"#1D1D1D"}}),H=(t,e)=>x({components:N(t),palette:e?L(t):W(t),typography:_}),b=({dark:t=!1,theme:e,children:a})=>c.jsxs(S,{theme:H(e,t),children:[c.jsx(M,{}),a]});b.__docgenInfo={description:"",methods:[],displayName:"UIThemeProvider",props:{theme:{required:!0,tsType:{name:"zod.infer",elements:[{name:"UIThemeSchema"}],raw:"zod.infer<typeof UIThemeSchema>"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const at={decorators:[t=>c.jsx(b,{theme:"DataNavy",children:c.jsx(t,{})})],parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}};export{at as default};
