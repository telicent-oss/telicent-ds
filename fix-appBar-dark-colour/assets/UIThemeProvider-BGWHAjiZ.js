import{b as c,g as O,D as C,_ as M,T as F,u as P,z as d,A as _,l as R,a as B,j as $}from"./DefaultPropsProvider-DNbgpcUu.js";import{r as y}from"./index-BBkUAzwr.js";import{j as f}from"./jsx-runtime-BwZVo4Wn.js";import{a as j}from"./useTheme-DL-c3i-n.js";import{R as I}from"./index-Be18FJgs.js";import{z as G}from"./index-mSkvzYyn.js";import{a as r}from"./colorManipulator-CrJ3UZt4.js";import{G as U}from"./GlobalStyles-BCFt_Ksp.js";const A=y.createContext(null);function D(){return y.useContext(A)}const W=typeof Symbol=="function"&&Symbol.for,z=W?Symbol.for("mui.nested"):"__THEME_NESTED__";function L(e,t){return typeof t=="function"?t(e):c({},e,t)}function N(e){const{children:t,theme:o}=e,n=D(),a=y.useMemo(()=>{const i=n===null?o:L(n,o);return i!=null&&(i[z]=n!==null),i},[o,n]);return f.jsx(A.Provider,{value:a,children:t})}const w={};function E(e,t,o,n=!1){return y.useMemo(()=>{const a=e&&t[e]||t;if(typeof o=="function"){const i=o(a),l=e?c({},t,{[e]:i}):i;return n?()=>l:l}return e?c({},t,{[e]:o}):c({},t,o)},[e,t,o,n])}function H(e){const{children:t,theme:o,themeId:n}=e,a=j(w),i=D()||w,l=E(n,a,o),T=E(n,i,o,!0),v=l.direction==="rtl";return f.jsx(N,{theme:T,children:f.jsx(O.Provider,{value:l,children:f.jsx(I,{value:v,children:f.jsx(C,{value:l==null?void 0:l.components,children:t})})})})}const Y=["theme"];function V(e){let{theme:t}=e,o=M(e,Y);const n=t[F];return f.jsx(H,c({},o,{themeId:n?F:void 0,theme:n||t}))}const q=(e,t)=>c({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),K=e=>c({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),J=(e,t=!1)=>{var o;const n={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,T])=>{var v;n[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(v=T.palette)==null?void 0:v.mode}});let a=c({html:q(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:c({margin:0},K(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},n);const i=(o=e.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return i&&(a=[a,i]),a};function Q(e){const t=P({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:n=!1}=t;return f.jsxs(y.Fragment,{children:[f.jsx(U,{styles:a=>J(a,n)}),o]})}const X={MuiAvatar:{variants:[{props:{variant:"circular-outlined"},style:({theme:e})=>{const t=e.palette.primary.main===d.white?e.palette.primary.contrastText:e.palette.primary.main;return{backgroundColor:"transparent",border:`2px solid ${t}`,color:t}}}]}},b={50:"#F8F8F8",100:"#EBEDFA",200:"#8D99E2",400:"#5969D5",500:"#2F44CA",600:"#2636A2"},u="#F56AAA",k={50:r(u,.1),100:r(u,.2),200:r(u,.3),400:r(u,.5),500:u,600:r(u,.7)},p="#F2A64B",x={50:r(p,.1),100:r(p,.2),200:r(p,.3),400:r(p,.5),500:p,600:r(p,.7)},g="#20BCFA",S={50:r(g,.1),100:r(g,.2),200:r(g,.3),400:r(g,.5),500:g,600:r(g,.7)},xe=G.enum(["light","dark","DataNavy","DocumentPink","GraphOrange","AdminBlue"]),h=d.white,s={DataNavy:{...b,main:b[500],light:b[400],dark:b[600],contrastText:d.white},light:{main:h,light:r(h,.5),dark:r(h,.9),contrastText:d.black},dark:{main:h,light:r(h,.5),dark:r(h,.9),contrastText:d.white},DocumentPink:{...k,main:k[500],light:k[400],dark:k[600],contrastText:d.black},GraphOrange:{...x,main:x[500],light:x[400],dark:x[600],contrastText:d.black},AdminBlue:{...S,main:S[500],light:S[400],dark:S[600],contrastText:d.black}},Z=e=>({MuiButton:{styleOverrides:{root:({theme:t})=>({paddingInline:t.spacing(2)}),outlinedInherit:({theme:t})=>({border:"1px solid #CFD8DC",boxShadow:t.shadows[2]}),outlinedPrimary:({theme:t})=>({border:`1px solid ${t.palette.primary.main}`,backgroundColor:t.palette.secondary.main,":hover":{backgroundColor:e==="light"||e==="dark"?"inherit":`${s[e][100]}`}}),startIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}},endIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}}}},MuiIconButton:{styleOverrides:{root:{borderRadius:4}}}}),ee=e=>({MuiCard:{variants:[{props:{variant:"outlined"},style:{borderWidth:1,borderStyle:"solid",borderColor:e==="light"||e==="dark"?"inherit":r(s[e][200],.4)}}],styleOverrides:{root:({theme:t})=>({borderRadius:t.spacing(1)})}},MuiCardContent:{styleOverrides:{root:({theme:t})=>({padding:t.spacing(3),":last-child":{padding:t.spacing(3)}})}},MuiCardActions:{styleOverrides:{root:{padding:0,flexDirection:"row-reverse",width:"100%"}}}}),te=""+new URL("space-grotesk-regular-CrKuzqyc.woff2",import.meta.url).href,oe=""+new URL("space-grotesk-medium-DtUIId4r.woff2",import.meta.url).href,re=""+new URL("figtree-regular-DJehXiwO.woff2",import.meta.url).href,ne=""+new URL("figtree-medium-DTnpyN7E.woff2",import.meta.url).href,ae=""+new URL("figtree-bold-BoIU7eQ0.woff2",import.meta.url).href,m={heading:"Space Grotesk, Helvetica, Arial, sans-serif",body:"Figtree, Helvetica, Arial, sans-serif"},ie={fontFamily:m.body,h1:{fontFamily:m.heading},h2:{fontFamily:m.heading},h3:{fontFamily:m.heading},h4:{fontFamily:m.heading,fontWeight:500,fontSize:"2rem"},h5:{fontFamily:m.heading},h6:{fontFamily:m.heading},button:{textTransform:"none"},body1:{fontWeight:500},subtitle1:{fontWeight:700}},se={MuiCssBaseline:{styleOverrides:`
    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Space Grotesk'), url(${te}) format('woff2');
    }

    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Space Grotesk'), url(${oe}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      src: local('Figtree'), url(${re}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 500;
      src: local('Figtree'), url(${ne}) format('woff2');
    }

    @font-face {
      font-family: 'Figtree';
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      src: local('Figtree'), url(${ae}) format('woff2');
    }
    `}},le=e=>({...X,...Z(e),...ee(e),MuiAppBar:{styleOverrides:{root:({theme:t})=>({backgroundColor:t.palette.mode==="dark"?t.palette.background.default:"#ffffff"})}},MuiCssBaseline:{...se.MuiCssBaseline}}),ce=e=>({mode:"light",primary:{main:s[e].main,light:s[e].light,dark:s[e].dark,contrastText:s[e].contrastText},secondary:{main:"#F9F9F9"},warning:void 0,info:void 0,success:void 0,background:{default:"#F8F9F9"}}),de=e=>({mode:"dark",primary:{main:s[e].main,light:s[e].light,dark:s[e].dark,contrastText:s[e].contrastText},secondary:{main:"#222222"},warning:void 0,info:void 0,success:void 0,background:{default:"#1D1D1D"},grey:{..._,900:"#2E2E2E"}}),fe=(e,t)=>R({components:le(e),palette:t?de(e):ce(e),typography:ie}),me=({dark:e=!1,theme:t,children:o})=>B(V,{theme:fe(t,e),children:[$(Q,{}),o]});me.__docgenInfo={description:"",methods:[],displayName:"UIThemeProvider",props:{theme:{required:!0,tsType:{name:"zod.infer",elements:[{name:"UIThemeSchema"}],raw:"zod.infer<typeof UIThemeSchema>"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{xe as U,me as a};
