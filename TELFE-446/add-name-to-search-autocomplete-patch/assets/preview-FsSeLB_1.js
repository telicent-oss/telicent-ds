import{b as c,e as M,D as A,_ as P,T as S,u as C,z as m,A as _,y as R,a as G,j as x}from"./DefaultPropsProvider-FmOZEx_L.js";import{r as h}from"./index-BBkUAzwr.js";import{j as d}from"./jsx-runtime-DRTy3Uxn.js";import{a as $}from"./useTheme-C43gVfC6.js";import{R as j}from"./index-B9uXLkjB.js";import{z as I}from"./index-DXqQCM1T.js";import{a as n}from"./colorManipulator-uiArQTW6.js";import{G as B}from"./GlobalStyles-CPwkG7iD.js";const D=h.createContext(null);function E(){return h.useContext(D)}const U=typeof Symbol=="function"&&Symbol.for,W=U?Symbol.for("mui.nested"):"__THEME_NESTED__";function z(e,t){return typeof t=="function"?t(e):c({},e,t)}function L(e){const{children:t,theme:o}=e,r=E(),a=h.useMemo(()=>{const i=r===null?o:z(r,o);return i!=null&&(i[W]=r!==null),i},[o,r]);return d.jsx(D.Provider,{value:a,children:t})}const F={};function w(e,t,o,r=!1){return h.useMemo(()=>{const a=e&&t[e]||t;if(typeof o=="function"){const i=o(a),l=e?c({},t,{[e]:i}):i;return r?()=>l:l}return e?c({},t,{[e]:o}):c({},t,o)},[e,t,o,r])}function N(e){const{children:t,theme:o,themeId:r}=e,a=$(F),i=E()||F,l=w(r,a,o),T=w(r,i,o,!0),y=l.direction==="rtl";return d.jsx(L,{theme:T,children:d.jsx(M.Provider,{value:l,children:d.jsx(j,{value:y,children:d.jsx(A,{value:l==null?void 0:l.components,children:t})})})})}const H=["theme"];function Y(e){let{theme:t}=e,o=P(e,H);const r=t[S];return d.jsx(N,c({},o,{themeId:r?S:void 0,theme:r||t}))}const V=(e,t)=>c({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),q=e=>c({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),K=(e,t=!1)=>{var o;const r={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,T])=>{var y;r[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(y=T.palette)==null?void 0:y.mode}});let a=c({html:V(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:c({margin:0},q(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const i=(o=e.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return i&&(a=[a,i]),a};function J(e){const t=C({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:r=!1}=t;return d.jsxs(h.Fragment,{children:[d.jsx(B,{styles:a=>K(a,r)}),o]})}const Q={MuiAvatar:{variants:[{props:{variant:"circular-outlined"},style:({theme:e})=>{const t=e.palette.primary.main===m.white?e.palette.primary.contrastText:e.palette.primary.main;return{backgroundColor:"transparent",border:`2px solid ${t}`,color:t}}}]}},v={50:"#F8F8F8",100:"#EBEDFA",200:"#8D99E2",400:"#5969D5",500:"#2F44CA",600:"#2636A2"},u="#F56AAA",b={50:n(u,.1),100:n(u,.2),200:n(u,.3),400:n(u,.5),500:u,600:n(u,.7)},g="#F2A64B",k={50:n(g,.1),100:n(g,.2),200:n(g,.3),400:n(g,.5),500:g,600:n(g,.7)},X=I.enum(["light","dark","DataNavy","DocumentPink","GraphOrange"]),p=m.white,s={DataNavy:{...v,main:v[500],light:v[400],dark:v[600],contrastText:m.white},light:{main:p,light:n(p,.5),dark:n(p,.9),contrastText:m.black},dark:{main:p,light:n(p,.5),dark:n(p,.9),contrastText:m.black},DocumentPink:{...b,main:b[500],light:b[400],dark:b[600],contrastText:m.black},GraphOrange:{...k,main:k[500],light:k[400],dark:k[600],contrastText:m.black}},Z=e=>({MuiButton:{styleOverrides:{root:({theme:t})=>({paddingInline:t.spacing(2)}),outlinedInherit:({theme:t})=>({border:"1px solid #CFD8DC",boxShadow:t.shadows[2]}),outlinedPrimary:({theme:t})=>({border:`1px solid ${t.palette.primary.main}`,backgroundColor:t.palette.secondary.main,":hover":{backgroundColor:e==="light"||e==="dark"?"inherit":`${s[e][100]}`}}),startIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}},endIcon:{">*:nth-last-of-type(1)":{fontSize:"inherit"}}}},MuiIconButton:{styleOverrides:{root:{borderRadius:4}}}}),ee=e=>({MuiCard:{variants:[{props:{variant:"outlined"},style:{borderWidth:1,borderStyle:"solid",borderColor:e==="light"||e==="dark"?"inherit":n(s[e][200],.4)}}],styleOverrides:{root:({theme:t})=>({borderRadius:t.spacing(1)})}},MuiCardContent:{styleOverrides:{root:({theme:t})=>({padding:t.spacing(3),":last-child":{padding:t.spacing(3)}})}},MuiCardActions:{styleOverrides:{root:{padding:0,flexDirection:"row-reverse",width:"100%"}}}}),te=""+new URL("space-grotesk-regular-CrKuzqyc.woff2",import.meta.url).href,oe=""+new URL("space-grotesk-medium-DtUIId4r.woff2",import.meta.url).href,re=""+new URL("figtree-regular-DJehXiwO.woff2",import.meta.url).href,ne=""+new URL("figtree-medium-DTnpyN7E.woff2",import.meta.url).href,ae=""+new URL("figtree-bold-BoIU7eQ0.woff2",import.meta.url).href,f={heading:"Space Grotesk, Helvetica, Arial, sans-serif",body:"Figtree, Helvetica, Arial, sans-serif"},ie={fontFamily:f.body,h1:{fontFamily:f.heading},h2:{fontFamily:f.heading},h3:{fontFamily:f.heading},h4:{fontFamily:f.heading,fontWeight:500,fontSize:"2rem"},h5:{fontFamily:f.heading},h6:{fontFamily:f.heading},button:{textTransform:"none"},body1:{fontWeight:500},subtitle1:{fontWeight:700}},se={MuiCssBaseline:{styleOverrides:`
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
    `}},le=e=>({...Q,...Z(e),...ee(e),MuiAppBar:{styleOverrides:{root:{height:70}}},MuiCssBaseline:{...se.MuiCssBaseline}}),ce=e=>({mode:"light",primary:{main:s[e].main,light:s[e].light,dark:s[e].dark,contrastText:s[e].contrastText},secondary:{main:"#F9F9F9"},warning:void 0,info:void 0,success:void 0,background:{default:"#F8F9F9"}}),de=e=>({mode:"dark",primary:{main:s[e].main,light:s[e].light,dark:s[e].dark,contrastText:s[e].contrastText},secondary:{main:"#222222"},warning:void 0,info:void 0,success:void 0,background:{default:"#1D1D1D"},grey:{..._,900:"#2E2E2E"}}),fe=(e,t)=>R({components:le(e),palette:t?de(e):ce(e),typography:ie}),O=({dark:e=!1,theme:t,children:o})=>G(Y,{theme:fe(t,e),children:[x(J,{}),o]});O.__docgenInfo={description:"",methods:[],displayName:"UIThemeProvider",props:{theme:{required:!0,tsType:{name:"zod.infer",elements:[{name:"UIThemeSchema"}],raw:"zod.infer<typeof UIThemeSchema>"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ke={decorators:[(e,t)=>{const o=t.globals.mode||"light",r=t.globals.theme||"GraphOrange";return x(O,{dark:o==="dark",theme:r,children:x(e,{})})}],globalTypes:{mode:{description:"Global mode for components",toolbar:{title:"Mode",items:[{value:"light",title:"Light"},{value:"dark",title:"Dark"}],dynamicTitle:!0}},theme:{description:"Global UI theme for components",toolbar:{title:"Theme",items:X.options,dynamicTitle:!0}}},initialGlobals:{mode:"light",theme:"GraphOrange"},parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"light",values:[{name:"light",value:"#F5F5F5"},{name:"dark",value:"#1D1D1D"}]}}};export{ke as default};
