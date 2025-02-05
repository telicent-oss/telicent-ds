import{b as l,g as W,h as u,_ as v,u as k,j as y}from"./DefaultPropsProvider-DW_T1ksU.js";import{c as R,a as T,g as G,s as S}from"./styled-CO2r5wNb.js";import{r as $}from"./index-Du_IP5cC.js";import{s as P}from"./styled-BGngFW9-.js";import{j}from"./jsx-runtime-Dwss98Nb.js";import{u as w}from"./useThemeProps-Crm_2MCc.js";const M=["className","component","disableGutters","fixed","maxWidth","classes"],_=W(),N=P("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:i}=t;return[a.root,a[`maxWidth${u(String(i.maxWidth))}`],i.fixed&&a.fixed,i.disableGutters&&a.disableGutters]}}),z=t=>w({props:t,name:"MuiContainer",defaultTheme:_}),L=(t,a)=>{const i=o=>G(a,o),{classes:m,fixed:p,disableGutters:c,maxWidth:e}=t,s={root:["root",e&&`maxWidth${u(String(e))}`,p&&"fixed",c&&"disableGutters"]};return T(s,i,m)};function U(t={}){const{createStyledComponent:a=N,useThemeProps:i=z,componentName:m="MuiContainer"}=t,p=a(({theme:e,ownerState:s})=>l({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:s})=>s.fixed&&Object.keys(e.breakpoints.values).reduce((o,n)=>{const d=n,r=e.breakpoints.values[d];return r!==0&&(o[e.breakpoints.up(d)]={maxWidth:`${r}${e.breakpoints.unit}`}),o},{}),({theme:e,ownerState:s})=>l({},s.maxWidth==="xs"&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[e.breakpoints.up(s.maxWidth)]:{maxWidth:`${e.breakpoints.values[s.maxWidth]}${e.breakpoints.unit}`}}));return $.forwardRef(function(s,o){const n=i(s),{className:d,component:r="div",disableGutters:f=!1,fixed:h=!1,maxWidth:b="lg"}=n,g=v(n,M),x=l({},n,{component:r,disableGutters:f,fixed:h,maxWidth:b}),C=L(x,m);return j.jsx(p,l({as:r,ownerState:x,className:R(C.root,d),ref:o},g))})}const q=U({createStyledComponent:S("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:i}=t;return[a.root,a[`maxWidth${u(String(i.maxWidth))}`],i.fixed&&a.fixed,i.disableGutters&&a.disableGutters]}}),useThemeProps:t=>k({props:t,name:"MuiContainer"})}),I=t=>y(q,{...t});I.__docgenInfo={description:"",methods:[],displayName:"Container",props:{disablePadding:{required:!1,tsType:{name:"boolean"},description:"If true, the left and right padding is removed."},fixed:{required:!1,tsType:{name:"boolean"},description:`Set the maxWidth to match the minWidth of the current breakpoint. Useful
when the design is set for fixed sizes instead of trying to accommodate a
fluid viewport. It's fluid by default`},maxWidth:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl" | false',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:"false"}]},description:`Sets the maxWidth of the container. The container will grow with the size
of the screen. Set to false to disable maxWidth`}},composes:["PropsWithChildren"]};export{I as C};
