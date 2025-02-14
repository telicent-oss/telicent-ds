import{b as c,g as O,D,_ as A,T as S,u as M,z as m,A as P,l as C,a as _,j as R}from"./DefaultPropsProvider-DNbgpcUu.js";import{r as h}from"./index-BBkUAzwr.js";import{j as d}from"./jsx-runtime-BwZVo4Wn.js";import{a as j}from"./useTheme-DL-c3i-n.js";import{R as $}from"./index-Be18FJgs.js";import{z as B}from"./index-mSkvzYyn.js";import{a as n}from"./colorManipulator-CrJ3UZt4.js";import{G}from"./GlobalStyles-BCFt_Ksp.js";const w=h.createContext(null);function E(){return h.useContext(w)}const I=typeof Symbol=="function"&&Symbol.for,U=I?Symbol.for("mui.nested"):"__THEME_NESTED__";function W(e,t){return typeof t=="function"?t(e):c({},e,t)}function z(e){const{children:t,theme:o}=e,r=E(),a=h.useMemo(()=>{const i=r===null?o:W(r,o);return i!=null&&(i[U]=r!==null),i},[o,r]);return d.jsx(w.Provider,{value:a,children:t})}const T={};function F(e,t,o,r=!1){return h.useMemo(()=>{const a=e&&t[e]||t;if(typeof o=="function"){const i=o(a),l=e?c({},t,{[e]:i}):i;return r?()=>l:l}return e?c({},t,{[e]:o}):c({},t,o)},[e,t,o,r])}function L(e){const{children:t,theme:o,themeId:r}=e,a=j(T),i=E()||T,l=F(r,a,o),x=F(r,i,o,!0),y=l.direction==="rtl";return d.jsx(z,{theme:x,children:d.jsx(O.Provider,{value:l,children:d.jsx($,{value:y,children:d.jsx(D,{value:l==null?void 0:l.components,children:t})})})})}const N=["theme"];function H(e){let{theme:t}=e,o=A(e,N);const r=t[S];return d.jsx(L,c({},o,{themeId:r?S:void 0,theme:r||t}))}const Y=(e,t)=>c({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),V=e=>c({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),q=(e,t=!1)=>{var o;const r={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,x])=>{var y;r[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(y=x.palette)==null?void 0:y.mode}});let a=c({html:Y(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:c({margin:0},V(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const i=(o=e.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return i&&(a=[a,i]),a};function K(e){const t=M({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:r=!1}=t;return d.jsxs(h.Fragment,{children:[d.jsx(G,{styles:a=>q(a,r)}),o]})}const J={MuiAvatar:{variants:[{props:{variant:"circular-outlined"},style:({theme:e})=>{const t=e.palette.primary.main===m.white?e.palette.primary.contrastText:e.palette.primary.main;return{backgroundColor:"transparent",border:`2px solid ${t}`,color:t}}}]}},v={50:"#F8F8F8",100:"#EBEDFA",200:"#8D99E2",400:"#5969D5",500:"#2F44CA",600:"#2636A2"},u="#F56AAA",b={50:n(u,.1),100:n(u,.2),200:n(u,.3),400:n(u,.5),500:u,600:n(u,.7)},p="#F2A64B",k={50:n(p,.1),100:n(p,.2),200:n(p,.3),400:n(p,.5),500:p,600:n(p,.7)},be=B.enum(["light","dark","DataNavy","DocumentPink","GraphOrange"]),g=m.white,s={DataNavy:{...v,main:v[500],light:v[400],dark:v[600],contrastText:m.white},light:{main:g,light:n(g,.5),dark:n(g,.9),contrastText:m.black},dark:{main:g,light:n(g,.5),dark:n(g,.9),contrastText:m.black},DocumentPink:{...b,main:b[500],light:b[400],dark:b[600],contrastText:m.black},GraphOrange:{...k,main:k[500],light:k[400],dark:k[600],contrastText:m.black}},Q=e=>({MuiButton:{styleOverrides:{root:({theme:t})=>({paddingInline:t.spacing(2)}),outlinedInherit:({theme:t})=>({border:"1px solid #CFD8DC",boxShadow:t.shadows[2]}),outlinedPrimary:({theme:t})=>({border:`1px solid ${t.palette.primary.main}`,backgroundColor:t.palette.secondary.main,":hover":{backgroundColor:e==="light"||e==="dark"?"inherit":`${s[e][100]}`}}),startIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}},endIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}}}},MuiIconButton:{styleOverrides:{root:{borderRadius:4}}}}),X=e=>({MuiCard:{variants:[{props:{variant:"outlined"},style:{borderWidth:1,borderStyle:"solid",borderColor:e==="light"||e==="dark"?"inherit":n(s[e][200],.4)}}],styleOverrides:{root:({theme:t})=>({borderRadius:t.spacing(1)})}},MuiCardContent:{styleOverrides:{root:({theme:t})=>({padding:t.spacing(3),":last-child":{padding:t.spacing(3)}})}},MuiCardActions:{styleOverrides:{root:{padding:0,flexDirection:"row-reverse",width:"100%"}}}}),Z=""+new URL("space-grotesk-regular-CrKuzqyc.woff2",import.meta.url).href,ee=""+new URL("space-grotesk-medium-DtUIId4r.woff2",import.meta.url).href,te=""+new URL("figtree-regular-DJehXiwO.woff2",import.meta.url).href,oe=""+new URL("figtree-medium-DTnpyN7E.woff2",import.meta.url).href,re=""+new URL("figtree-bold-BoIU7eQ0.woff2",import.meta.url).href,f={heading:"Space Grotesk, Helvetica, Arial, sans-serif",body:"Figtree, Helvetica, Arial, sans-serif"},ne={fontFamily:f.body,h1:{fontFamily:f.heading},h2:{fontFamily:f.heading},h3:{fontFamily:f.heading},h4:{fontFamily:f.heading,fontWeight:500,fontSize:"2rem"},h5:{fontFamily:f.heading},h6:{fontFamily:f.heading},button:{textTransform:"none"},body1:{fontWeight:500},subtitle1:{fontWeight:700}},ae={MuiCssBaseline:{styleOverrides:`
    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Space Grotesk'), url(${Z}) format('woff2');
    }

    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Space Grotesk'), url(${ee}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Figtree'), url(${te}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Figtree'), url(${oe}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      src: local('Figtree'), url(${re}) format('woff2');
    }
    `}},ie=e=>({...J,...Q(e),...X(e),MuiAppBar:{styleOverrides:{root:{height:70}}},MuiCssBaseline:{...ae.MuiCssBaseline}}),se=e=>({mode:"light",primary:{main:s[e].main,light:s[e].light,dark:s[e].dark,contrastText:s[e].contrastText},secondary:{main:"#F9F9F9"},warning:void 0,info:void 0,success:void 0,background:{default:"#F8F9F9"}}),le=e=>({mode:"dark",primary:{main:s[e].main,light:s[e].light,dark:s[e].dark,contrastText:s[e].contrastText},secondary:{main:"#222222"},warning:void 0,info:void 0,success:void 0,background:{default:"#1D1D1D"},grey:{...P,900:"#2E2E2E"}}),ce=(e,t)=>C({components:ie(e),palette:t?le(e):se(e),typography:ne}),de=({dark:e=!1,theme:t,children:o})=>_(H,{theme:ce(t,e),children:[R(K,{}),o]});de.__docgenInfo={description:"",methods:[],displayName:"UIThemeProvider",props:{theme:{required:!0,tsType:{name:"zod.infer",elements:[{name:"UIThemeSchema"}],raw:"zod.infer<typeof UIThemeSchema>"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{be as U,de as a};
