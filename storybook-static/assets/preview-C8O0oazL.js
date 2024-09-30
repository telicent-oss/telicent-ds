import{a as w,j as h}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{T as x}from"./ThemeProvider-CNcnka0z.js";import{z as O}from"./index-DXqQCM1T.js";import{a as o}from"./colorManipulator-DiQxjTVg.js";import{p as l,l as T}from"./createTheme-CNnsHS-w.js";import{_ as g}from"./extends-BFqQA52f.js";import{r as A}from"./index-BP8_t0zE.js";import{j as b}from"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import{u as D}from"./DefaultPropsProvider-O1PffH9H.js";import{G as R}from"./GlobalStyles-B9g0kU6X.js";import"./useThemeWithoutDefault-D64nqaSk.js";import"./index-BpIClzG7.js";import"./useTheme-BwLid0_q.js";const C=(t,e)=>g({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!t.vars&&{colorScheme:t.palette.mode}),M=t=>g({color:(t.vars||t).palette.text.primary},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),E=(t,e=!1)=>{var a;const d={};e&&t.colorSchemes&&Object.entries(t.colorSchemes).forEach(([F,S])=>{var v;d[t.getColorSchemeSelector(F).replace(/\s*&/,"")]={colorScheme:(v=S.palette)==null?void 0:v.mode}});let c=g({html:C(t,e),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:g({margin:0},M(t),{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},d);const y=(a=t.components)==null||(a=a.MuiCssBaseline)==null?void 0:a.styleOverrides;return y&&(c=[c,y]),c};function I(t){const e=D({props:t,name:"MuiCssBaseline"}),{children:a,enableColorScheme:d=!1}=e;return b.jsxs(A.Fragment,{children:[b.jsx(R,{styles:c=>E(c,d)}),a]})}const B=""+new URL("space-grotesk-regular-CrKuzqyc.woff2",import.meta.url).href,G=""+new URL("space-grotesk-medium-DtUIId4r.woff2",import.meta.url).href,P=""+new URL("figtree-regular-DJehXiwO.woff2",import.meta.url).href,_=""+new URL("figtree-medium-DTnpyN7E.woff2",import.meta.url).href,$=""+new URL("figtree-bold-BoIU7eQ0.woff2",import.meta.url).href,n={heading:"Space Grotesk, Helvetica, Arial, sans-serif",body:"Figtree, Helvetica, Arial, sans-serif"},W={fontFamily:n.body,h1:{fontFamily:n.heading},h2:{fontFamily:n.heading},h3:{fontFamily:n.heading},h4:{fontFamily:n.heading,fontWeight:500,fontSize:"2rem"},h5:{fontFamily:n.heading},h6:{fontFamily:n.heading},button:{textTransform:"none"},body1:{fontWeight:500},subtitle1:{fontWeight:700}},U={MuiCssBaseline:{styleOverrides:`
    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Space Grotesk'), url(${B}) format('woff2');
    }

    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Space Grotesk'), url(${G}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Figtree'), url(${P}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Figtree'), url(${_}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      src: local('Figtree'), url(${$}) format('woff2');
    }
    `}},f={50:"#F8F8F8",100:"#EBEDFA",200:"#8D99E2",400:"#5969D5",500:"#2F44CA",600:"#2636A2"},i="#F56AAA",m={50:o(i,.1),100:o(i,.2),200:o(i,.3),400:o(i,.5),500:i,600:o(i,.7)},s="#F2A64B",p={50:o(s,.1),100:o(s,.2),200:o(s,.3),400:o(s,.5),500:s,600:o(s,.7)};O.enum(["light","DataNavy","DocumentPink","GraphOrange"]);const u=l.white,r={DataNavy:{...f,main:f[500],light:f[400],dark:f[600],contrastText:l.white},light:{main:u,light:o(u,.5),dark:o(u,.9),contrastText:l.black},DocumentPink:{...m,main:m[500],light:m[400],dark:m[600],contrastText:l.black},GraphOrange:{...p,main:p[500],light:p[400],dark:p[600],contrastText:l.black}},z=t=>({mode:"light",primary:{main:r[t].main,light:r[t].light,dark:r[t].dark,contrastText:r[t].contrastText},secondary:{main:"#F9F9F9"},warning:void 0,info:void 0,success:void 0,background:{default:"#F8F9F9"}}),N={MuiAvatar:{variants:[{props:{variant:"circular-outlined"},style:({theme:t})=>{const e=t.palette.primary.main===l.white?t.palette.primary.contrastText:t.palette.primary.main;return{backgroundColor:"transparent",border:`2px solid ${e}`,color:e}}}]}},j=t=>({MuiButton:{styleOverrides:{root:({theme:e})=>({paddingInline:e.spacing(2)}),outlinedInherit:({theme:e})=>({border:"1px solid #CFD8DC",boxShadow:e.shadows[2]}),outlinedPrimary:({theme:e})=>({border:`1px solid ${e.palette.primary.main}`,backgroundColor:e.palette.secondary.main,":hover":{backgroundColor:t==="light"||t==="dark"?"inherit":`${r[t][100]}`}}),startIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}},endIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}}}},MuiIconButton:{styleOverrides:{root:{borderRadius:4}}}}),L=t=>({MuiCard:{variants:[{props:{variant:"outlined"},style:{borderWidth:1,borderStyle:"solid",borderColor:t==="light"?"inherit":o(r[t][200],.4)}}],styleOverrides:{root:({theme:e})=>({borderRadius:e.spacing(1)})}},MuiCardContent:{styleOverrides:{root:({theme:e})=>({padding:e.spacing(3),":last-child":{padding:e.spacing(3)}})}},MuiCardActions:{styleOverrides:{root:{padding:0,flexDirection:"row-reverse",width:"100%"}}}}),H=t=>({...N,...j(t),...L(t),MuiAppBar:{styleOverrides:{root:{height:70}}},MuiCssBaseline:{...U.MuiCssBaseline}}),Y=t=>({mode:"dark",primary:{main:r[t].main,light:r[t].light,dark:r[t].dark,contrastText:r[t].contrastText},secondary:{main:"#222222"},warning:void 0,info:void 0,success:void 0,background:{default:"#1D1D1D"}}),V=(t,e)=>T({components:H(t),palette:e?Y(t):z(t),typography:W}),k=({dark:t=!1,theme:e,children:a})=>w(x,{theme:V(e,t),children:[h(I,{}),a]});k.__docgenInfo={description:"",methods:[],displayName:"UIThemeProvider",props:{theme:{required:!0,tsType:{name:"zod.infer",elements:[{name:"UIThemeSchema"}],raw:"zod.infer<typeof UIThemeSchema>"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const st={decorators:[t=>h(k,{theme:"DataNavy",children:h(t,{})})],parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}};export{st as default};
