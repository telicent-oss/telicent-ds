import{j as c}from"./jsx-runtime-CexXSJP5.js";import{g as l,_ as N}from"./createTheme-BI2OWDpv.js";import{_ as a}from"./extends-BFqQA52f.js";import{r as I}from"./index-BP8_t0zE.js";import{g as U,s as v,c as w,a as z}from"./styled-CwhWP0k9.js";import{g as E}from"./generateUtilityClasses-CPjhs1S_.js";import{k as $,c as D,u as T}from"./DefaultPropsProvider-D6MvNwoC.js";function F(r){return U("MuiCircularProgress",r)}E("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const K=["className","color","disableShrink","size","style","thickness","value","variant"];let m=r=>r,P,S,b,_;const t=44,W=$(P||(P=m`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),B=$(S||(S=m`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),G=r=>{const{classes:e,variant:s,color:o,disableShrink:d}=r,p={root:["root",s,`color${l(o)}`],svg:["svg"],circle:["circle",`circle${l(s)}`,d&&"circleDisableShrink"]};return z(p,F,e)},L=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${l(s.color)}`]]}})(({ownerState:r,theme:e})=>a({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D(b||(b=m`
      animation: ${0} 1.4s linear infinite;
    `),W)),V=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Z=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${l(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>a({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D(_||(_=m`
      animation: ${0} 1.4s ease-in-out infinite;
    `),B)),q=I.forwardRef(function(e,s){const o=T({props:e,name:"MuiCircularProgress"}),{className:d,color:p="primary",disableShrink:M=!1,size:u=40,style:R,thickness:i=3.6,value:f=0,variant:k="indeterminate"}=o,j=N(o,K),n=a({},o,{color:p,disableShrink:M,size:u,thickness:i,value:f,variant:k}),h=G(n),g={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);g.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(f),g.strokeDashoffset=`${((100-f)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return c.jsx(L,a({className:w(h.root,d),style:a({width:u,height:u},x,R),ownerState:n,ref:s,role:"progressbar"},y,j,{children:c.jsx(V,{className:h.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:c.jsx(Z,{className:h.circle,style:g,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),A=r=>c.jsx(q,{...r});A.__docgenInfo={description:"",methods:[],displayName:"TeliSpinner"};export{A as T};
