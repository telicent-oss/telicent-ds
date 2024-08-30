import{_ as S}from"./createTheme-CnHyYZiq.js";import{_ as n}from"./extends-CCbyfPlC.js";import{r as C}from"./index-BwDkhjyp.js";import{g as j,s as R,c as I,b as _}from"./styled-jK8V3O51.js";import{c as N}from"./index-Ce_nUbHw.js";import{c as T}from"./createSvgIcon-Dt4Rk6ns.js";import{j as w}from"./jsx-runtime-Nms4Y4qS.js";import{g as D}from"./generateUtilityClasses-BGohe2Km.js";import{r as M,m as O,a as z}from"./mergeSlotProps-BTNqYSHa.js";import{u as E}from"./useForkRef-UxOPvILp.js";const U=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],L=["component","slots","slotProps"],q=["component"];function B(o,e){const{className:t,elementType:r,ownerState:l,externalForwardedProps:a,getSlotOwnerState:i,internalForwardedProps:s}=e,b=S(e,U),{component:F,slots:f={[o]:void 0},slotProps:h={[o]:void 0}}=a;S(a,L);const d=f[o]||r,c=M(h[o],l),v=O(n({className:t},b,{externalForwardedProps:void 0,externalSlotProps:c})),{props:{component:k},internalRef:p}=v,P=S(v.props,q),x=E(p,c==null?void 0:c.ref,e.ref),g=i?i(P):{},u=n({},l,g),m=k,y=z(d,n({},o==="root",!f[o]&&s,P,m&&{as:m},{ref:x}),u);return Object.keys(g).forEach(A=>{delete y[A]}),[d,y]}const H=T(w.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function W(o){return j("MuiAvatar",o)}D("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const $=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],G=N(),J=o=>{const{classes:e,variant:t,colorDefault:r}=o;return _({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},W,e)},K=R("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[t.variant],t.colorDefault&&e.colorDefault]}})(({theme:o})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(o.vars||o).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:n({color:(o.vars||o).palette.background.default},o.vars?{backgroundColor:o.vars.palette.Avatar.defaultBg}:n({backgroundColor:o.palette.grey[400]},o.applyStyles("dark",{backgroundColor:o.palette.grey[600]})))}]})),Q=R("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(o,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),V=R(H,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(o,e)=>e.fallback})({width:"75%",height:"75%"});function X({crossOrigin:o,referrerPolicy:e,src:t,srcSet:r}){const[l,a]=C.useState(!1);return C.useEffect(()=>{if(!t&&!r)return;a(!1);let i=!0;const s=new Image;return s.onload=()=>{i&&a("loaded")},s.onerror=()=>{i&&a("error")},s.crossOrigin=o,s.referrerPolicy=e,s.src=t,r&&(s.srcset=r),()=>{i=!1}},[o,e,t,r]),l}const io=C.forwardRef(function(e,t){const r=G({props:e,name:"MuiAvatar"}),{alt:l,children:a,className:i,component:s="div",slots:b={},slotProps:F={},imgProps:f,sizes:h,src:d,srcSet:c,variant:v="circular"}=r,k=S(r,$);let p=null;const P=X(n({},f,{src:d,srcSet:c})),x=d||c,g=x&&P!=="error",u=n({},r,{colorDefault:!g,component:s,variant:v}),m=J(u),[y,A]=B("img",{className:m.img,elementType:Q,externalForwardedProps:{slots:b,slotProps:{img:n({},f,F.img)}},additionalProps:{alt:l,src:d,srcSet:c,sizes:h},ownerState:u});return g?p=w.jsx(y,n({},A)):a||a===0?p=a:x&&l?p=l[0]:p=w.jsx(V,{ownerState:u,className:m.fallback}),w.jsx(K,n({as:s,ownerState:u,className:I(m.root,i),ref:t},k,{children:p}))});export{io as A};
