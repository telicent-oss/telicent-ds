import{u as g,_ as x,b as s,v as l}from"./DefaultPropsProvider-DNbgpcUu.js";import{r as b}from"./index-BBkUAzwr.js";import{g as m,s as P,c as R,a as $}from"./styled-CnbWPWMk.js";import{g as y}from"./generateUtilityClasses-BwpiFGlX.js";import{j as C}from"./jsx-runtime-BwZVo4Wn.js";const v=a=>{let e;return a<1?e=5.11916*a**2:e=4.5*Math.log(a+1)+2,(e/100).toFixed(2)};function _(a){return m("MuiPaper",a)}y("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const k=["className","component","elevation","square","variant"],q=a=>{const{square:e,elevation:o,variant:t,classes:n}=a,r={root:["root",t,!e&&"rounded",t==="elevation"&&`elevation${o}`]};return $(r,_,n)},M=P("div",{name:"MuiPaper",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[o.variant],!o.square&&e.rounded,o.variant==="elevation"&&e[`elevation${o.elevation}`]]}})(({theme:a,ownerState:e})=>{var o;return s({backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow")},!e.square&&{borderRadius:a.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${(a.vars||a).palette.divider}`},e.variant==="elevation"&&s({boxShadow:(a.vars||a).shadows[e.elevation]},!a.vars&&a.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${l("#fff",v(e.elevation))}, ${l("#fff",v(e.elevation))})`},a.vars&&{backgroundImage:(o=a.vars.overlays)==null?void 0:o[e.elevation]}))}),A=b.forwardRef(function(e,o){const t=g({props:e,name:"MuiPaper"}),{className:n,component:r="div",elevation:p=1,square:u=!1,variant:d="elevation"}=t,c=x(t,k),i=s({},t,{component:r,elevation:p,square:u,variant:d}),f=q(i);return C.jsx(M,s({as:r,ownerState:i,className:R(f.root,n),ref:o},c))});export{A as P};
